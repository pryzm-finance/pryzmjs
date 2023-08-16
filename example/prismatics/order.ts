import { prismatics } from "@prism-finance/prismjs/lib";
import * as console from "console";
import { PRISMATICS_ENDPOINT } from "./config";
import { Long } from "@prism-finance/prismjs/lib/codegen/helpers";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({ restEndpoint: PRISMATICS_ENDPOINT })

    const orders = (await prismaticsClient.prismatics.orders({
        creator: "", tokenIn: "tokenIn", tokenOut: "", pagination: undefined // means only filter by tokenIn and ignore the rest fields
    })).orders
    console.log(orders)

    const order = (await prismaticsClient.prismatics.order({ id: Long.ZERO })).order
    console.log(order)
}

main().catch(console.error)