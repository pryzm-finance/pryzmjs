import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "../config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let intervals = (await pryzmaticsClient.pryzmatics.voteIntervals({})).intervals
    console.log(intervals)

    intervals = (await pryzmaticsClient.pryzmatics.voteIntervals({
        fromBlockHeight: "190",
        toBlockHeight: "220",
    })).intervals
    console.log(intervals)
}

main().catch(console.error)