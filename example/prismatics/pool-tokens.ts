import {prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {Long} from "@prism-finance/prismjs/lib/codegen/helpers";
import {PRISMATICS_ENDPOINT} from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})

    const tokens = (await prismaticsClient.prismatics.poolTokens({
        poolId: Long.ZERO
    })).pool_tokens
    console.log(tokens)
}

main().catch(console.error)