import {prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {PRISMATICS_ENDPOINT} from "./config";
import {OperationType} from "@prism-finance/prismjs/lib/codegen/prismatics/user_trade_history";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})

    let history = (await prismaticsClient.prismatics.userTradeHistory({
        operationType: OperationType.OPERATION_TYPE_ANY
    })).user_trade_history_records
    console.log(history)

    history = (await prismaticsClient.prismatics.userTradeHistory({
        operationType: OperationType.OPERATION_TYPE_ANY, tokenIn: "catom", tokenOut: "patom"
    })).user_trade_history_records
    console.log(history)

    history = (await prismaticsClient.prismatics.userTradeHistory({
        address: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu", operationType: OperationType.OPERATION_TYPE_ANY, tokenIn: "catom", tokenOut: "patom"
    })).user_trade_history_records
    console.log(history)
}

main().catch(console.error)