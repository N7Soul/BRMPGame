# Brainrotini Gamini - Multiplayer Edition

A peer-to-peer multiplayer creature collection game where players can compete and chat while collecting various Brainrots!

### Features
- **Instant Play**: Works immediately in any modern browser
- **Room-Based**: Create or join rooms with simple 6-character codes
- **No Installation**: No downloads needed!
- **Real-time Sync**: Live creature spawns, chat, and leaderboards

## Quick Start

1. Open https://n7soul.github.io/BRMPGame/ in your browser
2. Select "Play Multiplayer Now!"
2. Enter your player name
3. **Create Room** or **Join Room** with a code
4. Share the room code with friends
5. Play together instantly!

## Alternative Single-Player Mode

Want to try the original game? Open https://n7soul.github.io/BRGame/ for the classic single-player experience.

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
- **Shared Spawns**: All players see the same brainrots appear
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
- **100+ Brainrots**: 9 rarity tiers from Common to OG
- **Upgrade System**: Improve money generation and creature discovery
- **Anti-Spam**: Rate limiting and validation

## Browser Compatibility

### Supported Browsers
- **Chrome/Chromium**: Full WebRTC support
- **Firefox**: Full WebRTC support  
- **Safari**: WebRTC support (iOS 11+)
- **Edge**: Full WebRTC support

## Credits

- **Developer**: N7Soul, ChatGPT, Claude Sonnet 4
- **Design**: N7Soul, ChatGPT, Claude Sonnet 4
- **Music**: A Day in My Life - Dark Cat
https://uppbeat.io/t/dark-cat/a-day-in-my-life
License code: OCEUTV2FDNJSUCNG
- **Music**: Imaginatarium - Ian Aisling
https://uppbeat.io/t/ian-aisling/imaginatarium
License code: 5MJR674VYFOXMJZQ
- **Music**: The Cleaner - Night Drift
https://uppbeat.io/t/night-drift/the-cleaner
License code: 8F897RJMSBLPBMW9
- **Fonts**: Urban Shadow Sans Serif for stylized headers

---

Start collecting Brainrots with friends instantly! 🎮✨

*No downloads, no servers, just pure browser-to-browser fun!*