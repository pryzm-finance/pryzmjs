import { prismatics } from "@prism-finance/prismjs/lib";
import * as console from "console";
import { PRISMATICS_ENDPOINT } from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({ restEndpoint: PRISMATICS_ENDPOINT })

    let pools = (await prismaticsClient.prismatics.pools({
        pagination: undefined
    })).pools
    console.log(pools)

    pools = (await prismaticsClient.prismatics.pools({
        pagination: undefined,
        timeWindowInDays: "20"
    })).pools
    console.log(pools)
}

main().catch(console.error)