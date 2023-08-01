import {prism} from "@prism-finance/prismjs"
import * as console from "console";
import {localPrism} from "./config";


async function main() {
    const prismClient = await prism.ClientFactory.createGrpcWebClient({endpoint: localPrism.grpcWebUrl})
    const balances = (await prismClient.cosmos.bank.v1beta1.allBalances({
        address: localPrism.accounts.test1.address
    })).balances
    console.log(balances)
}

main().catch(console.error)