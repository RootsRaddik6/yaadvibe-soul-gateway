import type { NextApiRequest, NextApiResponse } from 'next';
import { httpClient } from '../../lib/httpClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const payload = req.body;
  const response = await httpClient.post('sentinel', payload);
  res.json(response);
}
