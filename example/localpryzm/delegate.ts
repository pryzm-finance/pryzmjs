import { connectWithSigner, cosmos, getSigningPryzmClientOptions } from "@pryzm-finance/pryzmjs"
import {DirectSecp256k1HdWallet} from "@cosmjs/proto-signing";
import {defaultRegistryTypes, GasPrice, SigningStargateClient} from "@cosmjs/stargate";
import * as console from "console";
import {localPryzm} from "./config";

async function main() {

    const signer = await DirectSecp256k1HdWallet.fromMnemonic(localPryzm.accounts.test1.mnemonic, {prefix: "pryzm"});
    const signingClient = await connectWithSigner("http://localhost:26657", signer, undefined, GasPrice.fromString('0.03upryzm'), undefined)

    const msg = cosmos.staking.v1beta1.MessageComposer.withTypeUrl.delegate({
        amount: {
            amount: "999999", denom: "upryzm"
        }, delegatorAddress: localPryzm.accounts.test1.address, validatorAddress: localPryzm.accounts.validator.valAddress
    })
    const msgSendResponse = await signingClient.signAndBroadcast(localPryzm.accounts.test1.address, [msg], 1.5)
    console.log(msgSendResponse)
}

main().catch(console.error)