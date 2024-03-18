import { createPryzmaticsClient, fetchAll, PryzmaticsClient } from "@pryzm-finance/pryzmjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";
import { PageRequest } from "@pryzm-finance/pryzmjs/lib/codegen/cosmos/base/query/v1beta1/pagination";
import { ProposalVoteOrderByProperty } from "@pryzm-finance/pryzmjs/lib/codegen/pryzmatics/database/gov/vote";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    // list of all votes ordered by block time
    const votes = await fetchAll(pryzmaticsClient, async (client: PryzmaticsClient, request: PageRequest) => {
        const result = await pryzmaticsClient.pryzmatics.proposalVotes({
            proposalId: 1n,
            voter: "",
            orderBy: {
                property: ProposalVoteOrderByProperty.ORDER_BY_PROPERTY_BLOCK_TIME,
                descending: true
            },
            pagination: request
        })
        return [result.pagination.next_key, result.votes]
    })
    console.log(JSON.stringify(votes))
    console.log(votes.length)
}

main().catch(console.error)