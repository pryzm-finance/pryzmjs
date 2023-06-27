import {getBrowsersHeadersForBlockHeight, grpcFetchAll, prism} from "@prism-finance/prismjs"
import * as console from "console";
import {Long} from "@prism-finance/prismjs/lib/codegen/helpers";


async function main() {
    const client = await prism.ClientFactory.createGrpcWebClient({endpoint: "http://0.0.0.0:9091"})
    let balances = (await client.cosmos.bank.v1beta1.allBalances({address: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu"})).balances
    console.log(balances)

    balances = (await client.cosmos.bank.v1beta1.allBalances({address: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu"}, getBrowsersHeadersForBlockHeight(10))).balances
    console.log(balances)

    const maturities = await grpcFetchAll(client, async (client, pageRequest) => {
        const result = await client.prism.assets.maturityLevelAll({active: true, pagination: pageRequest})
        return [result.pagination.nextKey, result.maturityLevel]
    }, {
        countTotal: false,
        key: new Uint8Array(),
        offset: Long.ZERO,
        reverse: false,
        limit: Long.fromNumber(3)
    })
    console.log(maturities)
}

main().catch(console.error)