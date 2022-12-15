// import {PrismWebsocketClient, TendermintQuery} from "@prism-finance/prismjs";
import {PrismWebsocketClient, TendermintQuery} from "../lib";

async function main() {
    const prismWebsocketClient = new PrismWebsocketClient("ws://0.0.0.0:26657", 2000);

    const query: TendermintQuery = {}
    const attr = "prismfinance.prismcore.oracle.EventVoteIntervalEnds.timeMillis"
    query[attr] = ["EXISTS"]

    prismWebsocketClient.getEventStream("NewBlock", query).subscribe({
        next: events => {
            const epochMillis = JSON.parse(events[`${attr}`][0]);
            console.log(epochMillis)
        }
    })
}

main().catch(console.error)