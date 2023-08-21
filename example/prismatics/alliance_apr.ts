import { prismatics } from "@prism-finance/prismjs/lib";
import * as console from "console";
import { PRISMATICS_ENDPOINT } from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({ restEndpoint: PRISMATICS_ENDPOINT })

    const apr = (await prismaticsClient.prismatics.allianceApr({
        denom: "cluna"
    })).apr
    console.log(apr)
}

main().catch(console.error)