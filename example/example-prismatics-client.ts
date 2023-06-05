// import {newPrismaticsClient} from "@prism-finance/prismjs";
// // import {newPrismaticsClient} from "../lib";
//
// async function main() {
//     const prismaticsClient = newPrismaticsClient("http://localhost:4444")
//     let key: string | undefined = "";
//     while (key != undefined) {
//         let res = await prismaticsClient.PrismfinancePrismatics.query.queryMaturityAll({
//             "asset_id": "Luna:channel-0",
//             "active": "",
//             "pagination.limit": "5",
//             "pagination.key": key
//         })
//         console.log(res.data.maturities)
//         console.log(res.data.maturities.length)
//         key = res.data.pagination.next_key
//     }
// }
//
// main().catch(console.error)