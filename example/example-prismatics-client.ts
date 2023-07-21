import {cosmatics, fetchAll, prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {Long} from "@prism-finance/prismjs/lib/codegen/helpers";
import {TimeResolutionType} from "@prism-finance/prismjs/lib/codegen/prismatics/historical_price";
import {SwapType} from "@prism-finance/prismjs/lib/codegen/prism/amm/operations";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: "https://lprismatic.prismprotocol.app"})
    const cosmaticsClient = await cosmatics.ClientFactory.createClient({restEndpoint: "https://lprismatic.prismprotocol.app"})

    const syncInfo = (await cosmaticsClient.cosmatics.syncInfo()).sync_info
    console.log(syncInfo)

    const tokens = (await prismaticsClient.prismatics.poolTokens({
        poolId: Long.ZERO
    })).pool_tokens
    console.log(tokens)

    const token = (await prismaticsClient.prismatics.poolToken({
        poolId: Long.ZERO,
        denom: "p:atom:31Jul2024"
    })).pool_token
    console.log(token)

    const price = (await prismaticsClient.prismatics.tokenPrice({
        tokenIn: 'p:atom:30Jun2024',
        tokenOut: 'p:atom:31Jul2024'
    })).price
    console.log(price)

    const maturities = await fetchAll(prismaticsClient, async (client, pageRequest) => {
        const result = (await prismaticsClient.prismatics.maturityAll({
            assetId: "atom",
            active: "true",
            pagination: pageRequest
        }))
        console.log(result)
        return [result.pagination.next_key, result.maturities]
    }/*, {
        countTotal: false,
        key: new Uint8Array(),
        offset: Long.ZERO,
        reverse: false,
        limit: Long.fromNumber(12)
    }*/)
    console.log(maturities)

    const prices = (await prismaticsClient.prismatics.historicalPrice({
        denom: `catom`,
        from: `${Date.parse('2023-07-21 12:09:22.222429')}`,
        to: `${Date.parse('2023-07-21 12:09:29.418701')}`,
        timeResolution: {
            type: TimeResolutionType.TIME_RESOLUTION_TYPE_MINUTE,
            value: 20
        }
    })).historical_prices
    console.log(prices)

    const simulation = await prismaticsClient.prismatics.tradeSimulation({
        amount: "100000", swapSteps: [{
            amount: "100000", poolId: Long.ZERO, tokenIn: "catom", tokenOut: "p:atom:30Jun2024"
        }], swapType: SwapType.SWAP_TYPE_GIVEN_IN, tokenIn: "catom", tokenOut: "p:atom:30Jun2024"
    })
    console.log(simulation)

    const proposals = await prismaticsClient.prismatics.assetProposals({
        assetId: "atom"
    })
    console.log(proposals)
}

main().catch(console.error)