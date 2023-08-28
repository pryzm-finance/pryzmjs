import {prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {PRISMATICS_ENDPOINT} from "./config";
import {OperationType} from "@prism-finance/prismjs/lib/codegen/prismatics/trade/user_trade_history";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})

    let history = (await prismaticsClient.prismatics.userTradeHistory({
        operationType: OperationType.OPERATION_TYPE_ANY, address: "", firstToken: "", secondToken: ""
    })).user_trade_history_records
    console.log(history)

    history = (await prismaticsClient.prismatics.userTradeHistory({
        operationType: OperationType.OPERATION_TYPE_ANY, firstToken: "catom", secondToken: "patom", address: ""
    })).user_trade_history_records
    console.log(history)

    history = (await prismaticsClient.prismatics.userTradeHistory({
        address: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu", operationType: OperationType.OPERATION_TYPE_ANY, firstToken: "catom", secondToken: "patom"
    })).user_trade_history_records
    console.log(history)
}

main().catch(console.error)