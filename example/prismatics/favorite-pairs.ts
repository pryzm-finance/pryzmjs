import {prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {PRISMATICS_ENDPOINT} from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})
    const pairs = (await prismaticsClient.prismatics.favoritePairs({
        from: `${Date.parse('2023-07-27 11:59:33.619564 GMT')}`,
        to: `${Date.parse('2023-07-27 12:10:04.045069 GMT')}`,
    })).pairs
    console.log(pairs)
}

main().catch(console.error)