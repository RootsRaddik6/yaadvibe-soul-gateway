import { generatePaymentQR } from '../../../src/qr/qrService';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const payload = req.body;
  try {
    const qr = await generatePaymentQR(payload);
    res.json({ ok: true, qr });
  } catch (e) {
    res.status(500).json({ error: 'qr_failed' });
  }
}
