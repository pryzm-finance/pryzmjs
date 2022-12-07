/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { WhitelistedAsset } from "./whitelisted_asset";

export const protobufPackage = "prismfinance.prismcore.assets";

export interface MsgWhitelistAsset {
  authority: string;
  whitelistedAsset: WhitelistedAsset | undefined;
}

export interface MsgWhitelistAssetResponse {
}

export interface MsgDelistAsset {
  authority: string;
  baseDenom: string;
}

export interface MsgDelistAssetResponse {
}

export interface MsgUpdateMaturityParams {
  authority: string;
  levelsPerYear: number;
  years: number;
  baseDenom: string;
}

export interface MsgUpdateMaturityParamsResponse {
}

export interface MsgUpdateFeeRatios {
  authority: string;
  baseDenom: string;
  cAssetFeeRatio: string;
  yieldFeeRatio: string;
  mergeFeeRatio: string;
  redeemFeeRatio: string;
  refractFeeRatio: string;
  cAssetBondFeeRatio: string;
  cAssetRedeemFeeRatio: string;
  yStakingClaimRewardFeeRatio: string;
}

export interface MsgUpdateFeeRatiosResponse {
}

export interface MsgUpdateMessagePassingConnection {
  authority: string;
  baseDenom: string;
  port: string;
  channel: string;
}

export interface MsgUpdateMessagePassingConnectionResponse {
}

function createBaseMsgWhitelistAsset(): MsgWhitelistAsset {
  return { authority: "", whitelistedAsset: undefined };
}

export const MsgWhitelistAsset = {
  encode(message: MsgWhitelistAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.whitelistedAsset !== undefined) {
      WhitelistedAsset.encode(message.whitelistedAsset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWhitelistAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.whitelistedAsset = WhitelistedAsset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWhitelistAsset {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      whitelistedAsset: isSet(object.whitelistedAsset) ? WhitelistedAsset.fromJSON(object.whitelistedAsset) : undefined,
    };
  },

  toJSON(message: MsgWhitelistAsset): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.whitelistedAsset !== undefined && (obj.whitelistedAsset = message.whitelistedAsset
      ? WhitelistedAsset.toJSON(message.whitelistedAsset)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWhitelistAsset>, I>>(object: I): MsgWhitelistAsset {
    const message = createBaseMsgWhitelistAsset();
    message.authority = object.authority ?? "";
    message.whitelistedAsset = (object.whitelistedAsset !== undefined && object.whitelistedAsset !== null)
      ? WhitelistedAsset.fromPartial(object.whitelistedAsset)
      : undefined;
    return message;
  },
};

function createBaseMsgWhitelistAssetResponse(): MsgWhitelistAssetResponse {
  return {};
}

export const MsgWhitelistAssetResponse = {
  encode(_: MsgWhitelistAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWhitelistAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistAssetResponse();
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
    return {};
  },

  toJSON(_: MsgWhitelistAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWhitelistAssetResponse>, I>>(_: I): MsgWhitelistAssetResponse {
    const message = createBaseMsgWhitelistAssetResponse();
    return message;
  },
};

function createBaseMsgDelistAsset(): MsgDelistAsset {
  return { authority: "", baseDenom: "" };
}

export const MsgDelistAsset = {
  encode(message: MsgDelistAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelistAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelistAsset();
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
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
    };
  },

  toJSON(message: MsgDelistAsset): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelistAsset>, I>>(object: I): MsgDelistAsset {
    const message = createBaseMsgDelistAsset();
    message.authority = object.authority ?? "";
    message.baseDenom = object.baseDenom ?? "";
    return message;
  },
};

function createBaseMsgDelistAssetResponse(): MsgDelistAssetResponse {
  return {};
}

export const MsgDelistAssetResponse = {
  encode(_: MsgDelistAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelistAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelistAssetResponse();
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
    return {};
  },

  toJSON(_: MsgDelistAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelistAssetResponse>, I>>(_: I): MsgDelistAssetResponse {
    const message = createBaseMsgDelistAssetResponse();
    return message;
  },
};

function createBaseMsgUpdateMaturityParams(): MsgUpdateMaturityParams {
  return { authority: "", levelsPerYear: 0, years: 0, baseDenom: "" };
}

export const MsgUpdateMaturityParams = {
  encode(message: MsgUpdateMaturityParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMaturityParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMaturityParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
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
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      levelsPerYear: isSet(object.levelsPerYear) ? Number(object.levelsPerYear) : 0,
      years: isSet(object.years) ? Number(object.years) : 0,
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
    };
  },

  toJSON(message: MsgUpdateMaturityParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.levelsPerYear !== undefined && (obj.levelsPerYear = Math.round(message.levelsPerYear));
    message.years !== undefined && (obj.years = Math.round(message.years));
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMaturityParams>, I>>(object: I): MsgUpdateMaturityParams {
    const message = createBaseMsgUpdateMaturityParams();
    message.authority = object.authority ?? "";
    message.levelsPerYear = object.levelsPerYear ?? 0;
    message.years = object.years ?? 0;
    message.baseDenom = object.baseDenom ?? "";
    return message;
  },
};

function createBaseMsgUpdateMaturityParamsResponse(): MsgUpdateMaturityParamsResponse {
  return {};
}

export const MsgUpdateMaturityParamsResponse = {
  encode(_: MsgUpdateMaturityParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMaturityParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMaturityParamsResponse();
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
    return {};
  },

  toJSON(_: MsgUpdateMaturityParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMaturityParamsResponse>, I>>(_: I): MsgUpdateMaturityParamsResponse {
    const message = createBaseMsgUpdateMaturityParamsResponse();
    return message;
  },
};

function createBaseMsgUpdateFeeRatios(): MsgUpdateFeeRatios {
  return {
    authority: "",
    baseDenom: "",
    cAssetFeeRatio: "",
    yieldFeeRatio: "",
    mergeFeeRatio: "",
    redeemFeeRatio: "",
    refractFeeRatio: "",
    cAssetBondFeeRatio: "",
    cAssetRedeemFeeRatio: "",
    yStakingClaimRewardFeeRatio: "",
  };
}

export const MsgUpdateFeeRatios = {
  encode(message: MsgUpdateFeeRatios, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    if (message.cAssetFeeRatio !== "") {
      writer.uint32(26).string(message.cAssetFeeRatio);
    }
    if (message.yieldFeeRatio !== "") {
      writer.uint32(34).string(message.yieldFeeRatio);
    }
    if (message.mergeFeeRatio !== "") {
      writer.uint32(42).string(message.mergeFeeRatio);
    }
    if (message.redeemFeeRatio !== "") {
      writer.uint32(50).string(message.redeemFeeRatio);
    }
    if (message.refractFeeRatio !== "") {
      writer.uint32(58).string(message.refractFeeRatio);
    }
    if (message.cAssetBondFeeRatio !== "") {
      writer.uint32(66).string(message.cAssetBondFeeRatio);
    }
    if (message.cAssetRedeemFeeRatio !== "") {
      writer.uint32(74).string(message.cAssetRedeemFeeRatio);
    }
    if (message.yStakingClaimRewardFeeRatio !== "") {
      writer.uint32(82).string(message.yStakingClaimRewardFeeRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeeRatios {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeeRatios();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.baseDenom = reader.string();
          break;
        case 3:
          message.cAssetFeeRatio = reader.string();
          break;
        case 4:
          message.yieldFeeRatio = reader.string();
          break;
        case 5:
          message.mergeFeeRatio = reader.string();
          break;
        case 6:
          message.redeemFeeRatio = reader.string();
          break;
        case 7:
          message.refractFeeRatio = reader.string();
          break;
        case 8:
          message.cAssetBondFeeRatio = reader.string();
          break;
        case 9:
          message.cAssetRedeemFeeRatio = reader.string();
          break;
        case 10:
          message.yStakingClaimRewardFeeRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateFeeRatios {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      cAssetFeeRatio: isSet(object.cAssetFeeRatio) ? String(object.cAssetFeeRatio) : "",
      yieldFeeRatio: isSet(object.yieldFeeRatio) ? String(object.yieldFeeRatio) : "",
      mergeFeeRatio: isSet(object.mergeFeeRatio) ? String(object.mergeFeeRatio) : "",
      redeemFeeRatio: isSet(object.redeemFeeRatio) ? String(object.redeemFeeRatio) : "",
      refractFeeRatio: isSet(object.refractFeeRatio) ? String(object.refractFeeRatio) : "",
      cAssetBondFeeRatio: isSet(object.cAssetBondFeeRatio) ? String(object.cAssetBondFeeRatio) : "",
      cAssetRedeemFeeRatio: isSet(object.cAssetRedeemFeeRatio) ? String(object.cAssetRedeemFeeRatio) : "",
      yStakingClaimRewardFeeRatio: isSet(object.yStakingClaimRewardFeeRatio)
        ? String(object.yStakingClaimRewardFeeRatio)
        : "",
    };
  },

  toJSON(message: MsgUpdateFeeRatios): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.cAssetFeeRatio !== undefined && (obj.cAssetFeeRatio = message.cAssetFeeRatio);
    message.yieldFeeRatio !== undefined && (obj.yieldFeeRatio = message.yieldFeeRatio);
    message.mergeFeeRatio !== undefined && (obj.mergeFeeRatio = message.mergeFeeRatio);
    message.redeemFeeRatio !== undefined && (obj.redeemFeeRatio = message.redeemFeeRatio);
    message.refractFeeRatio !== undefined && (obj.refractFeeRatio = message.refractFeeRatio);
    message.cAssetBondFeeRatio !== undefined && (obj.cAssetBondFeeRatio = message.cAssetBondFeeRatio);
    message.cAssetRedeemFeeRatio !== undefined && (obj.cAssetRedeemFeeRatio = message.cAssetRedeemFeeRatio);
    message.yStakingClaimRewardFeeRatio !== undefined
      && (obj.yStakingClaimRewardFeeRatio = message.yStakingClaimRewardFeeRatio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateFeeRatios>, I>>(object: I): MsgUpdateFeeRatios {
    const message = createBaseMsgUpdateFeeRatios();
    message.authority = object.authority ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.cAssetFeeRatio = object.cAssetFeeRatio ?? "";
    message.yieldFeeRatio = object.yieldFeeRatio ?? "";
    message.mergeFeeRatio = object.mergeFeeRatio ?? "";
    message.redeemFeeRatio = object.redeemFeeRatio ?? "";
    message.refractFeeRatio = object.refractFeeRatio ?? "";
    message.cAssetBondFeeRatio = object.cAssetBondFeeRatio ?? "";
    message.cAssetRedeemFeeRatio = object.cAssetRedeemFeeRatio ?? "";
    message.yStakingClaimRewardFeeRatio = object.yStakingClaimRewardFeeRatio ?? "";
    return message;
  },
};

function createBaseMsgUpdateFeeRatiosResponse(): MsgUpdateFeeRatiosResponse {
  return {};
}

export const MsgUpdateFeeRatiosResponse = {
  encode(_: MsgUpdateFeeRatiosResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeeRatiosResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeeRatiosResponse();
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

  fromJSON(_: any): MsgUpdateFeeRatiosResponse {
    return {};
  },

  toJSON(_: MsgUpdateFeeRatiosResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateFeeRatiosResponse>, I>>(_: I): MsgUpdateFeeRatiosResponse {
    const message = createBaseMsgUpdateFeeRatiosResponse();
    return message;
  },
};

function createBaseMsgUpdateMessagePassingConnection(): MsgUpdateMessagePassingConnection {
  return { authority: "", baseDenom: "", port: "", channel: "" };
}

export const MsgUpdateMessagePassingConnection = {
  encode(message: MsgUpdateMessagePassingConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMessagePassingConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMessagePassingConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMessagePassingConnection {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channel: isSet(object.channel) ? String(object.channel) : "",
    };
  },

  toJSON(message: MsgUpdateMessagePassingConnection): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.port !== undefined && (obj.port = message.port);
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMessagePassingConnection>, I>>(
    object: I,
  ): MsgUpdateMessagePassingConnection {
    const message = createBaseMsgUpdateMessagePassingConnection();
    message.authority = object.authority ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.port = object.port ?? "";
    message.channel = object.channel ?? "";
    return message;
  },
};

function createBaseMsgUpdateMessagePassingConnectionResponse(): MsgUpdateMessagePassingConnectionResponse {
  return {};
}

export const MsgUpdateMessagePassingConnectionResponse = {
  encode(_: MsgUpdateMessagePassingConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMessagePassingConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMessagePassingConnectionResponse();
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

  fromJSON(_: any): MsgUpdateMessagePassingConnectionResponse {
    return {};
  },

  toJSON(_: MsgUpdateMessagePassingConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMessagePassingConnectionResponse>, I>>(
    _: I,
  ): MsgUpdateMessagePassingConnectionResponse {
    const message = createBaseMsgUpdateMessagePassingConnectionResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  WhitelistAsset(request: MsgWhitelistAsset): Promise<MsgWhitelistAssetResponse>;
  DelistAsset(request: MsgDelistAsset): Promise<MsgDelistAssetResponse>;
  UpdateMaturityParams(request: MsgUpdateMaturityParams): Promise<MsgUpdateMaturityParamsResponse>;
  UpdateFeeRatios(request: MsgUpdateFeeRatios): Promise<MsgUpdateFeeRatiosResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UpdateMessagePassingConnection(
    request: MsgUpdateMessagePassingConnection,
  ): Promise<MsgUpdateMessagePassingConnectionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.WhitelistAsset = this.WhitelistAsset.bind(this);
    this.DelistAsset = this.DelistAsset.bind(this);
    this.UpdateMaturityParams = this.UpdateMaturityParams.bind(this);
    this.UpdateFeeRatios = this.UpdateFeeRatios.bind(this);
    this.UpdateMessagePassingConnection = this.UpdateMessagePassingConnection.bind(this);
  }
  WhitelistAsset(request: MsgWhitelistAsset): Promise<MsgWhitelistAssetResponse> {
    const data = MsgWhitelistAsset.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Msg", "WhitelistAsset", data);
    return promise.then((data) => MsgWhitelistAssetResponse.decode(new _m0.Reader(data)));
  }

  DelistAsset(request: MsgDelistAsset): Promise<MsgDelistAssetResponse> {
    const data = MsgDelistAsset.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Msg", "DelistAsset", data);
    return promise.then((data) => MsgDelistAssetResponse.decode(new _m0.Reader(data)));
  }

  UpdateMaturityParams(request: MsgUpdateMaturityParams): Promise<MsgUpdateMaturityParamsResponse> {
    const data = MsgUpdateMaturityParams.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Msg", "UpdateMaturityParams", data);
    return promise.then((data) => MsgUpdateMaturityParamsResponse.decode(new _m0.Reader(data)));
  }

  UpdateFeeRatios(request: MsgUpdateFeeRatios): Promise<MsgUpdateFeeRatiosResponse> {
    const data = MsgUpdateFeeRatios.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Msg", "UpdateFeeRatios", data);
    return promise.then((data) => MsgUpdateFeeRatiosResponse.decode(new _m0.Reader(data)));
  }

  UpdateMessagePassingConnection(
    request: MsgUpdateMessagePassingConnection,
  ): Promise<MsgUpdateMessagePassingConnectionResponse> {
    const data = MsgUpdateMessagePassingConnection.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.assets.Msg", "UpdateMessagePassingConnection", data);
    return promise.then((data) => MsgUpdateMessagePassingConnectionResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
