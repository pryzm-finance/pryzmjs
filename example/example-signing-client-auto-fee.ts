import { alliance, connectWithSigner, cosmos } from "@pryzm-finance/pryzmjs"
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { RPC_ENDPOINT } from "./consts";

async function main() {
    const mnemonic = "short ocean antique emerge glory lock army wine guard sketch hotel remove music demand romance raven roof survey tired thank vessel cliff choose apology";
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "pryzm" });
    const signingClient = await connectWithSigner(RPC_ENDPOINT, signer, 10000, GasPrice.fromString('0.03upryzm'))

    const address = (await signer.getAccounts())[0].address

    const bankMsg = cosmos.bank.v1beta1.MessageComposer.withTypeUrl.send({
        amount: [{
            amount: "10",
            denom: "upryzm"
        }],
        toAddress: address,
        fromAddress: address
    })

    const allianceMsg = alliance.alliance.MessageComposer.withTypeUrl.delegate({
        amount: {
            amount: "10",
            denom: "upryzm"
        },
        validatorAddress: address,
        delegatorAddress: address
    })

    const msgSendResponse = await signingClient.signAndBroadcast(address, [bankMsg, allianceMsg], 1.5)
    console.log(msgSendResponse)
}

main().catch(console.error)