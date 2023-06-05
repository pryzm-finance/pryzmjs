import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as prismAmmTxRegistry from "./amm/tx.registry";
import * as prismAssetsTxRegistry from "./assets/tx.registry";
import * as prismIcstakingTxRegistry from "./icstaking/tx.registry";
import * as prismIncentivesTxRegistry from "./incentives/tx.registry";
import * as prismMintTxRegistry from "./mint/tx.registry";
import * as prismPgovTxRegistry from "./pgov/tx.registry";
import * as prismRefractorTxRegistry from "./refractor/tx.registry";
import * as prismTreasuryTxRegistry from "./treasury/tx.registry";
import * as prismYstakingTxRegistry from "./ystaking/tx.registry";
import * as prismAmmTxAmino from "./amm/tx.amino";
import * as prismAssetsTxAmino from "./assets/tx.amino";
import * as prismIcstakingTxAmino from "./icstaking/tx.amino";
import * as prismIncentivesTxAmino from "./incentives/tx.amino";
import * as prismMintTxAmino from "./mint/tx.amino";
import * as prismPgovTxAmino from "./pgov/tx.amino";
import * as prismRefractorTxAmino from "./refractor/tx.amino";
import * as prismTreasuryTxAmino from "./treasury/tx.amino";
import * as prismYstakingTxAmino from "./ystaking/tx.amino";
export const prismAminoConverters = {
  ...prismAmmTxAmino.AminoConverter,
  ...prismAssetsTxAmino.AminoConverter,
  ...prismIcstakingTxAmino.AminoConverter,
  ...prismIncentivesTxAmino.AminoConverter,
  ...prismMintTxAmino.AminoConverter,
  ...prismPgovTxAmino.AminoConverter,
  ...prismRefractorTxAmino.AminoConverter,
  ...prismTreasuryTxAmino.AminoConverter,
  ...prismYstakingTxAmino.AminoConverter
};
export const prismProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...prismAmmTxRegistry.registry, ...prismAssetsTxRegistry.registry, ...prismIcstakingTxRegistry.registry, ...prismIncentivesTxRegistry.registry, ...prismMintTxRegistry.registry, ...prismPgovTxRegistry.registry, ...prismRefractorTxRegistry.registry, ...prismTreasuryTxRegistry.registry, ...prismYstakingTxRegistry.registry];
export const getSigningPrismClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...prismProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...prismAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningPrismClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningPrismClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};