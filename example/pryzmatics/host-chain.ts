import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const hostChain = (await pryzmaticsClient.pryzmatics.hostChain({
        hostChainId: "uatom",
        timeWindowInDays: "30"
    })).host_chain
    console.log(JSON.stringify(hostChain))
}

main().catch(console.error)