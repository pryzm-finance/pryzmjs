import {prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {PRISMATICS_ENDPOINT} from "./config";
import {Long} from "@prism-finance/prismjs/lib/codegen/helpers";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})

    const bounds = (await prismaticsClient.prismatics.priceBounds({
        denom: "cluna",
        from: `${Date.parse('2023-07-27 11:59:33.619 GMT')}`,
        to: `${Date.parse('2023-07-27 12:10:04.045 GMT')}`,
    }))

    console.log(bounds)
}

main().catch(console.error)