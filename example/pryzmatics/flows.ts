import { createPryzmaticsClient, PryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";
import {
    FlowStatus,
    TokenClaimability
} from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/server/flowtrade/flowtrade";
import { ParticipationType } from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/flowtrade/participation_type";
import { fetchAll } from "@pryzm-finance/pryzmjs/lib";
import { PageRequest } from "@pryzm-finance/pryzmjs/lib/codegen/cosmos/base/query/v1beta1/pagination";
import {
    FlowPositionPairOrderByProperty
} from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/database/flowtrade/flow_position_pair";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    // list of all flows
    let flows = await fetchAll(pryzmaticsClient, async (client: PryzmaticsClient, request: PageRequest) => {
        const result = (await client.pryzmatics.allFlow({
            creator: "",
            participant: "",
            participationType: ParticipationType.PARTICIPATION_TYPE_NO_PARTICIPATION,
            status: FlowStatus.FLOW_STATUS_ANY,
            tokenInClaimability: TokenClaimability.TOKEN_CLAIMABILITY_ANY,
            tokenOutClaimability: TokenClaimability.TOKEN_CLAIMABILITY_ANY,
            pagination: request
        }))
        return [result.pagination.next_key, result.flows]
    })
    console.log(JSON.stringify(flows))

    // list of all flows ordered by token in denom
    flows = await fetchAll(pryzmaticsClient, async (client: PryzmaticsClient, request: PageRequest) => {
        const result = (await client.pryzmatics.allFlow({
            creator: "",
            participant: "",
            participationType: ParticipationType.PARTICIPATION_TYPE_NO_PARTICIPATION,
            status: FlowStatus.FLOW_STATUS_ANY,
            tokenInClaimability: TokenClaimability.TOKEN_CLAIMABILITY_ANY,
            tokenOutClaimability: TokenClaimability.TOKEN_CLAIMABILITY_ANY,
            orderBy: {
                property: FlowPositionPairOrderByProperty.ORDER_BY_PROPERTY_FLOW_TOKEN_IN_DENOM,
                descending: true
            },
            pagination: request
        }))
        return [result.pagination.next_key, result.flows]
    })
    console.log(JSON.stringify(flows))

    // list of flows a user has created and can claim token-in from
    flows = (await pryzmaticsClient.pryzmatics.allFlow({
        creator: "user_address",
        tokenInClaimability: TokenClaimability.TOKEN_CLAIMABILITY_CLAIMABLE,
        participant: "",
        participationType: ParticipationType.PARTICIPATION_TYPE_NO_PARTICIPATION,
        status: FlowStatus.FLOW_STATUS_ANY,
        tokenOutClaimability: TokenClaimability.TOKEN_CLAIMABILITY_ANY,
        pagination: undefined,
    })).flows
    console.log(JSON.stringify(flows))

    // list of flows a user has participated and can claim token-out from
    flows = (await pryzmaticsClient.pryzmatics.allFlow({
        participant: "user_address",
        participationType: ParticipationType.PARTICIPATION_TYPE_POSITION_OWNER,
        tokenOutClaimability: TokenClaimability.TOKEN_CLAIMABILITY_CLAIMABLE,
        creator: "",
        tokenInClaimability: TokenClaimability.TOKEN_CLAIMABILITY_ANY,
        status: FlowStatus.FLOW_STATUS_ANY,
        pagination: undefined,
    })).flows
    console.log(JSON.stringify(flows))
}

main().catch(console.error)