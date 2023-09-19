import {pryzmatics} from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import {PRYZMATICS_ENDPOINT} from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({restEndpoint: PRYZMATICS_ENDPOINT})

    let vol = (await pryzmaticsClient.pryzmatics.tokenTradeVolume({
        from: `${Date.parse('2023-07-27 11:59:33.619 GMT')}`,
        to: `${Date.parse('2023-07-27 12:10:04.045 GMT')}`,
        poolId: "1",
        denom: "p:luna:31Dec2023",
    })).volume
    console.log(vol)

    vol = (await pryzmaticsClient.pryzmatics.tokenTradeVolume({
        from: `${Date.parse('2023-07-27 11:59:33.619 GMT')}`,
        to: `${Date.parse('2023-07-27 12:10:04.045 GMT')}`,
        denom: "p:luna:31Dec2023",
    })).volume
    console.log(vol)
}

main().catch(console.error)