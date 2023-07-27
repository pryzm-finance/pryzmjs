import {fetchAll, prismatics} from "@prism-finance/prismjs/lib";
import * as console from "console";
import {PRISMATICS_ENDPOINT} from "./config";

async function main() {
    const prismaticsClient = await prismatics.ClientFactory.createClient({restEndpoint: PRISMATICS_ENDPOINT})

    const maturities = await fetchAll(prismaticsClient, async (client, pageRequest) => {
        const result = (await prismaticsClient.prismatics.maturityAll({
            assetId: "atom",
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
    console.log(maturities)
}

main().catch(console.error)