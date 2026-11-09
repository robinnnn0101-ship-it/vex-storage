# Vex Storage

**Decentralized contribution-based free storage network - Vex Cloud.**

Users contribute spare disk + bandwidth → get free storage credits. 
Client-side encryption. No central storage provider.

## Live Demo
Open `public/index.html` in browser (or serve statically).

## Features
- Client-side AES-256-GCM encryption (Web Crypto)
- IndexedDB persistence
- Credit system (contribute to earn free storage)
- Contributor node simulator
- Zero-knowledge design

## Status
MVP foundation. Expanding to full P2P cloud.

## Core Idea
- Client-side AES-256-GCM encryption
- Peer nodes contribute storage & bandwidth
- Shared pool for free usage
- Solana (optional) for ownership / incentives later

## Roadmap
- [x] Client encryption module
- [x] Local storage + credits
- [ ] Node contribution protocol
- [ ] Basic web UI enhancements
- [ ] P2P or IPFS backend
- [ ] Solana integration

## Stack
- Frontend: Vanilla JS + Web Crypto + IndexedDB
- Encryption: AES-256-GCM
- Network: Planned WebRTC / IPFS + Solana
- Node: JS simulator (Rust later)

## Run
```bash
# Just open public/index.html
# Or use any static server
npx serve public
```

---
Built for Vexlore ecosystem. Free forever for contributors.
