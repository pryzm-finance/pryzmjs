import { cosmos, getSigningPryzmClient } from "@pryzm-finance/pryzmjs"
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { RPC_ENDPOINT } from "./consts";

async function main() {
    const mnemonic = "short ocean antique emerge glory lock army wine guard sketch hotel remove music demand romance raven roof survey tired thank vessel cliff choose apology";
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {prefix: "pryzm"});
    const address = (await signer.getAccounts())[0].address
    const signingClient = await getSigningPryzmClient({
        rpcEndpoint: RPC_ENDPOINT,
        signer
    })


    const msg1 = cosmos.bank.v1beta1.MessageComposer.withTypeUrl.send({
        amount: [{
            amount: "10",
            denom: "upryzm"
        }],
        toAddress: address,
        fromAddress: address
    })

    const msg2 = cosmos.bank.v1beta1.MessageComposer.withTypeUrl.send({
        amount: [{
            amount: "20",
            denom: "upryzm"
        }],
        toAddress: address,
        fromAddress: address
    })


    const msgSendResponse = await signingClient.signAndBroadcast(address, [msg1, msg2], {
        amount: [{
            amount: "0",
            denom: "upryzm"
        }],
        gas: "250000"
    })
    console.log(msgSendResponse)
}

main().catch(console.error)