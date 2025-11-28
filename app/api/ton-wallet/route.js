import { tonWalletController } from "../../../controllers/ton-wallet.controller.js";

export async function POST(req) {
  return tonWalletController(req);
}
