import QRCode from 'qrcode';

/**
 * generatePaymentQR(payload):
 * - payload should be a small JSON with payment reference, app id, amount (optional)
 * - produce a QR (data-uri) which apps and merchants can display
 */
export async function generatePaymentQR(payload) {
  const data = JSON.stringify(payload);
  return QRCode.toDataURL(data);
}
