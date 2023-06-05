import {cosmos, getSigningPrismClient} from "@prism-finance/prismjs"
import {DirectSecp256k1HdWallet} from "@cosmjs/proto-signing";

async function main() {
    const mnemonic = "short ocean antique emerge glory lock army wine guard sketch hotel remove music demand romance raven roof survey tired thank vessel cliff choose apology";
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {prefix: "prism"});
    const signingClient = await getSigningPrismClient({
        rpcEndpoint: "http://0.0.0.0:26657",
        signer
    })

    const msg1 = cosmos.bank.v1beta1.MessageComposer.withTypeUrl.send({
        amount: [{
            amount: "10",
            denom: "uprism"
        }],
        toAddress: "prism1026zkhvcla5a7t9alwenzaarhcwtgk8z6c8yra",
        fromAddress: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu"
    })

    const msg2 = cosmos.bank.v1beta1.MessageComposer.withTypeUrl.send({
        amount: [{
            amount: "20",
            denom: "uprism"
        }],
        toAddress: "prism1u5pnr446txcfzlq42v3h7j4p6232hgem7rdz0f",
        fromAddress: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu"
    })

    const address = (await signer.getAccounts())[0].address

    const msgSendResponse = await signingClient.signAndBroadcast(address, [msg1, msg2], {
        amount: [{
            amount: "0",
            denom: "uprism"
        }],
        gas: "250000"
    })
    console.log(msgSendResponse)
}

main().catch(console.error)