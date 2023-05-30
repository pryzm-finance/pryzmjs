import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as prismcoreAmmTxRegistry from "../prismcore/amm/tx.registry";
import * as prismcoreAssetsTxRegistry from "../prismcore/assets/tx.registry";
import * as prismcoreIcqTxRegistry from "../prismcore/icq/tx.registry";
import * as prismcoreIcstakingTxRegistry from "../prismcore/icstaking/tx.registry";
import * as prismcoreMintTxRegistry from "../prismcore/mint/tx.registry";
import * as prismcorePgovTxRegistry from "../prismcore/pgov/tx.registry";
import * as prismcoreRefractorTxRegistry from "../prismcore/refractor/tx.registry";
import * as prismcoreTreasuryTxRegistry from "../prismcore/treasury/tx.registry";
import * as prismcoreYstakingTxRegistry from "../prismcore/ystaking/tx.registry";
import * as prismcoreAmmTxAmino from "../prismcore/amm/tx.amino";
import * as prismcoreAssetsTxAmino from "../prismcore/assets/tx.amino";
import * as prismcoreIcqTxAmino from "../prismcore/icq/tx.amino";
import * as prismcoreIcstakingTxAmino from "../prismcore/icstaking/tx.amino";
import * as prismcoreMintTxAmino from "../prismcore/mint/tx.amino";
import * as prismcorePgovTxAmino from "../prismcore/pgov/tx.amino";
import * as prismcoreRefractorTxAmino from "../prismcore/refractor/tx.amino";
import * as prismcoreTreasuryTxAmino from "../prismcore/treasury/tx.amino";
import * as prismcoreYstakingTxAmino from "../prismcore/ystaking/tx.amino";
export const prismfinanceAminoConverters = {
  ...prismcoreAmmTxAmino.AminoConverter,
  ...prismcoreAssetsTxAmino.AminoConverter,
  ...prismcoreIcqTxAmino.AminoConverter,
  ...prismcoreIcstakingTxAmino.AminoConverter,
  ...prismcoreMintTxAmino.AminoConverter,
  ...prismcorePgovTxAmino.AminoConverter,
  ...prismcoreRefractorTxAmino.AminoConverter,
  ...prismcoreTreasuryTxAmino.AminoConverter,
  ...prismcoreYstakingTxAmino.AminoConverter
};
export const prismfinanceProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...prismcoreAmmTxRegistry.registry, ...prismcoreAssetsTxRegistry.registry, ...prismcoreIcqTxRegistry.registry, ...prismcoreIcstakingTxRegistry.registry, ...prismcoreMintTxRegistry.registry, ...prismcorePgovTxRegistry.registry, ...prismcoreRefractorTxRegistry.registry, ...prismcoreTreasuryTxRegistry.registry, ...prismcoreYstakingTxRegistry.registry];
export const getSigningPrismfinanceClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...prismfinanceProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...prismfinanceAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningPrismfinanceClient = async ({
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
  } = getSigningPrismfinanceClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};