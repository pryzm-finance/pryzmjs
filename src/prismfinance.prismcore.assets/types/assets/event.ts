/* eslint-disable */
import { WhitelistedAsset } from "../assets/whitelisted_asset";
import { MaturityLevel } from "../assets/maturity_level";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.assets";

export interface EventWhitelistAsset {
  whitelistedAsset: WhitelistedAsset | undefined;
}

export interface EventAddMaturityLevel {
  maturityLevel: MaturityLevel | undefined;
}

export interface EventDeactivateMaturityLevel {
  maturityLevel: MaturityLevel | undefined;
}

export interface EventUpdateMaturityParams {
  baseDenom: string;
  levelsPerYear: number;
  years: number;
}

export interface EventDelistAsset {
  baseDenom: string;
}

const baseEventWhitelistAsset: object = {};

export const EventWhitelistAsset = {
  encode(
    message: EventWhitelistAsset,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.whitelistedAsset !== undefined) {
      WhitelistedAsset.encode(
        message.whitelistedAsset,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventWhitelistAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventWhitelistAsset } as EventWhitelistAsset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistedAsset = WhitelistedAsset.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventWhitelistAsset {
    const message = { ...baseEventWhitelistAsset } as EventWhitelistAsset;
    if (
      object.whitelistedAsset !== undefined &&
      object.whitelistedAsset !== null
    ) {
      message.whitelistedAsset = WhitelistedAsset.fromJSON(
        object.whitelistedAsset
      );
    } else {
      message.whitelistedAsset = undefined;
    }
    return message;
  },

  toJSON(message: EventWhitelistAsset): unknown {
    const obj: any = {};
    message.whitelistedAsset !== undefined &&
      (obj.whitelistedAsset = message.whitelistedAsset
        ? WhitelistedAsset.toJSON(message.whitelistedAsset)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<EventWhitelistAsset>): EventWhitelistAsset {
    const message = { ...baseEventWhitelistAsset } as EventWhitelistAsset;
    if (
      object.whitelistedAsset !== undefined &&
      object.whitelistedAsset !== null
    ) {
      message.whitelistedAsset = WhitelistedAsset.fromPartial(
        object.whitelistedAsset
      );
    } else {
      message.whitelistedAsset = undefined;
    }
    return message;
  },
};

const baseEventAddMaturityLevel: object = {};

export const EventAddMaturityLevel = {
  encode(
    message: EventAddMaturityLevel,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.maturityLevel !== undefined) {
      MaturityLevel.encode(
        message.maturityLevel,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventAddMaturityLevel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventAddMaturityLevel } as EventAddMaturityLevel;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maturityLevel = MaturityLevel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventAddMaturityLevel {
    const message = { ...baseEventAddMaturityLevel } as EventAddMaturityLevel;
    if (object.maturityLevel !== undefined && object.maturityLevel !== null) {
      message.maturityLevel = MaturityLevel.fromJSON(object.maturityLevel);
    } else {
      message.maturityLevel = undefined;
    }
    return message;
  },

  toJSON(message: EventAddMaturityLevel): unknown {
    const obj: any = {};
    message.maturityLevel !== undefined &&
      (obj.maturityLevel = message.maturityLevel
        ? MaturityLevel.toJSON(message.maturityLevel)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventAddMaturityLevel>
  ): EventAddMaturityLevel {
    const message = { ...baseEventAddMaturityLevel } as EventAddMaturityLevel;
    if (object.maturityLevel !== undefined && object.maturityLevel !== null) {
      message.maturityLevel = MaturityLevel.fromPartial(object.maturityLevel);
    } else {
      message.maturityLevel = undefined;
    }
    return message;
  },
};

const baseEventDeactivateMaturityLevel: object = {};

export const EventDeactivateMaturityLevel = {
  encode(
    message: EventDeactivateMaturityLevel,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.maturityLevel !== undefined) {
      MaturityLevel.encode(
        message.maturityLevel,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventDeactivateMaturityLevel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventDeactivateMaturityLevel,
    } as EventDeactivateMaturityLevel;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maturityLevel = MaturityLevel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDeactivateMaturityLevel {
    const message = {
      ...baseEventDeactivateMaturityLevel,
    } as EventDeactivateMaturityLevel;
    if (object.maturityLevel !== undefined && object.maturityLevel !== null) {
      message.maturityLevel = MaturityLevel.fromJSON(object.maturityLevel);
    } else {
      message.maturityLevel = undefined;
    }
    return message;
  },

  toJSON(message: EventDeactivateMaturityLevel): unknown {
    const obj: any = {};
    message.maturityLevel !== undefined &&
      (obj.maturityLevel = message.maturityLevel
        ? MaturityLevel.toJSON(message.maturityLevel)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventDeactivateMaturityLevel>
  ): EventDeactivateMaturityLevel {
    const message = {
      ...baseEventDeactivateMaturityLevel,
    } as EventDeactivateMaturityLevel;
    if (object.maturityLevel !== undefined && object.maturityLevel !== null) {
      message.maturityLevel = MaturityLevel.fromPartial(object.maturityLevel);
    } else {
      message.maturityLevel = undefined;
    }
    return message;
  },
};

const baseEventUpdateMaturityParams: object = {
  baseDenom: "",
  levelsPerYear: 0,
  years: 0,
};

export const EventUpdateMaturityParams = {
  encode(
    message: EventUpdateMaturityParams,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.levelsPerYear !== 0) {
      writer.uint32(16).int32(message.levelsPerYear);
    }
    if (message.years !== 0) {
      writer.uint32(24).int32(message.years);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventUpdateMaturityParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventUpdateMaturityParams,
    } as EventUpdateMaturityParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        case 2:
          message.levelsPerYear = reader.int32();
          break;
        case 3:
          message.years = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateMaturityParams {
    const message = {
      ...baseEventUpdateMaturityParams,
    } as EventUpdateMaturityParams;
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = String(object.baseDenom);
    } else {
      message.baseDenom = "";
    }
    if (object.levelsPerYear !== undefined && object.levelsPerYear !== null) {
      message.levelsPerYear = Number(object.levelsPerYear);
    } else {
      message.levelsPerYear = 0;
    }
    if (object.years !== undefined && object.years !== null) {
      message.years = Number(object.years);
    } else {
      message.years = 0;
    }
    return message;
  },

  toJSON(message: EventUpdateMaturityParams): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.levelsPerYear !== undefined &&
      (obj.levelsPerYear = message.levelsPerYear);
    message.years !== undefined && (obj.years = message.years);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventUpdateMaturityParams>
  ): EventUpdateMaturityParams {
    const message = {
      ...baseEventUpdateMaturityParams,
    } as EventUpdateMaturityParams;
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = object.baseDenom;
    } else {
      message.baseDenom = "";
    }
    if (object.levelsPerYear !== undefined && object.levelsPerYear !== null) {
      message.levelsPerYear = object.levelsPerYear;
    } else {
      message.levelsPerYear = 0;
    }
    if (object.years !== undefined && object.years !== null) {
      message.years = object.years;
    } else {
      message.years = 0;
    }
    return message;
  },
};

const baseEventDelistAsset: object = { baseDenom: "" };

export const EventDelistAsset = {
  encode(message: EventDelistAsset, writer: Writer = Writer.create()): Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventDelistAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventDelistAsset } as EventDelistAsset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDelistAsset {
    const message = { ...baseEventDelistAsset } as EventDelistAsset;
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = String(object.baseDenom);
    } else {
      message.baseDenom = "";
    }
    return message;
  },

  toJSON(message: EventDelistAsset): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<EventDelistAsset>): EventDelistAsset {
    const message = { ...baseEventDelistAsset } as EventDelistAsset;
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = object.baseDenom;
    } else {
      message.baseDenom = "";
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
