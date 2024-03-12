import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "../constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const summary = (await pryzmaticsClient.pryzmatics.voteSummary({})).summary
    console.log(summary)
}

main().catch(console.error)