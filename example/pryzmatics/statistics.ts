import * as console from "console";
import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import { PRYZMATICS_ENDPOINT } from "./constants";
import { TreasuryBalanceAmino } from "../../src/codegen/pryzmatics/statistics/treasury";
import { MarketCapAmino } from "../../src/codegen/pryzmatics/statistics/market_cap";
import { TVLAmino } from "../../src/codegen/pryzmatics/statistics/tvl";


async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })
    const statistics = await pryzmaticsClient.pryzmatics.statistics({});
    console.log(statistics.treasury_balances)
    console.log(statistics.annualised_treasury)
    console.log(statistics.market_cap.fully_diluted)
    console.log(statistics.market_cap.circulating)
    console.log(statistics.tvl)
    console.log(statistics.tvl.total)
    console.log(statistics.tvl.error)
    console.log(statistics.total_tx_count)
    console.log(statistics.total_trade_volume)
    console.log(statistics.liquidity)
    console.log(statistics.wallets_count)
    console.log(statistics.delegators_count)
    console.log(statistics.staking_delegators_count)
    console.log(statistics.alliance_delegators_count)
    console.log(statistics.error)
}

main().catch(console.error)