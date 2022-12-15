
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