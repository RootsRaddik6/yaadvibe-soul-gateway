"use client";

import { DAppClient } from "@airgap/beacon-sdk";

export default class Detector {
  constructor() {
    this.client = new DAppClient({ name: "YaadVibe Soul Gateway" });
    this.TARGET_CONTRACT = "KT1BRADdqGk2eLmMqyyWzqVmPQ1RCBCbW5dY";
    this.TARGET_TOKEN_ID = "1";
  }

  async init() {
    try {
      await this.client.requestPermissions();
      const acc = await this.client.getActiveAccount();
      const address = acc.address;

      const res = await fetch("/api/check-sbt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address,
          contract: this.TARGET_CONTRACT,
          tokenId: this.TARGET_TOKEN_ID
        })
      });

      const data = await res.json();

      if (data.has) this.onHasSbt && this.onHasSbt();
      else this.onNoSbt && this.onNoSbt();
    } catch (err) {
      this.onNoSbt && this.onNoSbt();
    }
  }
}
