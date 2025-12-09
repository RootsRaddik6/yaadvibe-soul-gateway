/**
 * sbtController: handles SBT issuance lifecycle.
 * This is the server side logic called from API endpoints.
 *
 * Important: This controller DOES NOT store any PRC data.
 * Only stores minimal flags and hashes (consentHash, memoryHash).
 */
import { contractClient } from '../services/contractClient';
import { requestZKProof, verifyZKProof } from '../zkp/zkpClient';
import { log } from '../utils/logger';

export async function mintPSBT(req, res) {
  try {
    const { userNonce, consentHash, metadataHash } = req.body;

    // 1) Request a ZKP that user's device/flow produced valid flags
    const proof = await requestZKProof({ userNonce, consentHash });
    if (!proof || !proof.proof) return res.status(400).json({ error: 'zkp_failed' });

    // 2) Verify proof server-side
    const verified = await verifyZKProof(proof.proof);
    if (!verified || !verified.ok) return res.status(400).json({ error: 'zkp_verify_failed' });

    // 3) Call smart contract to mint pSBT — CONTRACT ABI & ADDRESS configured in env
    // Placeholder: use contractClient to bind and call
    // const contract = await contractClient.getContract(SBT_ABI, SBT_ADDRESS);
    // const tx = await contractClient.callWrite(contract, 'mintPSBT', [userAddress, metadataHash]);

    log('mint PSBT requested for', userNonce);
    // Return placeholder success (replace with tx data)
    res.json({ ok: true, tx: null, note: 'mint simulated (implement contract call)' });
  } catch (e) {
    log('mint error', e);
    res.status(500).json({ error: 'server_error' });
  }
}
