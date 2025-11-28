export function requireApiKey(req) {
  // Very simple example: check header X-API-KEY and compare to env var
  const key = req.headers.get("x-api-key");
  const valid = process.env.API_KEY || "";
  return key && key === valid;
}
