import { HostChain as HostChain1 } from "../../pryzm/icstaking/v1/host_chain";
import { HostChainSDKType as HostChain1SDKType } from "../../pryzm/icstaking/v1/host_chain";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export interface HostChain {
  hostChain: HostChain1;
  cAssetMarketCap?: string;
  cAssetApy?: string;
  assetInVault: string;
  error: string;
}
export interface HostChainSDKType {
  host_chain: HostChain1SDKType;
  c_asset_market_cap?: string;
  c_asset_apy?: string;
  asset_in_vault: string;
  error: string;
}
function createBaseHostChain(): HostChain {
  return {
    hostChain: HostChain1.fromPartial({}),
    cAssetMarketCap: undefined,
    cAssetApy: undefined,
    assetInVault: "",
    error: ""
  };
}
export const HostChain = {
  encode(message: HostChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== undefined) {
      HostChain1.encode(message.hostChain, writer.uint32(10).fork()).ldelim();
    }
    if (message.cAssetMarketCap !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.cAssetMarketCap, 18).atomics);
    }
    if (message.cAssetApy !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.cAssetApy, 18).atomics);
    }
    if (message.assetInVault !== "") {
      writer.uint32(34).string(message.assetInVault);
    }
    if (message.error !== "") {
      writer.uint32(42).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = HostChain1.decode(reader, reader.uint32());
          break;
        case 2:
          message.cAssetMarketCap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.cAssetApy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.assetInVault = reader.string();
          break;
        case 5:
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
      cAssetMarketCap: isSet(object.cAssetMarketCap) ? String(object.cAssetMarketCap) : undefined,
      cAssetApy: isSet(object.cAssetApy) ? String(object.cAssetApy) : undefined,
      assetInVault: isSet(object.assetInVault) ? String(object.assetInVault) : "",
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: HostChain): unknown {
    const obj: any = {};
    message.hostChain !== undefined && (obj.hostChain = message.hostChain ? HostChain1.toJSON(message.hostChain) : undefined);
    message.cAssetMarketCap !== undefined && (obj.cAssetMarketCap = message.cAssetMarketCap);
    message.cAssetApy !== undefined && (obj.cAssetApy = message.cAssetApy);
    message.assetInVault !== undefined && (obj.assetInVault = message.assetInVault);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<HostChain>): HostChain {
    const message = createBaseHostChain();
    message.hostChain = object.hostChain !== undefined && object.hostChain !== null ? HostChain1.fromPartial(object.hostChain) : undefined;
    message.cAssetMarketCap = object.cAssetMarketCap ?? undefined;
    message.cAssetApy = object.cAssetApy ?? undefined;
    message.assetInVault = object.assetInVault ?? "";
    message.error = object.error ?? "";
    return message;
  }
};