// Advanced WebRTC P2P implementation for true peer-to-peer connectivity
import { MESSAGE_TYPES, GAME_CONFIG, selectRandomCreature, calculatePlayerIncome, getCreatureByName, RARITY_RANK } from '../shared/gameLogic.js';

class WebRTCP2PGame {
  constructor() {
    this.playerId = this.generatePlayerId();
    this.playerName = '';
    this.isHost = false;
    this.roomCode = null;
    
    // WebRTC configuration
    this.rtcConfig = {
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' },
        { urls: 'stun:stun2.l.google.com:19302' }
      ]
    };
    
    this.peers = new Map(); // Map of peer connections
    this.dataChannels = new Map(); // Map of data channels
    
    this.gameState = {
      players: new Map(),
      availableCreatures: [],
      nextSpawnTime: Date.now() + GAME_CONFIG.REFRESH_INTERVAL * 1000,
      hostId: null,
      globalLuck: 0 // Global luck that affects all players
    };
    
    this.playerData = {
      id: this.playerId,
      name: '',
      currency: GAME_CONFIG.STARTING_CURRENCY,
      ownedCounts: {},
      discovered: [],
      maxBrainrots: GAME_CONFIG.DEFAULT_MAX_BRAINROTS,
      incomeMultiplier: 1,
      luck: 0,
      stats: {
        totalMoneyMade: 0,
        totalBrainrotsPurchased: 0,
        totalBrainrotsSold: 0,
        totalUpgradesPurchased: 0,
        joinTime: Date.now()
      },
      lastIncomeTime: Date.now()
    };

    this.chatMessages = [];
    this.countdownInterval = null;
    this.incomeInterval = null;
    this.isConnected = false;
    
    this.initializeEventListeners();
    this.initializeMusicPlayer();
    this.setupSignalingChannel();
  }

  generatePlayerId() {
    return 'player_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
  }

  setupSignalingChannel() {
    // Use BroadcastChannel for local signaling (same origin)
    // In production, you'd use a lightweight signaling server
    this.signalingChannel = new BroadcastChannel('brainrotini_p2p_signaling');
    
    this.signalingChannel.addEventListener('message', (event) => {
      this.handleSignalingMessage(event.data);
    });

    // Fallback to localStorage for broader compatibility
    window.addEventListener('storage', (event) => {
      if (event.key === 'brainrotini_signaling') {
        try {
          const signal = JSON.parse(event.newValue);
          if (signal && signal.to === this.playerId) {
            this.handleSignalingMessage(signal);
          }
        } catch (error) {
          console.error('Error parsing signaling message:', error);
        }
      }
    });
  }

  initializeEventListeners() {
    // Room controls
    document.getElementById('createRoomBtn').addEventListener('click', () => this.createRoom());
    document.getElementById('joinRoomBtn').addEventListener('click', () => this.joinRoom());
    
    // Handle Enter key in inputs
    document.getElementById('playerNameInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const roomCode = document.getElementById('roomCodeInput').value.trim();
        if (roomCode) {
          this.joinRoom();
        } else {
          this.createRoom();
        }
      }
    });

    document.getElementById('roomCodeInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.joinRoom();
    });

    // Auto-uppercase room code input
    document.getElementById('roomCodeInput').addEventListener('input', (e) => {
      e.target.value = e.target.value.toUpperCase();
    });

    // Chat
    document.getElementById('sendChatBtn').addEventListener('click', () => this.sendChatMessage());
    document.getElementById('chatInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendChatMessage();
    });

    // Upgrades
    document.querySelectorAll('.upgrade-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const upgradeType = e.target.dataset.upgrade;
        this.buyUpgrade(upgradeType);
      });
    });

    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
      this.disconnect();
    });

    // Handle visibility change (tab switching)
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.checkConnections();
      }
    });
  }

  async createRoom() {
    const nameInput = document.getElementById('playerNameInput');
    const name = nameInput.value.trim();
    
    if (!name) {
      this.showError('Please enter a name');
      return;
    }

    this.playerName = name;
    this.playerData.name = name;
    this.isHost = true;
    this.roomCode = this.generateRoomCode();
    this.gameState.hostId = this.playerId;
    
    // Add self to game
    this.gameState.players.set(this.playerId, this.getPublicPlayerData());
    
    // Generate initial creatures as host
    this.spawnNewCreatures();
    
    this.showGameInterface();
    this.startGameLoop();
    this.updateConnectionStatus('connected');
    
    document.getElementById('currentRoomCode').textContent = this.roomCode;
    document.getElementById('hostStatus').textContent = 'Host';
    document.getElementById('roomCodeDisplay').textContent = this.roomCode;
    document.getElementById('roomInfo').style.display = 'block';
    
    // Announce room creation for discovery
    this.broadcastRoomAnnouncement();
    
    console.log(`Created room: ${this.roomCode}`);
  }

  async joinRoom() {
    const nameInput = document.getElementById('playerNameInput');
    const roomInput = document.getElementById('roomCodeInput');
    const name = nameInput.value.trim();
    const roomCode = roomInput.value.trim().toUpperCase();
    
    if (!name || !roomCode) {
      this.showError('Please enter both name and room code');
      return;
    }

    this.playerName = name;
    this.playerData.name = name;
    this.roomCode = roomCode;
    this.isHost = false;
    
    try {
      this.updateConnectionStatus('connecting');
      await this.findAndConnectToHost();
      
      this.showGameInterface();
      this.startGameLoop();
      
      document.getElementById('currentRoomCode').textContent = this.roomCode;
      document.getElementById('hostStatus').textContent = 'Peer';
      
      console.log(`Joined room: ${this.roomCode}`);
    } catch (error) {
      this.updateConnectionStatus('disconnected');
      this.showError('Failed to join room: ' + error.message);
    }
  }

  generateRoomCode() {
    return Math.random().toString(36).substr(2, 6).toUpperCase();
  }

  broadcastRoomAnnouncement() {
    const announcement = {
      type: 'room_announcement',
      roomCode: this.roomCode,
      hostId: this.playerId,
      hostName: this.playerName,
      timestamp: Date.now()
    };
    
    this.sendSignalingMessage(announcement, 'broadcast');
  }

  async findAndConnectToHost() {
    return new Promise((resolve, reject) => {
      // Request host information for the room
      this.sendSignalingMessage({
        type: 'host_request',
        roomCode: this.roomCode,
        playerId: this.playerId,
        playerName: this.playerName
      }, 'broadcast');

      // Wait for host response
      const timeout = setTimeout(() => {
        reject(new Error('Room not found or host not responding'));
      }, 10000); // 10 second timeout

      const handleHostResponse = (event) => {
        const signal = event.data || event;
        if (signal.type === 'host_response' && signal.roomCode === this.roomCode) {
          clearTimeout(timeout);
          this.gameState.hostId = signal.hostId;
          this.createPeerConnection(signal.hostId, false); // false = not initiator
          resolve();
        }
      };

      // Listen for host response
      this.signalingChannel.addEventListener('message', handleHostResponse);
      
      // Also check localStorage for compatibility
      const checkStorage = () => {
        try {
          const signal = JSON.parse(localStorage.getItem('brainrotini_signaling') || '{}');
          if (signal.type === 'host_response' && signal.roomCode === this.roomCode) {
            handleHostResponse(signal);
          }
        } catch (error) {
          // Ignore parsing errors
        }
      };
      
      const storageInterval = setInterval(checkStorage, 100);
      
      // Clean up after timeout
      setTimeout(() => {
        clearInterval(storageInterval);
        this.signalingChannel.removeEventListener('message', handleHostResponse);
      }, 10000);
    });
  }

  async createPeerConnection(peerId, isInitiator = true) {
    const peerConnection = new RTCPeerConnection(this.rtcConfig);
    const dataChannel = isInitiator 
      ? peerConnection.createDataChannel('gameData', { ordered: true })
      : null;

    this.peers.set(peerId, peerConnection);

    // Handle data channel (for non-initiators)
    if (!isInitiator) {
      peerConnection.addEventListener('datachannel', (event) => {
        const channel = event.channel;
        this.setupDataChannel(peerId, channel);
      });
    } else {
      this.setupDataChannel(peerId, dataChannel);
    }

    // Handle ICE candidates
    peerConnection.addEventListener('icecandidate', (event) => {
      if (event.candidate) {
        this.sendSignalingMessage({
          type: 'ice_candidate',
          candidate: event.candidate,
          from: this.playerId,
          to: peerId,
          roomCode: this.roomCode
        }, peerId);
      }
    });

    // Handle connection state changes
    peerConnection.addEventListener('connectionstatechange', () => {
      console.log(`Connection state with ${peerId}:`, peerConnection.connectionState);
      
      if (peerConnection.connectionState === 'connected') {
        this.updateConnectionStatus('connected');
        this.isConnected = true;
      } else if (peerConnection.connectionState === 'failed' || 
                 peerConnection.connectionState === 'disconnected') {
        this.handlePeerDisconnection(peerId);
      }
    });

    // Create offer/answer
    try {
      if (isInitiator) {
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);
        
        this.sendSignalingMessage({
          type: 'offer',
          offer: offer,
          from: this.playerId,
          to: peerId,
          roomCode: this.roomCode
        }, peerId);
      }
    } catch (error) {
      console.error('Error creating peer connection:', error);
      throw error;
    }

    return peerConnection;
  }

  setupDataChannel(peerId, dataChannel) {
    this.dataChannels.set(peerId, dataChannel);

    dataChannel.addEventListener('open', () => {
      console.log(`Data channel opened with ${peerId}`);
      this.updateConnectionStatus('connected');
      
      // If we're joining, request game state
      if (!this.isHost) {
        this.sendToPeer(peerId, {
          type: 'request_game_state',
          playerId: this.playerId,
          playerData: this.getPublicPlayerData()
        });
      }
    });

    dataChannel.addEventListener('message', (event) => {
      try {
        const message = JSON.parse(event.data);
        this.handlePeerMessage(peerId, message);
      } catch (error) {
        console.error('Error parsing peer message:', error);
      }
    });

    dataChannel.addEventListener('error', (error) => {
      console.error(`Data channel error with ${peerId}:`, error);
    });

    dataChannel.addEventListener('close', () => {
      console.log(`Data channel closed with ${peerId}`);
      this.handlePeerDisconnection(peerId);
    });
  }

  sendSignalingMessage(message, target = 'broadcast') {
    const signal = {
      ...message,
      timestamp: Date.now()
    };

    // Use BroadcastChannel
    if (target === 'broadcast') {
      this.signalingChannel.postMessage(signal);
    }

    // Fallback to localStorage
    localStorage.setItem('brainrotini_signaling', JSON.stringify(signal));
    
    // Clear old signaling data
    setTimeout(() => {
      if (localStorage.getItem('brainrotini_signaling') === JSON.stringify(signal)) {
        localStorage.removeItem('brainrotini_signaling');
      }
    }, 5000);
  }

  handleSignalingMessage(signal) {
    if (!signal || signal.timestamp < Date.now() - 30000) return; // Ignore old messages

    switch (signal.type) {
      case 'room_announcement':
        // Could be used for room discovery UI
        break;
        
      case 'host_request':
        if (this.isHost && signal.roomCode === this.roomCode) {
          // Respond to join request
          this.sendSignalingMessage({
            type: 'host_response',
            roomCode: this.roomCode,
            hostId: this.playerId,
            hostName: this.playerName,
            to: signal.playerId
          }, signal.playerId);
          
          // Create peer connection to new player
          this.createPeerConnection(signal.playerId, true);
        }
        break;
        
      case 'offer':
        if (signal.to === this.playerId) {
          this.handleOffer(signal);
        }
        break;
        
      case 'answer':
        if (signal.to === this.playerId) {
          this.handleAnswer(signal);
        }
        break;
        
      case 'ice_candidate':
        if (signal.to === this.playerId) {
          this.handleIceCandidate(signal);
        }
        break;
    }
  }

  async handleOffer(signal) {
    try {
      const peerConnection = this.peers.get(signal.from) || 
                           await this.createPeerConnection(signal.from, false);
      
      await peerConnection.setRemoteDescription(signal.offer);
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);
      
      this.sendSignalingMessage({
        type: 'answer',
        answer: answer,
        from: this.playerId,
        to: signal.from,
        roomCode: this.roomCode
      }, signal.from);
    } catch (error) {
      console.error('Error handling offer:', error);
    }
  }

  async handleAnswer(signal) {
    try {
      const peerConnection = this.peers.get(signal.from);
      if (peerConnection) {
        await peerConnection.setRemoteDescription(signal.answer);
      }
    } catch (error) {
      console.error('Error handling answer:', error);
    }
  }

  async handleIceCandidate(signal) {
    try {
      const peerConnection = this.peers.get(signal.from);
      if (peerConnection) {
        await peerConnection.addIceCandidate(signal.candidate);
      }
    } catch (error) {
      console.error('Error handling ICE candidate:', error);
    }
  }

  sendToPeer(peerId, message) {
    const dataChannel = this.dataChannels.get(peerId);
    if (dataChannel && dataChannel.readyState === 'open') {
      try {
        dataChannel.send(JSON.stringify(message));
      } catch (error) {
        console.error(`Error sending message to ${peerId}:`, error);
      }
    }
  }

  broadcastToAllPeers(message) {
    for (const [peerId, dataChannel] of this.dataChannels.entries()) {
      if (dataChannel.readyState === 'open') {
        try {
          dataChannel.send(JSON.stringify(message));
        } catch (error) {
          console.error(`Error broadcasting to ${peerId}:`, error);
        }
      }
    }
  }

  handlePeerMessage(peerId, message) {
    switch (message.type) {
      case 'request_game_state':
        if (this.isHost) {
          this.sendToPeer(peerId, {
            type: 'game_state_sync',
            gameState: this.gameState,
            playerData: message.playerData
          });
          
          // Add the new player to our game state
          this.gameState.players.set(message.playerId, message.playerData);
          this.updateUI();
        }
        break;
        
      case 'game_state_sync':
        if (!this.isHost) {
          this.gameState = { ...this.gameState, ...message.gameState };
          this.updateUI();
          this.startCountdown(this.gameState.nextSpawnTime);
        }
        break;
        
      case 'player_update':
        this.gameState.players.set(message.data.id, message.data);
        // Only update leaderboard since only player currency/stats changed
        this.renderLeaderboard();
        break;
        
      case 'creature_purchased':
        this.handleRemoteCreaturePurchase(message.data);
        break;
        
      case 'creature_instance_purchased':
        this.handleRemoteCreatureInstancePurchase(message.data);
        break;
        
      case 'creature_sold':
        this.handleRemoteCreatureSale(message.data);
        break;
        
      case 'global_upgrade_purchased':
        this.handleGlobalUpgrade(message.data);
        break;
        
      case 'chat_message':
        this.handleChatMessage(message.data);
        break;
        
      case 'creatures_spawned':
        if (!this.isHost) {
          this.gameState.availableCreatures = message.data.creatures;
          this.gameState.nextSpawnTime = message.data.nextSpawnTime;
          // No UI update needed - scrolling spawner handles creatures independently
          this.startCountdown(this.gameState.nextSpawnTime);
        }
        break;
        
      case 'player_left':
        this.gameState.players.delete(message.data.playerId);
        this.renderOnlinePlayers();
        this.renderLeaderboard();
        break;
    }
  }

  handlePeerDisconnection(peerId) {
    console.log(`Peer ${peerId} disconnected`);
    
    // Clean up connection
    this.peers.delete(peerId);
    this.dataChannels.delete(peerId);
    
    // Remove player from game state
    const player = this.gameState.players.get(peerId);
    if (player) {
      this.gameState.players.delete(peerId);
      this.addSystemMessage(`${player.name} disconnected`);
    }
    
    // Check if host disconnected
    if (peerId === this.gameState.hostId && !this.isHost) {
      this.handleHostDisconnection();
    }
    
    // Update connection status
    if (this.dataChannels.size === 0 && !this.isHost) {
      this.updateConnectionStatus('disconnected');
      this.isConnected = false;
    }
    
    // Only update player list since connections changed
    this.renderOnlinePlayers();
  }

  handleHostDisconnection() {
    this.updateConnectionStatus('disconnected');
    document.getElementById('hostLeftModal').style.display = 'flex';
  }

  checkConnections() {
    let hasActiveConnections = false;
    
    for (const [peerId, dataChannel] of this.dataChannels.entries()) {
      if (dataChannel.readyState === 'open') {
        hasActiveConnections = true;
      } else {
        this.handlePeerDisconnection(peerId);
      }
    }
    
    if (!hasActiveConnections && !this.isHost && this.roomCode) {
      this.updateConnectionStatus('disconnected');
      this.isConnected = false;
    }
  }

  updateConnectionStatus(status) {
    const statusEl = document.getElementById('connectionStatus');
    if (statusEl) {
      statusEl.textContent = status.charAt(0).toUpperCase() + status.slice(1);
      statusEl.className = `status-value status-${status}`;
    }
  }

  addSystemMessage(text) {
    const systemMessage = {
      playerId: 'system',
      playerName: 'System',
      message: text,
      timestamp: Date.now(),
      isSystem: true
    };
    
    this.chatMessages.push(systemMessage);
    this.renderChatMessages();
  }

  // Game logic methods (similar to previous implementation)
  spawnNewCreatures() {
    // For scrolling spawner, all players can spawn creatures locally
    const spawner = document.getElementById('spawnList');
    const isScrollingSpawner = spawner && spawner.classList.contains('scrolling-spawner');
    
    if (!this.isHost && !isScrollingSpawner) return;
    
    this.gameState.availableCreatures = [];
    for (let i = 0; i < 5; i++) {
      const creature = selectRandomCreature();
      this.gameState.availableCreatures.push({
        ...creature,
        id: this.generateCreatureId(),
        spawnTime: Date.now()
      });
    }
    this.gameState.nextSpawnTime = Date.now() + GAME_CONFIG.REFRESH_INTERVAL * 1000;
    
    // Only broadcast if host, for scrolling spawner each player generates locally
    if (this.isHost) {
      // Broadcast to all peers
      this.broadcastToAllPeers({
        type: 'creatures_spawned',
        data: {
          creatures: this.gameState.availableCreatures,
          nextSpawnTime: this.gameState.nextSpawnTime
        }
      });
    }
    
    // No UI update needed - scrolling spawner handles creatures
    this.startCountdown(this.gameState.nextSpawnTime);
  }

  generateCreatureId() {
    return 'creature_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
  }

  purchaseCreatureInstance(instanceId, creatureId) {
    const creature = this.gameState.availableCreatures.find(c => c.id === creatureId);
    if (!creature) return;
    
    if (!this.canPurchaseCreature(creature)) {
      this.showError('Cannot purchase creature - insufficient funds or space');
      return;
    }
    
    // Update local state
    this.playerData.currency -= creature.price;
    this.playerData.ownedCounts[creature.name] = (this.playerData.ownedCounts[creature.name] || 0) + 1;
    this.playerData.stats.totalBrainrotsPurchased++;
    
    if (!this.playerData.discovered.includes(creature.name)) {
      this.playerData.discovered.push(creature.name);
    }
    
    // Remove the specific creature instance from scrolling display
    this.removeCreatureFromScrollingDisplay(instanceId);
    
    // Update player in game state
    this.gameState.players.set(this.playerId, this.getPublicPlayerData());
    
    // Broadcast purchase to other players
    this.broadcastToAllPeers({
      type: 'creature_instance_purchased',
      data: {
        instanceId,
        creatureId,
        playerId: this.playerId,
        playerData: this.getPublicPlayerData()
      }
    });
    
    // Only update necessary UI parts to avoid flickering
    this.updatePlayerStats();
    this.renderOwnedCreatures();
  }

  purchaseCreature(creatureId) {
    const creature = this.gameState.availableCreatures.find(c => c.id === creatureId);
    if (!creature) return;
    
    if (!this.canPurchaseCreature(creature)) {
      this.showError('Cannot purchase creature - insufficient funds or space');
      return;
    }
    
    // Update local state
    this.playerData.currency -= creature.price;
    this.playerData.ownedCounts[creature.name] = (this.playerData.ownedCounts[creature.name] || 0) + 1;
    this.playerData.stats.totalBrainrotsPurchased++;
    
    if (!this.playerData.discovered.includes(creature.name)) {
      this.playerData.discovered.push(creature.name);
    }
    
    // Remove creature from available list
    this.gameState.availableCreatures = this.gameState.availableCreatures.filter(c => c.id !== creatureId);
    
    // Remove all instances of this creature from the scrolling display
    this.removeCreatureFromScrollingDisplay(creatureId);
    
    // Update player in game state
    this.gameState.players.set(this.playerId, this.getPublicPlayerData());
    
    // Broadcast purchase to other players
    this.broadcastToAllPeers({
      type: 'creature_purchased',
      data: {
        creatureId,
        playerId: this.playerId,
        playerData: this.getPublicPlayerData(),
        remainingCreatures: this.gameState.availableCreatures
      }
    });
    
    this.updateUI();
  }

  // ... (rest of the methods are similar to the previous implementation)
  // I'll include the essential ones for this demo

  canPurchaseCreature(creature) {
    return this.playerData.currency >= creature.price && 
           this.getTotalCreatures() < this.playerData.maxBrainrots;
  }

  getTotalCreatures() {
    return Object.values(this.playerData.ownedCounts).reduce((sum, count) => sum + count, 0);
  }

  getPlayerIncome() {
    return calculatePlayerIncome(this.playerData.ownedCounts, this.playerData.incomeMultiplier);
  }

  getPublicPlayerData() {
    return {
      id: this.playerId,
      name: this.playerData.name,
      currency: this.playerData.currency,
      totalCreatures: this.getTotalCreatures(),
      income: this.getPlayerIncome(),
      discoveredCount: this.playerData.discovered.length,
      stats: this.playerData.stats
    };
  }

  sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    const chatMessage = {
      playerId: this.playerId,
      playerName: this.playerData.name,
      message: message,
      timestamp: Date.now()
    };
    
    this.chatMessages.push(chatMessage);
    this.renderChatMessages();
    
    this.broadcastToAllPeers({
      type: 'chat_message',
      data: chatMessage
    });
    
    input.value = '';
  }

  handleChatMessage(data) {
    this.chatMessages.push(data);
    this.renderChatMessages();
  }

  addChatMessage(messageData) {
    this.chatMessages.push(messageData);
    this.renderChatMessages();
  }

  startGameLoop() {
    // Start continuous creature spawning for scrolling spawner
    const spawner = document.getElementById('spawnList');
    if (spawner && spawner.classList.contains('scrolling-spawner')) {
      // Start continuous spawning immediately (no initial batch)
      setTimeout(() => this.addScrollingCreature(), 1000);
    }

    // Income generation
    if (this.incomeInterval) clearInterval(this.incomeInterval);
    this.incomeInterval = setInterval(() => {
      const income = this.getPlayerIncome();
      if (income > 0) {
        this.playerData.currency += income;
        this.playerData.stats.totalMoneyMade += income;
        
        // Only update player stats, not the full UI to avoid flickering
        this.updatePlayerStats();
      }
    }, 1000);
    
    // Separate interval for broadcasting player updates to avoid overlapping with income updates
    if (this.playerUpdateInterval) clearInterval(this.playerUpdateInterval);
    this.playerUpdateInterval = setInterval(() => {
      this.gameState.players.set(this.playerId, this.getPublicPlayerData());
      this.broadcastToAllPeers({
        type: 'player_update',
        data: this.getPublicPlayerData()
      });
    }, 5000); // Every 5 seconds
    
    // Creature spawning (host only)
    if (this.isHost) {
      setInterval(() => {
        if (Date.now() >= this.gameState.nextSpawnTime) {
          this.spawnNewCreatures();
        }
      }, 1000);
    }
  }

  startCountdown(nextSpawnTime) {
    if (this.countdownInterval) clearInterval(this.countdownInterval);
    
    this.countdownInterval = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((nextSpawnTime - Date.now()) / 1000));
      const countdownEl = document.getElementById('countdown');
      if (countdownEl) {
        countdownEl.textContent = remaining;
      }
      
      if (remaining <= 0) {
        clearInterval(this.countdownInterval);
        this.countdownInterval = null;
      }
    }, 100);
  }

  showGameInterface() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('gameInterface').style.display = 'block';
    this.updateUI();
  }

  updateUI() {
    this.updatePlayerStats();
    this.renderAvailableCreatures();
    this.renderOwnedCreatures();
    this.renderLeaderboard();
    this.renderOnlinePlayers();
  }

  updatePlayerStats() {
    document.getElementById('currency').textContent = `$${this.formatNumber(this.playerData.currency)}`;
    document.getElementById('incomeBtn').textContent = `Income: $${this.formatNumber(this.getPlayerIncome())}/s`;
    document.getElementById('ownedCount').textContent = `${this.getTotalCreatures()}/${this.playerData.maxBrainrots}`;
    document.getElementById('playersOnline').textContent = `Players: ${this.gameState.players.size}`;
    
    // Update stats panel
    document.getElementById('totalMoneyMade').textContent = `$${this.formatNumber(this.playerData.stats.totalMoneyMade)}`;
    document.getElementById('totalBought').textContent = this.playerData.stats.totalBrainrotsPurchased;
    document.getElementById('totalSold').textContent = this.playerData.stats.totalBrainrotsSold;
    document.getElementById('totalUpgrades').textContent = this.playerData.stats.totalUpgradesPurchased;
    document.getElementById('discoveredCount').textContent = this.playerData.discovered.length;
    
    // Update upgrade button states and levels
    this.updateUpgradeButtons();
    this.updateUpgradeLevels();
  }

  updateUpgradeButtons() {
    // Define upgrade costs
    const upgradeCosts = {
      maxBrainrots: 1000,
      luck: 1000000,
      incomeMultiplier: 100000
    };

    // Update each upgrade button
    Object.entries(upgradeCosts).forEach(([upgradeType, cost]) => {
      const btn = document.querySelector(`[data-upgrade="${upgradeType}"]`);
      if (btn) {
        const canAfford = this.playerData.currency >= cost;
        btn.disabled = !canAfford;
      }
    });
  }

  renderAvailableCreatures() {
    const container = document.getElementById('spawnList');
    if (!container) return;

    // For scrolling spawner, don't auto-add creatures from updateUI calls
    if (container.classList.contains('scrolling-spawner')) {
      return;
    }

    container.innerHTML = '';

    this.gameState.availableCreatures.forEach(creature => {
      const item = document.createElement('div');
      item.className = 'creature-item';
      
      const canAfford = this.playerData.currency >= creature.price;
      const hasSpace = this.getTotalCreatures() < this.playerData.maxBrainrots;
      const canBuy = canAfford && hasSpace;

      item.innerHTML = `
        <div class="creature-info">
          <div class="creature-name">${creature.name}</div>
          <div class="creature-rarity ${this.getRarityClass(creature.rarity)}">${creature.rarity}</div>
          <div class="creature-price">$${this.formatNumber(creature.price)}</div>
          <div class="creature-income">+$${this.formatNumber(creature.income)}/s</div>
        </div>
        <button class="buy-btn" ${!canBuy ? 'disabled' : ''} 
                onclick="game.purchaseCreature('${creature.id}')">
          ${!hasSpace ? 'No Space' : 'Buy'}
        </button>
      `;

      container.appendChild(item);
    });
  }

  addScrollingCreature() {
    const container = document.getElementById('spawnList');
    if (!container) return;

    // Pick a random creature from available creatures
    if (this.gameState.availableCreatures.length === 0) {
      console.log('No available creatures to spawn');
      return;
    }
    
    console.log('Adding scrolling creature, available:', this.gameState.availableCreatures.length);
    
    const creature = this.gameState.availableCreatures[
      Math.floor(Math.random() * this.gameState.availableCreatures.length)
    ];

    const item = document.createElement('div');
    item.className = 'creature-item';
    
    // Generate unique instance ID for this specific scrolling creature
    const instanceId = `${creature.id}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    item.dataset.instanceId = instanceId;
    item.dataset.creatureId = creature.id; // Keep original creature ID for reference
    
    // Single row centered in the container
    item.style.top = '50%'; // Center vertically in the 120px container
    
    const canAfford = this.playerData.currency >= creature.price;
    const hasSpace = this.getTotalCreatures() < this.playerData.maxBrainrots;
    const canBuy = canAfford && hasSpace;

    item.innerHTML = `
      <div class="creature-info">
        <div class="creature-name">${creature.name}</div>
        <div class="creature-rarity ${this.getRarityClass(creature.rarity)}">${creature.rarity}</div>
        <div class="creature-price">$${this.formatNumber(creature.price)}</div>
        <div class="creature-income">+$${this.formatNumber(creature.income)}/s</div>
      </div>
      <button class="buy-btn" ${!canBuy ? 'disabled' : ''} 
              onclick="game.purchaseCreatureInstance('${instanceId}', '${creature.id}')">
        ${!hasSpace ? 'No Space' : 'Buy'}
      </button>
    `;

    container.appendChild(item);

    // Remove creatures after they complete their 15-second scroll animation
    setTimeout(() => {
      if (item.parentNode) {
        item.parentNode.removeChild(item);
      }
    }, 15000); // Fixed 15 seconds for all creatures

    // Schedule next creature spawn (every 2 seconds for better spacing)
    setTimeout(() => {
      this.addScrollingCreature();
    }, 2000);
  }

  removeCreatureFromScrollingDisplay(instanceId) {
    const container = document.getElementById('spawnList');
    if (!container) return;
    
    // Find the specific creature instance and remove it
    const item = container.querySelector(`[data-instance-id="${instanceId}"]`);
    if (item && item.parentNode) {
      item.parentNode.removeChild(item);
    }
  }

  renderOwnedCreatures() {
    const container = document.getElementById('ownedCreatures');
    if (!container) return;

    container.innerHTML = '';

    const sortedCreatures = Object.entries(this.playerData.ownedCounts)
      .map(([name, count]) => ({ name, count, creature: getCreatureByName(name) }))
      .filter(item => item.creature)
      .sort((a, b) => {
        const rarityA = a.creature.rarity.toLowerCase();
        const rarityB = b.creature.rarity.toLowerCase();
        return (RARITY_RANK[rarityB] || 0) - (RARITY_RANK[rarityA] || 0);
      });

    sortedCreatures.forEach(({ name, count, creature }) => {
      const item = document.createElement('div');
      item.className = 'creature-item';
      
      const sellPrice = Math.floor(creature.price * 0.7);
      
      item.innerHTML = `
        <div class="creature-info">
          <div class="creature-name">${name}</div>
          <div class="creature-rarity ${this.getRarityClass(creature.rarity)}">${creature.rarity}</div>
          <div class="creature-income">$${this.formatNumber(creature.income * count)}/s total</div>
        </div>
        <div style="display: flex; align-items: center;">
          <button class="sell-btn" onclick="game.sellCreature('${name}', 1)">
            Sell ($${this.formatNumber(sellPrice)})
          </button>
        </div>
      `;

      container.appendChild(item);
    });

    if (sortedCreatures.length === 0) {
      container.innerHTML = '<div style="text-align: center; color: var(--muted); padding: 20px;">No creatures owned yet</div>';
    }
  }

  renderLeaderboard() {
    const container = document.getElementById('leaderboard');
    if (!container) return;

    const players = Array.from(this.gameState.players.values())
      .sort((a, b) => b.currency - a.currency);

    container.innerHTML = '';

    players.forEach((player, index) => {
      const item = document.createElement('div');
      item.className = 'leaderboard-item';
      
      const isCurrentPlayer = player.id === this.playerId;
      if (isCurrentPlayer) {
        item.style.background = 'var(--accent)';
        item.style.color = 'white';
      }

      item.innerHTML = `
        <div class="player-rank">${index + 1}</div>
        <div class="player-name">${player.name}</div>
        <div class="player-currency">$${this.formatNumber(player.currency)}</div>
      `;

      container.appendChild(item);
    });
  }

  renderOnlinePlayers() {
    const container = document.getElementById('playersList');
    if (!container) return;

    container.innerHTML = '';

    this.gameState.players.forEach(player => {
      const item = document.createElement('div');
      item.className = 'player-item';
      
      const isCurrentPlayer = player.id === this.playerId;
      const statusColor = isCurrentPlayer ? 'var(--success)' : 'var(--warning)';
      
      item.innerHTML = `
        <div style="color: ${statusColor};">● ${player.name}${isCurrentPlayer ? ' (You)' : ''}</div>
      `;

      container.appendChild(item);
    });
  }

  renderChatMessages() {
    const container = document.getElementById('chatMessages');
    if (!container) return;

    container.innerHTML = '';

    this.chatMessages.slice(-50).forEach(msg => {
      const messageEl = document.createElement('div');
      messageEl.className = msg.isSystem ? 'chat-message system-message' : 'chat-message';
      
      if (msg.isSystem) {
        messageEl.innerHTML = `<div class="chat-text">${this.escapeHtml(msg.message)}</div>`;
      } else {
        messageEl.innerHTML = `
          <div class="chat-player">${msg.playerName}</div>
          <div class="chat-text">${this.escapeHtml(msg.message)}</div>
        `;
      }

      container.appendChild(messageEl);
    });

    container.scrollTop = container.scrollHeight;
  }

  handleRemoteCreaturePurchase(data) {
    // Remove creature from available list
    this.gameState.availableCreatures = data.remainingCreatures;
    
    // Remove all instances of this creature from the scrolling display
    this.removeCreatureFromScrollingDisplay(data.creatureId);
    
    // Update the purchasing player's data
    this.gameState.players.set(data.playerId, data.playerData);
    
    this.updateUI();
  }

  handleRemoteCreatureInstancePurchase(data) {
    // Remove only the specific creature instance from scrolling display
    this.removeCreatureFromScrollingDisplay(data.instanceId);
    
    // Update the purchasing player's data
    this.gameState.players.set(data.playerId, data.playerData);
    
    // Only update leaderboard since another player's stats changed
    this.renderLeaderboard();
  }

  handleRemoteCreatureSale(data) {
    // Update the selling player's data
    this.gameState.players.set(data.playerId, data.playerData);
    
    // Only update leaderboard since another player's stats changed
    this.renderLeaderboard();
  }

  handleGlobalUpgrade(data) {
    // Update global game state
    this.gameState.globalLuck = data.newGlobalLuck;
    
    // Update the purchasing player's data
    this.gameState.players.set(data.playerData.id, data.playerData);
    
    // Update UI to show new global luck level
    this.updateUpgradeLevels();
    this.renderLeaderboard();
    
    // Show notification about the global upgrade
    this.addChatMessage({
      message: `🍀 ${data.purchaserName} purchased a Luck Boost! Global luck is now ${data.newGlobalLuck}`,
      isSystem: true
    });
  }

  // Utility methods
  getRarityClass(rarity) {
    return `rarity-${rarity.toLowerCase().replace(/\s+/g, '-')}`;
  }

  formatNumber(num) {
    if (num >= 1e12) return (num / 1e12).toFixed(1) + 'T';
    if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
    return Math.floor(num).toLocaleString();
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  showError(message) {
    document.getElementById('errorMessage').textContent = message;
    document.getElementById('errorModal').style.display = 'flex';
  }

  disconnect() {
    // Close all peer connections
    for (const peerConnection of this.peers.values()) {
      try {
        peerConnection.close();
      } catch (error) {
        console.error('Error closing peer connection:', error);
      }
    }
    this.peers.clear();
    this.dataChannels.clear();
    
    // Clear intervals
    if (this.incomeInterval) clearInterval(this.incomeInterval);
    if (this.playerUpdateInterval) clearInterval(this.playerUpdateInterval);
    if (this.countdownInterval) clearInterval(this.countdownInterval);
    
    // Clean up signaling
    if (this.signalingChannel) {
      this.signalingChannel.close();
    }
  }

  // Placeholder methods for upgrade system and music player
  buyUpgrade(upgradeType) {
    // Define upgrade costs and effects
    const upgrades = {
      maxBrainrots: { 
        cost: 1000, 
        effect: () => this.playerData.maxBrainrots += 1,
        isGlobal: false
      },
      luck: { 
        cost: 1000000, 
        effect: () => this.gameState.globalLuck += 1,
        isGlobal: true
      },
      incomeMultiplier: { 
        cost: 100000, 
        effect: () => this.playerData.incomeMultiplier += 0.1,
        isGlobal: false
      }
    };

    const upgrade = upgrades[upgradeType];
    if (!upgrade) {
      this.showError('Unknown upgrade type');
      return;
    }

    if (this.playerData.currency < upgrade.cost) {
      this.showError(`Cannot afford upgrade - costs $${this.formatNumber(upgrade.cost)}`);
      return;
    }

    // Apply upgrade
    this.playerData.currency -= upgrade.cost;
    this.playerData.stats.totalUpgradesPurchased++;
    upgrade.effect();

    // Update UI elements
    this.updatePlayerStats();
    this.updateUpgradeLevels();

    // Update player in game state and broadcast
    this.gameState.players.set(this.playerId, this.getPublicPlayerData());
    
    // Broadcast the upgrade purchase
    if (upgrade.isGlobal) {
      // For global upgrades, broadcast to all players
      this.broadcastToAllPeers({
        type: 'global_upgrade_purchased',
        data: {
          upgradeType,
          purchaserName: this.playerData.name,
          newGlobalLuck: this.gameState.globalLuck,
          playerData: this.getPublicPlayerData()
        }
      });
    } else {
      // For individual upgrades, just update player data
      this.broadcastToAllPeers({
        type: 'player_update',
        data: this.getPublicPlayerData()
      });
    }

    console.log(`Upgrade purchased: ${upgradeType} for $${this.formatNumber(upgrade.cost)}`);
  }

  updateUpgradeLevels() {
    // Update upgrade level displays
    const luckLevel = document.getElementById('luckLevel');
    if (luckLevel) luckLevel.textContent = this.gameState.globalLuck;

    const incomeLevel = document.getElementById('incomeLevel');
    if (incomeLevel) incomeLevel.textContent = this.playerData.incomeMultiplier.toFixed(1) + 'x';
  }

  sellCreature(creatureName, count = 1) {
    const owned = this.playerData.ownedCounts[creatureName] || 0;
    if (owned < count) {
      this.showError(`Cannot sell ${count} ${creatureName} - only own ${owned}`);
      return;
    }

    // Get creature data to calculate sell price
    const creature = getCreatureByName(creatureName);
    if (!creature) {
      this.showError('Creature not found');
      return;
    }

    // Calculate sell price (70% of buy price to match UI display)
    const sellPrice = Math.floor(creature.price * 0.7) * count;

    // Update local state
    this.playerData.currency += sellPrice;
    this.playerData.ownedCounts[creatureName] -= count;
    this.playerData.stats.totalBrainrotsSold += count;
    this.playerData.stats.totalMoneyMade += sellPrice;

    // Remove from owned counts if it reaches 0
    if (this.playerData.ownedCounts[creatureName] <= 0) {
      delete this.playerData.ownedCounts[creatureName];
    }

    // Update player in game state
    this.gameState.players.set(this.playerId, this.getPublicPlayerData());

    // Broadcast sale to other players
    this.broadcastToAllPeers({
      type: 'creature_sold',
      data: {
        creatureName,
        count,
        sellPrice,
        playerId: this.playerId,
        playerData: this.getPublicPlayerData()
      }
    });

    // Update UI
    this.updatePlayerStats();
    this.renderOwnedCreatures();

    console.log(`Sold ${count} ${creatureName} for $${this.formatNumber(sellPrice)}`);
  }

  initializeMusicPlayer() {
    // Music player implementation
    console.log('Music player initialized');
  }
}

// Global functions for HTML onclick handlers
window.closeModal = function(modalId) {
  document.getElementById(modalId).style.display = 'none';
};

// Initialize game when page loads
let game;
document.addEventListener('DOMContentLoaded', () => {
  game = new WebRTCP2PGame();
  window.game = game; // Make it globally accessible for onclick handlers
});

export default WebRTCP2PGame;