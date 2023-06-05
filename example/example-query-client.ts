import {prism} from "@prism-finance/prismjs"
import * as console from "console";

async function main() {
    const client = await prism.ClientFactory.createLCDClient({restEndpoint: "http://0.0.0.0:1317"})
    let balances = (await client.cosmos.bank.v1beta1.allBalances({address: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu"})).balances
    console.log(balances)
    balances = (await client.cosmos.bank.v1beta1.allBalances({address: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu"}, {headers: {"x-cosmos-block-height": `10`}})).balances
    console.log(balances)

    const ammParams = (await client.prism.amm.params()).params;
    console.log(ammParams)

    const rpcClient = await prism.ClientFactory.createRPCQueryClient({rpcEndpoint: "http://0.0.0.0:26657"})
    const accounts = (await rpcClient.cosmos.auth.v1beta1.accounts({})).accounts
    console.log(accounts)
}

main().catch(console.error)