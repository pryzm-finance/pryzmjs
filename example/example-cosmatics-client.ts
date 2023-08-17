import { cosmatics } from "@prism-finance/prismjs/lib";
import * as console from "console";

async function main() {
    const cosmaticsClient = await cosmatics.ClientFactory.createClient({ restEndpoint: "http://localhost:4444" })

    const syncState = (await cosmaticsClient.cosmatics.syncState()).sync_state
    console.log(syncState)

    const block = (await cosmaticsClient.cosmatics.block({ height: 100n }))
    console.log(block)

    const tx = (await cosmaticsClient.cosmatics.transaction({
        hash: "63014DBB8F393AEA14F45A8CAE1EAE6269200D2E16BC396A3A3BE29A436E7736"
    }))
    console.log(tx)

    const txs = (await cosmaticsClient.cosmatics.transactionByEvent({
        events: [
            "transfer.sender=prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu",
            "tx.signature=P2a2BwreLnfo9BXsxujVswxmCdLp96EcRzxj5l+yVaQn+aaTtFgCIHyVG5LP+8ZQWGLtkjWG1wEeixkWSfdeZA==",
        ], limit: undefined, orderBy: undefined, page: undefined, pagination: undefined
    }))
    console.log(txs)
}

main().catch(console.error)