import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const msgs = (await pryzmaticsClient.pryzmatics.proposalSubmissionMsgs({
        creator: "", //TODO set address
        assetId: "atom",
        proposalId: 123n
    })).messages
    console.log(msgs)
}

main().catch(console.error)