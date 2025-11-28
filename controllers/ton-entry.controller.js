import { tonEntryService } from "../services/ton-entry.service.js";
import { jsonOK, jsonErr } from "../utils/response.js";

export async function tonEntryController(req) {
  try {
    const body = await req.json();
    const out = await tonEntryService.handleEntry(body);
    if (!out.ok) return jsonErr(out.error || "Unauthorized", 403);
    return jsonOK(out);
  } catch (e) {
    return jsonErr(e.message || "Server error", 500);
  }
}
