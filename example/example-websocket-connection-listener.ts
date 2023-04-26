import {ConnectionStatus, TendermintWebsocketClient} from "@refractedlabs/utils/lib/wsclient";

async function subscribeEventVoteIntervalEnds() {
    const query: any = {};
    const attr = "refractedlabs.oracle.oracle.EventVoteIntervalEnds.time_millis";
    query[attr] = ["EXISTS"];
    const prismWebsocketClient = new TendermintWebsocketClient("ws://0.0.0.0:26657", 2000);
    prismWebsocketClient
        .getEventStream("NewBlock", query)
        .map((result) => {
            const epochMillis = JSON.parse(result.events[`${attr}`][0]);
            return Number(epochMillis).valueOf();
        }).subscribe({
        next: endTime => {
            console.log(`EventVoteIntervalEnds received. time_millis = ${endTime}`);
        },
        error: error => {
            console.error("Websocket connection failed");
        },
        complete: () => console.log('Websocket subscription completed'),
    });
    prismWebsocketClient.addListener({
        onConnectionStatusUpdateEvent: status => {
            console.log(status)
            if (status == ConnectionStatus.Connected) {
                resolve()
            }
        }
    })
    let resolve: () => void
    const p = new Promise<void>((res, rej) => {
        resolve = res
        prismWebsocketClient.connect()
    })
    await p
}

async function main() {
    await subscribeEventVoteIntervalEnds()
}

main().catch(console.error)