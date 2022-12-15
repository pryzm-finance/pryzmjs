// import {newPrismQueryClient} from "@prism-finance/prismjs"
import {newPrismQueryClient} from "../lib"

async function main() {
    const queryClient = newPrismQueryClient("http://0.0.0.0:1317")
    const balancesResult = await queryClient.CosmosBankV1Beta1.query.queryAllBalances("prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu");
    console.log(balancesResult.data.balances)
}

main().catch(console.error)