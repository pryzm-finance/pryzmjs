import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
export interface MaturityLevel {
  active: boolean;
  assetId: string;
  symbol: string;
  introductionTime: Timestamp;
  expirationTime: Timestamp;
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
  encode(message: MaturityLevel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MaturityLevel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};