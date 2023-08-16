import { prismatics } from "@prism-finance/prismjs/lib";
import * as console from "console";
import { PRISMATICS_ENDPOINT } from "./config";
import { Long } from "@prism-finance/prismjs/lib/codegen/helpers";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({ restEndpoint: PRISMATICS_ENDPOINT })

    const apr = (await prismaticsClient.prismatics.incentivesApr({
        denom: "cluna"
    })).apr
    console.log(apr)
}

main().catch(console.error)