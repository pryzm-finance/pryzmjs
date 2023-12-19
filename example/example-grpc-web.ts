import { createPryzmGrpcWebClient, getBrowsersHeadersForBlockHeight, grpcFetchAll } from "@pryzm-finance/pryzmjs"
import * as console from "console";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";


async function main() {
    const mnemonic = "short ocean antique emerge glory lock army wine guard sketch hotel remove music demand romance raven roof survey tired thank vessel cliff choose apology";
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {prefix: "pryzm"});
    const address = (await signer.getAccounts())[0].address
    const client = await createPryzmGrpcWebClient({endpoint: "http://0.0.0.0:9091"})

    const authParams = (await client.cosmos.auth.v1beta1.params()).params
    console.log(authParams)

    const ammParams = (await client.pryzm.amm.v1.params()).params
    console.log(ammParams)

    let balances = (await client.cosmos.bank.v1beta1.allBalances({address})).balances
    console.log(balances)

    balances = (await client.cosmos.bank.v1beta1.allBalances({address}, getBrowsersHeadersForBlockHeight(10n))).balances
    console.log(balances)

    const maturities = await grpcFetchAll(client, async (client, pageRequest) => {
        const result = await client.pryzm.assets.v1.maturityLevelAll({active: true, pagination: pageRequest})
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