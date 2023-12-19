import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const hostChains = (await pryzmaticsClient.pryzmatics.hostChains({})).host_chains
    console.log(JSON.stringify(hostChains))
}

main().catch(console.error)