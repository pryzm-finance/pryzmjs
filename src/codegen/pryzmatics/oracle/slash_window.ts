import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface SlashWindow {
  id: bigint;
  slashWindow: bigint;
  closeBlockHeight: bigint;
  closeBlockTime: Timestamp;
}
export interface SlashWindowProtoMsg {
  typeUrl: "/pryzmatics.oracle.SlashWindow";
  value: Uint8Array;
}
export interface SlashWindowAmino {
  id?: string;
  slash_window?: string;
  close_block_height?: string;
  close_block_time?: string;
}
export interface SlashWindowAminoMsg {
  type: "/pryzmatics.oracle.SlashWindow";
  value: SlashWindowAmino;
}
export interface SlashWindowSDKType {
  id: bigint;
  slash_window: bigint;
  close_block_height: bigint;
  close_block_time: TimestampSDKType;
}
function createBaseSlashWindow(): SlashWindow {
  return {
    id: BigInt(0),
    slashWindow: BigInt(0),
    closeBlockHeight: BigInt(0),
    closeBlockTime: Timestamp.fromPartial({})
  };
}
export const SlashWindow = {
  typeUrl: "/pryzmatics.oracle.SlashWindow",
  is(o: any): o is SlashWindow {
    return o && (o.$typeUrl === SlashWindow.typeUrl || typeof o.id === "bigint" && typeof o.slashWindow === "bigint" && typeof o.closeBlockHeight === "bigint" && Timestamp.is(o.closeBlockTime));
  },
  isSDK(o: any): o is SlashWindowSDKType {
    return o && (o.$typeUrl === SlashWindow.typeUrl || typeof o.id === "bigint" && typeof o.slash_window === "bigint" && typeof o.close_block_height === "bigint" && Timestamp.isSDK(o.close_block_time));
  },
  isAmino(o: any): o is SlashWindowAmino {
    return o && (o.$typeUrl === SlashWindow.typeUrl || typeof o.id === "bigint" && typeof o.slash_window === "bigint" && typeof o.close_block_height === "bigint" && Timestamp.isAmino(o.close_block_time));
  },
  encode(message: SlashWindow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.slashWindow !== BigInt(0)) {
      writer.uint32(16).int64(message.slashWindow);
    }
    if (message.closeBlockHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.closeBlockHeight);
    }
    if (message.closeBlockTime !== undefined) {
      Timestamp.encode(message.closeBlockTime, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SlashWindow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlashWindow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.slashWindow = reader.int64();
          break;
        case 3:
          message.closeBlockHeight = reader.int64();
          break;
        case 4:
          message.closeBlockTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SlashWindow {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      slashWindow: isSet(object.slashWindow) ? BigInt(object.slashWindow.toString()) : BigInt(0),
      closeBlockHeight: isSet(object.closeBlockHeight) ? BigInt(object.closeBlockHeight.toString()) : BigInt(0),
      closeBlockTime: isSet(object.closeBlockTime) ? fromJsonTimestamp(object.closeBlockTime) : undefined
    };
  },
  toJSON(message: SlashWindow): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.slashWindow !== undefined && (obj.slashWindow = (message.slashWindow || BigInt(0)).toString());
    message.closeBlockHeight !== undefined && (obj.closeBlockHeight = (message.closeBlockHeight || BigInt(0)).toString());
    message.closeBlockTime !== undefined && (obj.closeBlockTime = fromTimestamp(message.closeBlockTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<SlashWindow>): SlashWindow {
    const message = createBaseSlashWindow();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.slashWindow = object.slashWindow !== undefined && object.slashWindow !== null ? BigInt(object.slashWindow.toString()) : BigInt(0);
    message.closeBlockHeight = object.closeBlockHeight !== undefined && object.closeBlockHeight !== null ? BigInt(object.closeBlockHeight.toString()) : BigInt(0);
    message.closeBlockTime = object.closeBlockTime !== undefined && object.closeBlockTime !== null ? Timestamp.fromPartial(object.closeBlockTime) : undefined;
    return message;
  },
  fromAmino(object: SlashWindowAmino): SlashWindow {
    const message = createBaseSlashWindow();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.slash_window !== undefined && object.slash_window !== null) {
      message.slashWindow = BigInt(object.slash_window);
    }
    if (object.close_block_height !== undefined && object.close_block_height !== null) {
      message.closeBlockHeight = BigInt(object.close_block_height);
    }
    if (object.close_block_time !== undefined && object.close_block_time !== null) {
      message.closeBlockTime = Timestamp.fromAmino(object.close_block_time);
    }
    return message;
  },
  toAmino(message: SlashWindow, useInterfaces: boolean = true): SlashWindowAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.slash_window = message.slashWindow ? message.slashWindow.toString() : undefined;
    obj.close_block_height = message.closeBlockHeight ? message.closeBlockHeight.toString() : undefined;
    obj.close_block_time = message.closeBlockTime ? Timestamp.toAmino(message.closeBlockTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: SlashWindowAminoMsg): SlashWindow {
    return SlashWindow.fromAmino(object.value);
  },
  fromProtoMsg(message: SlashWindowProtoMsg, useInterfaces: boolean = true): SlashWindow {
    return SlashWindow.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SlashWindow): Uint8Array {
    return SlashWindow.encode(message).finish();
  },
  toProtoMsg(message: SlashWindow): SlashWindowProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.SlashWindow",
      value: SlashWindow.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SlashWindow.typeUrl, SlashWindow);