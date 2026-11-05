# Architecture (Draft)

## Components
1. **Client** - Encrypts files before upload. Holds keys.
2. **Node** - Contributes storage + bandwidth. Earns credits.
3. **Coordinator** - Tracks available space, credits, routing (can be decentralized later).
4. **Optional Solana** - Ownership records, incentives, payments.

## Free Model
- Contribute X GB → get Y GB free storage
- Or pure reciprocal pool
- Paid tier for non-contributors later

## Security
- Zero-knowledge: only client has keys
- Content-addressed storage
- No central plaintext
