import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let apr = (await pryzmaticsClient.pryzmatics.allianceApr({
        denom: "cluna",
    })).apr
    console.log(apr)

    apr = (await pryzmaticsClient.pryzmatics.allianceApr({
        denom: "cluna",
        timeWindowInDays: "20"
    })).apr
    console.log(apr)
}

main().catch(console.error)