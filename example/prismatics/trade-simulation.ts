import { prismatics } from "@prism-finance/prismjs/lib";
import * as console from "console";
import { SwapType } from "@prism-finance/prismjs/lib/codegen/prism/amm/operations";
import { PRISMATICS_ENDPOINT } from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({ restEndpoint: PRISMATICS_ENDPOINT })

    let simulation = await prismaticsClient.prismatics.tradeSimulation({
        amount: "100000",
        steps: [],
        swapType: SwapType.SWAP_TYPE_GIVEN_IN,
        tokenIn: "catom",
        tokenOut: "p:atom:30Jun2024"
    })
    console.log(simulation)

    simulation = await prismaticsClient.prismatics.tradeSimulation({
        amount: "100000",
        steps: [{
            poolId: 0n,
            tokenIn: "catom",
            tokenOut: "p:atom:30Jun2024"
        }],
        swapType: SwapType.SWAP_TYPE_GIVEN_IN,
        tokenIn: "catom",
        tokenOut: "p:atom:30Jun2024"
    })
    console.log(simulation)
}

main().catch(console.error)