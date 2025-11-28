// Stubs for external integrations - replace with real SDK wrappers

export const WalletConnect = {
  connect: async () => ({ ok: true })
};

export const StripeStub = {
  createPaymentIntent: async (payload) => ({ id: "pi_stub", client_secret: "secret_stub" })
};

export const JamDexStub = {
  queryIndex: async (q) => ({ ok: true })
};
