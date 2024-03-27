import * as console from "console";
import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import { PRYZMATICS_ENDPOINT } from "./constants";


async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })
    const statistics = await pryzmaticsClient.pryzmatics.statistics({});
    console.log(statistics.treasury_balances)
    console.log(statistics.market_cap.fully_diluted)
    console.log(statistics.market_cap.circulating)
    console.log(statistics.tvl)
    console.log(statistics.tvl.total)
    console.log(statistics.tvl.error)
    console.log(statistics.total_tx_count)
}

main().catch(console.error)