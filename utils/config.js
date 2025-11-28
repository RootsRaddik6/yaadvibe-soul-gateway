export const config = {
  TZKT_API: process.env.TZKT_API || "https://api.tzkt.io",
  TON_RPC: process.env.TON_RPC || null,
  STRIPE_KEY: process.env.STRIPE_SECRET_KEY || null,
  JAMDEX_KEY: process.env.JAMDEX_API_KEY || null,
  WALLETCONNECT_PROJECT_ID: process.env.WALLETCONNECT_PROJECT_ID || null
};
