import { connectWithSigner, cosmos, getSigningPryzmClientOptions, pryzm } from "@pryzm-finance/pryzmjs"
import {DirectSecp256k1HdWallet} from "@cosmjs/proto-signing";
import {defaultRegistryTypes, GasPrice, SigningStargateClient} from "@cosmjs/stargate";
import * as console from "console";
import {localPryzm} from "./config";

async function main() {
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(localPryzm.accounts.test1.mnemonic, {prefix: "pryzm"});
    const signingClient = await connectWithSigner("http://localhost:26657", signer, undefined, GasPrice.fromString('0.03upryzm'), undefined)

    const msg = pryzm.refractor.MessageComposer.withTypeUrl.refract({
        amount: {
            amount: "100",
            denom: "cluna"
        },
        creator: localPryzm.accounts.test1.address,
        maturity: "30Jun2025"
    })
    const msgSendResponse = await signingClient.signAndBroadcast(localPryzm.accounts.test1.address, [msg], 1.5)
    console.log(msgSendResponse)
}

main().catch(console.error)