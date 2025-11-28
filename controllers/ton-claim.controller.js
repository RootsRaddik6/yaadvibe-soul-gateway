import { tonClaimService } from "../services/ton-claim.service.js";
import { jsonOK, jsonErr } from "../utils/response.js";

export async function tonClaimController(req) {
  try {
    const body = await req.json();
    const res = await tonClaimService.claim(body);
    return res.ok ? jsonOK(res) : jsonErr(res.error || "Failed", 400);
  } catch (e) {
    return jsonErr(e.message || "Server error", 500);
  }
}
