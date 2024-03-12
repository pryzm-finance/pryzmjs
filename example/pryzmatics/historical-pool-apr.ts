import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { TimeResolutionType } from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/common/time_resolution";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const aprs = (await pryzmaticsClient.pryzmatics.historicalPoolApr({
        poolId: 0n,
        from: `${Date.parse('2023-09-22 14:02:00.693 GMT')}`,
        to: `${Date.parse('2023-09-22 14:03:00.693 GMT')}`,
        timeResolutionType: TimeResolutionType.TIME_RESOLUTION_TYPE_MINUTE,
        timeResolutionValue: 1
    })).historical_pool_aprs
    console.log(aprs)

    /*  Sample Output:
    [
      {
        time: '2023-09-22T14:02:00Z',
        apr: '0.044813096112408779',
        swap_fee_apr: '0.000000000000000000',
        token_yield: '0.044813096112408779',
        incentives_apr: null,
        alliance_apr: null
      },
      {
        time: '2023-09-22T14:03:00Z',
        apr: null,
        swap_fee_apr: null,
        token_yield: null,
        incentives_apr: null,
        alliance_apr: null
      }
    ]
    */
}

main().catch(console.error)