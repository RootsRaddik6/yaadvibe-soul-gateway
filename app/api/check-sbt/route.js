import axios from "axios";

/**
 * POST body: { address, contract, tokenId }
 * Responds with JSON { ok: true, has: boolean }
 */
export async function POST(req) {
  try {
    const body = await req.json();
    const { address, contract, tokenId } = body || {};

    if (!address || !contract || !tokenId) {
      return new Response(JSON.stringify({ ok: false, error: "Missing params" }), { status: 400 });
    }

    const url = `${process.env.TZKT_API || "https://api.tzkt.io"}/v1/tokens/balances?account=${encodeURIComponent(address)}&token.contract=${encodeURIComponent(contract)}&token.tokenId=${encodeURIComponent(tokenId)}`;
    const res = await fetch(url, { method: "GET" });
    const data = await res.json();
    const has = Array.isArray(data) && data.length > 0 && Number(data[0].balance) > 0;

    return new Response(JSON.stringify({ ok: true, has }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (e) {
    console.error("check-sbt error", e);
    return new Response(JSON.stringify({ ok: false, error: e.message || "Server error" }), { status: 500 });
  }
}
