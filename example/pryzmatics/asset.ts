import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const asset = (await pryzmaticsClient.pryzmatics.asset({
        assetId: "eth"
    })).asset
    console.log(asset)

    /* Sample Output:
    {
      id: 'eth',
      token_denom: 'ceth',
      total_refracted_c_asset: '7200000000',
      total_p_asset: '7207200000',
      pool_id: '0',
      exchange_rate: '1.001000000000000000',
      exchange_rate_block_height: '1',
      c_p_asset_exchange_rate: '1.001000000000000000',
      c_asset_apy: null,
      error: 'cannot compute cAsset apy; compoundingFrequency must not be zero'
    }
    */
}

main().catch(console.error)