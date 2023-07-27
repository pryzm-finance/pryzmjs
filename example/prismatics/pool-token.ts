import {prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {Long} from "@prism-finance/prismjs/lib/codegen/helpers";
import {PRISMATICS_ENDPOINT} from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})

    const token = (await prismaticsClient.prismatics.poolToken({
        poolId: Long.ZERO,
        denom: "p:atom:30Jun2024"
    })).pool_token
    console.log(token)
}

main().catch(console.error)