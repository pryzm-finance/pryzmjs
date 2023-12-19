import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const orders = (await pryzmaticsClient.pryzmatics.orders({
        creator: "", tokenIn: "tokenIn", tokenOut: "" // means only filter by tokenIn and ignore the rest fields
    })).orders
    console.log(orders)

    const order = (await pryzmaticsClient.pryzmatics.order({ id: 0n })).order
    console.log(order)
}

main().catch(console.error)