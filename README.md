# Brainrotini Gamini - P2P Multiplayer Edition

A peer-to-peer multiplayer creature collection game where players can compete, trade, and chat while collecting various "Brainrot" creatures. No server setup required!

## 🚀 **Zero-Setup P2P Multiplayer**

### Features
- **Instant Play**: Works immediately in any modern browser
- **Direct Connection**: Players connect directly using WebRTC technology
- **Room-Based**: Create or join rooms with simple 6-character codes
- **No Installation**: No Node.js, no server, no downloads needed
- **Real-time Sync**: Live creature spawns, chat, and leaderboards

## Quick Start

1. Open `client/index.html` in your browser
2. Enter your player name
3. **Create Room** or **Join Room** with a code
4. Share the room code with friends
5. Play together instantly!

## Alternative Single-Player Mode

Want to try the original game? Open `index-original.html` for the classic single-player experience.

## Game Structure

```
BRMPGame/
├── client/           # P2P multiplayer game (main game)
│   ├── index.html    # P2P multiplayer interface
│   ├── game.js       # WebRTC P2P implementation
│   └── style.css     # Game styling
├── shared/           # Game logic and creature data
│   └── gameLogic.js  # Creatures, rarities, and utilities
├── assets/           # Game assets (images, music, fonts)
│   ├── fonts/        # Urban Shadow Sans Serif font
│   ├── images/       # Background images
│   └── music/        # Background music tracks
├── index-original.html    # Original single-player version
├── index-demo.html        # Demo page with game info
└── README.md             # This file
```

## How to Play

1. **Connect**: Create or join a room using a 6-character code
2. **Collect Creatures**: Buy creatures that appear in the spawn list
3. **Generate Income**: Owned creatures automatically generate money
4. **Upgrade**: Purchase upgrades to improve your collection capabilities
5. **Compete**: Climb the leaderboard by accumulating wealth
6. **Chat**: Communicate with other players in real-time

## P2P Technology

### WebRTC Implementation
- **Direct Browser Connections**: No intermediary server needed
- **NAT Traversal**: Uses STUN servers for connection setup
- **Fallback Signaling**: BroadcastChannel and localStorage for local discovery
- **Host Authority**: Room creator manages game state and spawns

### Room System
- **6-Character Codes**: Easy to share room identifiers
- **Automatic Discovery**: Local players can find each other automatically
- **Connection Management**: Automatic reconnection and error handling

## Multiplayer Features

### Real-time Synchronization
- **Shared Spawns**: All players see the same creatures appear
- **Live Updates**: Instant leaderboard and player status updates
- **Chat System**: Real-time messaging between players

### Competitive Elements
- **Leaderboards**: Ranked by total money and creature count
- **Player Stats**: Track individual performance
- **Shared Economy**: Compete for the same creature spawns

## Technical Details

### Client-Side Architecture
- **Modern JavaScript**: ES6 modules and WebRTC APIs
- **WebRTC Data Channels**: Real-time peer-to-peer communication
- **Local Storage**: Room codes and player preferences
- **Responsive Design**: Works on desktop and mobile browsers

### Game Logic
- **100+ Creatures**: 8 rarity tiers from Common to Mythical
- **Idle Mechanics**: Passive income generation
- **Upgrade System**: Improve money generation and creature discovery
- **Anti-Spam**: Rate limiting and validation

## Browser Compatibility

### Supported Browsers
- **Chrome/Chromium**: Full WebRTC support
- **Firefox**: Full WebRTC support  
- **Safari**: WebRTC support (iOS 11+)
- **Edge**: Full WebRTC support

### Requirements
- **Modern Browser**: WebRTC and ES6 module support
- **Internet Connection**: For STUN servers and initial discovery
- **No Plugins**: Pure HTML5/JavaScript implementation

## Troubleshooting

### Connection Issues
1. **Firewall/NAT**: Some corporate networks may block WebRTC
2. **Browser Permissions**: Allow microphone/camera permissions if prompted
3. **HTTPS**: Some browsers require HTTPS for WebRTC (use local file:// for testing)

### Common Problems
- **Room Not Found**: Double-check the 6-character room code
- **Connection Failed**: Try refreshing and creating a new room
- **No Other Players**: Share your room code with friends to join

### Debug Mode
Open browser console (F12) to see connection logs and debug information.

## Development

### File Structure
- **client/game.js**: Core P2P networking and game logic
- **shared/gameLogic.js**: Creature data and game mechanics
- **client/style.css**: UI styling and responsive design

### Customization
- **Creature Data**: Edit `CREATURES` array in `shared/gameLogic.js`
- **Game Settings**: Modify `GAME_CONFIG` in `shared/gameLogic.js`
- **Styling**: Update `client/style.css` for visual changes

## Future Enhancements

- **Voice Chat**: WebRTC audio communication
- **File Sharing**: Trade creature screenshots
- **Persistence**: Save game state across sessions
- **Mobile App**: Progressive Web App (PWA) features
- **LAN Discovery**: Automatic local network player discovery

## Credits

- **Original Game**: Brainrotini Gamini single-player version
- **P2P Implementation**: WebRTC-based multiplayer conversion
- **Music**: Background tracks for ambient gaming experience
- **Fonts**: Urban Shadow Sans Serif for stylized headers

---

Start collecting Brainrots with friends instantly! 🎮✨

*No downloads, no servers, just pure browser-to-browser fun!*