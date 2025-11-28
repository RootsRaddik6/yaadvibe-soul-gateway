"use client";

export function detectMobile() {
  if (typeof window === "undefined") return false;

  const ua = navigator.userAgent.toLowerCase();
  return /iphone|ipad|android|mobile/.test(ua);
}

export function mobileIntegrityCheck() {
  const mobile = detectMobile();

  // Prevent in-app browser issues
  if (mobile && window !== window.top) {
    alert("To continue securely, open this page in your device's default browser.");
    window.location.href = "about:blank";
    return false;
  }

  return true;
}
