import {prism} from "./codegen"
import {Long, PageRequest} from "./codegen/helpers";

export type PrismLCDClient = Awaited<ReturnType<typeof prism.ClientFactory.createLCDClient>>
export type PrismRPCQueryClient = Awaited<ReturnType<typeof prism.ClientFactory.createRPCQueryClient>>

export * from './codegen';

export function defaultPageRequestProvider(): PageRequest {
    return {
        countTotal: false,
        key: new Uint8Array(),
        offset: Long.ZERO,
        reverse: false,
        limit: Long.fromNumber(50)
    }
}

/**
 * example:
 * ```ts
 *    const balances = await lcdFetchAll(lcdClient, async (client, pageRequest) => {
 *         const result = await client.cosmos.bank.v1beta1.allBalances({
 *             address: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu",
 *             pagination: pageRequest
 *         })
 *         return [result.pagination.next_key, result.balances]
 *     })
 * ```
 */
export async function lcdFetchAll<Type>(client: PrismLCDClient, fetch: (client: PrismLCDClient, request: PageRequest) =>
    Promise<[Uint8Array, Type[]]>, pageRequest = defaultPageRequestProvider()): Promise<Type[]> {
    const result: Type[] = []
    do {
        const [nextKey, r] = await fetch(client, pageRequest);
        result.push(...r)
        pageRequest.key = nextKey ? new Uint8Array(Buffer.from(nextKey as any, 'base64')) : null
    } while (pageRequest.key)
    return result;
}

/**
 * ```ts
 * example:
 *     const balances = await rpcFetchAll(rpcClient, async (client, pageRequest) => {
 *         const result = await client.cosmos.bank.v1beta1.allBalances({
 *             address: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu",
 *             pagination: pageRequest
 *         })
 *         return [result.pagination.nextKey, result.balances]
 *     })
 * ```
 */
export async function rpcFetchAll<Type>(client: PrismRPCQueryClient, fetch: (client: PrismRPCQueryClient, request: PageRequest) =>
    Promise<[Uint8Array, Type[]]>, pageRequest = defaultPageRequestProvider()): Promise<Type[]> {
    const result: Type[] = []
    do {
        const [nextKey, r] = await fetch(client, pageRequest);
        result.push(...r)
        pageRequest.key = nextKey
    } while (pageRequest.key && pageRequest.key.length != 0)
    return result;
}
