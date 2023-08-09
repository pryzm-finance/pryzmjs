import {prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {PRISMATICS_ENDPOINT} from "./config";
import {Long} from "@prism-finance/prismjs/lib/codegen/helpers";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})

    const change = (await prismaticsClient.prismatics.priceChange({
        denom: "cluna",
        from: `${Date.parse('2023-08-08 10:15:48.765919 GMT')}`,
        to: `${Date.parse('2023-08-08 10:18:04.442769 GMT')}`,
    })).change_percentage

    console.log(change)
}

main().catch(console.error)