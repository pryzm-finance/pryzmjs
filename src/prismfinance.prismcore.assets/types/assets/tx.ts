/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { WhitelistedAsset } from "../assets/whitelisted_asset";

export const protobufPackage = "prismfinance.prismcore.assets";

export interface MsgWhitelistAsset {
  authority: string;
  whitelistedAsset: WhitelistedAsset | undefined;
}

export interface MsgWhitelistAssetResponse {}

export interface MsgDelistAsset {
  authority: string;
  baseDenom: string;
}

export interface MsgDelistAssetResponse {}

export interface MsgUpdateMaturityParams {
  creator: string;
  levelsPerYear: number;
  years: number;
  baseDenom: string;
}

export interface MsgUpdateMaturityParamsResponse {}

const baseMsgWhitelistAsset: object = { authority: "" };

export const MsgWhitelistAsset = {
  encode(message: MsgWhitelistAsset, writer: Writer = Writer.create()): Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.whitelistedAsset !== undefined) {
      WhitelistedAsset.encode(
        message.whitelistedAsset,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWhitelistAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWhitelistAsset } as MsgWhitelistAsset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
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

  fromJSON(object: any): MsgWhitelistAsset {
    const message = { ...baseMsgWhitelistAsset } as MsgWhitelistAsset;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
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

  toJSON(message: MsgWhitelistAsset): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.whitelistedAsset !== undefined &&
      (obj.whitelistedAsset = message.whitelistedAsset
        ? WhitelistedAsset.toJSON(message.whitelistedAsset)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWhitelistAsset>): MsgWhitelistAsset {
    const message = { ...baseMsgWhitelistAsset } as MsgWhitelistAsset;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
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

const baseMsgWhitelistAssetResponse: object = {};

export const MsgWhitelistAssetResponse = {
  encode(
    _: MsgWhitelistAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgWhitelistAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWhitelistAssetResponse,
    } as MsgWhitelistAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWhitelistAssetResponse {
    const message = {
      ...baseMsgWhitelistAssetResponse,
    } as MsgWhitelistAssetResponse;
    return message;
  },

  toJSON(_: MsgWhitelistAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWhitelistAssetResponse>
  ): MsgWhitelistAssetResponse {
    const message = {
      ...baseMsgWhitelistAssetResponse,
    } as MsgWhitelistAssetResponse;
    return message;
  },
};

const baseMsgDelistAsset: object = { authority: "", baseDenom: "" };

export const MsgDelistAsset = {
  encode(message: MsgDelistAsset, writer: Writer = Writer.create()): Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDelistAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDelistAsset } as MsgDelistAsset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.baseDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelistAsset {
    const message = { ...baseMsgDelistAsset } as MsgDelistAsset;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = String(object.baseDenom);
    } else {
      message.baseDenom = "";
    }
    return message;
  },

  toJSON(message: MsgDelistAsset): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDelistAsset>): MsgDelistAsset {
    const message = { ...baseMsgDelistAsset } as MsgDelistAsset;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = object.baseDenom;
    } else {
      message.baseDenom = "";
    }
    return message;
  },
};

const baseMsgDelistAssetResponse: object = {};

export const MsgDelistAssetResponse = {
  encode(_: MsgDelistAssetResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDelistAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDelistAssetResponse } as MsgDelistAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDelistAssetResponse {
    const message = { ...baseMsgDelistAssetResponse } as MsgDelistAssetResponse;
    return message;
  },

  toJSON(_: MsgDelistAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDelistAssetResponse>): MsgDelistAssetResponse {
    const message = { ...baseMsgDelistAssetResponse } as MsgDelistAssetResponse;
    return message;
  },
};

const baseMsgUpdateMaturityParams: object = {
  creator: "",
  levelsPerYear: 0,
  years: 0,
  baseDenom: "",
};

export const MsgUpdateMaturityParams = {
  encode(
    message: MsgUpdateMaturityParams,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.levelsPerYear !== 0) {
      writer.uint32(16).int32(message.levelsPerYear);
    }
    if (message.years !== 0) {
      writer.uint32(24).int32(message.years);
    }
    if (message.baseDenom !== "") {
      writer.uint32(34).string(message.baseDenom);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMaturityParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMaturityParams,
    } as MsgUpdateMaturityParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.levelsPerYear = reader.int32();
          break;
        case 3:
          message.years = reader.int32();
          break;
        case 4:
          message.baseDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMaturityParams {
    const message = {
      ...baseMsgUpdateMaturityParams,
    } as MsgUpdateMaturityParams;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = String(object.baseDenom);
    } else {
      message.baseDenom = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateMaturityParams): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.levelsPerYear !== undefined &&
      (obj.levelsPerYear = message.levelsPerYear);
    message.years !== undefined && (obj.years = message.years);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateMaturityParams>
  ): MsgUpdateMaturityParams {
    const message = {
      ...baseMsgUpdateMaturityParams,
    } as MsgUpdateMaturityParams;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = object.baseDenom;
    } else {
      message.baseDenom = "";
    }
    return message;
  },
};

const baseMsgUpdateMaturityParamsResponse: object = {};

export const MsgUpdateMaturityParamsResponse = {
  encode(
    _: MsgUpdateMaturityParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateMaturityParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMaturityParamsResponse,
    } as MsgUpdateMaturityParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateMaturityParamsResponse {
    const message = {
      ...baseMsgUpdateMaturityParamsResponse,
    } as MsgUpdateMaturityParamsResponse;
    return message;
  },

  toJSON(_: MsgUpdateMaturityParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMaturityParamsResponse>
  ): MsgUpdateMaturityParamsResponse {
    const message = {
      ...baseMsgUpdateMaturityParamsResponse,
    } as MsgUpdateMaturityParamsResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  WhitelistAsset(
    request: MsgWhitelistAsset
  ): Promise<MsgWhitelistAssetResponse>;
  DelistAsset(request: MsgDelistAsset): Promise<MsgDelistAssetResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UpdateMaturityParams(
    request: MsgUpdateMaturityParams
  ): Promise<MsgUpdateMaturityParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  WhitelistAsset(
    request: MsgWhitelistAsset
  ): Promise<MsgWhitelistAssetResponse> {
    const data = MsgWhitelistAsset.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.assets.Msg",
      "WhitelistAsset",
      data
    );
    return promise.then((data) =>
      MsgWhitelistAssetResponse.decode(new Reader(data))
    );
  }

  DelistAsset(request: MsgDelistAsset): Promise<MsgDelistAssetResponse> {
    const data = MsgDelistAsset.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.assets.Msg",
      "DelistAsset",
      data
    );
    return promise.then((data) =>
      MsgDelistAssetResponse.decode(new Reader(data))
    );
  }

  UpdateMaturityParams(
    request: MsgUpdateMaturityParams
  ): Promise<MsgUpdateMaturityParamsResponse> {
    const data = MsgUpdateMaturityParams.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.assets.Msg",
      "UpdateMaturityParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateMaturityParamsResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
