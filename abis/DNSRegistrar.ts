export const DNSRegistrarAbi = [
  {
    inputs: [
      {
        internalType: 'contract DNSSEC',
        name: '_dnssec',
        type: 'address',
      },
      {
        internalType: 'contract PublicSuffixList',
        name: '_suffixes',
        type: 'address',
      },
      { internalType: 'contract ENS', name: '_ens', type: 'address' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'node',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'dnsname',
        type: 'bytes',
      },
    ],
    name: 'Claim',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'oracle',
        type: 'address',
      },
    ],
    name: 'NewOracle',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'suffixes',
        type: 'address',
      },
    ],
    name: 'NewPublicSuffixList',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'bytes', name: 'name', type: 'bytes' },
      { internalType: 'bytes', name: 'proof', type: 'bytes' },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ens',
    outputs: [{ internalType: 'contract ENS', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'oracle',
    outputs: [{ internalType: 'contract DNSSEC', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes', name: 'name', type: 'bytes' },
      {
        components: [
          { internalType: 'bytes', name: 'rrset', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' },
        ],
        internalType: 'struct DNSSEC.RRSetWithSignature[]',
        name: 'input',
        type: 'tuple[]',
      },
      { internalType: 'bytes', name: 'proof', type: 'bytes' },
    ],
    name: 'proveAndClaim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes', name: 'name', type: 'bytes' },
      {
        components: [
          { internalType: 'bytes', name: 'rrset', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' },
        ],
        internalType: 'struct DNSSEC.RRSetWithSignature[]',
        name: 'input',
        type: 'tuple[]',
      },
      { internalType: 'bytes', name: 'proof', type: 'bytes' },
      { internalType: 'address', name: 'resolver', type: 'address' },
      { internalType: 'address', name: 'addr', type: 'address' },
    ],
    name: 'proveAndClaimWithResolver',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract DNSSEC',
        name: '_dnssec',
        type: 'address',
      },
    ],
    name: 'setOracle',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract PublicSuffixList',
        name: '_suffixes',
        type: 'address',
      },
    ],
    name: 'setPublicSuffixList',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'suffixes',
    outputs: [
      {
        internalType: 'contract PublicSuffixList',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceID', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'pure',
    type: 'function',
  },
] as const
