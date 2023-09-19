import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let token = (await pryzmaticsClient.pryzmatics.token({
        denom: "ceth",
        timeWindowInDays: "20",
        tokenOut: ""
    })).token
    console.log(token)

    token = (await pryzmaticsClient.pryzmatics.token({
        denom: "y:eth:30Jun2024",
        tokenOut: ""
    })).token
    console.log(token)
}

main().catch(console.error)