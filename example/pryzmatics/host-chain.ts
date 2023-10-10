import { pryzmatics } from "@pryzm-finance/pryzmjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";

async function main() {
    const pryzmaticsClient = await pryzmatics.ClientFactory.createClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const hostChain = (await pryzmaticsClient.pryzmatics.hostChain({
        hostChainId: "uatom",
    })).host_chain
    console.log(JSON.stringify(hostChain))

    /* Sample Output:
    {
      "host_chain": {
        "id": "uatom",
        "connection_type": "ICA",
        "connection_id": "connection-0",
        "base_denom": "uatom",
        "transfer_channels": [
          {
            "type": "IBC",
            "id": "channel-0",
            "wrapped_denom": "",
            "destination_chain": ""
          }
        ],
        "params": {
          "fee_ratios": {
            "yield": null,
            "staking": null,
            "unstaking": null,
            "instant_unstaking": null
          },
          "delegation_interval": "3600s",
          "undelegation_interval": "7200s",
          "ibc_transfer_timeout": null,
          "ica_timeout": null,
          "rebalance_params": {
            "max_msgs": 3,
            "rebalance_threshold": null,
            "min_rebalance_amount": null,
            "min_rebalance_interval": null
          }
        },
        "validators": [
          {
            "address": "cosmosvaloper1jyfu9v3s3x3rws7zv86wqw66g4enswyl36xdwm",
            "weight": "1.000000000000000000"
          }
        ]
      },
      "c_asset_market_cap": "136034843845.872860370000000000",
      "c_asset_apy": null,
      "asset_in_vault": "90000000000",
      "error": "cannot compute cAsset apy; compoundingFrequency must not be zero"
    }
    * */
}

main().catch(console.error)