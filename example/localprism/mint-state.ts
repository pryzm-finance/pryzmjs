import {prism} from "@prism-finance/prismjs"
import * as console from "console";
import {localPrism} from "./config";


async function main() {
    const prismClient = await prism.ClientFactory.createGrpcWebClient({endpoint: localPrism.grpcWebUrl})

    console.log("fetching mint params:")
    const params = (await prismClient.prism.mint.params({})).params;
    console.log(params)

    console.log("\nfetching minter:")
    const minter = (await prismClient.prism.mint.minter({})).minter;
    console.log(minter)
}

main().catch(console.error)