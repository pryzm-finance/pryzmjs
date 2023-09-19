import {pryzm} from "@pryzm-finance/pryzmjs"
import * as console from "console";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

async function main() {
    const mnemonic = "short ocean antique emerge glory lock army wine guard sketch hotel remove music demand romance raven roof survey tired thank vessel cliff choose apology";
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {prefix: "pryzm"});
    const address = (await signer.getAccounts())[0].address
    const client = await pryzm.ClientFactory.createLCDClient({restEndpoint: "http://0.0.0.0:1317"})
    let balances = (await client.cosmos.bank.v1beta1.allBalances({
        address,
        pagination: {}
    })).balances
    console.log(balances)
    balances = (await client.cosmos.bank.v1beta1.allBalances({
        address,
        pagination: {}
    })).balances
    console.log(balances)

    const ammParams = (await client.pryzm.amm.params()).params;
    console.log(ammParams)

    const refractableAssets = (await client.pryzm.assets.refractableAssetAll({
        enabled: "", pagination: undefined
    })).assets
    console.log(refractableAssets)

    const spotPrice = (await client.pryzm.amm.spotPrice({
        poolId: 123n,
        tokenIn: "base",
        tokenOut: "quote",
        applyFee: false
    })).spot_price
    console.log(spotPrice)
}

main().catch(console.error)