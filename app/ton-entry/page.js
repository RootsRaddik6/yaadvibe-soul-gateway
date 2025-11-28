"use client";
import { useState, useEffect } from "react";
import loadSbtGateway from "../sbt-gateway/loader";
import "../sbt-gateway/gateway.css";
import { validateAccess } from "./route-guard";export default function TonEntry() {
  const [opened, setOpened] = useState(false);

  async function openPortal() {
    await loadSbtGateway(() => setOpened(true));
  }

  return (
    <main style={{
      background: "black",
      minHeight: "100vh",
      color: "white",
      padding: "40px"
    }}>
      <h1>YaadVibe Gateway</h1>

      <button 
        onClick={openPortal}
        style={{
          border: "1px solid white",
          background: "transparent",
          padding: "12px 24px",
          color: "white",
          marginTop: "20px"
        }}>
        Connect Wallet
      </button>

      <div id="orb" className="gold"></div>

      <div id="portal" className={`portal ${opened ? "" : "hidden"}`}>
        <h2>Welcome Soul</h2>
        <p>Your SBT has been verified.</p>

        <ul>
          <li>YaadVibe</li>
          <li>YaadLife Lite</li>
          <li>PurVibe</li>
          <li>IrieVibe</li>
        </ul>
      </div>
    </main>
  );
}
