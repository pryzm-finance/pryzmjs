import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const unbondingTime = (await pryzmaticsClient.pryzmatics.hostChainUnbondingTime({
        hostChainId: "uatom",
    })).unbonding_time
    console.log(unbondingTime)
}

main().catch(console.error)