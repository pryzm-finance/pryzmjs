import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const simulation = await pryzmaticsClient.pryzmatics.joinExactTokensSimulation({
        poolId: 0n,
        amountsIn: [
            { denom: 'ceth', amount: '20' },
            { denom: 'p:eth:30Jun2024', amount: '21' },
        ]
    })
    console.log(simulation)
}

main().catch(console.error)