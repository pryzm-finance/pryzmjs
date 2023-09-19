import {pryzm} from "@pryzm-finance/pryzmjs"
import * as console from "console";
import {localPryzm} from "./config";
import {BondStatus, bondStatusToJSON} from "@pryzm-finance/pryzmjs/lib/codegen/cosmos/staking/v1beta1/staking";


async function main() {
    const pryzmClient = await pryzm.ClientFactory.createGrpcWebClient({endpoint: localPryzm.grpcWebUrl})

    console.log("fetching bonded validators:")
    const validators = await pryzmClient.cosmos.staking.v1beta1.validators({
        status: bondStatusToJSON(BondStatus.BOND_STATUS_BONDED)
    });
    console.log(validators.validators)

    console.log("\nfetching delegatorDelegations:")
    const delegations = (await pryzmClient.cosmos.staking.v1beta1.delegatorDelegations({
        delegatorAddr: localPryzm.accounts.test1.address
    })).delegationResponses;
    console.log(delegations)
}

main().catch(console.error)