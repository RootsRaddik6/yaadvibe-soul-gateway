"use client";

import Detector from "./detector";
import Gatekeeper from "./gatekeeper";
import { preflight } from "./preflight";

export default async function loadSbtGateway(onAuthorized) {
  const ok = await preflight();
  if (!ok) return;

  const detector = new Detector();

  detector.onHasSbt = () => {
    new Gatekeeper().openPortal();
    sessionStorage.setItem("sbtVerified", "true");
    onAuthorized && onAuthorized();
  };

  detector.onNoSbt = () => {
    sessionStorage.setItem("sbtVerified", "false");
    console.log("No SBT soul detected.");
  };

  await detector.init();
}
