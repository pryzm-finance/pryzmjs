import {prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {PRISMATICS_ENDPOINT} from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})

    const tokens = (await prismaticsClient.prismatics.poolTokens({
        poolId: 0n
    })).pool_tokens
    console.log(tokens)
}

main().catch(console.error)