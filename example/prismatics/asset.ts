import {prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {PRISMATICS_ENDPOINT} from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})

    const asset = (await prismaticsClient.prismatics.asset({
        assetId: "atom"
    })).asset
    console.log(asset)
}

main().catch(console.error)