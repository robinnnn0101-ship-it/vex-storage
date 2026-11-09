// Check available credits vs file size
import { CreditManager } from './credits.js';

export function canStore(fileSizeMB, creditMgr) {
  const needed = fileSizeMB / 1024; // rough GB
  return creditMgr.get() >= needed;
}
