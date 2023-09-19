import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const pairs = (await pryzmaticsClient.pryzmatics.pulseTradablePairs({
        denom: "cluna",
        tokenIn: false.valueOf()
    })).pairs
    console.log(pairs)
}

main().catch(console.error)