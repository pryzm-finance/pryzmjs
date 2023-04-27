import {TendermintQuery, TendermintWebsocketClient} from "@refractedlabs/utils/lib/wsclient";
import {EventVoteIntervalEnds} from "@prism-finance/prismjs/lib/refractedlabs.oracle.oracle/types"

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    const prismWebsocketClient = new TendermintWebsocketClient("ws://0.0.0.0:26657", 2000);

    const query: TendermintQuery = {}
    const attr = "refractedlabs.oracle.oracle.EventVoteIntervalEnds.time_millis"
    query[attr] = ["EXISTS"]

    prismWebsocketClient.getEventStream("NewBlock", query).subscribe({
        next: result => {
            console.log({
                timeMillis: Number(JSON.parse(result.events[`refractedlabs.oracle.oracle.EventVoteIntervalEnds.time_millis`][0])),
                blockHeight: Number(JSON.parse(result.events[`refractedlabs.oracle.oracle.EventVoteIntervalEnds.block_height`][0])),
                votePeriod: Number(JSON.parse(result.events[`refractedlabs.oracle.oracle.EventVoteIntervalEnds.vote_period`][0]))
            } as EventVoteIntervalEnds)
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
    await delay(50000)
    prismWebsocketClient.destroy()
}

main().catch(console.error)