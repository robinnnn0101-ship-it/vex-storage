# Vex Storage - Free Decentralized Cloud

**Contribution-based free storage network by Vexlore.**

Contribute spare disk space & bandwidth → earn free encrypted storage credits.
Client-side AES-256-GCM via Web Crypto. Zero-knowledge. No central provider. Quantum-ready path planned.

## Quick Start
1. Open `public/index.html` in any browser
2. Generate key, upload files (encrypted locally via IndexedDB)
3. Click "Start Contributor Node" to earn credits
4. Spend credits to store

## Features (v0.3)
- Client-side AES-256-GCM encryption
- Credit system with history
- File list with sizes, search, theme toggle
- Usage stats & quota warnings
- Backup/restore stubs
- Multi-file drag & drop
- Node simulator for contribution rewards
- Future: WebRTC P2P data channel, Solana on-chain incentives (SPL rewards)

## Architecture
- Client: Web Crypto API + IndexedDB
- Credits: local demo → P2P later
- Node: JS simulator (see /node)
- Roadmap: decentralized discovery, Solana program for proof-of-storage

See docs/ for protocol, security, roadmap, FAQ.

Built for Vexlore. Free for contributors forever. MIT.
