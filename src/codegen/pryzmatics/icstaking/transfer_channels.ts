import { TransferChannel, TransferChannelAmino, TransferChannelSDKType } from "../../pryzm/icstaking/v1/host_chain";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
export interface TransferChannels {
  channels: TransferChannel[];
}
export interface TransferChannelsProtoMsg {
  typeUrl: "/pryzmatics.icstaking.TransferChannels";
  value: Uint8Array;
}
export interface TransferChannelsAmino {
  channels?: TransferChannelAmino[];
}
export interface TransferChannelsAminoMsg {
  type: "/pryzmatics.icstaking.TransferChannels";
  value: TransferChannelsAmino;
}
export interface TransferChannelsSDKType {
  channels: TransferChannelSDKType[];
}
function createBaseTransferChannels(): TransferChannels {
  return {
    channels: []
  };
}
export const TransferChannels = {
  typeUrl: "/pryzmatics.icstaking.TransferChannels",
  is(o: any): o is TransferChannels {
    return o && (o.$typeUrl === TransferChannels.typeUrl || Array.isArray(o.channels) && (!o.channels.length || TransferChannel.is(o.channels[0])));
  },
  isSDK(o: any): o is TransferChannelsSDKType {
    return o && (o.$typeUrl === TransferChannels.typeUrl || Array.isArray(o.channels) && (!o.channels.length || TransferChannel.isSDK(o.channels[0])));
  },
  isAmino(o: any): o is TransferChannelsAmino {
    return o && (o.$typeUrl === TransferChannels.typeUrl || Array.isArray(o.channels) && (!o.channels.length || TransferChannel.isAmino(o.channels[0])));
  },
  encode(message: TransferChannels, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.channels) {
      TransferChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): TransferChannels {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferChannels();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(TransferChannel.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TransferChannels {
    return {
      channels: Array.isArray(object?.channels) ? object.channels.map((e: any) => TransferChannel.fromJSON(e)) : []
    };
  },
  toJSON(message: TransferChannels): unknown {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map(e => e ? TransferChannel.toJSON(e) : undefined);
    } else {
      obj.channels = [];
    }
    return obj;
  },
  fromPartial(object: Partial<TransferChannels>): TransferChannels {
    const message = createBaseTransferChannels();
    message.channels = object.channels?.map(e => TransferChannel.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TransferChannelsAmino): TransferChannels {
    const message = createBaseTransferChannels();
    message.channels = object.channels?.map(e => TransferChannel.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TransferChannels, useInterfaces: boolean = true): TransferChannelsAmino {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map(e => e ? TransferChannel.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.channels = message.channels;
    }
    return obj;
  },
  fromAminoMsg(object: TransferChannelsAminoMsg): TransferChannels {
    return TransferChannels.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferChannelsProtoMsg, useInterfaces: boolean = true): TransferChannels {
    return TransferChannels.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: TransferChannels): Uint8Array {
    return TransferChannels.encode(message).finish();
  },
  toProtoMsg(message: TransferChannels): TransferChannelsProtoMsg {
    return {
      typeUrl: "/pryzmatics.icstaking.TransferChannels",
      value: TransferChannels.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TransferChannels.typeUrl, TransferChannels);