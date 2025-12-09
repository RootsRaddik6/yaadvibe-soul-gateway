/**
 * contractClient: lightweight wrapper that will bind to smart
 * contract addresses via ethers.js (or TON SDK later).
 *
 * NOTE: Replace placeholders with the real chain-specific SDK
 */
import { ethers } from 'ethers';
import { ENV } from '../utils/env';
import { log } from '../utils/logger';

const provider = new ethers.providers.JsonRpcProvider(ENV.POLY_RPC_URL || 'http://localhost:8545');
const signer = new ethers.Wallet(ENV.DEPLOYER_PRIVATE_KEY || '0x0', provider);

export const contractClient = {
  provider,
  signer,
  async getContract(abi, address) {
    return new ethers.Contract(address, abi, signer);
  },
  async callWrite(contract, fn, args, overrides = {}) {
    log('contract write', fn, args);
    const tx = await contract[fn](...args, overrides);
    await tx.wait();
    return tx;
  },
  async callRead(contract, fn, args = []) {
    log('contract read', fn, args);
    return contract[fn](...args);
  }
};
