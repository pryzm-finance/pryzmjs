import { prismatics } from "@prism-finance/prismjs/lib";
import * as console from "console";
import { PRISMATICS_ENDPOINT } from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({ restEndpoint: PRISMATICS_ENDPOINT })

    let token = (await prismaticsClient.prismatics.token({
        denom: "y:eth:30Jun2024"
    })).token
    console.log(token)

    token = (await prismaticsClient.prismatics.token({
        denom: "ceth",
        timeWindowInDays: "20"
    })).token
    console.log(token)
}

main().catch(console.error)