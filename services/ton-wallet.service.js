export const tonWalletService = {
  async handle({ action, address }) {
    if (action === "balance") {
      return { ok: true, balance: "0.0", currency: "TON" };
    }
    return { ok: false, error: "Unsupported action" };
  }
};
