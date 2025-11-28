export async function POST(req) {
  const { address, contract, tokenId } = await req.json();

  const url = `https://api.tzkt.io/v1/tokens/balances?account=${address}&token.contract=${contract}&token.tokenId=${tokenId}`;

  const res = await fetch(url);
  const data = await res.json();

  const has = data.length > 0 && Number(data[0]?.balance) > 0;

  return Response.json({ has });
}
