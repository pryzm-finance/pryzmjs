import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "../constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let summaries = (await pryzmaticsClient.pryzmatics.validatorSlashWindowSummaries({
        operatorAddress: "pryzmvaloper156pcgs3faegfte0vuaykr9az3hh9kx2ezc9cl3"
    })).summaries
    console.log(summaries)

    summaries = (await pryzmaticsClient.pryzmatics.validatorSlashWindowSummaries({
        operatorAddress: "pryzmvaloper156pcgs3faegfte0vuaykr9az3hh9kx2ezc9cl3",
        fromBlockHeight: "458",
        toBlockHeight: "460"
    })).summaries
    console.log(summaries)
}

main().catch(console.error)