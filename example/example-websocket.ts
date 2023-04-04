import {PrismWebsocketClient, TendermintQuery} from "@prism-finance/prismjs/lib";

// import {PrismWebsocketClient, TendermintQuery} from "../lib";

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    const prismWebsocketClient = new PrismWebsocketClient("ws://0.0.0.0:26657", 2000);

    const query: TendermintQuery = {}
    const attr = "refractedlabs.oracle.oracle.EventVoteIntervalEnds.time_millis"
    query[attr] = ["EXISTS"]

    prismWebsocketClient.getEventStream("NewBlock", query).subscribe({
        next: events => {
            const epochMillis = JSON.parse(events[`${attr}`][0]);
            console.log(epochMillis)
        },
        error: err => console.error(err),
        complete: () => {
            console.log("completed")
        }
    })
    prismWebsocketClient.addListener({
        onConnectionStatusUpdateEvent: status => {
            console.log("status:", status)
        }
    })
    prismWebsocketClient.connect()
    await delay(5000)
    prismWebsocketClient.destroy()
}

main().catch(console.error)