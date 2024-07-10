# PryzmJs: Javascript SDK for pryzm-finance/pryzm-core

PryzmJs is a JavaScript software development kit (SDK) that enables the development of applications that interact with the Pryzm blockchain from both Node.js and web browsers. It offers straightforward abstractions over fundamental data structures and serialization, simplifying the process of building applications that utilize the Pryzm blockchain.

# Install

```bash
pnpm install @pryzm-finance/pryzmjs
```

# Usage

## gRPC-web Clients

Import the `pryzm` object from `@pryzm-finance/pryzmjs`.

```tsx
import { pryzm } from '@pryzm-finance/pryzmjs';

const client = await pryzm.ClientFactory.createGrpcWebClient({endpoint: GRPC_ENDPOINT});

// now you can query the pryzm modules
const params = await client.pryzm.amm.v1.params();

// you can also query the cosmos modules
const balance = await client.cosmos.bank.v1beta1.allBalances({ address: 'pryzm1addresshere' });
```

Import the `alliance` object from `@pryzm-finance/pryzmjs/lib/alliance`.

```tsx
import { alliance } from "@pryzm-finance/pryzmjs/lib/alliance"

const client = await alliance.ClientFactory.createGrpcWebClient({ endpoint: GRPC_ENDPOINT })

// now you can query the alliance module
const params = await client.alliance.params()
```

## LCD Clients

```tsx
import { pryzm } from '@pryzm-finance/pryzmjs';

const client = await pryzm.ClientFactory.createLCDClient({restEndpoint: LCD_ENDPOINT})

// now you can query the pryzm modules
const params = await client.pryzm.amm.v1.params();

// you can also query the cosmos modules
const balance = await client.cosmos.bank.v1beta1.allBalances({ address: 'pryzm1addresshere' });
```

```tsx
import { alliance } from "@pryzm-finance/pryzmjs/lib/alliance"

const client = await alliance.ClientFactory.createLCDClient({restEndpoint: LCD_ENDPOINT})

// now you can query the alliance module
const params = await client.alliance.params()
```

## Composing Messages

```tsx
import { pryzm } from '@pryzm-finance/pryzmjs';

// sample messages from refactor module
const {
    refract,
    redeem
} = pryzm.refractor.v1.MessageComposer.withTypeUrl

// sample messages from amm module
const {
    singleSwap,
    initializePool
} = pryzm.amm.v1.MessageComposer.withTypeUrl
```

```tsx
import { alliance } from "@pryzm-finance/pryzmjs/lib/alliance"

// sample messages from alliance module
const {
    delegate,
    redelegate,
    undelegate,
    claimDelegationRewards
} = alliance.MessageComposer.withTypeUrl
```

## Example Project

[example](https://github.com/pryzm-finance/pryzmjs/tree/main/example) is a sample project that depends on `@pryzm-finance/pryzmjs` and contains example on how to query data or sign and send messages.

## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit). Continue below to see how to manually construct signers and clients.

Here are the docs on [creating signers](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) in cosmos-kit that can be used with Keplr and other wallets.

### Initializing the Stargate Client

Use `getSigningPryzmClient` to get your `SigningStargateClient`, with the proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```tsx
import { getSigningPryzmClient } from '@pryzm-finance/pryzmjs';

const stargateClient = await getSigningPryzmClient({
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
const chain = chains.find(({ chain_name }) => chain_name === 'pryzm');
const signer = await getOfflineSigner({
  mnemonic,
  chain
});
```

### Broadcasting Messages

Now that you have your `stargateClient`, you can broadcast messages:

```tsx
import { pryzm } from '@pryzm-finance/pryzmjs';

const { refract } = pryzm.refractor.v1.MessageComposer.withTypeUrl

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
    pryzmAminoConverters,
    pryzmProtoRegistry
} from '@pryzm-finance/pryzmjs';

const signer: OfflineSigner = /* create your signer (see above)  */
const rpcEndpint = '<https://rpc.cosmos.directory/pryzm>'; // or another URL

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry,
    ...pryzmProtoRegistry
];

const aminoConverters = {
    ...cosmosAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters,
    ...pryzmAminoConverters
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

Contract schemas live in `./contracts`, and protos in `./proto`. Look inside of `scripts/codegen.js` and configure the settings for bundling your SDK and contracts into `@pryzm-finance/pryzmjs`:

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
