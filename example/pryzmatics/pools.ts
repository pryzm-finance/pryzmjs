import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let pools = (await pryzmaticsClient.pryzmatics.pools({})).pools
    console.log(pools)

    pools = (await pryzmaticsClient.pryzmatics.pools({ timeWindowInDays: "20" })).pools
    console.log(pools)
}

main().catch(console.error)