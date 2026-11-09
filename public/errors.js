// Custom errors for Vex Storage
export class VexError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
    this.name = 'VexError';
  }
}

export class InsufficientCreditsError extends VexError {
  constructor() {
    super('Insufficient storage credits', 'INSUFFICIENT_CREDITS');
  }
}

export class EncryptionError extends VexError {
  constructor(msg) {
    super(msg || 'Encryption failed', 'ENCRYPTION_ERROR');
  }
}
