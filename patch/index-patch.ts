
// Modified
import protobufjs from "protobufjs";
import Long from "long";
import {DirectSecp256k1HdWallet} from "@cosmjs/proto-signing";
import {PrismWebsocketClient, TendermintEventType, TendermintQuery, TendermintSubscriptionResponse} from "./wsclient";
import { Module as PrismfinancePrismatics, msgTypes as PrismfinancePrismaticsMsgTypes } from './prismfinance.prisma.tics' // TODO: PrismfinancePrismaticsMsgTypes

PrismfinancePrismaticsMsgTypes.forEach(value => {
    registry.register(value[0], value[1])
})

protobufjs.util.Long = Long;
protobufjs.configure();

type NewReturnType<T extends {
    new(...args: any[]): any
}> = T extends {
    new(...args: any[]): infer R
} ? R : never;
export type PrismClient = NewReturnType<typeof Client>
export const PrismClient = Client

export const PrismaticsClient = IgniteClient.plugin([
    PrismfinancePrismatics
]);
export type PrismaticsClient = NewReturnType<typeof PrismaticsClient>

export {
    PrismWebsocketClient,
    TendermintEventType,
    TendermintQuery,
    TendermintSubscriptionResponse
}

/** Use this method if you want to use the returned prism client only as query client. this does not work as signing client */
export function newPrismQueryClient(apiURL: string): PrismClient {
    return new PrismClient({
        apiURL, rpcURL: null!
    }, null!)
}

/** Use this method if you want to use the returned prism client only as signing client. this does not work for querying prism */
export function newPrismSigningClient(rpcURL: string, signer: DirectSecp256k1HdWallet): PrismClient {
    return new PrismClient({
        apiURL: null!, rpcURL, prefix: "prism"
    }, signer)
}

/** Use this method if you want to use the prismatics client */
export function newPrismaticsClient(apiURL: string): PrismaticsClient {
    return new PrismaticsClient({
        apiURL, rpcURL: null!
    }, null!)
}

/**
 * example:
 * ```ts
 * async function fetchAllConnection(client: PrismClient): Promise<BridgeConnection[]> {
 *    const result = await PrismHelper.fetchAll(client, async (client, query) => {
 *        const response = await client.RefractedlabsBridge.query.queryConnectionAll(query);
 *        return [response.data.pagination.next_key, response.data.connection]
 *    });
 *    commonLogger.debug(`${result.length} connection fetched`)
 *    return result;
 * }
 * ```
 */
export async function fetchAll<Type>(client: PrismClient, fetch: (client: PrismClient, query: any) => Promise<[string | null, Type[]]>, pageSize = 50): Promise<Type[]> {
    const result: Type[] = []
    const query: any = {"pagination.limit": `${pageSize}`}
    do {
        const [nextKey, r] = await fetch(client, query);
        result.push(...r)
        query["pagination.key"] = nextKey
    } while (query["pagination.key"] != null)
    return result;
}