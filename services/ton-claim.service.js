export const tonClaimService = {
  async claim({ address, proof, chain }) {
    // TODO: mint SBT on chain when claim validated
    return { ok: true, tx: "tx_stub" };
  }
};
