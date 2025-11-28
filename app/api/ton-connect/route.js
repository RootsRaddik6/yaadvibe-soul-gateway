import { tonConnectController } from "../../../controllers/ton-connect.controller.js";

export async function POST(req) {
  return tonConnectController(req);
}
