import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";
import { OperationType } from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/trade/user_trade_history";
import { createPryzmaticsClient, PryzmaticsClient } from "@pryzm-finance/pryzmjs";
import { PageRequest } from "@pryzm-finance/pryzmjs/lib/codegen/cosmos/base/query/v1beta1/pagination";
import { fetchAll } from "@pryzm-finance/pryzmjs/lib";
import {
    UserTradeHistoryOrderByProperty
} from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/database/trade/user_trade_history";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let history = await fetchAll(pryzmaticsClient, async (client: PryzmaticsClient, request: PageRequest) => {
        const result = await pryzmaticsClient.pryzmatics.userTradeHistory({
            operationType: OperationType.OPERATION_TYPE_ANY,
            address: "",
            firstToken: "",
            secondToken: "",
            orderBy: {
                property: UserTradeHistoryOrderByProperty.ORDER_BY_PROPERTY_BLOCK_TIME,
                descending: true
            },
            pagination: request
        })
        return [result.pagination.next_key, result.user_trade_history_records]
    })
    console.log(JSON.stringify(history))


    history = await fetchAll(pryzmaticsClient, async (client: PryzmaticsClient, request: PageRequest) => {
        const result = await pryzmaticsClient.pryzmatics.userTradeHistory({
            operationType: OperationType.OPERATION_TYPE_ANY,
            address: "",
            firstToken: "c:uluna",
            secondToken: "upryzm",
            orderBy: {
                property: UserTradeHistoryOrderByProperty.ORDER_BY_PROPERTY_BLOCK_TIME,
                descending: true
            },
            pagination: request
        })
        return [result.pagination.next_key, result.user_trade_history_records]
    })
    console.log(JSON.stringify(history))
    return

    history = await fetchAll(pryzmaticsClient, async (client: PryzmaticsClient, request: PageRequest) => {
        const result = await pryzmaticsClient.pryzmatics.userTradeHistory({
            address: "pryzm1pl9wyl87pzdzeffpg5deknd3gymq56p2g6gjpk",
            operationType: OperationType.OPERATION_TYPE_ANY,
            firstToken: "c:uluna",
            secondToken: "upryzm",
            orderBy: {
                property: UserTradeHistoryOrderByProperty.ORDER_BY_PROPERTY_BLOCK_TIME,
                descending: true
            },
            pagination: request
        })
        return [result.pagination.next_key, result.user_trade_history_records]
    })
    console.log(JSON.stringify(history))
}

main().catch(console.error)