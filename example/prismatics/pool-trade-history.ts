import {prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {PRISMATICS_ENDPOINT} from "./config";
import {PoolOperationType} from "@prism-finance/prismjs/lib/codegen/prismatics/pool_trade_history";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})

    let history = (await prismaticsClient.prismatics.poolTradeHistory({
        operationType: PoolOperationType.POOL_OPERATION_TYPE_ANY
    })).pool_trade_history_records
    console.log(history)

    history = (await prismaticsClient.prismatics.poolTradeHistory({
        operationType: PoolOperationType.POOL_OPERATION_TYPE_ANY, poolId: "0", tokenIn: "cluna", tokenOut: "pluna"
    })).pool_trade_history_records
    console.log(history)
}

main().catch(console.error)