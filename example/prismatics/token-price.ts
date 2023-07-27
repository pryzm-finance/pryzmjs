import {prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {PRISMATICS_ENDPOINT} from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})

    const price = (await prismaticsClient.prismatics.tokenPrice({
        tokenIn: 'p:atom:30Jun2024',
        tokenOut: 'p:atom:31Jul2024'
    })).price
    console.log(price)
}

main().catch(console.error)