import { prismatics } from "@prism-finance/prismjs/lib";
import * as console from "console";
import { PRISMATICS_ENDPOINT } from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({ restEndpoint: PRISMATICS_ENDPOINT })

    const simulation = await prismaticsClient.prismatics.joinExactTokensSimulation({
        poolId: 0n,
        amountsIn: [
            { denom: 'ceth', amount: '20' },
            { denom: 'p:eth:30Jun2024', amount: '21' },
        ]
    })
    console.log(simulation)
}

main().catch(console.error)