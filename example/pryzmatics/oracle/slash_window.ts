import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "../config";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let windows = (await pryzmaticsClient.pryzmatics.slashWindows({})).windows
    console.log(windows)

    windows = (await pryzmaticsClient.pryzmatics.slashWindows({
        fromBlockHeight: "190",
        toBlockHeight: "220",
    })).windows
    console.log(windows)
}

main().catch(console.error)