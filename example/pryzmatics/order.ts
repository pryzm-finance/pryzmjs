import { createPryzmaticsClient, fetchAll, PryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";
import { QueryOrderStatus } from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/trade/order";
import { OrderOrderByProperty } from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/database/trade/order";
import { PageRequest } from "@pryzm-finance/pryzmjs/lib/codegen/cosmos/base/query/v1beta1/pagination";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    // list of all orders ordered by created time
    const orders = await fetchAll(pryzmaticsClient, async (client: PryzmaticsClient, request: PageRequest) => {
        const result = await pryzmaticsClient.pryzmatics.orders({
            creator: "",
            tokenIn: "", tokenOut: "",
            status: QueryOrderStatus.QUERY_ORDER_STATUS_ANY,
            poolId: "0",
            orderBy: {
                property: OrderOrderByProperty.ORDER_BY_PROPERTY_CREATED_TIME,
                descending: true
            },
            pagination: request
        })
        return [result.pagination.next_key, result.orders]
    })
    console.log(JSON.stringify(orders))
    console.log(orders.length)

    const order = (await pryzmaticsClient.pryzmatics.order({ id: 0n })).order
    console.log(order)
}

main().catch(console.error)