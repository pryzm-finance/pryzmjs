import {pryzm} from "@pryzm-finance/pryzmjs"
import * as console from "console";
import {localPryzm} from "./config";


async function main() {
    const pryzmClient = await pryzm.ClientFactory.createGrpcWebClient({endpoint: localPryzm.grpcWebUrl})

    console.log("fetching mint params:")
    const params = (await pryzmClient.pryzm.mint.params({})).params;
    console.log(params)

    console.log("\nfetching minter:")
    const minter = (await pryzmClient.pryzm.mint.minter({})).minter;
    console.log(minter)
}

main().catch(console.error)