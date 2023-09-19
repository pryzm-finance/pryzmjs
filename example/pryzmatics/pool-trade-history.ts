import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";
import { PoolOperationType } from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/trade/pool_trade_history";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let history = (await pryzmaticsClient.pryzmatics.poolTradeHistory({
        operationType: PoolOperationType.POOL_OPERATION_TYPE_ANY, firstToken: "", secondToken: ""
    })).pool_trade_history_records
    console.log(history)

    history = (await pryzmaticsClient.pryzmatics.poolTradeHistory({
        operationType: PoolOperationType.POOL_OPERATION_TYPE_ANY, poolId: "0", firstToken: "cluna", secondToken: "pluna"
    })).pool_trade_history_records
    console.log(history)
}

main().catch(console.error)