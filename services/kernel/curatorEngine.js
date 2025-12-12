// /src/services/kernel/curatorEngine.js

/**
 * CuratorEngine
 * -----------------------
 * Purpose: Pre-process, validate, classify, and normalize
 * requests entering the Soul Gateway before they reach
 * verification services or ZKP logic.
 *
 * NOTE:
 * - No AI/ML inference here.
 * - Deterministic only.
 * - Performs structural and compliance checks.
 */

export class CuratorEngine {
  static sanitize(input = {}) {
    const clean = {};

    for (const key in input) {
      if (typeof input[key] === "string") {
        clean[key] = input[key].trim();
      } else {
        clean[key] = input[key];
      }
    }

    return clean;
  }

  static validateIdentityPayload(payload = {}) {
    const required = ["wallet", "signature", "timestamp"];

    for (const r of required) {
      if (!payload[r]) {
        return {
          ok: false,
          error: `missing_field:${r}`
        };
      }
    }

    // timestamp sanity check
    if (Date.now() - payload.timestamp > 5 * 60 * 1000) {
      return {
        ok: false,
        error: "timestamp_expired"
      };
    }

    return { ok: true };
  }

  static classifyRequest(path = "") {
    if (path.includes("mint")) return "sbt_mint";
    if (path.includes("verify")) return "identity_verify";
    if (path.includes("anchor")) return "chain_anchor";
    return "generic";
  }

  static prepareOutbound(data = {}) {
    return {
      ...data,
      curated_at: Date.now(),
      gateway: "SoulGateway:v1"
    };
  }
}

export default CuratorEngine;
