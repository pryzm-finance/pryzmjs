import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { TimeResolutionType } from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/common/time_resolution";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const prices = (await pryzmaticsClient.pryzmatics.flowHistoricalPrice({
        flowId: 0n,
        from: `${Date.parse('2023-07-27 11:59:33.619 GMT')}`,
        to: `${Date.parse('2023-07-27 12:10:04.045 GMT')}`,
        timeResolutionType: TimeResolutionType.TIME_RESOLUTION_TYPE_MINUTE,
        timeResolutionValue: 5
    })).historical_prices
    console.log(prices)
}

main().catch(console.error)