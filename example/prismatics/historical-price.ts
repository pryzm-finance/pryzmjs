import {prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {TimeResolutionType} from "@prism-finance/prismjs/lib/codegen/prismatics/historical_price";
import {PRISMATICS_ENDPOINT} from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})

    let prices = (await prismaticsClient.prismatics.historicalPrice({
        denom: `cluna`,
        from: `${Date.parse('2023-07-27 11:59:33.619 GMT')}`,
        to: `${Date.parse('2023-07-27 12:10:04.045 GMT')}`,
        timeResolution: {
            type: TimeResolutionType.TIME_RESOLUTION_TYPE_MINUTE,
            value: 1
        }
    })).historical_prices
    console.log(prices)

    prices = (await prismaticsClient.prismatics.historicalPrice({
        denom: `cluna`,
        quote: 'catom',
        from: `${Date.parse('2023-07-27 11:59:33.619 GMT')}`,
        to: `${Date.parse('2023-07-27 12:10:04.045 GMT')}`,
        timeResolution: {
            type: TimeResolutionType.TIME_RESOLUTION_TYPE_MINUTE,
            value: 1
        }
    })).historical_prices
    console.log(prices)
}

main().catch(console.error)