// /routes/curator/route.js
import { httpClient } from '../../lib/httpClient';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const payload = req.body;
  const response = await httpClient.post('curator', payload);
  res.json(response);
}
