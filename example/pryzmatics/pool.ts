import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const pool = (await pryzmaticsClient.pryzmatics.pool({
        poolId: 4n
    })).pool
    console.log(pool)

    /* Sample Output:
    {
      id: '4',
      name: 'pryzm:usdc',
      pool_type: 'POOL_TYPE_WEIGHTED',
      lp_denom: 'LP:4:pryzm:usdc',
      apr: {
        pool_id: '0',
        time: '2023-09-22T14:02:00.693718Z',
        apr: '0.022083501693427277',
        swap_fee_apr: '0.022083501693427277',
        token_yield: '0.000000000000000000',
        incentives_apr: null,
        alliance_apr: null,
        error: ''
      },
      trade_volume_24h: '0.000000000000000000',
      trade_volume_7d: '0.000000000000000000',
      trade_volume_30d: '0.000000000000000000',
      swap_fee_volume_24h: '0.000000000000000000',
      swap_fee_volume_7d: '0.000000000000000000',
      swap_fee_volume_30d: '0.000000000000000000',
      join_exit_swap_fee_volume_24h: '163357.409786996295311636',
      join_exit_swap_fee_volume_7d: '163357.409786996295311636',
      join_exit_swap_fee_volume_30d: '163357.409786996295311636'
    }
    * */
}

main().catch(console.error)