import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const cosmaticsClient = await createPryzmaticsClient({restEndpoint: PRYZMATICS_ENDPOINT})
    const syncState = (await cosmaticsClient.cosmatics.syncState()).sync_state
    console.log(syncState)
}

main().catch(console.error)