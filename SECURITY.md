# Security checklist (soul gateway)

1. NEVER store PRC raw data in the server or logs.
2. Use env secrets and rotate keys monthly.
3. Smart contracts must be audited before mainnet deployment.
4. ZKP circuits must be validated in staging.
5. Emergency sever procedure must be test-driven (simulate covenant breach).
6. CI must run static analysis and unit tests before deploy.
