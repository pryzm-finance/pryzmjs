import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "../config";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let results = (await pryzmaticsClient.pryzmatics.ballotVoteResults({
        module: "",
        namespace: ""
    })).results
    console.log(results)

    results = (await pryzmaticsClient.pryzmatics.ballotVoteResults({
        module: "assets",
        namespace: "luna",
        fromBlockHeight: "458",
        toBlockHeight: "460"
    })).results
    console.log(results)
}

main().catch(console.error)