import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const hostChains = (await pryzmaticsClient.pryzmatics.hostChains({ timeWindowInDays: "30" })).host_chains
    console.log(JSON.stringify(hostChains))
}

main().catch(console.error)