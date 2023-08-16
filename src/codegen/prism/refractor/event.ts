import { AssetState, AssetStateSDKType } from "./asset_state";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface EventRefract {
  creator: string;
  cAmount: string;
  maturity: string;
  refractedPAmount: string;
  refractedYAmount: string;
  fee: string;
}
export interface EventRefractSDKType {
  creator: string;
  c_amount: string;
  maturity: string;
  refracted_p_amount: string;
  refracted_y_amount: string;
  fee: string;
}
export interface EventRedeem {
  creator: string;
  pAmount: string;
  yAmount: string;
  maturity: string;
  redeemedCAmount: string;
  fee: string;
}
export interface EventRedeemSDKType {
  creator: string;
  p_amount: string;
  y_amount: string;
  maturity: string;
  redeemed_c_amount: string;
  fee: string;
}
export interface EventRefractorYieldDistribution {
  assetId: string;
  totalYield: string;
  protocolFee: string;
  stakeYield: string;
  excessYield: string;
}
export interface EventRefractorYieldDistributionSDKType {
  asset_id: string;
  total_yield: string;
  protocol_fee: string;
  stake_yield: string;
  excess_yield: string;
}
export interface EventSetAssetState {
  assetState: AssetState;
}
export interface EventSetAssetStateSDKType {
  asset_state: AssetStateSDKType;
}
function createBaseEventRefract(): EventRefract {
  return {
    creator: "",
    cAmount: "",
    maturity: "",
    refractedPAmount: "",
    refractedYAmount: "",
    fee: ""
  };
}
export const EventRefract = {
  encode(message: EventRefract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cAmount !== "") {
      writer.uint32(18).string(message.cAmount);
    }
    if (message.maturity !== "") {
      writer.uint32(26).string(message.maturity);
    }
    if (message.refractedPAmount !== "") {
      writer.uint32(34).string(message.refractedPAmount);
    }
    if (message.refractedYAmount !== "") {
      writer.uint32(42).string(message.refractedYAmount);
    }
    if (message.fee !== "") {
      writer.uint32(50).string(message.fee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventRefract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRefract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cAmount = reader.string();
          break;
        case 3:
          message.maturity = reader.string();
          break;
        case 4:
          message.refractedPAmount = reader.string();
          break;
        case 5:
          message.refractedYAmount = reader.string();
          break;
        case 6:
          message.fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRefract {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cAmount: isSet(object.cAmount) ? String(object.cAmount) : "",
      maturity: isSet(object.maturity) ? String(object.maturity) : "",
      refractedPAmount: isSet(object.refractedPAmount) ? String(object.refractedPAmount) : "",
      refractedYAmount: isSet(object.refractedYAmount) ? String(object.refractedYAmount) : "",
      fee: isSet(object.fee) ? String(object.fee) : ""
    };
  },
  toJSON(message: EventRefract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cAmount !== undefined && (obj.cAmount = message.cAmount);
    message.maturity !== undefined && (obj.maturity = message.maturity);
    message.refractedPAmount !== undefined && (obj.refractedPAmount = message.refractedPAmount);
    message.refractedYAmount !== undefined && (obj.refractedYAmount = message.refractedYAmount);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },
  fromPartial(object: Partial<EventRefract>): EventRefract {
    const message = createBaseEventRefract();
    message.creator = object.creator ?? "";
    message.cAmount = object.cAmount ?? "";
    message.maturity = object.maturity ?? "";
    message.refractedPAmount = object.refractedPAmount ?? "";
    message.refractedYAmount = object.refractedYAmount ?? "";
    message.fee = object.fee ?? "";
    return message;
  }
};
function createBaseEventRedeem(): EventRedeem {
  return {
    creator: "",
    pAmount: "",
    yAmount: "",
    maturity: "",
    redeemedCAmount: "",
    fee: ""
  };
}
export const EventRedeem = {
  encode(message: EventRedeem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pAmount !== "") {
      writer.uint32(18).string(message.pAmount);
    }
    if (message.yAmount !== "") {
      writer.uint32(26).string(message.yAmount);
    }
    if (message.maturity !== "") {
      writer.uint32(34).string(message.maturity);
    }
    if (message.redeemedCAmount !== "") {
      writer.uint32(42).string(message.redeemedCAmount);
    }
    if (message.fee !== "") {
      writer.uint32(50).string(message.fee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventRedeem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRedeem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pAmount = reader.string();
          break;
        case 3:
          message.yAmount = reader.string();
          break;
        case 4:
          message.maturity = reader.string();
          break;
        case 5:
          message.redeemedCAmount = reader.string();
          break;
        case 6:
          message.fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRedeem {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pAmount: isSet(object.pAmount) ? String(object.pAmount) : "",
      yAmount: isSet(object.yAmount) ? String(object.yAmount) : "",
      maturity: isSet(object.maturity) ? String(object.maturity) : "",
      redeemedCAmount: isSet(object.redeemedCAmount) ? String(object.redeemedCAmount) : "",
      fee: isSet(object.fee) ? String(object.fee) : ""
    };
  },
  toJSON(message: EventRedeem): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pAmount !== undefined && (obj.pAmount = message.pAmount);
    message.yAmount !== undefined && (obj.yAmount = message.yAmount);
    message.maturity !== undefined && (obj.maturity = message.maturity);
    message.redeemedCAmount !== undefined && (obj.redeemedCAmount = message.redeemedCAmount);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },
  fromPartial(object: Partial<EventRedeem>): EventRedeem {
    const message = createBaseEventRedeem();
    message.creator = object.creator ?? "";
    message.pAmount = object.pAmount ?? "";
    message.yAmount = object.yAmount ?? "";
    message.maturity = object.maturity ?? "";
    message.redeemedCAmount = object.redeemedCAmount ?? "";
    message.fee = object.fee ?? "";
    return message;
  }
};
function createBaseEventRefractorYieldDistribution(): EventRefractorYieldDistribution {
  return {
    assetId: "",
    totalYield: "",
    protocolFee: "",
    stakeYield: "",
    excessYield: ""
  };
}
export const EventRefractorYieldDistribution = {
  encode(message: EventRefractorYieldDistribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.totalYield !== "") {
      writer.uint32(18).string(message.totalYield);
    }
    if (message.protocolFee !== "") {
      writer.uint32(26).string(message.protocolFee);
    }
    if (message.stakeYield !== "") {
      writer.uint32(34).string(message.stakeYield);
    }
    if (message.excessYield !== "") {
      writer.uint32(42).string(message.excessYield);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventRefractorYieldDistribution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRefractorYieldDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.totalYield = reader.string();
          break;
        case 3:
          message.protocolFee = reader.string();
          break;
        case 4:
          message.stakeYield = reader.string();
          break;
        case 5:
          message.excessYield = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRefractorYieldDistribution {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      totalYield: isSet(object.totalYield) ? String(object.totalYield) : "",
      protocolFee: isSet(object.protocolFee) ? String(object.protocolFee) : "",
      stakeYield: isSet(object.stakeYield) ? String(object.stakeYield) : "",
      excessYield: isSet(object.excessYield) ? String(object.excessYield) : ""
    };
  },
  toJSON(message: EventRefractorYieldDistribution): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.totalYield !== undefined && (obj.totalYield = message.totalYield);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee);
    message.stakeYield !== undefined && (obj.stakeYield = message.stakeYield);
    message.excessYield !== undefined && (obj.excessYield = message.excessYield);
    return obj;
  },
  fromPartial(object: Partial<EventRefractorYieldDistribution>): EventRefractorYieldDistribution {
    const message = createBaseEventRefractorYieldDistribution();
    message.assetId = object.assetId ?? "";
    message.totalYield = object.totalYield ?? "";
    message.protocolFee = object.protocolFee ?? "";
    message.stakeYield = object.stakeYield ?? "";
    message.excessYield = object.excessYield ?? "";
    return message;
  }
};
function createBaseEventSetAssetState(): EventSetAssetState {
  return {
    assetState: AssetState.fromPartial({})
  };
}
export const EventSetAssetState = {
  encode(message: EventSetAssetState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetState !== undefined) {
      AssetState.encode(message.assetState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetAssetState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetAssetState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetState = AssetState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetAssetState {
    return {
      assetState: isSet(object.assetState) ? AssetState.fromJSON(object.assetState) : undefined
    };
  },
  toJSON(message: EventSetAssetState): unknown {
    const obj: any = {};
    message.assetState !== undefined && (obj.assetState = message.assetState ? AssetState.toJSON(message.assetState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetAssetState>): EventSetAssetState {
    const message = createBaseEventSetAssetState();
    message.assetState = object.assetState !== undefined && object.assetState !== null ? AssetState.fromPartial(object.assetState) : undefined;
    return message;
  }
};