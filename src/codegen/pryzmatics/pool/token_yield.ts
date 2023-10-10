import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
export interface TokenYield {
  tokenDenom: string;
  time: Timestamp;
  totalYield?: string;
  internalYield?: string;
  incentivesApr?: string;
  allianceApr?: string;
  yStakingYield?: string;
  yRoi?: string;
  error: string;
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
    error: ""
  };
}
export const TokenYield = {
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
    if (message.error !== "") {
      writer.uint32(74).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenYield {
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
    message.error = object.error ?? "";
    return message;
  }
};