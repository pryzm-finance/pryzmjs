import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const m = await pryzmaticsClient.cosmatics.metrics({
        fromBlockHeight: "",
        fromTime: "",
        metricId: "",
        metricType: undefined,
        pagination: undefined,
        toBlockHeight: "",
        toTime: ""
    })

    return
    const asset = (await pryzmaticsClient.pryzmatics.asset({
        assetId: "uatom"
    })).asset
    console.log(asset)

    /* Sample Output:
    {
      "asset": {
        "id": "uatom",
        "c_asset_token": {
          "denom": "c:uatom",
          "type": "TOKEN_TYPE_C",
          "yield": {
            "token_denom": "c:uatom",
            "time": "2024-05-01T09:57:48.321540Z",
            "total_yield": "45.823615927036096500",
            "internal_yield": "45.823615927036096500",
            "incentives_apr": "0.000000000000000000",
            "alliance_apr": null,
            "y_staking_yield": null,
            "y_roi": null,
            "staking_yield": null,
            "error": ""
          },
          "price": "7369.298095971035173104",
          "metrics": {
            "price_change_percentage_24h": "13.577441508965210981",
            "price_change_percentage_7d": "64.465791902932268398",
            "price_change_percentage_30d": "308.588826542496145584",
            "trade_volume_24h": "1003347930.194578737556594693",
            "trade_volume_7d": "779043177375.125558763803590743",
            "trade_volume_30d": "797037944724.221668250040769811",
            "price_52w_low": "9.776975530620748532",
            "price_52w_high": "10123.197104190277792993"
          },
          "error": ""
        },
        "underlying_asset_token": {
          "denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
          "type": "TOKEN_TYPE_OTHER",
          "yield": {
            "token_denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
            "time": "2024-05-01T09:57:48.321540Z",
            "total_yield": "0.000000000000000000",
            "internal_yield": "0.000000000000000000",
            "incentives_apr": "0.000000000000000000",
            "alliance_apr": null,
            "y_staking_yield": null,
            "y_roi": null,
            "staking_yield": null,
            "error": ""
          },
          "price": "4854.497936637672584231",
          "metrics": {
            "price_change_percentage_24h": "-0.307658858900286983",
            "price_change_percentage_7d": "349.226261549015168558",
            "price_change_percentage_30d": "-75.112930804628131660",
            "trade_volume_24h": "8334473280.653623997345234240",
            "trade_volume_7d": "2755544314550.341901344966634530",
            "trade_volume_30d": "3134310731083.757061928111838554",
            "price_52w_low": "9.800074291741448426",
            "price_52w_high": "20760.096013046312107564"
          },
          "error": ""
        },
        "total_refracted_c_asset": "5470829270",
        "total_p_asset": "5520134102",
        "pool_id": "1",
        "exchange_rate": "1.130863247550890453",
        "exchange_rate_block_height": "2157429",
        "c_p_asset_exchange_rate": "1.130858197073734911",
        "error": "",
        "host_chain_id": "uatom",
        "last_yield_block_height": "2157009"
      }
    }
    */
}

main().catch(console.error)