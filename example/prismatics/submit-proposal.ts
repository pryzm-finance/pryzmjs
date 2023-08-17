import {prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {PRISMATICS_ENDPOINT} from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})

    const msgs = (await prismaticsClient.prismatics.submitProposalMsgs({
        assetId: "atom", proposalId: 123n
    })).messages
    console.log(msgs)
}

main().catch(console.error)