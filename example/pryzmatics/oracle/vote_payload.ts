import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "../config";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let payloads = (await pryzmaticsClient.pryzmatics.votePayloads({
        module: "",
        namespace: ""
    })).payloads
    console.log(payloads)

    payloads = (await pryzmaticsClient.pryzmatics.votePayloads({
        module: "module",
        namespace: "namespace",
        voteId: "0"
    })).payloads
    console.log(payloads)
}

main().catch(console.error)