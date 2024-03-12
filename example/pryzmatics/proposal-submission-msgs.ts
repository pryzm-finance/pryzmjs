import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const msgs = (await pryzmaticsClient.pryzmatics.proposalSubmissionMsgs({
        creator: "", //TODO set address
        assetId: "atom",
        proposalId: 123n
    })).messages
    console.log(msgs)
}

main().catch(console.error)