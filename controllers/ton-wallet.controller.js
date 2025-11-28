import { tonWalletService } from "../services/ton-wallet.service.js";
import { jsonOK, jsonErr } from "../utils/response.js";

export async function tonWalletController(req) {
  try {
    const body = await req.json();
    const res = await tonWalletService.handle(body);
    return res.ok ? jsonOK(res) : jsonErr(res.error || "Failed", 400);
  } catch (e) {
    return jsonErr(e.message || "Server error", 500);
  }
}
