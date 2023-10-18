import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const pool = (await pryzmaticsClient.pryzmatics.pool({
        poolId: 2n
    })).pool
    console.log(pool)

    /* Sample Output:
      {
        "id": "2",
        "name": "osmosis-gamm-2",
        "pool_type": "POOL_TYPE_YAMM",
        "lp_denom": "LP:2:osmosis-gamm-2",
        "apr": {
          "pool_id": "2",
          "time": "2023-10-18T12:42:00.339432Z",
          "apr": "6.213412414877733635",
          "swap_fee_apr": "0.032225809848372975",
          "token_yield": "6.181186605029360660",
          "incentives_apr": null,
          "alliance_apr": null,
          "error": ""
        },
        "metrics": {
          "total_liquidity": "204028275.006350103484514855",
          "trade_volume_24h": "0.000000000000000000",
          "trade_volume_7d": "0.000000000000000000",
          "trade_volume_30d": "0.000000000000000000",
          "swap_fee_volume_24h": "0.000000000000000000",
          "swap_fee_volume_7d": "0.000000000000000000",
          "swap_fee_volume_30d": "0.000000000000000000",
          "join_exit_swap_fee_volume_24h": "5404.090186887276835002",
          "join_exit_swap_fee_volume_7d": "5404.090186887276835002",
          "join_exit_swap_fee_volume_30d": "5404.090186887276835002"
        }
      }
    * */
}

main().catch(console.error)