import { tonClaimController } from "../../../controllers/ton-claim.controller.js";

export async function POST(req) {
  return tonClaimController(req);
}
