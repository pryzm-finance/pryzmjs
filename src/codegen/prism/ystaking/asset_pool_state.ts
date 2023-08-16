import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface AssetPoolState {
  assetId: string;
  bondedAmount: string;
  globalIndex: string;
}
export interface AssetPoolStateSDKType {
  asset_id: string;
  bonded_amount: string;
  global_index: string;
}
export interface AssetMaturityPoolState {
  assetId: string;
  maturitySymbol: string;
  active: boolean;
  bondedAmount: string;
  globalIndex?: string;
}
export interface AssetMaturityPoolStateSDKType {
  asset_id: string;
  maturity_symbol: string;
  active: boolean;
  bonded_amount: string;
  global_index?: string;
}
function createBaseAssetPoolState(): AssetPoolState {
  return {
    assetId: "",
    bondedAmount: "",
    globalIndex: ""
  };
}
export const AssetPoolState = {
  encode(message: AssetPoolState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.bondedAmount !== "") {
      writer.uint32(18).string(message.bondedAmount);
    }
    if (message.globalIndex !== "") {
      writer.uint32(26).string(message.globalIndex);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AssetPoolState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetPoolState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.bondedAmount = reader.string();
          break;
        case 3:
          message.globalIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AssetPoolState {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      bondedAmount: isSet(object.bondedAmount) ? String(object.bondedAmount) : "",
      globalIndex: isSet(object.globalIndex) ? String(object.globalIndex) : ""
    };
  },
  toJSON(message: AssetPoolState): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.bondedAmount !== undefined && (obj.bondedAmount = message.bondedAmount);
    message.globalIndex !== undefined && (obj.globalIndex = message.globalIndex);
    return obj;
  },
  fromPartial(object: Partial<AssetPoolState>): AssetPoolState {
    const message = createBaseAssetPoolState();
    message.assetId = object.assetId ?? "";
    message.bondedAmount = object.bondedAmount ?? "";
    message.globalIndex = object.globalIndex ?? "";
    return message;
  }
};
function createBaseAssetMaturityPoolState(): AssetMaturityPoolState {
  return {
    assetId: "",
    maturitySymbol: "",
    active: false,
    bondedAmount: "",
    globalIndex: undefined
  };
}
export const AssetMaturityPoolState = {
  encode(message: AssetMaturityPoolState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.maturitySymbol !== "") {
      writer.uint32(18).string(message.maturitySymbol);
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    if (message.bondedAmount !== "") {
      writer.uint32(34).string(message.bondedAmount);
    }
    if (message.globalIndex !== undefined) {
      writer.uint32(42).string(message.globalIndex);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AssetMaturityPoolState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMaturityPoolState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.maturitySymbol = reader.string();
          break;
        case 3:
          message.active = reader.bool();
          break;
        case 4:
          message.bondedAmount = reader.string();
          break;
        case 5:
          message.globalIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AssetMaturityPoolState {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      maturitySymbol: isSet(object.maturitySymbol) ? String(object.maturitySymbol) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
      bondedAmount: isSet(object.bondedAmount) ? String(object.bondedAmount) : "",
      globalIndex: isSet(object.globalIndex) ? String(object.globalIndex) : undefined
    };
  },
  toJSON(message: AssetMaturityPoolState): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.maturitySymbol !== undefined && (obj.maturitySymbol = message.maturitySymbol);
    message.active !== undefined && (obj.active = message.active);
    message.bondedAmount !== undefined && (obj.bondedAmount = message.bondedAmount);
    message.globalIndex !== undefined && (obj.globalIndex = message.globalIndex);
    return obj;
  },
  fromPartial(object: Partial<AssetMaturityPoolState>): AssetMaturityPoolState {
    const message = createBaseAssetMaturityPoolState();
    message.assetId = object.assetId ?? "";
    message.maturitySymbol = object.maturitySymbol ?? "";
    message.active = object.active ?? false;
    message.bondedAmount = object.bondedAmount ?? "";
    message.globalIndex = object.globalIndex ?? undefined;
    return message;
  }
};