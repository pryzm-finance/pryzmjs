import {
    cosmosAminoConverters,
    cosmosProtoRegistry,
    ibcAminoConverters,
    ibcProtoRegistry,
    pryzmAminoConverters,
    pryzmProtoRegistry
} from "./codegen"
import { OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { GasPrice } from "@cosmjs/stargate/build/fee";
import { defaultPageRequestProvider } from "./index";
import { PageRequest } from "./codegen/cosmos/base/query/v1beta1/pagination";
import { createGrpcWebClient } from "./codegen/pryzm/rpc.query";
import { createLCDClient } from "./codegen/pryzm/lcd";

export type PryzmGrpcWebClient = Awaited<ReturnType<typeof createGrpcWebClient>>
export type PryzmLCDClient = Awaited<ReturnType<typeof createLCDClient>>
export const createPryzmGrpcWebClient = createGrpcWebClient
export const createPryzmLCDClient = createLCDClient

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

export async function connectWithSigner(endpoint: string | HttpEndpoint, signer: OfflineSigner, broadcastTimeoutMs?: number, gasPrice?: GasPrice, broadcastPollIntervalMs?: number): Promise<SigningStargateClient> {
    const registry = new Registry([...cosmosProtoRegistry, ...pryzmProtoRegistry, ...ibcProtoRegistry]);
    const aminoTypes = new AminoTypes({
        ...cosmosAminoConverters,
        ...pryzmAminoConverters,
        ...ibcAminoConverters
    });

    return SigningStargateClient.connectWithSigner(endpoint, signer, {
        registry,
        aminoTypes,
        broadcastTimeoutMs,
        gasPrice,
        broadcastPollIntervalMs,
    });
}