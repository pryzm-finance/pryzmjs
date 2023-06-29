import {prism, prismatics, cosmatics} from "./codegen"
import {Long, PageRequest} from "./codegen/helpers";
import {BrowserHeaders} from "browser-headers";

export type PrismLCDClient = Awaited<ReturnType<typeof prism.ClientFactory.createLCDClient>>
export type PrismaticsClient = Awaited<ReturnType<typeof prismatics.ClientFactory.createClient>>
export type CosmaticsClient = Awaited<ReturnType<typeof cosmatics.ClientFactory.createClient>>
export type PrismGrpcWebClient = Awaited<ReturnType<typeof prism.ClientFactory.createGrpcWebClient>>

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
        if (r) result.push(...r)
        pageRequest.key = nextKey ? new Uint8Array(Buffer.from(nextKey as any, 'base64')) : null
    } while (pageRequest.key)
    return result;
}

/**
 * ```ts
 * example:
 *     const balances = await grpcFetchAll(grpcClient, async (client, pageRequest) => {
 *         const result = await client.cosmos.bank.v1beta1.allBalances({
 *             address: "prism156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu",
 *             pagination: pageRequest
 *         })
 *         return [result.pagination.nextKey, result.balances]
 *     })
 * ```
 */
export async function grpcFetchAll<Type>(client: PrismGrpcWebClient, fetch: (client: PrismGrpcWebClient, request: PageRequest) =>
    Promise<[Uint8Array, Type[]]>, pageRequest = defaultPageRequestProvider()): Promise<Type[]> {
    const result: Type[] = []
    do {
        const [nextKey, r] = await fetch(client, pageRequest);
        if (r) result.push(...r)
        pageRequest.key = nextKey
    } while (pageRequest.key && pageRequest.key.length != 0)
    return result;
}


/**
 * ```ts
 * example:
 *     const allMaturities = await fetchAll(prismaticsClient, async (client, pageRequest) => {
 *         const result = (await prismaticsClient.prismatics.maturityAll({
 *             assetId: "Luna",
 *             active: "true",
 *             pagination: pageRequest
 *         }))
 *         return [result.pagination.next_key, result.maturities]
 *     })
 * ```
 */
export async function fetchAll<Type>(client: PrismaticsClient, fetch: (client: PrismaticsClient, request: PageRequest) =>
    Promise<[Uint8Array, Type[]]>, pageRequest = defaultPageRequestProvider()): Promise<Type[]> {
    const result: Type[] = []
    do {
        const [nextKey, r] = await fetch(client, pageRequest);
        if (r) result.push(...r)
        pageRequest.key = nextKey ? new Uint8Array(Buffer.from(nextKey as any, 'base64')) : null
    } while (pageRequest.key)
    return result;
}

export function getBrowsersHeadersForBlockHeight(height: number): BrowserHeaders {
    const headers = new BrowserHeaders()
    headers.set("x-cosmos-block-height", `${height}`)
    return headers
}