/**
 * Minimal device handshake endpoint
 * Accepts a signed nonce from the device + consentHash
 */
import jwt from 'jsonwebtoken';
import { ENV } from '../../../src/utils/env';
import { log } from '../../../src/utils/logger';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { deviceNonce, consentHash } = req.body;
  // In production validate signature from device (e.g., attestation)
  const token = jwt.sign({ deviceNonce, consentHash }, ENV.JWT_SECRET || 'dev', { expiresIn: '1h' });
  log('handshake token issued');
  res.json({ ok: true, token });
}
