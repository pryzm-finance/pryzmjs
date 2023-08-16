import { prismatics } from "@prism-finance/prismjs/lib";
import * as console from "console";
import { PRISMATICS_ENDPOINT } from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({ restEndpoint: PRISMATICS_ENDPOINT })

    const pairs = (await prismaticsClient.prismatics.pulseTradablePairs({
        denom: "cluna",
        tokenIn: false.valueOf()
    })).pairs
    console.log(pairs)
}

main().catch(console.error)