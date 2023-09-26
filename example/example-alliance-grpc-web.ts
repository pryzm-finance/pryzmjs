import { alliance, grpcFetchAll } from "@pryzm-finance/pryzmjs/lib/alliance"
import * as console from "console";


async function main() {
    const client = await alliance.ClientFactory.createGrpcWebClient({ endpoint: "http://0.0.0.0:9091" })

    const params = (await client.alliance.params({})).params
    console.log(params)

    const alliances = await grpcFetchAll(client, async (client, pageRequest) => {
        const result = await client.alliance.alliances({ pagination: pageRequest })
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