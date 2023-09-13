import {getBrowsersHeadersForBlockHeight, grpcFetchAll, prism} from "@prism-finance/prismjs"
import * as console from "console";


async function main() {
    const client = await prism.ClientFactory.createGrpcWebClient({endpoint: "http://0.0.0.0:9091"})

    const authParams = (await client.cosmos.auth.v1beta1.params()).params
    console.log(authParams)

    let balances = (await client.cosmos.bank.v1beta1.allBalances({address: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu"})).balances
    console.log(balances)

    balances = (await client.cosmos.bank.v1beta1.allBalances({address: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu"}, getBrowsersHeadersForBlockHeight(10n))).balances
    console.log(balances)

    const maturities = await grpcFetchAll(client, async (client, pageRequest) => {
        const result = await client.prism.assets.maturityLevelAll({active: true, pagination: pageRequest})
        return [result.pagination.nextKey, result.maturityLevel]
    }, {
        countTotal: false,
        key: new Uint8Array(),
        offset: 0n,
        reverse: false,
        limit: 3n
    })
    console.log(maturities)
}

main().catch(console.error)