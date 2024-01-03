import { createConfig } from '@ponder/core'
import { http } from 'viem'
import { DNSRegistrarAbi } from './abis/DNSRegistrar'

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
      maxHistoricalTaskConcurrency: 1,
    },
  },
  contracts: {
    DNSRegistrar: {
      network: 'mainnet',
      abi: DNSRegistrarAbi,
      address: '0x58774Bb8acD458A640aF0B88238369A167546ef2',
      startBlock: 13040372,
    },
    DNSRegistrarOld: {
      network: 'mainnet',
      abi: DNSRegistrarAbi,
      address: '0xa2F428617a523837d4adC81C67a296d42FD95e86',
      startBlock: 9380528,
    },
  },
})
