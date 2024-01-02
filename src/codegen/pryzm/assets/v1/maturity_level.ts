import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface MaturityLevel {
  active: boolean;
  assetId: string;
  symbol: string;
  introductionTime: Timestamp;
  expirationTime: Timestamp;
}
export interface MaturityLevelProtoMsg {
  typeUrl: "/pryzm.assets.v1.MaturityLevel";
  value: Uint8Array;
}
export interface MaturityLevelAmino {
  active?: boolean;
  asset_id?: string;
  symbol?: string;
  introduction_time?: string;
  expiration_time?: string;
}
export interface MaturityLevelAminoMsg {
  type: "/pryzm.assets.v1.MaturityLevel";
  value: MaturityLevelAmino;
}
export interface MaturityLevelSDKType {
  active: boolean;
  asset_id: string;
  symbol: string;
  introduction_time: TimestampSDKType;
  expiration_time: TimestampSDKType;
}
function createBaseMaturityLevel(): MaturityLevel {
  return {
    active: false,
    assetId: "",
    symbol: "",
    introductionTime: Timestamp.fromPartial({}),
    expirationTime: Timestamp.fromPartial({})
  };
}
export const MaturityLevel = {
  typeUrl: "/pryzm.assets.v1.MaturityLevel",
  is(o: any): o is MaturityLevel {
    return o && (o.$typeUrl === MaturityLevel.typeUrl || typeof o.active === "boolean" && typeof o.assetId === "string" && typeof o.symbol === "string" && Timestamp.is(o.introductionTime) && Timestamp.is(o.expirationTime));
  },
  isSDK(o: any): o is MaturityLevelSDKType {
    return o && (o.$typeUrl === MaturityLevel.typeUrl || typeof o.active === "boolean" && typeof o.asset_id === "string" && typeof o.symbol === "string" && Timestamp.isSDK(o.introduction_time) && Timestamp.isSDK(o.expiration_time));
  },
  isAmino(o: any): o is MaturityLevelAmino {
    return o && (o.$typeUrl === MaturityLevel.typeUrl || typeof o.active === "boolean" && typeof o.asset_id === "string" && typeof o.symbol === "string" && Timestamp.isAmino(o.introduction_time) && Timestamp.isAmino(o.expiration_time));
  },
  encode(message: MaturityLevel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.introductionTime !== undefined) {
      Timestamp.encode(message.introductionTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MaturityLevel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaturityLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.active = reader.bool();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.introductionTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MaturityLevel {
    return {
      active: isSet(object.active) ? Boolean(object.active) : false,
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      introductionTime: isSet(object.introductionTime) ? fromJsonTimestamp(object.introductionTime) : undefined,
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined
    };
  },
  toJSON(message: MaturityLevel): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = message.active);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.introductionTime !== undefined && (obj.introductionTime = fromTimestamp(message.introductionTime).toISOString());
    message.expirationTime !== undefined && (obj.expirationTime = fromTimestamp(message.expirationTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<MaturityLevel>): MaturityLevel {
    const message = createBaseMaturityLevel();
    message.active = object.active ?? false;
    message.assetId = object.assetId ?? "";
    message.symbol = object.symbol ?? "";
    message.introductionTime = object.introductionTime !== undefined && object.introductionTime !== null ? Timestamp.fromPartial(object.introductionTime) : undefined;
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    return message;
  },
  fromAmino(object: MaturityLevelAmino): MaturityLevel {
    const message = createBaseMaturityLevel();
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.introduction_time !== undefined && object.introduction_time !== null) {
      message.introductionTime = Timestamp.fromAmino(object.introduction_time);
    }
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = Timestamp.fromAmino(object.expiration_time);
    }
    return message;
  },
  toAmino(message: MaturityLevel, useInterfaces: boolean = true): MaturityLevelAmino {
    const obj: any = {};
    obj.active = message.active === false ? undefined : message.active;
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.introduction_time = message.introductionTime ? Timestamp.toAmino(message.introductionTime, useInterfaces) : undefined;
    obj.expiration_time = message.expirationTime ? Timestamp.toAmino(message.expirationTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MaturityLevelAminoMsg): MaturityLevel {
    return MaturityLevel.fromAmino(object.value);
  },
  fromProtoMsg(message: MaturityLevelProtoMsg, useInterfaces: boolean = true): MaturityLevel {
    return MaturityLevel.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MaturityLevel): Uint8Array {
    return MaturityLevel.encode(message).finish();
  },
  toProtoMsg(message: MaturityLevel): MaturityLevelProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MaturityLevel",
      value: MaturityLevel.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MaturityLevel.typeUrl, MaturityLevel);