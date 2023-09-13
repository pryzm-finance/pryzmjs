import { fetchAll, prismatics } from "@prism-finance/prismjs/lib";
import * as console from "console";
import { PRISMATICS_ENDPOINT } from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({ restEndpoint: PRISMATICS_ENDPOINT })

    let maturities = await fetchAll(prismaticsClient, async (client, pageRequest) => {
        const result = (await prismaticsClient.prismatics.maturityAll({
            assetId: "eth",
            active: "true",
            pagination: pageRequest
        }))
        console.log(result)
        return [result.pagination.next_key, result.maturities]
    }/*, {
        countTotal: false,
        key: new Uint8Array(),
        offset: 0n,
        reverse: false,
        limit: 3n
    }*/)
    console.log(maturities)

    maturities = await fetchAll(prismaticsClient, async (client, pageRequest) => {
        const result = (await prismaticsClient.prismatics.maturityAll({
            assetId: "eth",
            active: "true",
            pagination: pageRequest,
            timeWindowInDays: "20"
        }))
        console.log(result)
        return [result.pagination.next_key, result.maturities]
    })
    console.log(maturities)
}

main().catch(console.error)