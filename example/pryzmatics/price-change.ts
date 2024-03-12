import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";
import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({restEndpoint: PRYZMATICS_ENDPOINT})

    const change = (await pryzmaticsClient.pryzmatics.priceChange({
        denom: "cluna",
        from: `${Date.parse('2023-08-08 10:15:48.765 GMT')}`,
        to: `${Date.parse('2023-08-08 10:18:04.442 GMT')}`,
    })).change_percentage

    console.log(change)
}

main().catch(console.error)