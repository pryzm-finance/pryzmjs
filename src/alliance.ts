import { getSigningAllianceClientOptions } from "./codegen/alliance/client"
import { OfflineSigner } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { GasPrice } from "@cosmjs/stargate/build/fee";

export * from "./codegen/alliance/bundle";
export * from "./codegen/alliance/client";

export async function connectWithSigner(endpoint: string | HttpEndpoint, signer: OfflineSigner, broadcastTimeoutMs?: number, gasPrice?: GasPrice, broadcastPollIntervalMs?: number): Promise<SigningStargateClient> {
    const {
        registry,
        aminoTypes
    } = getSigningAllianceClientOptions();

    return SigningStargateClient.connectWithSigner(endpoint, signer, {
        registry,
        aminoTypes,
        broadcastTimeoutMs,
        gasPrice,
        broadcastPollIntervalMs,
    });
}