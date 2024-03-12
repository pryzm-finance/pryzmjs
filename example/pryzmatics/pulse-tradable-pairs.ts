import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const pairs = (await pryzmaticsClient.pryzmatics.pulseTradablePairs({
        denom: "cluna",
        tokenIn: false.valueOf()
    })).pairs
    console.log(pairs)
}

main().catch(console.error)