import {connectWithSigner, cosmos} from "@prism-finance/prismjs"
import {DirectSecp256k1HdWallet} from "@cosmjs/proto-signing";
import {GasPrice} from "@cosmjs/stargate";

async function main() {
    const mnemonic = "short ocean antique emerge glory lock army wine guard sketch hotel remove music demand romance raven roof survey tired thank vessel cliff choose apology";
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {prefix: "prism"});
    const signingClient = await connectWithSigner("http://0.0.0.0:26657", signer, 1000, GasPrice.fromString('0.03uprism'))

    const msg = cosmos.bank.v1beta1.MessageComposer.withTypeUrl.send({
        amount: [{
            amount: "10",
            denom: "uprism"
        }],
        toAddress: "prism1026zkhvcla5a7t9alwenzaarhcwtgk8z6c8yra",
        fromAddress: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu"
    })
    const address = (await signer.getAccounts())[0].address
    const msgSendResponse = await signingClient.signAndBroadcast(address, [msg], 1.5)
    console.log(msgSendResponse)
}

main().catch(console.error)