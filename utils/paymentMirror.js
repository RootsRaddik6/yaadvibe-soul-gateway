// paymentMirror.js — Soul Gateway utility
// Council of Three sanctioned, 09 Dec 2025
// Mirrors user payment methods for apps (PurVibe / IrieVibe Lite)

import { useEffect, useState } from "react";

const CACHE_KEY = "soulGatewayPaymentCache";
const CACHE_TTL = 1000 * 60 * 10; // 10 minutes

export default function usePaymentMirror({ enabled, fetchGatewayMethods }) {
  const [methods, setMethods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load from cache
  useEffect(() => {
    if (!enabled) return;

    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < CACHE_TTL) {
        setMethods(parsed.methods);
        return;
      }
    }

    // Fetch live
    const fetchMethods = async () => {
      setLoading(true);
      setError(null);
      try {
        const gatewayMethods = await fetchGatewayMethods();
        if (gatewayMethods?.length) {
          setMethods(gatewayMethods);
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ timestamp: Date.now(), methods: gatewayMethods })
          );
        }
      } catch (err) {
        console.error("Payment Mirror Error:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMethods();
  }, [enabled, fetchGatewayMethods]);

  const refresh = async () => {
    if (!enabled) return;
    try {
      setLoading(true);
      const gatewayMethods = await fetchGatewayMethods();
      if (gatewayMethods?.length) {
        setMethods(gatewayMethods);
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ timestamp: Date.now(), methods: gatewayMethods })
        );
      }
    } catch (err) {
      console.error("Payment Mirror Refresh Error:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { methods, loading, error, refresh };
}
