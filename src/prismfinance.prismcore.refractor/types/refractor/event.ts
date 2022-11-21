/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.refractor";

export interface EventRefract {
  creator: string;
  cAmount: string;
  maturity: string;
  refractedPAmount: string;
  refractedYAmount: string;
}

export interface EventRedeem {
  creator: string;
  pAmount: string;
  yAmount: string;
  maturity: string;
  redeemedCAmount: string;
}

export interface EventRefractorYieldDistribution {
  assetBaseDenom: string;
  totalYield: string;
  protocolFee: string;
  stakeYield: string;
  excessYield: string;
}

const baseEventRefract: object = {
  creator: "",
  cAmount: "",
  maturity: "",
  refractedPAmount: "",
  refractedYAmount: "",
};

export const EventRefract = {
  encode(message: EventRefract, writer: Writer = Writer.create()): Writer {
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
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventRefract {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventRefract } as EventRefract;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRefract {
    const message = { ...baseEventRefract } as EventRefract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.cAmount !== undefined && object.cAmount !== null) {
      message.cAmount = String(object.cAmount);
    } else {
      message.cAmount = "";
    }
    if (object.maturity !== undefined && object.maturity !== null) {
      message.maturity = String(object.maturity);
    } else {
      message.maturity = "";
    }
    if (
      object.refractedPAmount !== undefined &&
      object.refractedPAmount !== null
    ) {
      message.refractedPAmount = String(object.refractedPAmount);
    } else {
      message.refractedPAmount = "";
    }
    if (
      object.refractedYAmount !== undefined &&
      object.refractedYAmount !== null
    ) {
      message.refractedYAmount = String(object.refractedYAmount);
    } else {
      message.refractedYAmount = "";
    }
    return message;
  },

  toJSON(message: EventRefract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cAmount !== undefined && (obj.cAmount = message.cAmount);
    message.maturity !== undefined && (obj.maturity = message.maturity);
    message.refractedPAmount !== undefined &&
      (obj.refractedPAmount = message.refractedPAmount);
    message.refractedYAmount !== undefined &&
      (obj.refractedYAmount = message.refractedYAmount);
    return obj;
  },

  fromPartial(object: DeepPartial<EventRefract>): EventRefract {
    const message = { ...baseEventRefract } as EventRefract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.cAmount !== undefined && object.cAmount !== null) {
      message.cAmount = object.cAmount;
    } else {
      message.cAmount = "";
    }
    if (object.maturity !== undefined && object.maturity !== null) {
      message.maturity = object.maturity;
    } else {
      message.maturity = "";
    }
    if (
      object.refractedPAmount !== undefined &&
      object.refractedPAmount !== null
    ) {
      message.refractedPAmount = object.refractedPAmount;
    } else {
      message.refractedPAmount = "";
    }
    if (
      object.refractedYAmount !== undefined &&
      object.refractedYAmount !== null
    ) {
      message.refractedYAmount = object.refractedYAmount;
    } else {
      message.refractedYAmount = "";
    }
    return message;
  },
};

const baseEventRedeem: object = {
  creator: "",
  pAmount: "",
  yAmount: "",
  maturity: "",
  redeemedCAmount: "",
};

export const EventRedeem = {
  encode(message: EventRedeem, writer: Writer = Writer.create()): Writer {
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
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventRedeem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventRedeem } as EventRedeem;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRedeem {
    const message = { ...baseEventRedeem } as EventRedeem;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.pAmount !== undefined && object.pAmount !== null) {
      message.pAmount = String(object.pAmount);
    } else {
      message.pAmount = "";
    }
    if (object.yAmount !== undefined && object.yAmount !== null) {
      message.yAmount = String(object.yAmount);
    } else {
      message.yAmount = "";
    }
    if (object.maturity !== undefined && object.maturity !== null) {
      message.maturity = String(object.maturity);
    } else {
      message.maturity = "";
    }
    if (
      object.redeemedCAmount !== undefined &&
      object.redeemedCAmount !== null
    ) {
      message.redeemedCAmount = String(object.redeemedCAmount);
    } else {
      message.redeemedCAmount = "";
    }
    return message;
  },

  toJSON(message: EventRedeem): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pAmount !== undefined && (obj.pAmount = message.pAmount);
    message.yAmount !== undefined && (obj.yAmount = message.yAmount);
    message.maturity !== undefined && (obj.maturity = message.maturity);
    message.redeemedCAmount !== undefined &&
      (obj.redeemedCAmount = message.redeemedCAmount);
    return obj;
  },

  fromPartial(object: DeepPartial<EventRedeem>): EventRedeem {
    const message = { ...baseEventRedeem } as EventRedeem;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.pAmount !== undefined && object.pAmount !== null) {
      message.pAmount = object.pAmount;
    } else {
      message.pAmount = "";
    }
    if (object.yAmount !== undefined && object.yAmount !== null) {
      message.yAmount = object.yAmount;
    } else {
      message.yAmount = "";
    }
    if (object.maturity !== undefined && object.maturity !== null) {
      message.maturity = object.maturity;
    } else {
      message.maturity = "";
    }
    if (
      object.redeemedCAmount !== undefined &&
      object.redeemedCAmount !== null
    ) {
      message.redeemedCAmount = object.redeemedCAmount;
    } else {
      message.redeemedCAmount = "";
    }
    return message;
  },
};

const baseEventRefractorYieldDistribution: object = {
  assetBaseDenom: "",
  totalYield: "",
  protocolFee: "",
  stakeYield: "",
  excessYield: "",
};

export const EventRefractorYieldDistribution = {
  encode(
    message: EventRefractorYieldDistribution,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventRefractorYieldDistribution {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventRefractorYieldDistribution,
    } as EventRefractorYieldDistribution;
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
    const message = {
      ...baseEventRefractorYieldDistribution,
    } as EventRefractorYieldDistribution;
    if (object.assetBaseDenom !== undefined && object.assetBaseDenom !== null) {
      message.assetBaseDenom = String(object.assetBaseDenom);
    } else {
      message.assetBaseDenom = "";
    }
    if (object.totalYield !== undefined && object.totalYield !== null) {
      message.totalYield = String(object.totalYield);
    } else {
      message.totalYield = "";
    }
    if (object.protocolFee !== undefined && object.protocolFee !== null) {
      message.protocolFee = String(object.protocolFee);
    } else {
      message.protocolFee = "";
    }
    if (object.stakeYield !== undefined && object.stakeYield !== null) {
      message.stakeYield = String(object.stakeYield);
    } else {
      message.stakeYield = "";
    }
    if (object.excessYield !== undefined && object.excessYield !== null) {
      message.excessYield = String(object.excessYield);
    } else {
      message.excessYield = "";
    }
    return message;
  },

  toJSON(message: EventRefractorYieldDistribution): unknown {
    const obj: any = {};
    message.assetBaseDenom !== undefined &&
      (obj.assetBaseDenom = message.assetBaseDenom);
    message.totalYield !== undefined && (obj.totalYield = message.totalYield);
    message.protocolFee !== undefined &&
      (obj.protocolFee = message.protocolFee);
    message.stakeYield !== undefined && (obj.stakeYield = message.stakeYield);
    message.excessYield !== undefined &&
      (obj.excessYield = message.excessYield);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventRefractorYieldDistribution>
  ): EventRefractorYieldDistribution {
    const message = {
      ...baseEventRefractorYieldDistribution,
    } as EventRefractorYieldDistribution;
    if (object.assetBaseDenom !== undefined && object.assetBaseDenom !== null) {
      message.assetBaseDenom = object.assetBaseDenom;
    } else {
      message.assetBaseDenom = "";
    }
    if (object.totalYield !== undefined && object.totalYield !== null) {
      message.totalYield = object.totalYield;
    } else {
      message.totalYield = "";
    }
    if (object.protocolFee !== undefined && object.protocolFee !== null) {
      message.protocolFee = object.protocolFee;
    } else {
      message.protocolFee = "";
    }
    if (object.stakeYield !== undefined && object.stakeYield !== null) {
      message.stakeYield = object.stakeYield;
    } else {
      message.stakeYield = "";
    }
    if (object.excessYield !== undefined && object.excessYield !== null) {
      message.excessYield = object.excessYield;
    } else {
      message.excessYield = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
