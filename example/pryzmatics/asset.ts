import { createPryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const asset = (await pryzmaticsClient.pryzmatics.asset({
        assetId: "eth"
    })).asset
    console.log(asset)

    /* Sample Output:
    {
      id: 'eth',
      c_asset_token: {
        denom: 'ceth',
        type: 'TOKEN_TYPE_C',
        yield: {
          token_denom: 'ceth',
          time: '2024-05-01T07:05:01.135256Z',
          total_yield: '9403599523.740620561794610200',
          internal_yield: '9403599523.740620561794610200',
          incentives_apr: '0.000000000000000000',
          alliance_apr: null,
          y_staking_yield: null,
          y_roi: null,
          error: ''
        },
        price: '0.669689208762852918',
        metrics: {
          price_change_percentage_24h: '-0.079523740928061832',
          price_change_percentage_7d: '-0.430610535349776255',
          price_change_percentage_30d: '-2.126232697435375588',
          trade_volume_24h: '0.000000000000000000',
          trade_volume_7d: '0.000000000000000000',
          trade_volume_30d: '0.000000000000000000',
          price_52w_low: '0.125081096977102612',
          price_52w_high: '366.962496242575167707'
        },
        error: ''
      },
      underlying_asset_token: null,
      total_refracted_c_asset: '7208000000',
      total_p_asset: '7215208000',
      pool_id: '0',
      exchange_rate: '1.181425211238277131',
      exchange_rate_block_height: '55329',
      c_p_asset_exchange_rate: '1.181425211063716522',
      error: '',
      host_chain_id: '',
      last_yield_block_height: '55329'
    }
    */
}

main().catch(console.error)