import { prismatics } from "@prism-finance/prismjs/lib";
import * as console from "console";
import { PRISMATICS_ENDPOINT } from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({ restEndpoint: PRISMATICS_ENDPOINT })

    const hostChains = (await prismaticsClient.prismatics.hostChains({
        timeWindowInDays: "30",
        pagination: undefined
    })).host_chains
    console.log(JSON.stringify(hostChains))
}

main().catch(console.error)