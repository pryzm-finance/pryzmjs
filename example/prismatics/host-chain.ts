import { prismatics } from "@prism-finance/prismjs/lib";
import * as console from "console";
import { PRISMATICS_ENDPOINT } from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({ restEndpoint: PRISMATICS_ENDPOINT })

    const hostChain = (await prismaticsClient.prismatics.hostChain({
        hostChainId: "uatom",
        timeWindowInDays: "30"
    })).host_chain
    console.log(JSON.stringify(hostChain))
}

main().catch(console.error)