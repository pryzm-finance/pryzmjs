import { Flow, FlowAmino, FlowSDKType } from "../../refractedlabs/flowtrade/v1/flow";
import { Position, PositionAmino, PositionSDKType } from "../../refractedlabs/flowtrade/v1/position";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface FlowPositionPair {
  flow: Flow;
  position?: Position;
}
export interface FlowPositionPairProtoMsg {
  typeUrl: "/pryzmatics.flowtrade.FlowPositionPair";
  value: Uint8Array;
}
export interface FlowPositionPairAmino {
  flow?: FlowAmino;
  position?: PositionAmino;
}
export interface FlowPositionPairAminoMsg {
  type: "/pryzmatics.flowtrade.FlowPositionPair";
  value: FlowPositionPairAmino;
}
export interface FlowPositionPairSDKType {
  flow: FlowSDKType;
  position?: PositionSDKType;
}
function createBaseFlowPositionPair(): FlowPositionPair {
  return {
    flow: Flow.fromPartial({}),
    position: undefined
  };
}
export const FlowPositionPair = {
  typeUrl: "/pryzmatics.flowtrade.FlowPositionPair",
  is(o: any): o is FlowPositionPair {
    return o && (o.$typeUrl === FlowPositionPair.typeUrl || Flow.is(o.flow));
  },
  isSDK(o: any): o is FlowPositionPairSDKType {
    return o && (o.$typeUrl === FlowPositionPair.typeUrl || Flow.isSDK(o.flow));
  },
  isAmino(o: any): o is FlowPositionPairAmino {
    return o && (o.$typeUrl === FlowPositionPair.typeUrl || Flow.isAmino(o.flow));
  },
  encode(message: FlowPositionPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== undefined) {
      Flow.encode(message.flow, writer.uint32(10).fork()).ldelim();
    }
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): FlowPositionPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlowPositionPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow = Flow.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.position = Position.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FlowPositionPair {
    return {
      flow: isSet(object.flow) ? Flow.fromJSON(object.flow) : undefined,
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined
    };
  },
  toJSON(message: FlowPositionPair): unknown {
    const obj: any = {};
    message.flow !== undefined && (obj.flow = message.flow ? Flow.toJSON(message.flow) : undefined);
    message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    return obj;
  },
  fromPartial(object: Partial<FlowPositionPair>): FlowPositionPair {
    const message = createBaseFlowPositionPair();
    message.flow = object.flow !== undefined && object.flow !== null ? Flow.fromPartial(object.flow) : undefined;
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    return message;
  },
  fromAmino(object: FlowPositionPairAmino): FlowPositionPair {
    const message = createBaseFlowPositionPair();
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = Flow.fromAmino(object.flow);
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = Position.fromAmino(object.position);
    }
    return message;
  },
  toAmino(message: FlowPositionPair, useInterfaces: boolean = true): FlowPositionPairAmino {
    const obj: any = {};
    obj.flow = message.flow ? Flow.toAmino(message.flow, useInterfaces) : undefined;
    obj.position = message.position ? Position.toAmino(message.position, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: FlowPositionPairAminoMsg): FlowPositionPair {
    return FlowPositionPair.fromAmino(object.value);
  },
  fromProtoMsg(message: FlowPositionPairProtoMsg, useInterfaces: boolean = true): FlowPositionPair {
    return FlowPositionPair.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: FlowPositionPair): Uint8Array {
    return FlowPositionPair.encode(message).finish();
  },
  toProtoMsg(message: FlowPositionPair): FlowPositionPairProtoMsg {
    return {
      typeUrl: "/pryzmatics.flowtrade.FlowPositionPair",
      value: FlowPositionPair.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FlowPositionPair.typeUrl, FlowPositionPair);