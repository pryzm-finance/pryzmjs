// import {newPrismQueryClient} from "@prism-finance/prismjs"
// import {} from "../lib"

import {newPrismaticsClient} from "../lib";


async function main() {
    const prismaticsClient = newPrismaticsClient("http://localhost:4444")
    let res = await prismaticsClient.PrismfinancePrismatics.query.queryMaturityAll({
        asset: "LUNA",
        "pagination.limit": "1"
    })
    console.log(res.data)
}

main().catch(console.error)