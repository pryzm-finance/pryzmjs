import { createPryzmGrpcWebClient } from "@pryzm-finance/pryzmjs"
import * as console from "console";
import { localPryzm } from "./config";


async function main() {
    const pryzmClient = await createPryzmGrpcWebClient({endpoint: localPryzm.grpcWebUrl})
    const c = await pryzmClient.pryzm.refractor.v1.assetState({
        assetId: "luna"
    })
    console.log(c.assetState.lastSeenExchangeRate)

    const balances = (await pryzmClient.cosmos.bank.v1beta1.allBalances({
        address: localPryzm.accounts.test1.address
    })).balances
    console.log(balances)
}

main().catch(console.error)