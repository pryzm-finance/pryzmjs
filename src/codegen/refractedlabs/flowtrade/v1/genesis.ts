import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Flow, FlowAmino, FlowSDKType } from "./flow";
import { Position, PositionAmino, PositionSDKType } from "./position";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the flowtrade module's genesis state. */
export interface GenesisState {
  params: Params;
  flowList: Flow[];
  flowCount: bigint;
  positionList: Position[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the flowtrade module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  flow_list?: FlowAmino[];
  flow_count?: string;
  position_list?: PositionAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/refractedlabs.flowtrade.v1.GenesisState";
  value: GenesisStateAmino;
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
  typeUrl: "/refractedlabs.flowtrade.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.flowList) && (!o.flowList.length || Flow.is(o.flowList[0])) && typeof o.flowCount === "bigint" && Array.isArray(o.positionList) && (!o.positionList.length || Position.is(o.positionList[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.flow_list) && (!o.flow_list.length || Flow.isSDK(o.flow_list[0])) && typeof o.flow_count === "bigint" && Array.isArray(o.position_list) && (!o.position_list.length || Position.isSDK(o.position_list[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.flow_list) && (!o.flow_list.length || Flow.isAmino(o.flow_list[0])) && typeof o.flow_count === "bigint" && Array.isArray(o.position_list) && (!o.position_list.length || Position.isAmino(o.position_list[0])));
  },
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.flowList.push(Flow.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.flowCount = reader.uint64();
          break;
        case 4:
          message.positionList.push(Position.decode(reader, reader.uint32(), useInterfaces));
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.flowList = object.flow_list?.map(e => Flow.fromAmino(e)) || [];
    if (object.flow_count !== undefined && object.flow_count !== null) {
      message.flowCount = BigInt(object.flow_count);
    }
    message.positionList = object.position_list?.map(e => Position.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState, useInterfaces: boolean = true): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    if (message.flowList) {
      obj.flow_list = message.flowList.map(e => e ? Flow.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.flow_list = message.flowList;
    }
    obj.flow_count = message.flowCount ? message.flowCount.toString() : undefined;
    if (message.positionList) {
      obj.position_list = message.positionList.map(e => e ? Position.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.position_list = message.positionList;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg, useInterfaces: boolean = true): GenesisState {
    return GenesisState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);