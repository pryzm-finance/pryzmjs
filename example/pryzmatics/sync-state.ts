import {cosmatics} from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import {PRYZMATICS_ENDPOINT} from "./config";

async function main() {
    const cosmaticsClient = await cosmatics.ClientFactory.createClient({restEndpoint: PRYZMATICS_ENDPOINT})
    const syncState = (await cosmaticsClient.cosmatics.syncState()).sync_state
    console.log(syncState)
}

main().catch(console.error)