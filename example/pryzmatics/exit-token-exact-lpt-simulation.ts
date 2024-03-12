import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const simulation = await pryzmaticsClient.pryzmatics.exitTokenExactLptSimulation({
        poolId: 0n,
        lptInAmount: "100",
        tokenOut: "ceth"
    })
    console.log(simulation)
}

main().catch(console.error)