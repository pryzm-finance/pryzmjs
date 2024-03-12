import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { TimeResolutionType } from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/common/time_resolution";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    // historical yields for a token of type P
    let yields = (await pryzmaticsClient.pryzmatics.historicalTokenYield({
        denom: `p:eth:30Jun2024`,
        from: `${Date.parse('2023-09-22 14:02:00.693 GMT')}`,
        to: `${Date.parse('2023-09-22 14:03:00.693 GMT')}`,
        timeResolutionType: TimeResolutionType.TIME_RESOLUTION_TYPE_MINUTE,
        timeResolutionValue: 1
    })).historical_token_yields
    console.log(yields)
    /* Sample Output
    [
      { time: '2023-09-22T14:02:00Z', yield: '0.129252020315928700' },
      { time: '2023-09-22T14:03:00Z', yield: null }
    ]
    */

    // historical yields for a token of type Y
    yields = (await pryzmaticsClient.pryzmatics.historicalTokenYield({
        denom: `y:eth:30Jun2024`,
        from: `${Date.parse('2023-09-22 14:02:00.693 GMT')}`,
        to: `${Date.parse('2023-09-22 14:03:00.693 GMT')}`,
        timeResolutionType: TimeResolutionType.TIME_RESOLUTION_TYPE_MINUTE,
        timeResolutionValue: 1
    })).historical_token_yields
    console.log(yields)

    // historical yields for a token of type LP
    yields = (await pryzmaticsClient.pryzmatics.historicalTokenYield({
        denom: `LP:1:luna`,
        from: `${Date.parse('2023-09-22 14:02:00.693 GMT')}`,
        to: `${Date.parse('2023-09-22 14:03:00.693 GMT')}`,
        timeResolutionType: TimeResolutionType.TIME_RESOLUTION_TYPE_MINUTE,
        timeResolutionValue: 1
    })).historical_token_yields
    console.log(yields)

    // historical yields for a token of type C
    yields = (await pryzmaticsClient.pryzmatics.historicalTokenYield({
        denom: `cluna`,
        from: `${Date.parse('2023-07-27 11:59:33.619 GMT')}`,
        to: `${Date.parse('2023-07-27 12:10:04.045 GMT')}`,
        timeResolutionType: TimeResolutionType.TIME_RESOLUTION_TYPE_MINUTE,
        timeResolutionValue: 1
    })).historical_token_yields
    console.log(yields)
}

main().catch(console.error)