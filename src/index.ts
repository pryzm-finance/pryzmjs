import {cosmatics, getSigningPryzmClientOptions, pryzm, pryzmatics} from "./codegen"
import {PageRequest} from "./codegen/helpers";
import {BrowserHeaders} from "browser-headers";
import {OfflineSigner} from "@cosmjs/proto-signing";
import {SigningStargateClient} from "@cosmjs/stargate";
import {HttpEndpoint} from "@cosmjs/tendermint-rpc";
import {GasPrice} from "@cosmjs/stargate/build/fee";

export type PryzmLCDClient = Awaited<ReturnType<typeof pryzm.ClientFactory.createLCDClient>>
export type PryzmaticsClient = Awaited<ReturnType<typeof pryzmatics.ClientFactory.createClient>>
export type CosmaticsClient = Awaited<ReturnType<typeof cosmatics.ClientFactory.createClient>>
export type PryzmGrpcWebClient = Awaited<ReturnType<typeof pryzm.ClientFactory.createGrpcWebClient>>

export * from './codegen';

// workaround for bigint serialization issue (axios, JSON.stringify, ...)
(BigInt.prototype as any).toJSON = function () {
    return this.toString()
}

export function defaultPageRequestProvider(): PageRequest {
    return {
        countTotal: false,
        key: new Uint8Array(),
        offset: 0n,
        reverse: false,
        limit: 50n
    }
}

/**
 * example:
 * ```ts
 *    const balances = await lcdFetchAll(lcdClient, async (client, pageRequest) => {
 *         const result = await client.cosmos.bank.v1beta1.allBalances({
 *             address: "pryzm156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu",
 *             pagination: pageRequest
 *         })
 *         return [result.pagination.next_key, result.balances]
 *     })
 * ```
 */
export async function lcdFetchAll<Type>(client: PryzmLCDClient, fetch: (client: PryzmLCDClient, request: PageRequest) =>
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
 *             address: "pryzm156pcgs3faegfte0vuaykr9az3hh9kx2e2qfwvu",
 *             pagination: pageRequest
 *         })
 *         return [result.pagination.nextKey, result.balances]
 *     })
 * ```
 */
export async function grpcFetchAll<Type>(client: PryzmGrpcWebClient, fetch: (client: PryzmGrpcWebClient, request: PageRequest) =>
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
 *     const allMaturities = await fetchAll(pryzmaticsClient, async (client, pageRequest) => {
 *         const result = (await pryzmaticsClient.pryzmatics.maturityAll({
 *             assetId: "Luna",
 *             active: "true",
 *             pagination: pageRequest
 *         }))
 *         return [result.pagination.next_key, result.maturities]
 *     })
 * ```
 */
export async function fetchAll<Type>(client: PryzmaticsClient, fetch: (client: PryzmaticsClient, request: PageRequest) =>
    Promise<[Uint8Array, Type[]]>, pageRequest = defaultPageRequestProvider()): Promise<Type[]> {
    const result: Type[] = []
    do {
        const [nextKey, r] = await fetch(client, pageRequest);
        if (r) result.push(...r)
        pageRequest.key = nextKey ? new Uint8Array(Buffer.from(nextKey as any, 'base64')) : null
    } while (pageRequest.key)
    return result;
}

export function getBrowsersHeadersForBlockHeight(height: bigint): BrowserHeaders {
    const headers = new BrowserHeaders()
    headers.set("x-cosmos-block-height", height.toString())
    return headers
}

export async function connectWithSigner(endpoint: string | HttpEndpoint, signer: OfflineSigner, broadcastTimeoutMs?: number, gasPrice?: GasPrice, broadcastPollIntervalMs?: number): Promise<SigningStargateClient> {
    const {
        registry,
        aminoTypes
    } = getSigningPryzmClientOptions();

    return SigningStargateClient.connectWithSigner(endpoint, signer, {
        registry,
        aminoTypes,
        broadcastTimeoutMs,
        gasPrice,
        broadcastPollIntervalMs,
    });
}