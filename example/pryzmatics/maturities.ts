import { fetchAll, pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let maturities = await fetchAll(pryzmaticsClient, async (client, pageRequest) => {
        const result = (await pryzmaticsClient.pryzmatics.maturityAll({
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

    maturities = await fetchAll(pryzmaticsClient, async (client, pageRequest) => {
        const result = (await pryzmaticsClient.pryzmatics.maturityAll({
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