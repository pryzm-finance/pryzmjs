/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.assets";

export interface AssetIbcConnectionProperties {
  port: string;
  channel: string;
}

export interface AssetFeeRatios {
  cAssetFeeRatio: string;
  yieldFeeRatio: string;
  mergeFeeRatio: string;
  redeemFeeRatio: string;
  refractFeeRatio: string;
  cAssetBondFeeRatio: string;
  cAssetRedeemFeeRatio: string;
  yStakingClaimRewardFeeRatio: string;
}

export interface AssetMaturityParameters {
  levelsPerYear: number;
  years: number;
}

export interface WhitelistedAsset {
  refractable: boolean;
  baseDenom: string;
  chainId: string;
  hubContractAddr: string;
  cAssetBaseDenom: string;
  maturityParameters: AssetMaturityParameters | undefined;
  tokenTransferConnection: AssetIbcConnectionProperties | undefined;
  messagePassingConnection: AssetIbcConnectionProperties | undefined;
  feeRatios: AssetFeeRatios | undefined;
}

function createBaseAssetIbcConnectionProperties(): AssetIbcConnectionProperties {
  return { port: "", channel: "" };
}

export const AssetIbcConnectionProperties = {
  encode(message: AssetIbcConnectionProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port !== "") {
      writer.uint32(26).string(message.port);
    }
    if (message.channel !== "") {
      writer.uint32(34).string(message.channel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetIbcConnectionProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetIbcConnectionProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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

  fromJSON(object: any): AssetIbcConnectionProperties {
    return {
      port: isSet(object.port) ? String(object.port) : "",
      channel: isSet(object.channel) ? String(object.channel) : "",
    };
  },

  toJSON(message: AssetIbcConnectionProperties): unknown {
    const obj: any = {};
    message.port !== undefined && (obj.port = message.port);
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetIbcConnectionProperties>, I>>(object: I): AssetIbcConnectionProperties {
    const message = createBaseAssetIbcConnectionProperties();
    message.port = object.port ?? "";
    message.channel = object.channel ?? "";
    return message;
  },
};

function createBaseAssetFeeRatios(): AssetFeeRatios {
  return {
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

export const AssetFeeRatios = {
  encode(message: AssetFeeRatios, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cAssetFeeRatio !== "") {
      writer.uint32(18).string(message.cAssetFeeRatio);
    }
    if (message.yieldFeeRatio !== "") {
      writer.uint32(26).string(message.yieldFeeRatio);
    }
    if (message.mergeFeeRatio !== "") {
      writer.uint32(34).string(message.mergeFeeRatio);
    }
    if (message.redeemFeeRatio !== "") {
      writer.uint32(42).string(message.redeemFeeRatio);
    }
    if (message.refractFeeRatio !== "") {
      writer.uint32(50).string(message.refractFeeRatio);
    }
    if (message.cAssetBondFeeRatio !== "") {
      writer.uint32(58).string(message.cAssetBondFeeRatio);
    }
    if (message.cAssetRedeemFeeRatio !== "") {
      writer.uint32(66).string(message.cAssetRedeemFeeRatio);
    }
    if (message.yStakingClaimRewardFeeRatio !== "") {
      writer.uint32(74).string(message.yStakingClaimRewardFeeRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetFeeRatios {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetFeeRatios();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.cAssetFeeRatio = reader.string();
          break;
        case 3:
          message.yieldFeeRatio = reader.string();
          break;
        case 4:
          message.mergeFeeRatio = reader.string();
          break;
        case 5:
          message.redeemFeeRatio = reader.string();
          break;
        case 6:
          message.refractFeeRatio = reader.string();
          break;
        case 7:
          message.cAssetBondFeeRatio = reader.string();
          break;
        case 8:
          message.cAssetRedeemFeeRatio = reader.string();
          break;
        case 9:
          message.yStakingClaimRewardFeeRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetFeeRatios {
    return {
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

  toJSON(message: AssetFeeRatios): unknown {
    const obj: any = {};
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

  fromPartial<I extends Exact<DeepPartial<AssetFeeRatios>, I>>(object: I): AssetFeeRatios {
    const message = createBaseAssetFeeRatios();
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

function createBaseAssetMaturityParameters(): AssetMaturityParameters {
  return { levelsPerYear: 0, years: 0 };
}

export const AssetMaturityParameters = {
  encode(message: AssetMaturityParameters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.levelsPerYear !== 0) {
      writer.uint32(48).int32(message.levelsPerYear);
    }
    if (message.years !== 0) {
      writer.uint32(56).int32(message.years);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetMaturityParameters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMaturityParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          message.levelsPerYear = reader.int32();
          break;
        case 7:
          message.years = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetMaturityParameters {
    return {
      levelsPerYear: isSet(object.levelsPerYear) ? Number(object.levelsPerYear) : 0,
      years: isSet(object.years) ? Number(object.years) : 0,
    };
  },

  toJSON(message: AssetMaturityParameters): unknown {
    const obj: any = {};
    message.levelsPerYear !== undefined && (obj.levelsPerYear = Math.round(message.levelsPerYear));
    message.years !== undefined && (obj.years = Math.round(message.years));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetMaturityParameters>, I>>(object: I): AssetMaturityParameters {
    const message = createBaseAssetMaturityParameters();
    message.levelsPerYear = object.levelsPerYear ?? 0;
    message.years = object.years ?? 0;
    return message;
  },
};

function createBaseWhitelistedAsset(): WhitelistedAsset {
  return {
    refractable: false,
    baseDenom: "",
    chainId: "",
    hubContractAddr: "",
    cAssetBaseDenom: "",
    maturityParameters: undefined,
    tokenTransferConnection: undefined,
    messagePassingConnection: undefined,
    feeRatios: undefined,
  };
}

export const WhitelistedAsset = {
  encode(message: WhitelistedAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.refractable === true) {
      writer.uint32(8).bool(message.refractable);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.hubContractAddr !== "") {
      writer.uint32(34).string(message.hubContractAddr);
    }
    if (message.cAssetBaseDenom !== "") {
      writer.uint32(42).string(message.cAssetBaseDenom);
    }
    if (message.maturityParameters !== undefined) {
      AssetMaturityParameters.encode(message.maturityParameters, writer.uint32(50).fork()).ldelim();
    }
    if (message.tokenTransferConnection !== undefined) {
      AssetIbcConnectionProperties.encode(message.tokenTransferConnection, writer.uint32(58).fork()).ldelim();
    }
    if (message.messagePassingConnection !== undefined) {
      AssetIbcConnectionProperties.encode(message.messagePassingConnection, writer.uint32(66).fork()).ldelim();
    }
    if (message.feeRatios !== undefined) {
      AssetFeeRatios.encode(message.feeRatios, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WhitelistedAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistedAsset();
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
          message.chainId = reader.string();
          break;
        case 4:
          message.hubContractAddr = reader.string();
          break;
        case 5:
          message.cAssetBaseDenom = reader.string();
          break;
        case 6:
          message.maturityParameters = AssetMaturityParameters.decode(reader, reader.uint32());
          break;
        case 7:
          message.tokenTransferConnection = AssetIbcConnectionProperties.decode(reader, reader.uint32());
          break;
        case 8:
          message.messagePassingConnection = AssetIbcConnectionProperties.decode(reader, reader.uint32());
          break;
        case 9:
          message.feeRatios = AssetFeeRatios.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WhitelistedAsset {
    return {
      refractable: isSet(object.refractable) ? Boolean(object.refractable) : false,
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      hubContractAddr: isSet(object.hubContractAddr) ? String(object.hubContractAddr) : "",
      cAssetBaseDenom: isSet(object.cAssetBaseDenom) ? String(object.cAssetBaseDenom) : "",
      maturityParameters: isSet(object.maturityParameters)
        ? AssetMaturityParameters.fromJSON(object.maturityParameters)
        : undefined,
      tokenTransferConnection: isSet(object.tokenTransferConnection)
        ? AssetIbcConnectionProperties.fromJSON(object.tokenTransferConnection)
        : undefined,
      messagePassingConnection: isSet(object.messagePassingConnection)
        ? AssetIbcConnectionProperties.fromJSON(object.messagePassingConnection)
        : undefined,
      feeRatios: isSet(object.feeRatios) ? AssetFeeRatios.fromJSON(object.feeRatios) : undefined,
    };
  },

  toJSON(message: WhitelistedAsset): unknown {
    const obj: any = {};
    message.refractable !== undefined && (obj.refractable = message.refractable);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.hubContractAddr !== undefined && (obj.hubContractAddr = message.hubContractAddr);
    message.cAssetBaseDenom !== undefined && (obj.cAssetBaseDenom = message.cAssetBaseDenom);
    message.maturityParameters !== undefined && (obj.maturityParameters = message.maturityParameters
      ? AssetMaturityParameters.toJSON(message.maturityParameters)
      : undefined);
    message.tokenTransferConnection !== undefined && (obj.tokenTransferConnection = message.tokenTransferConnection
      ? AssetIbcConnectionProperties.toJSON(message.tokenTransferConnection)
      : undefined);
    message.messagePassingConnection !== undefined && (obj.messagePassingConnection = message.messagePassingConnection
      ? AssetIbcConnectionProperties.toJSON(message.messagePassingConnection)
      : undefined);
    message.feeRatios !== undefined
      && (obj.feeRatios = message.feeRatios ? AssetFeeRatios.toJSON(message.feeRatios) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WhitelistedAsset>, I>>(object: I): WhitelistedAsset {
    const message = createBaseWhitelistedAsset();
    message.refractable = object.refractable ?? false;
    message.baseDenom = object.baseDenom ?? "";
    message.chainId = object.chainId ?? "";
    message.hubContractAddr = object.hubContractAddr ?? "";
    message.cAssetBaseDenom = object.cAssetBaseDenom ?? "";
    message.maturityParameters = (object.maturityParameters !== undefined && object.maturityParameters !== null)
      ? AssetMaturityParameters.fromPartial(object.maturityParameters)
      : undefined;
    message.tokenTransferConnection =
      (object.tokenTransferConnection !== undefined && object.tokenTransferConnection !== null)
        ? AssetIbcConnectionProperties.fromPartial(object.tokenTransferConnection)
        : undefined;
    message.messagePassingConnection =
      (object.messagePassingConnection !== undefined && object.messagePassingConnection !== null)
        ? AssetIbcConnectionProperties.fromPartial(object.messagePassingConnection)
        : undefined;
    message.feeRatios = (object.feeRatios !== undefined && object.feeRatios !== null)
      ? AssetFeeRatios.fromPartial(object.feeRatios)
      : undefined;
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
