import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({restEndpoint: PRYZMATICS_ENDPOINT})

    const vol = (await pryzmaticsClient.pryzmatics.poolTradeVolume({
        from: `${Date.parse('2023-07-27 11:59:33.619 GMT')}`,
        to: `${Date.parse('2023-07-27 12:10:04.045 GMT')}`,
        poolId: 0n,
    }))

    console.log(vol)
}

main().catch(console.error)