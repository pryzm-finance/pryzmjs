import * as console from "console";
import { createPryzmGrpcWebClient, grpcFetchAll } from "@pryzm-finance/pryzmjs";
import { GRPC_ENDPOINT } from "./consts";

async function main() {
    const client = await createPryzmGrpcWebClient({ endpoint: GRPC_ENDPOINT })

    const params = (await client.alliance.alliance.params({})).params
    console.log(params)

    const alliances = await grpcFetchAll(client, async (client, pageRequest) => {
        const result = await client.alliance.alliance.alliances({ pagination: pageRequest })
        return [result.pagination.nextKey, result.alliances]
    }, {
        countTotal: false,
        key: new Uint8Array(),
        offset: 0n,
        reverse: false,
        limit: 3n
    })
    console.log(alliances)
}

main().catch(console.error)