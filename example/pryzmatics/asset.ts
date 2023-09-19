import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let asset = (await pryzmaticsClient.pryzmatics.asset({
        assetId: "eth"
    })).asset
    console.log(asset)

    asset = (await pryzmaticsClient.pryzmatics.asset({
        assetId: "eth",
        timeWindowInDays: "20"
    })).asset
    console.log(asset)

}

main().catch(console.error)