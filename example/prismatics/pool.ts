import { prismatics } from "@prism-finance/prismjs/lib";
import * as console from "console";
import { PRISMATICS_ENDPOINT } from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({ restEndpoint: PRISMATICS_ENDPOINT })

    let pool = (await prismaticsClient.prismatics.pool({
        poolId: 0n
    })).pool
    console.log(pool)

    pool = (await prismaticsClient.prismatics.pool({
        poolId: 0n,
        timeWindowInDays: "20"
    })).pool
    console.log(pool)
}

main().catch(console.error)