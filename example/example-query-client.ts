import {prism} from "@prism-finance/prismjs"
import * as console from "console";
import {Long} from "@prism-finance/prismjs/lib/codegen/helpers";

async function main() {
    const client = await prism.ClientFactory.createLCDClient({restEndpoint: "http://0.0.0.0:1317"})
    let balances = (await client.cosmos.bank.v1beta1.allBalances({
        address: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu",
        pagination: {}
    })).balances
    console.log(balances)
    balances = (await client.cosmos.bank.v1beta1.allBalances({
        address: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu",
        pagination: {}
    })).balances
    console.log(balances)

    const ammParams = (await client.prism.amm.params()).params;
    console.log(ammParams)

    const refractableAssets = (await client.prism.assets.refractableAssetAll({
        enabled: "", pagination: undefined
    })).assets
    console.log(refractableAssets)

    const spotPrice = (await client.prism.amm.spotPrice({
        poolId: Long.fromString("123"),
        tokenIn: "base",
        tokenOut: "quote",
        applyFee: false
    })).spot_price
    console.log(spotPrice)
}

main().catch(console.error)