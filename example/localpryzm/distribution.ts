import {pryzm} from "@pryzm-finance/pryzmjs"
import * as console from "console";
import {localPryzm} from "./config";


async function main() {
    const pryzmClient = await pryzm.ClientFactory.createGrpcWebClient({endpoint: localPryzm.grpcWebUrl})

    console.log("fetching validatorOutstandingRewards:")
    const rewards = (await pryzmClient.cosmos.distribution.v1beta1.validatorOutstandingRewards({
        validatorAddress: localPryzm.accounts.validator.valAddress
    })).rewards
    console.log(rewards)

    console.log("\nfetching validatorDistributionInfo:")
    const distributionInfoResponse = await pryzmClient.cosmos.distribution.v1beta1.validatorDistributionInfo({
        validatorAddress: localPryzm.accounts.validator.valAddress
    });
    console.log(distributionInfoResponse)
}

main().catch(console.error)