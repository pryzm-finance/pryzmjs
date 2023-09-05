import { prismatics } from "@prism-finance/prismjs/lib";
import * as console from "console";
import { PRISMATICS_ENDPOINT } from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({ restEndpoint: PRISMATICS_ENDPOINT })

    let asset = (await prismaticsClient.prismatics.asset({
        assetId: "eth"
    })).asset
    console.log(asset)

    asset = (await prismaticsClient.prismatics.asset({
        assetId: "eth",
        timeWindowInDays: "20"
    })).asset
    console.log(asset)

}

main().catch(console.error)