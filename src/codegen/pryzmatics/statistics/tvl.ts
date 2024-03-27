import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface TVL {
  blockTime: Timestamp;
  cAsset: string;
  amm: string;
  staking: string;
  alliance: string;
  incentives: string;
  treasury: string;
  feeCollector: string;
  total: string;
  error: string;
}
export interface TVLProtoMsg {
  typeUrl: "/pryzmatics.statistics.TVL";
  value: Uint8Array;
}
export interface TVLAmino {
  block_time?: string;
  c_asset?: string;
  amm?: string;
  staking?: string;
  alliance?: string;
  incentives?: string;
  treasury?: string;
  fee_collector?: string;
  total?: string;
  error?: string;
}
export interface TVLAminoMsg {
  type: "/pryzmatics.statistics.TVL";
  value: TVLAmino;
}
export interface TVLSDKType {
  block_time: TimestampSDKType;
  c_asset: string;
  amm: string;
  staking: string;
  alliance: string;
  incentives: string;
  treasury: string;
  fee_collector: string;
  total: string;
  error: string;
}
function createBaseTVL(): TVL {
  return {
    blockTime: Timestamp.fromPartial({}),
    cAsset: "",
    amm: "",
    staking: "",
    alliance: "",
    incentives: "",
    treasury: "",
    feeCollector: "",
    total: "",
    error: ""
  };
}
export const TVL = {
  typeUrl: "/pryzmatics.statistics.TVL",
  is(o: any): o is TVL {
    return o && (o.$typeUrl === TVL.typeUrl || Timestamp.is(o.blockTime) && typeof o.cAsset === "string" && typeof o.amm === "string" && typeof o.staking === "string" && typeof o.alliance === "string" && typeof o.incentives === "string" && typeof o.treasury === "string" && typeof o.feeCollector === "string" && typeof o.total === "string" && typeof o.error === "string");
  },
  isSDK(o: any): o is TVLSDKType {
    return o && (o.$typeUrl === TVL.typeUrl || Timestamp.isSDK(o.block_time) && typeof o.c_asset === "string" && typeof o.amm === "string" && typeof o.staking === "string" && typeof o.alliance === "string" && typeof o.incentives === "string" && typeof o.treasury === "string" && typeof o.fee_collector === "string" && typeof o.total === "string" && typeof o.error === "string");
  },
  isAmino(o: any): o is TVLAmino {
    return o && (o.$typeUrl === TVL.typeUrl || Timestamp.isAmino(o.block_time) && typeof o.c_asset === "string" && typeof o.amm === "string" && typeof o.staking === "string" && typeof o.alliance === "string" && typeof o.incentives === "string" && typeof o.treasury === "string" && typeof o.fee_collector === "string" && typeof o.total === "string" && typeof o.error === "string");
  },
  encode(message: TVL, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.cAsset !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.cAsset, 18).atomics);
    }
    if (message.amm !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.amm, 18).atomics);
    }
    if (message.staking !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.staking, 18).atomics);
    }
    if (message.alliance !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.alliance, 18).atomics);
    }
    if (message.incentives !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.incentives, 18).atomics);
    }
    if (message.treasury !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.treasury, 18).atomics);
    }
    if (message.feeCollector !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.feeCollector, 18).atomics);
    }
    if (message.total !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.total, 18).atomics);
    }
    if (message.error !== "") {
      writer.uint32(82).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): TVL {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTVL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.cAsset = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.amm = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.staking = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.alliance = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.incentives = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.treasury = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.feeCollector = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.total = Decimal.fromAtomics(reader.string(), 18).toString();
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
  fromJSON(object: any): TVL {
    return {
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
      cAsset: isSet(object.cAsset) ? String(object.cAsset) : "",
      amm: isSet(object.amm) ? String(object.amm) : "",
      staking: isSet(object.staking) ? String(object.staking) : "",
      alliance: isSet(object.alliance) ? String(object.alliance) : "",
      incentives: isSet(object.incentives) ? String(object.incentives) : "",
      treasury: isSet(object.treasury) ? String(object.treasury) : "",
      feeCollector: isSet(object.feeCollector) ? String(object.feeCollector) : "",
      total: isSet(object.total) ? String(object.total) : "",
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: TVL): unknown {
    const obj: any = {};
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    message.cAsset !== undefined && (obj.cAsset = message.cAsset);
    message.amm !== undefined && (obj.amm = message.amm);
    message.staking !== undefined && (obj.staking = message.staking);
    message.alliance !== undefined && (obj.alliance = message.alliance);
    message.incentives !== undefined && (obj.incentives = message.incentives);
    message.treasury !== undefined && (obj.treasury = message.treasury);
    message.feeCollector !== undefined && (obj.feeCollector = message.feeCollector);
    message.total !== undefined && (obj.total = message.total);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<TVL>): TVL {
    const message = createBaseTVL();
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    message.cAsset = object.cAsset ?? "";
    message.amm = object.amm ?? "";
    message.staking = object.staking ?? "";
    message.alliance = object.alliance ?? "";
    message.incentives = object.incentives ?? "";
    message.treasury = object.treasury ?? "";
    message.feeCollector = object.feeCollector ?? "";
    message.total = object.total ?? "";
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: TVLAmino): TVL {
    const message = createBaseTVL();
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = Timestamp.fromAmino(object.block_time);
    }
    if (object.c_asset !== undefined && object.c_asset !== null) {
      message.cAsset = object.c_asset;
    }
    if (object.amm !== undefined && object.amm !== null) {
      message.amm = object.amm;
    }
    if (object.staking !== undefined && object.staking !== null) {
      message.staking = object.staking;
    }
    if (object.alliance !== undefined && object.alliance !== null) {
      message.alliance = object.alliance;
    }
    if (object.incentives !== undefined && object.incentives !== null) {
      message.incentives = object.incentives;
    }
    if (object.treasury !== undefined && object.treasury !== null) {
      message.treasury = object.treasury;
    }
    if (object.fee_collector !== undefined && object.fee_collector !== null) {
      message.feeCollector = object.fee_collector;
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: TVL, useInterfaces: boolean = true): TVLAmino {
    const obj: any = {};
    obj.block_time = message.blockTime ? Timestamp.toAmino(message.blockTime, useInterfaces) : undefined;
    obj.c_asset = padDecimal(message.cAsset) === "" ? undefined : padDecimal(message.cAsset);
    obj.amm = padDecimal(message.amm) === "" ? undefined : padDecimal(message.amm);
    obj.staking = padDecimal(message.staking) === "" ? undefined : padDecimal(message.staking);
    obj.alliance = padDecimal(message.alliance) === "" ? undefined : padDecimal(message.alliance);
    obj.incentives = padDecimal(message.incentives) === "" ? undefined : padDecimal(message.incentives);
    obj.treasury = padDecimal(message.treasury) === "" ? undefined : padDecimal(message.treasury);
    obj.fee_collector = padDecimal(message.feeCollector) === "" ? undefined : padDecimal(message.feeCollector);
    obj.total = padDecimal(message.total) === "" ? undefined : padDecimal(message.total);
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: TVLAminoMsg): TVL {
    return TVL.fromAmino(object.value);
  },
  fromProtoMsg(message: TVLProtoMsg, useInterfaces: boolean = true): TVL {
    return TVL.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: TVL): Uint8Array {
    return TVL.encode(message).finish();
  },
  toProtoMsg(message: TVL): TVLProtoMsg {
    return {
      typeUrl: "/pryzmatics.statistics.TVL",
      value: TVL.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TVL.typeUrl, TVL);