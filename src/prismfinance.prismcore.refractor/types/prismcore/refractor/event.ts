/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.refractor";

export interface EventRefract {
  creator: string;
  cAmount: string;
  maturity: string;
  refractedPAmount: string;
  refractedYAmount: string;
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

export interface EventRefractorYieldDistribution {
  assetBaseDenom: string;
  totalYield: string;
  protocolFee: string;
  stakeYield: string;
  excessYield: string;
}

function createBaseEventRefract(): EventRefract {
  return { creator: "", cAmount: "", maturity: "", refractedPAmount: "", refractedYAmount: "", fee: "" };
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
      fee: isSet(object.fee) ? String(object.fee) : "",
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

  fromPartial<I extends Exact<DeepPartial<EventRefract>, I>>(object: I): EventRefract {
    const message = createBaseEventRefract();
    message.creator = object.creator ?? "";
    message.cAmount = object.cAmount ?? "";
    message.maturity = object.maturity ?? "";
    message.refractedPAmount = object.refractedPAmount ?? "";
    message.refractedYAmount = object.refractedYAmount ?? "";
    message.fee = object.fee ?? "";
    return message;
  },
};

function createBaseEventRedeem(): EventRedeem {
  return { creator: "", pAmount: "", yAmount: "", maturity: "", redeemedCAmount: "", fee: "" };
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
      fee: isSet(object.fee) ? String(object.fee) : "",
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

  fromPartial<I extends Exact<DeepPartial<EventRedeem>, I>>(object: I): EventRedeem {
    const message = createBaseEventRedeem();
    message.creator = object.creator ?? "";
    message.pAmount = object.pAmount ?? "";
    message.yAmount = object.yAmount ?? "";
    message.maturity = object.maturity ?? "";
    message.redeemedCAmount = object.redeemedCAmount ?? "";
    message.fee = object.fee ?? "";
    return message;
  },
};

function createBaseEventRefractorYieldDistribution(): EventRefractorYieldDistribution {
  return { assetBaseDenom: "", totalYield: "", protocolFee: "", stakeYield: "", excessYield: "" };
}

export const EventRefractorYieldDistribution = {
  encode(message: EventRefractorYieldDistribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetBaseDenom !== "") {
      writer.uint32(10).string(message.assetBaseDenom);
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
          message.assetBaseDenom = reader.string();
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
      assetBaseDenom: isSet(object.assetBaseDenom) ? String(object.assetBaseDenom) : "",
      totalYield: isSet(object.totalYield) ? String(object.totalYield) : "",
      protocolFee: isSet(object.protocolFee) ? String(object.protocolFee) : "",
      stakeYield: isSet(object.stakeYield) ? String(object.stakeYield) : "",
      excessYield: isSet(object.excessYield) ? String(object.excessYield) : "",
    };
  },

  toJSON(message: EventRefractorYieldDistribution): unknown {
    const obj: any = {};
    message.assetBaseDenom !== undefined && (obj.assetBaseDenom = message.assetBaseDenom);
    message.totalYield !== undefined && (obj.totalYield = message.totalYield);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee);
    message.stakeYield !== undefined && (obj.stakeYield = message.stakeYield);
    message.excessYield !== undefined && (obj.excessYield = message.excessYield);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRefractorYieldDistribution>, I>>(
    object: I,
  ): EventRefractorYieldDistribution {
    const message = createBaseEventRefractorYieldDistribution();
    message.assetBaseDenom = object.assetBaseDenom ?? "";
    message.totalYield = object.totalYield ?? "";
    message.protocolFee = object.protocolFee ?? "";
    message.stakeYield = object.stakeYield ?? "";
    message.excessYield = object.excessYield ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
