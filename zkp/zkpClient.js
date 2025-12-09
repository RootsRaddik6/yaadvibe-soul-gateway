/**
 * ZKP handshake client (placeholder)
 * Real implementation will integrate with chosen ZKP prover / verifier
 */
import fetch from 'node-fetch';
import { ENV } from '../utils/env';

export async function requestZKProof(payload) {
  const resp = await fetch(`${ENV.ZKP_SERVICE_ENDPOINT}/prove`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return resp.json();
}

export async function verifyZKProof(proof) {
  const resp = await fetch(`${ENV.ZKP_SERVICE_ENDPOINT}/verify`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ proof })
  });
  return resp.json();
}
