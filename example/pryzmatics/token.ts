import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const token = (await pryzmaticsClient.pryzmatics.token({
        denom: "p:eth:30Jun2024",
        tokenIn: ""
    })).token
    console.log(token)

    /* Sample Output:
      {
        "denom": "p:eth:30Jun2024",
        "type": "TOKEN_TYPE_P",
        "yield": {
          "token_denom": "p:eth:30Jun2024",
          "time": "2023-10-18T12:42:00.339432Z",
          "total_yield": "14.264586002627790200",
          "internal_yield": "14.264586002627790200",
          "incentives_apr": null,
          "alliance_apr": null,
          "y_staking_yield": null,
          "y_roi": null,
          "error": ""
        },
        "price": "0.950621478312385766",
        "metrics": {
          "price_change_percentage_24h": "-4.823651808618956692",
          "price_change_percentage_7d": "-4.823651808618956692",
          "price_change_percentage_30d": "-4.823651808618956692",
          "trade_volume_24h": "0.000000000000000000",
          "trade_volume_7d": "0.000000000000000000",
          "trade_volume_30d": "0.000000000000000000",
          "price_52w_low": "0.950621478312385766",
          "price_52w_high": "0.998800118282403186"
        },
        "error": ""
      }
    * */
}

main().catch(console.error)