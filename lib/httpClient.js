// lib/httpClient.ts
import fetch from 'node-fetch';

const AI_KERNEL_URL = process.env.AI_KERNEL_URL || 'http://localhost:3001';

export const httpClient = {
  async post(endpoint: string, payload: any) {
    try {
      const res = await fetch(`${AI_KERNEL_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.AI_KERNEL_API_KEY || ''
        },
        body: JSON.stringify(payload)
      });
      return await res.json();
    } catch (e) {
      return { ok: false, error: e.message };
    }
  }
};
