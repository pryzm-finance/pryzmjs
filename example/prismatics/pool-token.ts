import {prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {PRISMATICS_ENDPOINT} from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})

    const token = (await prismaticsClient.prismatics.poolToken({
        poolId: 0n,
        denom: "p:atom:30Jun2024"
    })).pool_token
    console.log(token)
}

main().catch(console.error)