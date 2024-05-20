import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface FlowHistoricalPrice {
  time: Timestamp;
  low?: string;
  high?: string;
  avg?: string;
  open?: string;
  close?: string;
}
export interface FlowHistoricalPriceProtoMsg {
  typeUrl: "/pryzmatics.flowtrade.FlowHistoricalPrice";
  value: Uint8Array;
}
export interface FlowHistoricalPriceAmino {
  time?: string;
  low?: string;
  high?: string;
  avg?: string;
  open?: string;
  close?: string;
}
export interface FlowHistoricalPriceAminoMsg {
  type: "/pryzmatics.flowtrade.FlowHistoricalPrice";
  value: FlowHistoricalPriceAmino;
}
export interface FlowHistoricalPriceSDKType {
  time: TimestampSDKType;
  low?: string;
  high?: string;
  avg?: string;
  open?: string;
  close?: string;
}
function createBaseFlowHistoricalPrice(): FlowHistoricalPrice {
  return {
    time: Timestamp.fromPartial({}),
    low: undefined,
    high: undefined,
    avg: undefined,
    open: undefined,
    close: undefined
  };
}
export const FlowHistoricalPrice = {
  typeUrl: "/pryzmatics.flowtrade.FlowHistoricalPrice",
  is(o: any): o is FlowHistoricalPrice {
    return o && (o.$typeUrl === FlowHistoricalPrice.typeUrl || Timestamp.is(o.time));
  },
  isSDK(o: any): o is FlowHistoricalPriceSDKType {
    return o && (o.$typeUrl === FlowHistoricalPrice.typeUrl || Timestamp.isSDK(o.time));
  },
  isAmino(o: any): o is FlowHistoricalPriceAmino {
    return o && (o.$typeUrl === FlowHistoricalPrice.typeUrl || Timestamp.isAmino(o.time));
  },
  encode(message: FlowHistoricalPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(10).fork()).ldelim();
    }
    if (message.low !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.low, 18).atomics);
    }
    if (message.high !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.high, 18).atomics);
    }
    if (message.avg !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.avg, 18).atomics);
    }
    if (message.open !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.open, 18).atomics);
    }
    if (message.close !== undefined) {
      writer.uint32(50).string(Decimal.fromUserInput(message.close, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): FlowHistoricalPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlowHistoricalPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.low = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.high = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.avg = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.open = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.close = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FlowHistoricalPrice {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      low: isSet(object.low) ? String(object.low) : undefined,
      high: isSet(object.high) ? String(object.high) : undefined,
      avg: isSet(object.avg) ? String(object.avg) : undefined,
      open: isSet(object.open) ? String(object.open) : undefined,
      close: isSet(object.close) ? String(object.close) : undefined
    };
  },
  toJSON(message: FlowHistoricalPrice): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.low !== undefined && (obj.low = message.low);
    message.high !== undefined && (obj.high = message.high);
    message.avg !== undefined && (obj.avg = message.avg);
    message.open !== undefined && (obj.open = message.open);
    message.close !== undefined && (obj.close = message.close);
    return obj;
  },
  fromPartial(object: Partial<FlowHistoricalPrice>): FlowHistoricalPrice {
    const message = createBaseFlowHistoricalPrice();
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.low = object.low ?? undefined;
    message.high = object.high ?? undefined;
    message.avg = object.avg ?? undefined;
    message.open = object.open ?? undefined;
    message.close = object.close ?? undefined;
    return message;
  },
  fromAmino(object: FlowHistoricalPriceAmino): FlowHistoricalPrice {
    const message = createBaseFlowHistoricalPrice();
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    if (object.low !== undefined && object.low !== null) {
      message.low = object.low;
    }
    if (object.high !== undefined && object.high !== null) {
      message.high = object.high;
    }
    if (object.avg !== undefined && object.avg !== null) {
      message.avg = object.avg;
    }
    if (object.open !== undefined && object.open !== null) {
      message.open = object.open;
    }
    if (object.close !== undefined && object.close !== null) {
      message.close = object.close;
    }
    return message;
  },
  toAmino(message: FlowHistoricalPrice, useInterfaces: boolean = true): FlowHistoricalPriceAmino {
    const obj: any = {};
    obj.time = message.time ? Timestamp.toAmino(message.time, useInterfaces) : undefined;
    obj.low = padDecimal(message.low) === null ? undefined : padDecimal(message.low);
    obj.high = padDecimal(message.high) === null ? undefined : padDecimal(message.high);
    obj.avg = padDecimal(message.avg) === null ? undefined : padDecimal(message.avg);
    obj.open = padDecimal(message.open) === null ? undefined : padDecimal(message.open);
    obj.close = padDecimal(message.close) === null ? undefined : padDecimal(message.close);
    return obj;
  },
  fromAminoMsg(object: FlowHistoricalPriceAminoMsg): FlowHistoricalPrice {
    return FlowHistoricalPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: FlowHistoricalPriceProtoMsg, useInterfaces: boolean = true): FlowHistoricalPrice {
    return FlowHistoricalPrice.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: FlowHistoricalPrice): Uint8Array {
    return FlowHistoricalPrice.encode(message).finish();
  },
  toProtoMsg(message: FlowHistoricalPrice): FlowHistoricalPriceProtoMsg {
    return {
      typeUrl: "/pryzmatics.flowtrade.FlowHistoricalPrice",
      value: FlowHistoricalPrice.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FlowHistoricalPrice.typeUrl, FlowHistoricalPrice);