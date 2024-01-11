import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";
import { QueryOrderStatus } from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/trade/order";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const orders = (await pryzmaticsClient.pryzmatics.orders({
        creator: "",
        tokenIn: "tokenIn", tokenOut: "", // means only filter by tokenIn and ignore the rest fields
        status: QueryOrderStatus.QUERY_ORDER_STATUS_ANY,
        poolId: undefined,
        pagination: undefined
    })).orders
    console.log(orders)

    const order = (await pryzmaticsClient.pryzmatics.order({ id: 0n })).order
    console.log(order)
}

main().catch(console.error)