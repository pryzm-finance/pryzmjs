import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const pool = (await pryzmaticsClient.pryzmatics.pool({
        poolId: 2n
    })).pool
    console.log(pool)
}

main().catch(console.error)