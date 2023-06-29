import {fetchAll, cosmatics} from "@prism-finance/prismjs/lib";
import {Long} from "@prism-finance/prismjs/lib/codegen/helpers";
import * as console from "console";

async function main() {
    const cosmaticsClient = await cosmatics.ClientFactory.createClient({restEndpoint: "http://localhost:4444"})

    const syncInfo = (await cosmaticsClient.cosmatics.syncInfo()).sync_info
    console.log(syncInfo)

    const block = (await cosmaticsClient.cosmatics.block({
        height: Long.fromNumber(100)
    }))
    console.log(block)

    const tx = (await cosmaticsClient.cosmatics.transaction({
        hash: "63014DBB8F393AEA14F45A8CAE1EAE6269200D2E16BC396A3A3BE29A436E7736"
    }))
    console.log(tx)

    const txs = (await cosmaticsClient.cosmatics.transactionByEvent({
        events: [
            "transfer.sender=prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu",
            "tx.signature=P2a2BwreLnfo9BXsxujVswxmCdLp96EcRzxj5l+yVaQn+aaTtFgCIHyVG5LP+8ZQWGLtkjWG1wEeixkWSfdeZA==",
        ]
    }))
    console.log(txs)
}

main().catch(console.error)