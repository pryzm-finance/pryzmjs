import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";
import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({restEndpoint: PRYZMATICS_ENDPOINT})

    let prices = (await pryzmaticsClient.pryzmatics.tokenPrices({
        blockHeight: BigInt(7),
        pagination: null
    })).prices
    console.log(prices)
}

main().catch(console.error)