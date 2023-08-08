import {prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {PRISMATICS_ENDPOINT} from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})
    const swappableTokens = (await prismaticsClient.prismatics.swappableTokens({})).tokens
    console.log(swappableTokens)
}

main().catch(console.error)