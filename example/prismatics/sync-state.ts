import {cosmatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {PRISMATICS_ENDPOINT} from "./config";

async function main() {
    const cosmaticsClient = await cosmatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})
    const syncState = (await cosmaticsClient.cosmatics.syncState()).sync_state
    console.log(syncState)
}

main().catch(console.error)