import { tonConnectService } from "../services/ton-connect.service.js";
import { jsonOK, jsonErr } from "../utils/response.js";

export async function tonConnectController(req) {
  try {
    const body = await req.json();
    const res = await tonConnectService.handleConnect(body);
    return res.ok ? jsonOK(res) : jsonErr(res.error || "Failed", 400);
  } catch (e) {
    return jsonErr(e.message || "Server error", 500);
  }
}
