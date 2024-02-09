import { createPryzmaticsClient, fetchAll, PryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./config";
import {
    FlowStatus,
    QueryAllFlowRequest,
    TokenClaimability
} from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/server/flowtrade/flowtrade";
import { ParticipationType } from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/flowtrade/participation_type";
import { PageRequest } from "@pryzm-finance/pryzmjs/lib/codegen/cosmos/base/query/v1beta1/pagination";
import {
    FlowPositionPairOrderByProperty
} from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/database/flowtrade/flow_position_pair";
import { FlowPositionPairSDKType } from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/flowtrade/flow_position_pair";

async function main() {
    const c = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    // list of all flows
    let flows = await getAllFlows(c, {
        creator: "",
        tokenInDenom: "",
        tokenOutDenom: "",
        participant: "",
        participationType: ParticipationType.PARTICIPATION_TYPE_NO_PARTICIPATION,
        status: FlowStatus.FLOW_STATUS_ANY,
        tokenInClaimability: TokenClaimability.TOKEN_CLAIMABILITY_ANY,
        tokenOutClaimability: TokenClaimability.TOKEN_CLAIMABILITY_ANY,
    })
    console.log(JSON.stringify(flows))

    // list of all flows ordered by token in denom
    flows = await getAllFlows(c, {
        creator: "",
        tokenInDenom: "",
        tokenOutDenom: "",
        participant: "",
        participationType: ParticipationType.PARTICIPATION_TYPE_NO_PARTICIPATION,
        status: FlowStatus.FLOW_STATUS_ANY,
        tokenInClaimability: TokenClaimability.TOKEN_CLAIMABILITY_ANY,
        tokenOutClaimability: TokenClaimability.TOKEN_CLAIMABILITY_ANY,
        orderBy: {
            property: FlowPositionPairOrderByProperty.ORDER_BY_PROPERTY_FLOW_TOKEN_IN_DENOM,
            descending: true
        },
    })
    console.log(JSON.stringify(flows))

    // list of flows a user has created and can claim token-in from
    flows = await getAllFlows(c, {
        creator: "pryzm1pd4uk37d2glnyn39xfpvupvncpy9mne248rrj5",
        tokenInDenom: "",
        tokenOutDenom: "",
        tokenInClaimability: TokenClaimability.TOKEN_CLAIMABILITY_CLAIMABLE,
        participant: "",
        participationType: ParticipationType.PARTICIPATION_TYPE_NO_PARTICIPATION,
        status: FlowStatus.FLOW_STATUS_ANY,
        tokenOutClaimability: TokenClaimability.TOKEN_CLAIMABILITY_ANY,
    })
    console.log(JSON.stringify(flows))

    // list of flows a user has participated and can claim token-out from
    flows = await getAllFlows(c, {
        participant: "pryzm1pd4uk37d2glnyn39xfpvupvncpy9mne248rrj5",
        tokenInDenom: "",
        tokenOutDenom: "",
        participationType: ParticipationType.PARTICIPATION_TYPE_POSITION_OWNER,
        tokenOutClaimability: TokenClaimability.TOKEN_CLAIMABILITY_CLAIMABLE,
        creator: "",
        tokenInClaimability: TokenClaimability.TOKEN_CLAIMABILITY_ANY,
        status: FlowStatus.FLOW_STATUS_ANY,
    })
    console.log(JSON.stringify(flows))

    // list of flows with upryzm as tokenOutDenom
    flows = await getAllFlows(c, {
        creator: "",
        participant: "",
        tokenInDenom: "",
        tokenOutDenom: "upryzm",
        participationType: ParticipationType.PARTICIPATION_TYPE_FLOW_CREATOR_OR_POSITION_OWNER,
        tokenOutClaimability: TokenClaimability.TOKEN_CLAIMABILITY_ANY,
        tokenInClaimability: TokenClaimability.TOKEN_CLAIMABILITY_ANY,
        status: FlowStatus.FLOW_STATUS_ANY,
    })
    console.log(JSON.stringify(flows))

    // list of flows with upryzm as tokenInDenom
    flows = await getAllFlows(c, {
        creator: "",
        participant: "",
        tokenInDenom: "upryzm",
        tokenOutDenom: "",
        participationType: ParticipationType.PARTICIPATION_TYPE_FLOW_CREATOR_OR_POSITION_OWNER,
        tokenOutClaimability: TokenClaimability.TOKEN_CLAIMABILITY_ANY,
        tokenInClaimability: TokenClaimability.TOKEN_CLAIMABILITY_ANY,
        status: FlowStatus.FLOW_STATUS_ANY,
    })
    console.log(JSON.stringify(flows))
}

async function getAllFlows(client: PryzmaticsClient, req: QueryAllFlowRequest): Promise<FlowPositionPairSDKType[]> {
    return fetchAll(client, async (client: PryzmaticsClient, request: PageRequest) => {
        req.pagination = request
        const result = (await client.pryzmatics.allFlow(req))
        return [result.pagination.next_key, result.flows]
    }, {
        countTotal: false,
        key: new Uint8Array(),
        offset: 0n,
        reverse: false,
        limit: 5n
    })
}

main().catch(console.error)