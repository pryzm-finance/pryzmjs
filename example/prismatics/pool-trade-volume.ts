import {prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {PRISMATICS_ENDPOINT} from "./config";
import {Long} from "@prism-finance/prismjs/lib/codegen/helpers";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})

    const vol = (await prismaticsClient.prismatics.poolTradeVolume({
        from: `${Date.parse('2023-07-27 11:59:33.619 GMT')}`,
        to: `${Date.parse('2023-07-27 12:10:04.045 GMT')}`,
        poolId: Long.ZERO,
    }))

    console.log(vol)
}

main().catch(console.error)