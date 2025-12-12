// /routes/sbt/check.js
import { sbtService } from '../../services/sbtService';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { walletAddress } = req.body;
  const result = await sbtService.checkOwnership(walletAddress);
  res.json(result);
}
