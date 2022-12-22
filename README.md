# PrismJs: Javascript SDK for PRISM

PrismJs is a JavaScript SDK for writing applications that interact with the PRISM blockchain from either Node.js or the browser and provides simple abstractions over core data structures, serialization, and tendermint event subscription.

## How it works

After installing PrismJs you can use `PrismClient` and `PrismWebsocketClient` to query or send messages to https://github.com/prism-finance/prism-core. Also, you can use `PrismaticsClient` to query ‣.

### **Features**

- **Written in TypeScript**, with type definitions
- Works in Node.js and in the browser
- Exposes the https://github.com/prism-finance/prism-core API through `PrismClient` and `PrismWebsocketClient`
- Exposes the ‣ API through `PrismaticsClient`

## Modules

This repo contains:

- badges
- readme
- contribution guide

# Quick Start

In order to use the library you first need to install the latest version of [PrismJs](https://github.com/prism-finance/prismjs/pkgs/npm/prismjs):

```bash
npm install @prism-finance/prismjs
```

# Build

Alternatively, you can clone the repository and build it yourself. The build result is a directory named `lib` which contains a local version of PrismJs and is ready to use. See [examples](https://github.com/prism-finance/prismjs/tree/dev/example).

## Build from source

### Prerequisites

- pnpm version 7.12.0+ (or npm version 8.19.1)
- 8 GB of free RAM
- Other prerequisites are already included in [package.json](https://github.com/prism-finance/prismjs/blob/main/package.json) as dev dependencies and will be installed automatically after building the project.

### How to build

```bash
pnpm install
pnpm build
```

# How to run tests

This project does not contain tests since it is fully generated.

# How to run

In order to use the library you first need to install the latest version of [PrismJs](https://github.com/prism-finance/prismjs/pkgs/npm/prismjs):

```bash
npm install @prism-finance/prismjs
```

   **Note:** prismjs is a private package published to prism’s GitHub package registry. 
   In order to have access to the library you need to follow the instructions [here](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package). 

# Usage

## PrismClient

There are three ways to instantiate a `PrismClient`:

1. Using the factory function `newPrismQueryClient` for querying PRISM
2. Using the factory function `newPrismSigningClient` for sending messages to PRISM
3. Using `PrismClient` default constructor for both querying data and sending messages

The resulting client instance contains namespaces for each module, each with a `query`
 and `tx` namespace containing the module's relevant querying and transacting methods with full type and auto-completion support. However, if the client is instantiated for querying data, you can not use the methods under the `tx` namespace or it fails. In the same way, you can not use the signing client to query PRISM.

### Querying **Prism data**

For instantiating a prism client for querying the blockchain, `newPrismQueryClient` can be used.

```tsx
import {newPrismQueryClient} from "@prism-finance/prismjs"

async function main() {
    const queryClient = newPrismQueryClient("http://0.0.0.0:1317")
    const balancesResult = await queryClient.CosmosBankV1Beta1.query.queryAllBalances("prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu");
    console.log(balancesResult.data.balances)
}

main().catch(console.error)

```

Here is a sample output for the above code:

```jsx
[ { denom: 'uprism', amount: '99999930' } ]
```

### Sending messages

To instantiate a prism client for sending messages, `newPrismSigningClient` can be used with a given CosmJs wallet as follows:

```tsx
import {newPrismSigningClient} from "@prism-finance/prismjs"
import {DirectSecp256k1HdWallet} from "@cosmjs/proto-signing";

async function main() {
    const mnemonic = "short ocean antique emerge glory lock army wine guard sketch hotel remove music demand romance raven roof survey tired thank vessel cliff choose apology";
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {prefix: "prism"});
    const signingClient = newPrismSigningClient("http://0.0.0.0:26657", wallet)
    const msgSendResponse = await signingClient.CosmosBankV1Beta1.tx.sendMsgSend({
        value: {
            amount: [{
                amount: "10",
                denom: "uprism"
            }],
            toAddress: "prism1u5pnr446txcfzlq42v3h7j4p6232hgem7rdz0f",
            fromAddress: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu"
        },
        fee: {
            amount: [{
                amount: "0",
                denom: "uprism"
            }],
            gas: "250000"
        }
    })
    console.log(msgSendResponse)
}

main().catch(console.error)
```

Here is a sample output for the above code:

```jsx
{
     code: 0,
     height: 85395,
     rawLog: '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"prism1u5pnr446txcfzlq42v3h7j4p6232hgem7rdz0f"},{"key":"amount","value":"10uprism"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu"},{"key":"amount","value":"10uprism"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmos.bank.v1beta1.MsgSend"},{"key":"sender","value":"prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu"},{"key":"module","value":"bank"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"prism1u5pnr446txcfzlq42v3h7j4p6232hgem7rdz0f"},{"key":"sender","value":"prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu"},{"key":"amount","value":"10uprism"}]}]}]',
     transactionHash: 'ED55ACB8C659934E61840259B531983A971F9F0B7DAD876B04463C11CA085D9D',
     gasUsed: 59008,
     gasWanted: 250000
}
```

### Default PrismClient instantiation

As mentioned above, instantiated clients using `newPrismSigningClient` cannot be used for querying data. In order to create a prism client for both querying data and signing transactions instantiate a `PrismClient` as follows:

```tsx
const mnemonic = "short ocean antique emerge glory lock army wine guard sketch hotel remove music demand romance raven roof survey tired thank vessel cliff choose apology";
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {prefix: "prism"});
const prismClient = new PrismClient({
      apiURL,
      rpcURL,
      prefix: "prism"
  },
  wallet
);
```

## PrismWebsocketClient

Prism emits different events, which you can subscribe to via `PrismWebsocketClient`. This can be useful for third-party applications (for analysis) or for inspecting the state. You can use find more about the concept of the event [here](https://docs.tendermint.com/v0.34/tendermint-core/subscription.html). You can find all supported event types and operands [here](https://github.com/prism-finance/prismjs/blob/main/src/wsclient.ts).

```tsx
import {PrismWebsocketClient, TendermintQuery} from "@prism-finance/prismjs";

async function main() {
    const prismWebsocketClient = new PrismWebsocketClient("ws://0.0.0.0:26657", 2000);

    const query: TendermintQuery = {}
    const attr = "prismfinance.prismcore.oracle.EventVoteIntervalEnds.timeMillis"
    query[attr] = ["EXISTS"]

    prismWebsocketClient.getEventStream("NewBlock", query).subscribe({
        next: events => {
            const epochMillis = JSON.parse(events[`${attr}`][0]);
            console.log(epochMillis)
        }
    })
}

main().catch(console.error)
```

## PrismaticsClient

To query [prismatics](https://github.com/prism-finance/prismatics) server, you can instantiate the `PrismaticsClient` in the following way:

```tsx
// import {newPrismaticsClient} from "@prism-finance/prismjs";
import {newPrismaticsClient} from "../lib";

async function main() {
    const prismaticsClient = newPrismaticsClient("http://localhost:4444")
    let res = await prismaticsClient.PrismfinancePrismatics.query.queryMaturityAll({
        asset: "LUNA",
        "pagination.limit": "1"
    })
    console.log(res.data)
}

main().catch(console.error)
```

## Sending multiple messages as one transaction

You can construct messages separately and send them in a single transaction using a signing client like so:

```jsx
const msg1 = await client.CosmosBankV1Beta1.tx.msgSend(
    {
        value: {
            amount: [
                {
                    amount: '200',
                    denom: 'uprism',
                },
            ],
            fromAddress: 'prism1qqqsyqcyq5rqwzqfys8f67',
            toAddress: 'prism1qqqsyqcyq5rqwzqfys8f67'
        }
    }
);
const msg2 = await client.CosmosBankV1Beta1.tx.msgSend(
    {
        value: {
            amount: [
                {
                    amount: '200',
                    denom: 'uprism',
                },
            ],
            fromAddress: 'prism1qqqsyqcyq5rqwzqfys8f67',
            toAddress: 'prism1qqqsyqcyq5rqwzqfys8f67'
        },
    }
);
const tx_result = await client.signAndBroadcast([msg1, msg2], fee, memo);
```

## Custom clients using IgniteClient.plugin

If you prefer, you can construct a lighter client using only the modules you are interested in by importing the generic client class and expanding it with the modules you need:

```jsx
import {IgniteClient} from "@prism-finance/prismjs/lib/client";
import {Module as CosmosBankV1Beta1} from '@prism-finance/prismjs/lib/cosmos.bank.v1beta1'
import {Module as PrismfinancePrismcoreAssets} from '@prism-finance/prismjs/lib/prismfinance.prismcore.assets'

const CustomClient = IgniteClient.plugin([CosmosBankV1Beta1, PrismfinancePrismcoreAssets]);

const client = new CustomClient({
        apiURL: "http://localhost:1317",
        rpcURL: "http://localhost:26657",
        prefix: "prism"
    },
    wallet
);
```

# Development and troubleshoot

This project contains a combination of generated typescript files from [prism-core](https://github.com/prism-finance/prism-core) and [prisma](https://github.com/prism-finance/prisma) using [ignite CLI](https://docs.ignite.com/clients/typescript). See [UPGRADE.md](http://UPGRADE.md) for more information.

The only file that is not among the generated files is [wsclient.ts](https://github.com/prism-finance/prismjs/blob/main/src/wsclient.ts). If this file is to be modified, the modification should be applied to the [wsclient.ts](https://github.com/prism-finance/prismjs/blob/main/patch/wsclient.ts) inside the [patch](https://github.com/prism-finance/prismjs/tree/main/patch) directory. The reason for doing so is that during the upgrade process we always replace the former [wsclient.ts](https://github.com/prism-finance/prismjs/blob/main/src/wsclient.ts) with the latter. 

## Development

TODO refer to the contribution guide.

# TODO

- Automate the upgrade process described in [UPGRADE.md](http://UPGRADE.md).
- Add support for using PrismJs inside the browser.

# Contribution guide and licensing

This software is licensed under the `GPL Version 2.0 or a later version` license.
See [LICENSE](https://github.com/prism-finance/prism-contracts/blob/main/LICENSE.md) for full disclosure.

© 2022 PRISM Protocol.