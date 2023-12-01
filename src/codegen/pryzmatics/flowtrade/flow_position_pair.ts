import { Flow, FlowSDKType } from "../../refractedlabs/flowtrade/flow";
import { Position, PositionSDKType } from "../../refractedlabs/flowtrade/position";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface FlowPositionPair {
  flow: Flow;
  position?: Position;
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
  encode(message: FlowPositionPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== undefined) {
      Flow.encode(message.flow, writer.uint32(10).fork()).ldelim();
    }
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FlowPositionPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlowPositionPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow = Flow.decode(reader, reader.uint32());
          break;
        case 2:
          message.position = Position.decode(reader, reader.uint32());
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
  }
};