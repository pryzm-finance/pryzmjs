import {pryzmatics} from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import {PRYZMATICS_ENDPOINT} from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({restEndpoint: PRYZMATICS_ENDPOINT})

    const token = (await pryzmaticsClient.pryzmatics.poolToken({
        poolId: 0n,
        denom: "p:atom:30Jun2024"
    })).pool_token
    console.log(token)
}

main().catch(console.error)