import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";
import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({restEndpoint: PRYZMATICS_ENDPOINT})

    const proposals = await pryzmaticsClient.pryzmatics.assetProposals({
        assetId: "atom"
    })
    console.log(proposals)
}

main().catch(console.error)