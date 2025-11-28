import axios from "axios";
import { config } from "./config.js";

export async function checkTezosTokenBalance(address, contract, tokenId) {
  // Uses public tzkt API to check token balance
  try {
    const url = `${config.TZKT_API}/v1/tokens/balances?account=${address}&token.contract=${contract}&token.tokenId=${tokenId}`;
    const res = await axios.get(url, { timeout: 5000 });
    const data = res.data;
    return Array.isArray(data) && data.length > 0 && Number(data[0].balance) > 0;
  } catch (e) {
    console.error("tzkt error", e.message || e);
    return false;
  }
}
