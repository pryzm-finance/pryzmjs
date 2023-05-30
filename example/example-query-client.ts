import {prismfinance} from "@prism-finance/prismjs"
import * as console from "console";

async function main() {
    const client = await prismfinance.ClientFactory.createLCDClient({restEndpoint: "http://0.0.0.0:1317"})
    let balances = (await client.cosmos.bank.v1beta1.allBalances({address: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu"})).balances
    console.log(balances)
    balances = (await client.cosmos.bank.v1beta1.allBalances({address: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu"}, {headers: {"x-cosmos-block-height": `100`}})).balances
    console.log(balances)
    const ammParams = (await client.prismfinance.prismcore.amm.params()).params;
    console.log(ammParams)
}

main().catch(console.error)