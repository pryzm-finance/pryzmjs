import {pryzmatics} from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import {PRYZMATICS_ENDPOINT} from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({restEndpoint: PRYZMATICS_ENDPOINT})

    const tokens = (await pryzmaticsClient.pryzmatics.poolTokens({
        poolId: 0n
    })).pool_tokens
    console.log(tokens)
}

main().catch(console.error)