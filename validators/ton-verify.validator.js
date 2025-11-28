export function validateTonVerify(body) {
  const { address, signature } = body || {};
  if (!address || !signature) return { ok: false, error: "Missing address or signature" };
  return { ok: true };
}
