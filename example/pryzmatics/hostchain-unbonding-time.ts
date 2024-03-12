import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const unbondingTime = (await pryzmaticsClient.pryzmatics.hostChainUnbondingTime({
        hostChainId: "uatom",
    })).unbonding_time
    console.log(unbondingTime)
}

main().catch(console.error)