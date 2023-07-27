import {cosmatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {PRISMATICS_ENDPOINT} from "./config";

async function main() {
    const cosmaticsClient = await cosmatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})

    const syncInfo = (await cosmaticsClient.cosmatics.syncInfo()).sync_info
    console.log(syncInfo)
}

main().catch(console.error)