import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "../config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let votes = (await pryzmaticsClient.pryzmatics.votes({
        validator: "",
        feeder: "",
    })).votes
    console.log(votes)

    votes = (await pryzmaticsClient.pryzmatics.votes({
        validator: "pryzmvaloper156pcgs3faegfte0vuaykr9az3hh9kx2ezc9cl3",
        feeder: "",
        fromBlockHeight: "458",
        toBlockHeight: "460"
    })).votes
    console.log(votes)
}

main().catch(console.error)