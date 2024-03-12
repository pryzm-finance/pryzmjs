import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const flow = (await pryzmaticsClient.pryzmatics.flow({ id: 0n, })).flow
    console.log(JSON.stringify(flow))
}

main().catch(console.error)