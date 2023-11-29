import { Params, ParamsSDKType } from "./params";
import { Flow, FlowSDKType } from "./flow";
import { Position, PositionSDKType } from "./position";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the flowtrade module's genesis state. */
export interface GenesisState {
  params: Params;
  flowList: Flow[];
  flowCount: bigint;
  positionList: Position[];
}
/** GenesisState defines the flowtrade module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  flow_list: FlowSDKType[];
  flow_count: bigint;
  position_list: PositionSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    flowList: [],
    flowCount: BigInt(0),
    positionList: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.flowList) {
      Flow.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.flowCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.flowCount);
    }
    for (const v of message.positionList) {
      Position.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.flowList.push(Flow.decode(reader, reader.uint32()));
          break;
        case 3:
          message.flowCount = reader.uint64();
          break;
        case 4:
          message.positionList.push(Position.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      flowList: Array.isArray(object?.flowList) ? object.flowList.map((e: any) => Flow.fromJSON(e)) : [],
      flowCount: isSet(object.flowCount) ? BigInt(object.flowCount.toString()) : BigInt(0),
      positionList: Array.isArray(object?.positionList) ? object.positionList.map((e: any) => Position.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.flowList) {
      obj.flowList = message.flowList.map(e => e ? Flow.toJSON(e) : undefined);
    } else {
      obj.flowList = [];
    }
    message.flowCount !== undefined && (obj.flowCount = (message.flowCount || BigInt(0)).toString());
    if (message.positionList) {
      obj.positionList = message.positionList.map(e => e ? Position.toJSON(e) : undefined);
    } else {
      obj.positionList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.flowList = object.flowList?.map(e => Flow.fromPartial(e)) || [];
    message.flowCount = object.flowCount !== undefined && object.flowCount !== null ? BigInt(object.flowCount.toString()) : BigInt(0);
    message.positionList = object.positionList?.map(e => Position.fromPartial(e)) || [];
    return message;
  }
};