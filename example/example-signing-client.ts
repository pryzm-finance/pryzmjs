// import {newPrismSigningClient} from "@prism-finance/prismjs"
import {newPrismSigningClient} from "../lib"
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