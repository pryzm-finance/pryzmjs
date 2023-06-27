# PrismJs: Javascript SDK for prism-finance/prism-core

PrismJs is a JavaScript software development kit (SDK) that enables the development of applications that interact with the Prism blockchain from both Node.js and web browsers. It offers straightforward abstractions over fundamental data structures and serialization, simplifying the process of building applications that utilize the Prism blockchain.

# Install

```bash
pnpm install @prism-finance/prismjs
```

# Usage

## gRPC-web Clients

Import the `prism-finance` object from `@prism-finance/prismjs`.

```tsx
import { prism } from '@prism-finance/prismjs';

const client = await prism.ClientFactory.createGrpcWebClient({endpoint: GRPC_ENDPOINT});

// now you can query the prism modules
const params = await client.prism.amm.params();

// you can also query the cosmos modules
const balance = await client.cosmos.bank.v1beta1.allBalances({ address: 'prism1addresshere' });
```

## LCD Clients

```tsx
import { prism } from '@prism-finance/prismjs';

const client = await prism.ClientFactory.createLCDClient({restEndpoint: LCD_ENDPOINT})

// now you can query the prism modules
const params = await client.prism.amm.params();

// you can also query the cosmos modules
const balance = await client.cosmos.bank.v1beta1.allBalances({ address: 'prism1addresshere' });
```

## PrismaticsClient

```tsx
import { prismatics } from "@prism-finance/prismjs";

const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})

const syncInfo = (await prismaticsClient.prismatics.syncInfo()).sync_info
```

## Composing Messages

```tsx
import { prism } from '@prism-finance/prismjs';

// sample messages from refactor module
const {
    refract,
    redeem
} = prism.refractor.MessageComposer.withTypeUrl

// sample messages from amm module
const {
    singleSwap,
    initializePool
} = prism.amm.MessageComposer.withTypeUrl
```

## Example Project

[example](/example) is a sample project that depends on `@prism-finance/prismjs` and contains example on how to query data or sign and send messages.

## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit). Continue below to see how to manually construct signers and clients.

Here are the docs on [creating signers](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) in cosmos-kit that can be used with Keplr and other wallets.

### Initializing the Stargate Client

Use `getSigningPrismClient` to get your `SigningStargateClient`, with the proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```tsx
import { getSigningPrismClient } from '@prism-finance/prismjs';

const stargateClient = await getSigningPrismClient({
  rpcEndpoint,
  signer // OfflineSigner
});
```

### Creating Signers

To broadcast messages, you can create signers with a variety of options:

- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) (recommended)
- [keplr](https://docs.keplr.app/api/cosmjs.html)
- [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)

**Amino Signer**

Likely you'll want to use the Amino, so unless you need proto, you should use this one:

```tsx
import { getOfflineSignerAmino as getOfflineSigner } from 'cosmjs-utils';
```

**Proto Signer**

```tsx
import { getOfflineSignerProto as getOfflineSigner } from 'cosmjs-utils';
```

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```tsx
import { chains } from 'chain-registry';

const mnemonic = 'unfold client turtle either pilot stock floor glow toward bullet car science';
const chain = chains.find(({ chain_name }) => chain_name === 'prism');
const signer = await getOfflineSigner({
  mnemonic,
  chain
});
```

### Broadcasting Messages

Now that you have your `stargateClient`, you can broadcast messages:

```tsx
import { prism } from '@prism-finance/prismjs';

const { refract } = prism.refractor.MessageComposer.withTypeUrl

const msg = refract({
    creator: "signer",
    maturity: "31Jan2025",
    amount: {
        amount: "10",
        denom: "c:luna"
    }
})

const fee: StdFee = {
    amount: [
    {
        denom: 'coin',
        amount: '864'
    }
    ],
    gas: '86364'
};
const response = await stargateClient.signAndBroadcast(address, [msg], fee);
```

### Advanced Usage

If you want to manually construct a stargate client

```tsx
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";

import {
    cosmosAminoConverters,
    cosmosProtoRegistry,
    cosmwasmAminoConverters,
    cosmwasmProtoRegistry,
    ibcProtoRegistry,
    ibcAminoConverters,
    prismAminoConverters,
    prismProtoRegistry
} from '@prism-finance/prismjs';

const signer: OfflineSigner = /* create your signer (see above)  */
const rpcEndpint = '<https://rpc.cosmos.directory/prism>'; // or another URL

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry,
    ...prismProtoRegistry
];

const aminoConverters = {
    ...cosmosAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters,
    ...prismAminoConverters
};

const registry = new Registry(protoRegistry);
const aminoTypes = new AminoTypes(aminoConverters);

const stargateClient = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
});
```

# Developing

When first cloning the repo:

```bash
pnpm install
```

## Codegen

Contract schemas live in `./contracts`, and protos in `./proto`. Look inside of `scripts/codegen.js` and configure the settings for bundling your SDK and contracts into `@prism-finance/prismjs`:

```bash
pnpm codegen
```

## Publishing

Build the types and then publish:

```
pnpm compile
pnpm publish
```

# Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

- [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
- [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️