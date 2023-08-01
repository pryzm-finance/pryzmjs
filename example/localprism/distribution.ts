import {prism} from "@prism-finance/prismjs"
import * as console from "console";
import {localPrism} from "./config";


async function main() {
    const prismClient = await prism.ClientFactory.createGrpcWebClient({endpoint: localPrism.grpcWebUrl})

    console.log("fetching validatorOutstandingRewards:")
    const rewards = (await prismClient.cosmos.distribution.v1beta1.validatorOutstandingRewards({
        validatorAddress: localPrism.accounts.validator.valAddress
    })).rewards
    console.log(rewards)

    console.log("\nfetching validatorDistributionInfo:")
    const distributionInfoResponse = await prismClient.cosmos.distribution.v1beta1.validatorDistributionInfo({
        validatorAddress: localPrism.accounts.validator.valAddress
    });
    console.log(distributionInfoResponse)
}

main().catch(console.error)