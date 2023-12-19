import * as console from "console";
import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";

async function main() {
    const client = await createPryzmaticsClient({ restEndpoint: "http://localhost:4444" })

    const syncState = (await client.cosmatics.syncState()).sync_state
    console.log(syncState)

    const block = (await client.cosmatics.block({ height: 100n }))
    console.log(block)

    const tx = (await client.cosmatics.transaction({
        hash: "63014DBB8F393AEA14F45A8CAE1EAE6269200D2E16BC396A3A3BE29A436E7736"
    }))
    console.log(tx)

    const txs = (await client.cosmatics.transactionByEvent({
        events: [
            "transfer.sender=pryzm156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu",
            "tx.signature=P2a2BwreLnfo9BXsxujVswxmCdLp96EcRzxj5l+yVaQn+aaTtFgCIHyVG5LP+8ZQWGLtkjWG1wEeixkWSfdeZA==",
        ], limit: undefined, orderBy: undefined, page: undefined, pagination: undefined
    }))
    console.log(txs)
}

main().catch(console.error)