import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const pool = (await pryzmaticsClient.pryzmatics.pool({
        poolId: 2n
    })).pool
    console.log(pool)
}

main().catch(console.error)