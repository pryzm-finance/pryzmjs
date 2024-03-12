import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";
import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({restEndpoint: PRYZMATICS_ENDPOINT})

    const tokens = (await pryzmaticsClient.pryzmatics.poolTokens({
        poolId: 0n
    })).pool_tokens
    console.log(tokens)
}

main().catch(console.error)