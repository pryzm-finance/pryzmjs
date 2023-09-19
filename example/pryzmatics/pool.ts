import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let pool = (await pryzmaticsClient.pryzmatics.pool({
        poolId: 0n
    })).pool
    console.log(pool)

    pool = (await pryzmaticsClient.pryzmatics.pool({
        poolId: 0n,
        timeWindowInDays: "20"
    })).pool
    console.log(pool)
}

main().catch(console.error)