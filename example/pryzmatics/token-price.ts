import {pryzmatics} from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import {PRYZMATICS_ENDPOINT} from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({restEndpoint: PRYZMATICS_ENDPOINT})

    let price = (await pryzmaticsClient.pryzmatics.tokenPrice({
        tokenIn: 'p:atom:30Jun2024',
        tokenOut: 'p:atom:31Jul2024'
    })).price
    console.log(price)

    price = (await pryzmaticsClient.pryzmatics.tokenPrice({
        tokenIn: 'p:atom:30Jun2024',
        tokenOut: '' // leave empty for stable coin terms price
    })).price
    console.log(price)
}

main().catch(console.error)