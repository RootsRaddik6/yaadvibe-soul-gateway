import { mintPSBT } from '../../../src/controllers/sbtController';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  return mintPSBT(req, res);
}
