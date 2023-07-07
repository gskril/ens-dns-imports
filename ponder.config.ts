import type { PonderConfig } from "@ponder/core";

export const config: PonderConfig = {
  networks: [
    { name: "mainnet", chainId: 1, rpcUrl: process.env.PONDER_RPC_URL_1 },
  ],
  contracts: [
    {
      name: "DNSRegistrar",
      network: "mainnet",
      abi: "./abis/DNSRegistrar.json",
      address: "0x58774Bb8acD458A640aF0B88238369A167546ef2",
      startBlock: 13040372,
    },
  ],
};
