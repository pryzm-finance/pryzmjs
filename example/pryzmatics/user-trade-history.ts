import {pryzmatics} from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import {PRYZMATICS_ENDPOINT} from "./config";
import {OperationType} from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/trade/user_trade_history";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({restEndpoint: PRYZMATICS_ENDPOINT})

    let history = (await pryzmaticsClient.pryzmatics.userTradeHistory({
        operationType: OperationType.OPERATION_TYPE_ANY, address: "", firstToken: "", secondToken: ""
    })).user_trade_history_records
    console.log(history)

    history = (await pryzmaticsClient.pryzmatics.userTradeHistory({
        operationType: OperationType.OPERATION_TYPE_ANY, firstToken: "catom", secondToken: "patom", address: ""
    })).user_trade_history_records
    console.log(history)

    history = (await pryzmaticsClient.pryzmatics.userTradeHistory({
        address: "pryzm156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu", operationType: OperationType.OPERATION_TYPE_ANY, firstToken: "catom", secondToken: "patom"
    })).user_trade_history_records
    console.log(history)
}

main().catch(console.error)