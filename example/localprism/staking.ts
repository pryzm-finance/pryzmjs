import {prism} from "@prism-finance/prismjs"
import * as console from "console";
import {localPrism} from "./config";
import {BondStatus, bondStatusToJSON} from "@prism-finance/prismjs/lib/codegen/cosmos/staking/v1beta1/staking";


async function main() {
    const prismClient = await prism.ClientFactory.createGrpcWebClient({endpoint: localPrism.grpcWebUrl})

    console.log("fetching bonded validators:")
    const validators = await prismClient.cosmos.staking.v1beta1.validators({
        status: bondStatusToJSON(BondStatus.BOND_STATUS_BONDED)
    });
    console.log(validators.validators)

    console.log("\nfetching delegatorDelegations:")
    const delegations = (await prismClient.cosmos.staking.v1beta1.delegatorDelegations({
        delegatorAddr: localPrism.accounts.test1.address
    })).delegationResponses;
    console.log(delegations)
}

main().catch(console.error)