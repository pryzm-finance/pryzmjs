import {newPrismQueryClient} from "@prism-finance/prismjs"

// import {newPrismQueryClient} from "../lib"

async function main() {
    const queryClient = newPrismQueryClient("http://0.0.0.0:1317")
    const balancesResult = await queryClient.CosmosBankV1Beta1.query.queryAllBalances("prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu");
    console.log(balancesResult.data.balances)
    const ammParams = await queryClient.PrismfinancePrismcoreAmm.query.queryParams();
    console.log(ammParams.data)
    const oracleParams = await queryClient.RefractedlabsOracle.query.queryParams();
    console.log(oracleParams.data)
}

main().catch(console.error)