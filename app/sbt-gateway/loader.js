"use client";

import Detector from "./detector";
import Gatekeeper from "./gatekeeper";

export default async function loadSbtGateway(onAuthorized) {
  const detector = new Detector();
  detector.onHasSbt = () => {
    new Gatekeeper().openPortal();
    onAuthorized && onAuthorized();
  };
  detector.onNoSbt = () => console.log("No soul SBT found.");
  await detector.init();
}
