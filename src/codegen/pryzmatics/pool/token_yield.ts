import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface TokenYield {
  tokenDenom: string;
  time: Timestamp;
  totalYield?: string;
  internalYield?: string;
  incentivesApr?: string;
  allianceApr?: string;
  yStakingYield?: string;
  yRoi?: string;
  stakingYield?: string;
  error: string;
}
export interface TokenYieldProtoMsg {
  typeUrl: "/pryzmatics.pool.TokenYield";
  value: Uint8Array;
}
export interface TokenYieldAmino {
  token_denom?: string;
  time?: string;
  total_yield?: string;
  internal_yield?: string;
  incentives_apr?: string;
  alliance_apr?: string;
  y_staking_yield?: string;
  y_roi?: string;
  staking_yield?: string;
  error?: string;
}
export interface TokenYieldAminoMsg {
  type: "/pryzmatics.pool.TokenYield";
  value: TokenYieldAmino;
}
export interface TokenYieldSDKType {
  token_denom: string;
  time: TimestampSDKType;
  total_yield?: string;
  internal_yield?: string;
  incentives_apr?: string;
  alliance_apr?: string;
  y_staking_yield?: string;
  y_roi?: string;
  staking_yield?: string;
  error: string;
}
function createBaseTokenYield(): TokenYield {
  return {
    tokenDenom: "",
    time: Timestamp.fromPartial({}),
    totalYield: undefined,
    internalYield: undefined,
    incentivesApr: undefined,
    allianceApr: undefined,
    yStakingYield: undefined,
    yRoi: undefined,
    stakingYield: undefined,
    error: ""
  };
}
export const TokenYield = {
  typeUrl: "/pryzmatics.pool.TokenYield",
  is(o: any): o is TokenYield {
    return o && (o.$typeUrl === TokenYield.typeUrl || typeof o.tokenDenom === "string" && Timestamp.is(o.time) && typeof o.error === "string");
  },
  isSDK(o: any): o is TokenYieldSDKType {
    return o && (o.$typeUrl === TokenYield.typeUrl || typeof o.token_denom === "string" && Timestamp.isSDK(o.time) && typeof o.error === "string");
  },
  isAmino(o: any): o is TokenYieldAmino {
    return o && (o.$typeUrl === TokenYield.typeUrl || typeof o.token_denom === "string" && Timestamp.isAmino(o.time) && typeof o.error === "string");
  },
  encode(message: TokenYield, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenDenom !== "") {
      writer.uint32(10).string(message.tokenDenom);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalYield !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.totalYield, 18).atomics);
    }
    if (message.internalYield !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.internalYield, 18).atomics);
    }
    if (message.incentivesApr !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.incentivesApr, 18).atomics);
    }
    if (message.allianceApr !== undefined) {
      writer.uint32(50).string(Decimal.fromUserInput(message.allianceApr, 18).atomics);
    }
    if (message.yStakingYield !== undefined) {
      writer.uint32(58).string(Decimal.fromUserInput(message.yStakingYield, 18).atomics);
    }
    if (message.yRoi !== undefined) {
      writer.uint32(66).string(Decimal.fromUserInput(message.yRoi, 18).atomics);
    }
    if (message.stakingYield !== undefined) {
      writer.uint32(74).string(Decimal.fromUserInput(message.stakingYield, 18).atomics);
    }
    if (message.error !== "") {
      writer.uint32(82).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): TokenYield {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenYield();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenDenom = reader.string();
          break;
        case 2:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.totalYield = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.internalYield = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.incentivesApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.allianceApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.yStakingYield = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.yRoi = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.stakingYield = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenYield {
    return {
      tokenDenom: isSet(object.tokenDenom) ? String(object.tokenDenom) : "",
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      totalYield: isSet(object.totalYield) ? String(object.totalYield) : undefined,
      internalYield: isSet(object.internalYield) ? String(object.internalYield) : undefined,
      incentivesApr: isSet(object.incentivesApr) ? String(object.incentivesApr) : undefined,
      allianceApr: isSet(object.allianceApr) ? String(object.allianceApr) : undefined,
      yStakingYield: isSet(object.yStakingYield) ? String(object.yStakingYield) : undefined,
      yRoi: isSet(object.yRoi) ? String(object.yRoi) : undefined,
      stakingYield: isSet(object.stakingYield) ? String(object.stakingYield) : undefined,
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: TokenYield): unknown {
    const obj: any = {};
    message.tokenDenom !== undefined && (obj.tokenDenom = message.tokenDenom);
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.totalYield !== undefined && (obj.totalYield = message.totalYield);
    message.internalYield !== undefined && (obj.internalYield = message.internalYield);
    message.incentivesApr !== undefined && (obj.incentivesApr = message.incentivesApr);
    message.allianceApr !== undefined && (obj.allianceApr = message.allianceApr);
    message.yStakingYield !== undefined && (obj.yStakingYield = message.yStakingYield);
    message.yRoi !== undefined && (obj.yRoi = message.yRoi);
    message.stakingYield !== undefined && (obj.stakingYield = message.stakingYield);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<TokenYield>): TokenYield {
    const message = createBaseTokenYield();
    message.tokenDenom = object.tokenDenom ?? "";
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.totalYield = object.totalYield ?? undefined;
    message.internalYield = object.internalYield ?? undefined;
    message.incentivesApr = object.incentivesApr ?? undefined;
    message.allianceApr = object.allianceApr ?? undefined;
    message.yStakingYield = object.yStakingYield ?? undefined;
    message.yRoi = object.yRoi ?? undefined;
    message.stakingYield = object.stakingYield ?? undefined;
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: TokenYieldAmino): TokenYield {
    const message = createBaseTokenYield();
    if (object.token_denom !== undefined && object.token_denom !== null) {
      message.tokenDenom = object.token_denom;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    if (object.total_yield !== undefined && object.total_yield !== null) {
      message.totalYield = object.total_yield;
    }
    if (object.internal_yield !== undefined && object.internal_yield !== null) {
      message.internalYield = object.internal_yield;
    }
    if (object.incentives_apr !== undefined && object.incentives_apr !== null) {
      message.incentivesApr = object.incentives_apr;
    }
    if (object.alliance_apr !== undefined && object.alliance_apr !== null) {
      message.allianceApr = object.alliance_apr;
    }
    if (object.y_staking_yield !== undefined && object.y_staking_yield !== null) {
      message.yStakingYield = object.y_staking_yield;
    }
    if (object.y_roi !== undefined && object.y_roi !== null) {
      message.yRoi = object.y_roi;
    }
    if (object.staking_yield !== undefined && object.staking_yield !== null) {
      message.stakingYield = object.staking_yield;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: TokenYield, useInterfaces: boolean = true): TokenYieldAmino {
    const obj: any = {};
    obj.token_denom = message.tokenDenom === "" ? undefined : message.tokenDenom;
    obj.time = message.time ? Timestamp.toAmino(message.time, useInterfaces) : undefined;
    obj.total_yield = padDecimal(message.totalYield) === null ? undefined : padDecimal(message.totalYield);
    obj.internal_yield = padDecimal(message.internalYield) === null ? undefined : padDecimal(message.internalYield);
    obj.incentives_apr = padDecimal(message.incentivesApr) === null ? undefined : padDecimal(message.incentivesApr);
    obj.alliance_apr = padDecimal(message.allianceApr) === null ? undefined : padDecimal(message.allianceApr);
    obj.y_staking_yield = padDecimal(message.yStakingYield) === null ? undefined : padDecimal(message.yStakingYield);
    obj.y_roi = padDecimal(message.yRoi) === null ? undefined : padDecimal(message.yRoi);
    obj.staking_yield = padDecimal(message.stakingYield) === null ? undefined : padDecimal(message.stakingYield);
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: TokenYieldAminoMsg): TokenYield {
    return TokenYield.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenYieldProtoMsg, useInterfaces: boolean = true): TokenYield {
    return TokenYield.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: TokenYield): Uint8Array {
    return TokenYield.encode(message).finish();
  },
  toProtoMsg(message: TokenYield): TokenYieldProtoMsg {
    return {
      typeUrl: "/pryzmatics.pool.TokenYield",
      value: TokenYield.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TokenYield.typeUrl, TokenYield);