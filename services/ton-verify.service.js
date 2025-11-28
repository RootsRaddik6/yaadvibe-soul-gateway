import { verifySignature } from "../middlewares/signature.middleware.js";

export const tonVerifyService = {
  async verify({ address, signature, chain }) {
    if (!address || !signature) return { ok: false, error: "Missing" };
    const ok = await verifySignature({ address, signature, message: `verify-${chain || "unknown"}` });
    return ok ? { ok: true } : { ok: false, error: "Invalid signature" };
  }
};
