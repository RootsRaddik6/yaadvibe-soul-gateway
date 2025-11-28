export async function POST(req) {
  // placeholder — implement stripe server flow later
  return new Response(JSON.stringify({ ok: true, note: "stripe placeholder" }), { status: 200, headers: { "Content-Type": "application/json" } });
}
