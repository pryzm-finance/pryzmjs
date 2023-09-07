import {cosmos, getSigningPrismClientOptions, prism} from "@prism-finance/prismjs"
import {DirectSecp256k1HdWallet} from "@cosmjs/proto-signing";
import {defaultRegistryTypes, GasPrice, SigningStargateClient} from "@cosmjs/stargate";
import * as console from "console";
import {localPrism} from "./config";

async function main() {
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(localPrism.accounts.test1.mnemonic, {prefix: "prism"});
    const {
        registry,
        aminoTypes
    } = getSigningPrismClientOptions({
        defaultTypes: defaultRegistryTypes
    });
    const signingClient = await SigningStargateClient.connectWithSigner(localPrism.rpcUrl, signer, {
        registry,
        aminoTypes,
        gasPrice: GasPrice.fromString('0.03uprism'),
    });

    const msg = prism.refractor.MessageComposer.withTypeUrl.refract({
        amount: {
            amount: "100",
            denom: "cluna"
        },
        creator: localPrism.accounts.test1.address,
        maturity: "30Jun2025"
    })
    const msgSendResponse = await signingClient.signAndBroadcast(localPrism.accounts.test1.address, [msg], 1.5)
    console.log(msgSendResponse)
}

main().catch(console.error)