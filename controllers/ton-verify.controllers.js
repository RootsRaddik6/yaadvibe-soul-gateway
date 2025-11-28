import { tonVerifyService } from "../services/ton-verify.service.js";
import { jsonOK, jsonErr } from "../utils/response.js";

export async function tonVerifyController(req) {
  try {
    const body = await req.json();
    const res = await tonVerifyService.verify(body);
    if (!res.ok) return jsonErr(res.error || "Invalid", 403);
    return jsonOK(res);
  } catch (e) {
    return jsonErr(e.message || "Server error", 500);
  }
}
