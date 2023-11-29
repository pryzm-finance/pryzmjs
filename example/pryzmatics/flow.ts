import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const flow = (await pryzmaticsClient.pryzmatics.flow({ id: 0n, })).flow
    console.log(JSON.stringify(flow))
}

main().catch(console.error)