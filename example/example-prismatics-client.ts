import {prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {Long} from "@prism-finance/prismjs/lib/codegen/helpers";
import {lcdFetchAll} from "@prism-finance/prismjs";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createLCDClient({restEndpoint: "http://localhost:4444"})

    const allMaturities = await lcdFetchAll(prismaticsClient as any, async (client, pageRequest) => {
        const result = (await prismaticsClient.prismatics.maturityAll({
            assetId: "Luna",
            active: "true",
            pagination: pageRequest
        }))
        return [result.pagination.next_key, result.maturities]
    }, {
        countTotal: false,
        key: new Uint8Array(),
        offset: Long.ZERO,
        reverse: false,
        limit: Long.fromNumber(5)
    })
    console.log(allMaturities.length)


    const block = (await prismaticsClient.prismatics.block({
        height: Long.fromNumber(100)
    }))
    console.log(block)

    const tx = (await prismaticsClient.prismatics.transaction({
        hash: "63014DBB8F393AEA14F45A8CAE1EAE6269200D2E16BC396A3A3BE29A436E7736"
    }))
    console.log(tx)

    const txs = (await prismaticsClient.prismatics.transactionByEvent({
        events: [
            "transfer.sender=prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu",
            "tx.signature=P2a2BwreLnfo9BXsxujVswxmCdLp96EcRzxj5l+yVaQn+aaTtFgCIHyVG5LP+8ZQWGLtkjWG1wEeixkWSfdeZA==",
        ]
    }))
    console.log(txs)
}

main().catch(console.error)