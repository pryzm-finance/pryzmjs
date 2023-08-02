import {prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {PRISMATICS_ENDPOINT} from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})

    let vol = (await prismaticsClient.prismatics.tokenTradeVolume({
        from: `${Date.parse('2023-07-27 11:59:33.619564 GMT')}`,
        to: `${Date.parse('2023-07-27 12:10:04.045069 GMT')}`,
        poolId: "1",
        denom: "p:luna:31Dec2023",
    })).volume
    console.log(vol)

    vol = (await prismaticsClient.prismatics.tokenTradeVolume({
        from: `${Date.parse('2023-07-27 11:59:33.619564 GMT')}`,
        to: `${Date.parse('2023-07-27 12:10:04.045069 GMT')}`,
        denom: "p:luna:31Dec2023",
    })).volume
    console.log(vol)
}

main().catch(console.error)