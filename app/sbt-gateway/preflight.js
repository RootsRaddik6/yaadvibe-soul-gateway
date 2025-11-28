"use client";
import { mobileIntegrityCheck } from "./mobile-loader";

export async function preflight() {
  if (!mobileIntegrityCheck()) return false;

  if (typeof window === "undefined") return false;

  // Wallet sanity check
  if (!window.beaconSdk && !window.ton) {
    console.warn("No wallet detected.");
  }

  return true;
}
