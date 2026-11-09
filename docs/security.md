# Security Model

## Zero-Knowledge
Nodes never see plaintext. All encryption happens client-side before any network transfer.

## Key Management
- User holds master key (derived from passphrase)
- Keys never leave the client
- Optional backup via encrypted export

## Threats Mitigated
- Server compromise: useless without keys
- Node malice: cannot decrypt
- MITM: use HTTPS + optional signatures

## Future
- Hardware key support
- Multi-party computation for shared files
