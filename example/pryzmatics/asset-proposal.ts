import {pryzmatics} from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import {PRYZMATICS_ENDPOINT} from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({restEndpoint: PRYZMATICS_ENDPOINT})

    const proposals = await pryzmaticsClient.pryzmatics.assetProposals({
        assetId: "atom"
    })
    console.log(proposals)
}

main().catch(console.error)