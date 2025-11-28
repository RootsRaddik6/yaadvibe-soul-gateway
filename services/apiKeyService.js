export function validateApiKey(key) {
  if (!key) return false;
  return key === process.env.API_KEY;
}
