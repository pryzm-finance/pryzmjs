/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.assets";

export interface WhitelistedAsset {
  refractable: boolean;
  baseDenom: string;
  port: string;
  channel: string;
  cAssetBaseDenom: string;
  maturityLevelsPerYear: number;
  maturityLevelYears: number;
}

const baseWhitelistedAsset: object = {
  refractable: false,
  baseDenom: "",
  port: "",
  channel: "",
  cAssetBaseDenom: "",
  maturityLevelsPerYear: 0,
  maturityLevelYears: 0,
};

export const WhitelistedAsset = {
  encode(message: WhitelistedAsset, writer: Writer = Writer.create()): Writer {
    if (message.refractable === true) {
      writer.uint32(8).bool(message.refractable);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    if (message.port !== "") {
      writer.uint32(26).string(message.port);
    }
    if (message.channel !== "") {
      writer.uint32(34).string(message.channel);
    }
    if (message.cAssetBaseDenom !== "") {
      writer.uint32(42).string(message.cAssetBaseDenom);
    }
    if (message.maturityLevelsPerYear !== 0) {
      writer.uint32(48).int32(message.maturityLevelsPerYear);
    }
    if (message.maturityLevelYears !== 0) {
      writer.uint32(56).int32(message.maturityLevelYears);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WhitelistedAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWhitelistedAsset } as WhitelistedAsset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refractable = reader.bool();
          break;
        case 2:
          message.baseDenom = reader.string();
          break;
        case 3:
          message.port = reader.string();
          break;
        case 4:
          message.channel = reader.string();
          break;
        case 5:
          message.cAssetBaseDenom = reader.string();
          break;
        case 6:
          message.maturityLevelsPerYear = reader.int32();
          break;
        case 7:
          message.maturityLevelYears = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WhitelistedAsset {
    const message = { ...baseWhitelistedAsset } as WhitelistedAsset;
    if (object.refractable !== undefined && object.refractable !== null) {
      message.refractable = Boolean(object.refractable);
    } else {
      message.refractable = false;
    }
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = String(object.baseDenom);
    } else {
      message.baseDenom = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = String(object.channel);
    } else {
      message.channel = "";
    }
    if (
      object.cAssetBaseDenom !== undefined &&
      object.cAssetBaseDenom !== null
    ) {
      message.cAssetBaseDenom = String(object.cAssetBaseDenom);
    } else {
      message.cAssetBaseDenom = "";
    }
    if (
      object.maturityLevelsPerYear !== undefined &&
      object.maturityLevelsPerYear !== null
    ) {
      message.maturityLevelsPerYear = Number(object.maturityLevelsPerYear);
    } else {
      message.maturityLevelsPerYear = 0;
    }
    if (
      object.maturityLevelYears !== undefined &&
      object.maturityLevelYears !== null
    ) {
      message.maturityLevelYears = Number(object.maturityLevelYears);
    } else {
      message.maturityLevelYears = 0;
    }
    return message;
  },

  toJSON(message: WhitelistedAsset): unknown {
    const obj: any = {};
    message.refractable !== undefined &&
      (obj.refractable = message.refractable);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.port !== undefined && (obj.port = message.port);
    message.channel !== undefined && (obj.channel = message.channel);
    message.cAssetBaseDenom !== undefined &&
      (obj.cAssetBaseDenom = message.cAssetBaseDenom);
    message.maturityLevelsPerYear !== undefined &&
      (obj.maturityLevelsPerYear = message.maturityLevelsPerYear);
    message.maturityLevelYears !== undefined &&
      (obj.maturityLevelYears = message.maturityLevelYears);
    return obj;
  },

  fromPartial(object: DeepPartial<WhitelistedAsset>): WhitelistedAsset {
    const message = { ...baseWhitelistedAsset } as WhitelistedAsset;
    if (object.refractable !== undefined && object.refractable !== null) {
      message.refractable = object.refractable;
    } else {
      message.refractable = false;
    }
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = object.baseDenom;
    } else {
      message.baseDenom = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    } else {
      message.channel = "";
    }
    if (
      object.cAssetBaseDenom !== undefined &&
      object.cAssetBaseDenom !== null
    ) {
      message.cAssetBaseDenom = object.cAssetBaseDenom;
    } else {
      message.cAssetBaseDenom = "";
    }
    if (
      object.maturityLevelsPerYear !== undefined &&
      object.maturityLevelsPerYear !== null
    ) {
      message.maturityLevelsPerYear = object.maturityLevelsPerYear;
    } else {
      message.maturityLevelsPerYear = 0;
    }
    if (
      object.maturityLevelYears !== undefined &&
      object.maturityLevelYears !== null
    ) {
      message.maturityLevelYears = object.maturityLevelYears;
    } else {
      message.maturityLevelYears = 0;
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
