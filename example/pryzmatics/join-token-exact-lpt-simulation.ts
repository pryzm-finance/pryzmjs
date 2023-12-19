import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const simulation = await pryzmaticsClient.pryzmatics.joinTokenExactLptSimulation({
        poolId: 0n,
        lptOutAmount: "42",
        tokenIn: "ceth"
    })
    console.log(simulation)
}

main().catch(console.error)