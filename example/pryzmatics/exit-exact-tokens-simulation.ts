import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const simulation = await pryzmaticsClient.pryzmatics.exitExactTokensSimulation({
        poolId: 0n,
        amountsOut: [{
            denom: "ceth",
            amount: "100",
        }]
    })
    console.log(simulation)
}

main().catch(console.error)