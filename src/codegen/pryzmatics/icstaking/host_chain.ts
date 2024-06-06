import { HostChainState, HostChainStateAmino, HostChainStateSDKType } from "../../pryzm/icstaking/v1/host_chain";
import { HostChain as HostChain1 } from "../../pryzm/icstaking/v1/host_chain";
import { HostChainAmino as HostChain1Amino } from "../../pryzm/icstaking/v1/host_chain";
import { HostChainSDKType as HostChain1SDKType } from "../../pryzm/icstaking/v1/host_chain";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface HostChain {
  hostChain: HostChain1;
  hostChainState: HostChainState;
  delegationRecommendedValidator: string;
  cAssetMarketCap?: string;
  cAssetApy?: string;
  assetInVault: string;
  error: string;
}
export interface HostChainProtoMsg {
  typeUrl: "/pryzmatics.icstaking.HostChain";
  value: Uint8Array;
}
export interface HostChainAmino {
  host_chain?: HostChain1Amino;
  host_chain_state?: HostChainStateAmino;
  delegation_recommended_validator?: string;
  c_asset_market_cap?: string;
  c_asset_apy?: string;
  asset_in_vault?: string;
  error?: string;
}
export interface HostChainAminoMsg {
  type: "/pryzmatics.icstaking.HostChain";
  value: HostChainAmino;
}
export interface HostChainSDKType {
  host_chain: HostChain1SDKType;
  host_chain_state: HostChainStateSDKType;
  delegation_recommended_validator: string;
  c_asset_market_cap?: string;
  c_asset_apy?: string;
  asset_in_vault: string;
  error: string;
}
function createBaseHostChain(): HostChain {
  return {
    hostChain: HostChain1.fromPartial({}),
    hostChainState: HostChainState.fromPartial({}),
    delegationRecommendedValidator: "",
    cAssetMarketCap: undefined,
    cAssetApy: undefined,
    assetInVault: "",
    error: ""
  };
}
export const HostChain = {
  typeUrl: "/pryzmatics.icstaking.HostChain",
  is(o: any): o is HostChain {
    return o && (o.$typeUrl === HostChain.typeUrl || HostChain1.is(o.hostChain) && HostChainState.is(o.hostChainState) && typeof o.delegationRecommendedValidator === "string" && typeof o.assetInVault === "string" && typeof o.error === "string");
  },
  isSDK(o: any): o is HostChainSDKType {
    return o && (o.$typeUrl === HostChain.typeUrl || HostChain1.isSDK(o.host_chain) && HostChainState.isSDK(o.host_chain_state) && typeof o.delegation_recommended_validator === "string" && typeof o.asset_in_vault === "string" && typeof o.error === "string");
  },
  isAmino(o: any): o is HostChainAmino {
    return o && (o.$typeUrl === HostChain.typeUrl || HostChain1.isAmino(o.host_chain) && HostChainState.isAmino(o.host_chain_state) && typeof o.delegation_recommended_validator === "string" && typeof o.asset_in_vault === "string" && typeof o.error === "string");
  },
  encode(message: HostChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== undefined) {
      HostChain1.encode(message.hostChain, writer.uint32(10).fork()).ldelim();
    }
    if (message.hostChainState !== undefined) {
      HostChainState.encode(message.hostChainState, writer.uint32(18).fork()).ldelim();
    }
    if (message.delegationRecommendedValidator !== "") {
      writer.uint32(26).string(message.delegationRecommendedValidator);
    }
    if (message.cAssetMarketCap !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.cAssetMarketCap, 18).atomics);
    }
    if (message.cAssetApy !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.cAssetApy, 18).atomics);
    }
    if (message.assetInVault !== "") {
      writer.uint32(50).string(message.assetInVault);
    }
    if (message.error !== "") {
      writer.uint32(58).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): HostChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = HostChain1.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.hostChainState = HostChainState.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.delegationRecommendedValidator = reader.string();
          break;
        case 4:
          message.cAssetMarketCap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.cAssetApy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.assetInVault = reader.string();
          break;
        case 7:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostChain {
    return {
      hostChain: isSet(object.hostChain) ? HostChain1.fromJSON(object.hostChain) : undefined,
      hostChainState: isSet(object.hostChainState) ? HostChainState.fromJSON(object.hostChainState) : undefined,
      delegationRecommendedValidator: isSet(object.delegationRecommendedValidator) ? String(object.delegationRecommendedValidator) : "",
      cAssetMarketCap: isSet(object.cAssetMarketCap) ? String(object.cAssetMarketCap) : undefined,
      cAssetApy: isSet(object.cAssetApy) ? String(object.cAssetApy) : undefined,
      assetInVault: isSet(object.assetInVault) ? String(object.assetInVault) : "",
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: HostChain): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain ? HostChain1.toJSON(message.hostChain) : undefined);
    message.hostChainState !== undefined && (obj.hostChainState = message.hostChainState ? HostChainState.toJSON(message.hostChainState) : undefined);
    message.delegationRecommendedValidator !== undefined && (obj.delegationRecommendedValidator = message.delegationRecommendedValidator);
    message.cAssetMarketCap !== undefined && (obj.cAssetMarketCap = message.cAssetMarketCap);
    message.cAssetApy !== undefined && (obj.cAssetApy = message.cAssetApy);
    message.assetInVault !== undefined && (obj.assetInVault = message.assetInVault);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<HostChain>): HostChain {
    const message = createBaseHostChain();
    message.hostChain = object.hostChain !== undefined && object.hostChain !== null ? HostChain1.fromPartial(object.hostChain) : undefined;
    message.hostChainState = object.hostChainState !== undefined && object.hostChainState !== null ? HostChainState.fromPartial(object.hostChainState) : undefined;
    message.delegationRecommendedValidator = object.delegationRecommendedValidator ?? "";
    message.cAssetMarketCap = object.cAssetMarketCap ?? undefined;
    message.cAssetApy = object.cAssetApy ?? undefined;
    message.assetInVault = object.assetInVault ?? "";
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: HostChainAmino): HostChain {
    const message = createBaseHostChain();
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = HostChain1.fromAmino(object.host_chain);
    }
    if (object.host_chain_state !== undefined && object.host_chain_state !== null) {
      message.hostChainState = HostChainState.fromAmino(object.host_chain_state);
    }
    if (object.delegation_recommended_validator !== undefined && object.delegation_recommended_validator !== null) {
      message.delegationRecommendedValidator = object.delegation_recommended_validator;
    }
    if (object.c_asset_market_cap !== undefined && object.c_asset_market_cap !== null) {
      message.cAssetMarketCap = object.c_asset_market_cap;
    }
    if (object.c_asset_apy !== undefined && object.c_asset_apy !== null) {
      message.cAssetApy = object.c_asset_apy;
    }
    if (object.asset_in_vault !== undefined && object.asset_in_vault !== null) {
      message.assetInVault = object.asset_in_vault;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: HostChain, useInterfaces: boolean = true): HostChainAmino {
    const obj: any = {};
    obj.host_chain = message.hostChain ? HostChain1.toAmino(message.hostChain, useInterfaces) : undefined;
    obj.host_chain_state = message.hostChainState ? HostChainState.toAmino(message.hostChainState, useInterfaces) : undefined;
    obj.delegation_recommended_validator = message.delegationRecommendedValidator === "" ? undefined : message.delegationRecommendedValidator;
    obj.c_asset_market_cap = padDecimal(message.cAssetMarketCap) === null ? undefined : padDecimal(message.cAssetMarketCap);
    obj.c_asset_apy = padDecimal(message.cAssetApy) === null ? undefined : padDecimal(message.cAssetApy);
    obj.asset_in_vault = message.assetInVault === "" ? undefined : message.assetInVault;
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: HostChainAminoMsg): HostChain {
    return HostChain.fromAmino(object.value);
  },
  fromProtoMsg(message: HostChainProtoMsg, useInterfaces: boolean = true): HostChain {
    return HostChain.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: HostChain): Uint8Array {
    return HostChain.encode(message).finish();
  },
  toProtoMsg(message: HostChain): HostChainProtoMsg {
    return {
      typeUrl: "/pryzmatics.icstaking.HostChain",
      value: HostChain.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(HostChain.typeUrl, HostChain);