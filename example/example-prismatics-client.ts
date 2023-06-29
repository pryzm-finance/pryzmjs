import {fetchAll, prismatics} from "@prism-finance/prismjs/lib";
import {Long} from "@prism-finance/prismjs/lib/codegen/helpers";
import * as console from "console";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: "http://localhost:4444"})

    const allMaturities = await fetchAll(prismaticsClient, async (client, pageRequest) => {
        const result = (await prismaticsClient.prismatics.maturityAll({
            assetId: "uatom",
            active: "true",
            pagination: pageRequest
        }))
        console.log(result)
        return [result.pagination.next_key, result.maturities]
    }/*, {
        countTotal: false,
        key: new Uint8Array(),
        offset: Long.ZERO,
        reverse: false,
        limit: Long.fromNumber(12)
    }*/)
    console.log(allMaturities.length)
}

main().catch(console.error)