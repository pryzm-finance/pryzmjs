import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
/** BlockRequest requests a block for a specific height */
export interface BlockRequest {
  height: bigint;
}
export interface BlockRequestProtoMsg {
  typeUrl: "/tendermint.blocksync.BlockRequest";
  value: Uint8Array;
}
/** BlockRequest requests a block for a specific height */
export interface BlockRequestAmino {
  height?: string;
}
export interface BlockRequestAminoMsg {
  type: "/tendermint.blocksync.BlockRequest";
  value: BlockRequestAmino;
}
/** BlockRequest requests a block for a specific height */
export interface BlockRequestSDKType {
  height: bigint;
}
function createBaseBlockRequest(): BlockRequest {
  return {
    height: BigInt(0)
  };
}
export const BlockRequest = {
  typeUrl: "/tendermint.blocksync.BlockRequest",
  is(o: any): o is BlockRequest {
    return o && (o.$typeUrl === BlockRequest.typeUrl || typeof o.height === "bigint");
  },
  isSDK(o: any): o is BlockRequestSDKType {
    return o && (o.$typeUrl === BlockRequest.typeUrl || typeof o.height === "bigint");
  },
  isAmino(o: any): o is BlockRequestAmino {
    return o && (o.$typeUrl === BlockRequest.typeUrl || typeof o.height === "bigint");
  },
  encode(message: BlockRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): BlockRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockRequest {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  toJSON(message: BlockRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<BlockRequest>): BlockRequest {
    const message = createBaseBlockRequest();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BlockRequestAmino): BlockRequest {
    const message = createBaseBlockRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: BlockRequest, useInterfaces: boolean = true): BlockRequestAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockRequestAminoMsg): BlockRequest {
    return BlockRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockRequestProtoMsg, useInterfaces: boolean = true): BlockRequest {
    return BlockRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: BlockRequest): Uint8Array {
    return BlockRequest.encode(message).finish();
  },
  toProtoMsg(message: BlockRequest): BlockRequestProtoMsg {
    return {
      typeUrl: "/tendermint.blocksync.BlockRequest",
      value: BlockRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BlockRequest.typeUrl, BlockRequest);