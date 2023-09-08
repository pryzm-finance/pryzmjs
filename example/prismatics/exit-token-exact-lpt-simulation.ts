import { prismatics } from "@prism-finance/prismjs/lib";
import * as console from "console";
import { PRISMATICS_ENDPOINT } from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({ restEndpoint: PRISMATICS_ENDPOINT })

    const simulation = await prismaticsClient.prismatics.exitTokenExactLptSimulation({
        poolId: 0n,
        lptInAmount: "100",
        tokenOut: "ceth"
    })
    console.log(simulation)
}

main().catch(console.error)