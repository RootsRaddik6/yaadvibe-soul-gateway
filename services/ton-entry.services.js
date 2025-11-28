import { checkTezosTokenBalance } from "../utils/tzkt.js";
import { verifySignature } from "../middlewares/signature.middleware.js";

export const tonEntryService = {
  async handleEntry(body) {
    const { chain, address, signature, contract, tokenId } = body || {};
    if (!chain || !address) return { ok: false, error: "Missing params" };

    const sigOk = await verifySignature({ address, signature, message: "yaadvibe-entry" });
    if (!sigOk) return { ok: false, error: "Invalid signature" };

    if (chain === "tezos") {
      const has = await checkTezosTokenBalance(address, contract, tokenId);
      return { ok: has, contract, tokenId };
    }

    if (chain === "ton") {
      // Placeholder - implement TON indexer check
      return { ok: true, note: "TON ownership check placeholder" };
    }

    return { ok: false, error: "Unsupported chain" };
  }
};
