import {pryzmatics} from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import {PRYZMATICS_ENDPOINT} from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({restEndpoint: PRYZMATICS_ENDPOINT})
    const swappableTokens = (await pryzmaticsClient.pryzmatics.swappableTokens({})).tokens
    console.log(swappableTokens)
}

main().catch(console.error)