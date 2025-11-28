"use client";

export default class Gatekeeper {
  openPortal() {
    const orb = document.getElementById("orb");
    const portal = document.getElementById("portal");

    orb.classList.remove("gold");
    orb.classList.add("crimson");

    setTimeout(() => {
      portal.classList.remove("hidden");
    }, 800);
  }
}
