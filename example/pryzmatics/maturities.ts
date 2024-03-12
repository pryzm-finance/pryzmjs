import { fetchAll } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";
import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

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

    /* Sample Output:
    [
      {
        asset_id: 'eth',
        symbol: '31Dec2024',
        active: true,
        introduction_time: '2023-09-22T13:30:42.216158Z',
        expiration_time: '2025-01-01T00:00:00Z',
        block_height: '1',
        block_time: '2023-09-22T13:30:42.216158Z',
        roi: null,
        y_apy: null,
        p_apy: '0.078244761617700900',
        y_price: '0.015096217787573281',
        p_price: '15.096862847907663951',
        error: 'cannot compute roi since no exchange rate exists for window start'
      },
      {
        asset_id: 'eth',
        symbol: '30Jun2025',
        active: true,
        introduction_time: '2023-09-22T13:30:42.216158Z',
        expiration_time: '2025-07-01T00:00:00Z',
        block_height: '1',
        block_time: '2023-09-22T13:30:42.216158Z',
        roi: null,
        y_apy: null,
        p_apy: '0.056364189176558600',
        y_price: '0.015096423266215841',
        p_price: '15.096862642429021316',
        error: 'cannot compute roi since no exchange rate exists for window start'
      },
      ...
    ]
    * */

    maturities = await fetchAll(pryzmaticsClient, async (client, pageRequest) => {
        const result = (await pryzmaticsClient.pryzmatics.maturityAll({
            assetId: "eth",
            active: "true",
            pagination: pageRequest
        }))
        console.log(result)
        return [result.pagination.next_key, result.maturities]
    })
    console.log(maturities)
}

main().catch(console.error)