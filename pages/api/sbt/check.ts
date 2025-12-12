import type { NextApiRequest, NextApiResponse } from 'next';
import { sbtService } from '../../services/sbtService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { walletAddress } = req.body;
  const result = await sbtService.checkOwnership(walletAddress);
  res.json(result);
}
