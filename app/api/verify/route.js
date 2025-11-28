import { tonVerifyController } from "../../../controllers/ton-verify.controller.js";

export async function POST(req) {
  return tonVerifyController(req);
}
