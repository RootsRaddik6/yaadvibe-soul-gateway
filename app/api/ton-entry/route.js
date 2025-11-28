import { tonEntryController } from "../../../controllers/ton-entry.controller.js";

export async function POST(req) {
  return tonEntryController(req);
}
