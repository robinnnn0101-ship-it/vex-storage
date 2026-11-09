# Vex Storage - Free Decentralized Cloud

**Contribution-based free storage network.**

Contribute spare disk/bandwidth → get free encrypted storage credits.
Client-side AES-256-GCM. Zero-knowledge. No central provider.

## Quick Start
1. Open `public/index.html` in any browser
2. Generate key, upload files (encrypted locally via IndexedDB)
3. Click "Start Contributor Node" to earn credits
4. Spend credits to store

## Features (MVP)
- Client-side encryption
- Credit system
- File list with sizes
- Theme toggle
- Search filter
- Usage stats
- Backup/restore stubs

## Architecture
- Client: Web Crypto + IndexedDB
- Credits: local for demo, P2P later
- Node: JS simulator
- Future: WebRTC P2P, Solana incentives

See docs/ for protocol, security, roadmap.

Built for Vexlore. Free for contributors forever.
