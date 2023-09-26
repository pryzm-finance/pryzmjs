import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as allianceTxRegistry from "./tx.registry";
import * as allianceTxAmino from "./tx.amino";
import { cosmosAminoConverters, cosmosProtoRegistry } from "../cosmos/client";

export const allianceAminoConverters = {
  ...allianceTxAmino.AminoConverter
};
export const allianceProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...allianceTxRegistry.registry];
export const getSigningAllianceClientOptions = ({
  defaultTypes = cosmosProtoRegistry
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...allianceProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...allianceAminoConverters,
    ...cosmosAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningAllianceClient = async ({
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
  } = getSigningAllianceClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};