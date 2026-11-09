# Vex Storage Protocol (Draft v0.1)

## Peer Contribution
1. Node announces available space via coordinator or DHT.
2. Client encrypts chunk, requests storage slot.
3. Node stores encrypted blob, returns proof.
4. Credits awarded based on space contributed.

## Encryption
- AES-256-GCM per file or chunk
- Key derived from user passphrase + salt (PBKDF2)
- Zero-knowledge: nodes see only ciphertext

## Content Addressing
- SHA-256 of ciphertext as ID
- Optional IPFS CID compatibility

## Free Tier
- 1:1 ratio: contribute 1GB get 1GB free
- Or pool-based with minimum contribution
