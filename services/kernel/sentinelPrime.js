// /src/services/kernel/sentinelPrime.js

/**
 * SentinelPrime
 * -----------------------------------
 * Purpose:
 * Hard safety gatekeeper for the Soul Gateway.
 * Enforces:
 *  - no external AI compute
 *  - request-type restrictions
 *  - payload boundaries
 *  - identity workflow integrity
 *
 * This is NOT an AI component.
 * It is a deterministic covenant enforcer.
 */

export class SentinelPrime {
  static covenant = {
    external_ai_allowed: false,
    allow_unverified_identity: false,
    max_payload_kb: 32,
    message: "No drift. No leakage. No exception."
  };

  // Block external / unsafe compute
  static enforceCovenant(requestMeta = {}) {
    if (!this.covenant.external_ai_allowed && requestMeta.ai === true) {
      return {
        ok: false,
        error: "blocked:external_ai_disallowed",
        sentinel: this.covenant.message
      };
    }

    return { ok: true };
  }

  // Enforce payload size + sanity
  static enforcePayloadLimits(payload = {}) {
    const sizeKB = Buffer.byteLength(JSON.stringify(payload), "utf8") / 1024;

    if (sizeKB > this.covenant.max_payload_kb) {
      return {
        ok: false,
        error: "payload_too_large",
        limit_kb: this.covenant.max_payload_kb
      };
    }

    return { ok: true };
  }

  // Identity workflow guardrails
  static enforceIdentityState({ wallet, sbt, verified }) {
    // Gateway requires wallet
    if (!wallet) {
      return {
        ok: false,
        error: "missing_wallet"
      };
    }

    // No tSBT operations without pSBT first
    if (!verified && sbt === "tSBT") {
      return {
        ok: false,
        error: "invalid_state:requires_psbt"
      };
    }

    return { ok: true };
  }

  // Final authorization step
  static authorize(flow = "") {
    const allowedFlows = new Set([
      "identity_verify",
      "sbt_mint",
      "chain_anchor",
      "generic"
    ]);

    if (!allowedFlows.has(flow)) {
      return {
        ok: false,
        error: `forbidden_flow:${flow}`
      };
    }

    return { ok: true };
  }
}

export default SentinelPrime;
