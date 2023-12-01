import { GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as pryzmAmmTxRegistry from "./amm/v1/tx.registry";
import * as pryzmAssetsTxRegistry from "./assets/v1/tx.registry";
import * as pryzmIcstakingTxRegistry from "./icstaking/v1/tx.registry";
import * as pryzmIncentivesTxRegistry from "./incentives/v1/tx.registry";
import * as pryzmMintTxRegistry from "./mint/v1/tx.registry";
import * as pryzmPgovTxRegistry from "./pgov/v1/tx.registry";
import * as pryzmRefractorTxRegistry from "./refractor/v1/tx.registry";
import * as pryzmTreasuryTxRegistry from "./treasury/v1/tx.registry";
import * as pryzmYstakingTxRegistry from "./ystaking/v1/tx.registry";
import * as pryzmAmmTxAmino from "./amm/v1/tx.amino";
import * as pryzmAssetsTxAmino from "./assets/v1/tx.amino";
import * as pryzmIcstakingTxAmino from "./icstaking/v1/tx.amino";
import * as pryzmIncentivesTxAmino from "./incentives/v1/tx.amino";
import * as pryzmMintTxAmino from "./mint/v1/tx.amino";
import * as pryzmPgovTxAmino from "./pgov/v1/tx.amino";
import * as pryzmRefractorTxAmino from "./refractor/v1/tx.amino";
import * as pryzmTreasuryTxAmino from "./treasury/v1/tx.amino";
import * as pryzmYstakingTxAmino from "./ystaking/v1/tx.amino";
import { cosmosAminoConverters, cosmosProtoRegistry } from "../cosmos/client";

export const pryzmAminoConverters = {
    ...pryzmAmmTxAmino.AminoConverter,
    ...pryzmAssetsTxAmino.AminoConverter,
    ...pryzmIcstakingTxAmino.AminoConverter,
    ...pryzmIncentivesTxAmino.AminoConverter,
    ...pryzmMintTxAmino.AminoConverter,
    ...pryzmPgovTxAmino.AminoConverter,
    ...pryzmRefractorTxAmino.AminoConverter,
    ...pryzmTreasuryTxAmino.AminoConverter,
    ...pryzmYstakingTxAmino.AminoConverter
};
export const pryzmProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...pryzmAmmTxRegistry.registry, ...pryzmAssetsTxRegistry.registry, ...pryzmIcstakingTxRegistry.registry, ...pryzmIncentivesTxRegistry.registry, ...pryzmMintTxRegistry.registry, ...pryzmPgovTxRegistry.registry, ...pryzmRefractorTxRegistry.registry, ...pryzmTreasuryTxRegistry.registry, ...pryzmYstakingTxRegistry.registry];
export const getSigningPryzmClientOptions = ({
                                                 defaultTypes = cosmosProtoRegistry
                                             }: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
    registry: Registry;
    aminoTypes: AminoTypes;
} => {
    const registry = new Registry([...defaultTypes, ...pryzmProtoRegistry]);
    const aminoTypes = new AminoTypes({
        ...pryzmAminoConverters,
        ...cosmosAminoConverters,
    });
    return {
        registry,
        aminoTypes
    };
};
export const getSigningPryzmClient = async ({
                                                rpcEndpoint,
                                                signer,
                                                defaultTypes = cosmosProtoRegistry
                                            }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    const {
        registry,
        aminoTypes
    } = getSigningPryzmClientOptions({
        defaultTypes
    });
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: (registry as any),
        aminoTypes
    });
    return client;
};