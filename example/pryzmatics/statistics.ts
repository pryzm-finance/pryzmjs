import * as console from "console";
import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import { PRYZMATICS_ENDPOINT } from "./constants";


async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })
    const statistics = await pryzmaticsClient.pryzmatics.statistics({});
    console.log(statistics)
}

main().catch(console.error)