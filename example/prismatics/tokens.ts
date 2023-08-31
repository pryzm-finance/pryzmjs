import { prismatics } from "@prism-finance/prismjs/lib";
import * as console from "console";
import { PRISMATICS_ENDPOINT } from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({ restEndpoint: PRISMATICS_ENDPOINT })

    let tokens = (await prismaticsClient.prismatics.tokens({
        pagination: undefined
    })).tokens
    console.log(tokens)

    tokens = (await prismaticsClient.prismatics.tokens({
        pagination: undefined,
        timeWindowInDays: "20"
    })).tokens
    console.log(tokens)
}

main().catch(console.error)