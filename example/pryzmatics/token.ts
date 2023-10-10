import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const token = (await pryzmaticsClient.pryzmatics.token({
        denom: "p:eth:30Jun2024",
        tokenOut: ""
    })).token
    console.log(token)

    /* Sample Output:
    {
      denom: 'p:eth:30Jun2024',
      type: 'TOKEN_TYPE_P',
      yield: {
        token_denom: '',
        time: '2023-09-22T14:02:00.693718Z',
        total_yield: '0.129252020315928700',
        internal_yield: '0.129252020315928700',
        incentives_apr: null,
        alliance_apr: null,
        y_staking_yield: null,
        y_roi: null,
        error: ''
      },
      price: '15.096863326738236026',
      price_change_percentage_24h: '21.400401489338578908',
      price_change_percentage_7d: '21.400401489338578908',
      price_change_percentage_30d: '21.400401489338578908',
      trade_volume_24h: '0.000000000000000000',
      trade_volume_7d: '0.000000000000000000',
      trade_volume_30d: '0.000000000000000000',
      error: ''
    }
    * */
}

main().catch(console.error)