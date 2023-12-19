import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";
import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({restEndpoint: PRYZMATICS_ENDPOINT})
    const pairs = (await pryzmaticsClient.pryzmatics.favoritePairs({
        from: `${Date.parse('2023-07-27 11:59:33.619 GMT')}`,
        to: `${Date.parse('2023-07-27 12:10:04.045 GMT')}`,
    })).pairs
    console.log(pairs)
}

main().catch(console.error)