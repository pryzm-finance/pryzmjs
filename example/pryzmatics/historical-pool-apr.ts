import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { TimeResolutionType } from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/common/time_resolution";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const aprs = (await pryzmaticsClient.pryzmatics.historicalPoolApr({
        poolId: 0n,
        from: `${Date.parse('2023-09-22 14:02:00.693 GMT')}`,
        to: `${Date.parse('2023-09-23 14:03:00.693 GMT')}`,
        timeResolutionType: TimeResolutionType.TIME_RESOLUTION_TYPE_HOUR,
        timeResolutionValue: 6
    })).historical_pool_aprs
    console.log(aprs)
}

main().catch(console.error)