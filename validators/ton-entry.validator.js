export function validateTonEntry(body) {
  const { chain, address } = body || {};
  if (!chain || !address) return { ok: false, error: "Missing chain or address" };
  return { ok: true };
}
