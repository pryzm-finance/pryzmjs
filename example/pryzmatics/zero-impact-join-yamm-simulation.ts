import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const simulation = await pryzmaticsClient.pryzmatics.zeroImpactJoinYammSimulation({
        cAmountIn: {
            amount: "10000",
            denom: "cudummy"
        }
    })
    console.log(simulation)
}

main().catch(console.error)