import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Flow, FlowAmino, FlowSDKType } from "./flow";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Position, PositionAmino, PositionSDKType } from "./position";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface EventSetParams {
  params: Params;
}
export interface EventSetParamsProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.EventSetParams";
  value: Uint8Array;
}
export interface EventSetParamsAmino {
  params?: ParamsAmino;
}
export interface EventSetParamsAminoMsg {
  type: "/refractedlabs.flowtrade.v1.EventSetParams";
  value: EventSetParamsAmino;
}
export interface EventSetParamsSDKType {
  params: ParamsSDKType;
}
export interface EventFlowCreated {
  flow: Flow;
}
export interface EventFlowCreatedProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.EventFlowCreated";
  value: Uint8Array;
}
export interface EventFlowCreatedAmino {
  flow?: FlowAmino;
}
export interface EventFlowCreatedAminoMsg {
  type: "/refractedlabs.flowtrade.v1.EventFlowCreated";
  value: EventFlowCreatedAmino;
}
export interface EventFlowCreatedSDKType {
  flow: FlowSDKType;
}
export interface EventFlowEnded {
  flowId: bigint;
}
export interface EventFlowEndedProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.EventFlowEnded";
  value: Uint8Array;
}
export interface EventFlowEndedAmino {
  flow_id?: string;
}
export interface EventFlowEndedAminoMsg {
  type: "/refractedlabs.flowtrade.v1.EventFlowEnded";
  value: EventFlowEndedAmino;
}
export interface EventFlowEndedSDKType {
  flow_id: bigint;
}
export interface EventFlowStopped {
  flowId: bigint;
}
export interface EventFlowStoppedProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.EventFlowStopped";
  value: Uint8Array;
}
export interface EventFlowStoppedAmino {
  flow_id?: string;
}
export interface EventFlowStoppedAminoMsg {
  type: "/refractedlabs.flowtrade.v1.EventFlowStopped";
  value: EventFlowStoppedAmino;
}
export interface EventFlowStoppedSDKType {
  flow_id: bigint;
}
export interface EventFlowCheckedOut {
  flowId: bigint;
  returnedDeposit?: Coin;
  returnedTokenOut?: Coin;
}
export interface EventFlowCheckedOutProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.EventFlowCheckedOut";
  value: Uint8Array;
}
export interface EventFlowCheckedOutAmino {
  flow_id?: string;
  returned_deposit?: CoinAmino;
  returned_token_out?: CoinAmino;
}
export interface EventFlowCheckedOutAminoMsg {
  type: "/refractedlabs.flowtrade.v1.EventFlowCheckedOut";
  value: EventFlowCheckedOutAmino;
}
export interface EventFlowCheckedOutSDKType {
  flow_id: bigint;
  returned_deposit?: CoinSDKType;
  returned_token_out?: CoinSDKType;
}
export interface EventFlowTokenInClaimed {
  flowId: bigint;
  amount: Coin;
  fee: Coin;
  treasury: string;
}
export interface EventFlowTokenInClaimedProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.EventFlowTokenInClaimed";
  value: Uint8Array;
}
export interface EventFlowTokenInClaimedAmino {
  flow_id?: string;
  amount?: CoinAmino;
  fee?: CoinAmino;
  treasury?: string;
}
export interface EventFlowTokenInClaimedAminoMsg {
  type: "/refractedlabs.flowtrade.v1.EventFlowTokenInClaimed";
  value: EventFlowTokenInClaimedAmino;
}
export interface EventFlowTokenInClaimedSDKType {
  flow_id: bigint;
  amount: CoinSDKType;
  fee: CoinSDKType;
  treasury: string;
}
export interface EventFlowTokenOutClaimed {
  flowId: bigint;
  owner: string;
  amount: Coin;
  fee: Coin;
}
export interface EventFlowTokenOutClaimedProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.EventFlowTokenOutClaimed";
  value: Uint8Array;
}
export interface EventFlowTokenOutClaimedAmino {
  flow_id?: string;
  owner?: string;
  amount?: CoinAmino;
  fee?: CoinAmino;
}
export interface EventFlowTokenOutClaimedAminoMsg {
  type: "/refractedlabs.flowtrade.v1.EventFlowTokenOutClaimed";
  value: EventFlowTokenOutClaimedAmino;
}
export interface EventFlowTokenOutClaimedSDKType {
  flow_id: bigint;
  owner: string;
  amount: CoinSDKType;
  fee: CoinSDKType;
}
export interface EventJoinFlow {
  flowId: bigint;
  address: string;
  amount: Coin;
}
export interface EventJoinFlowProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.EventJoinFlow";
  value: Uint8Array;
}
export interface EventJoinFlowAmino {
  flow_id?: string;
  address?: string;
  amount?: CoinAmino;
}
export interface EventJoinFlowAminoMsg {
  type: "/refractedlabs.flowtrade.v1.EventJoinFlow";
  value: EventJoinFlowAmino;
}
export interface EventJoinFlowSDKType {
  flow_id: bigint;
  address: string;
  amount: CoinSDKType;
}
export interface EventExitFlow {
  flowId: bigint;
  address: string;
  amount: Coin;
}
export interface EventExitFlowProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.EventExitFlow";
  value: Uint8Array;
}
export interface EventExitFlowAmino {
  flow_id?: string;
  address?: string;
  amount?: CoinAmino;
}
export interface EventExitFlowAminoMsg {
  type: "/refractedlabs.flowtrade.v1.EventExitFlow";
  value: EventExitFlowAmino;
}
export interface EventExitFlowSDKType {
  flow_id: bigint;
  address: string;
  amount: CoinSDKType;
}
export interface EventSetOperator {
  flowId: bigint;
  owner: string;
  operator: string;
}
export interface EventSetOperatorProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.EventSetOperator";
  value: Uint8Array;
}
export interface EventSetOperatorAmino {
  flow_id?: string;
  owner?: string;
  operator?: string;
}
export interface EventSetOperatorAminoMsg {
  type: "/refractedlabs.flowtrade.v1.EventSetOperator";
  value: EventSetOperatorAmino;
}
export interface EventSetOperatorSDKType {
  flow_id: bigint;
  owner: string;
  operator: string;
}
export interface EventSetFlow {
  flow: Flow;
}
export interface EventSetFlowProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.EventSetFlow";
  value: Uint8Array;
}
export interface EventSetFlowAmino {
  flow?: FlowAmino;
}
export interface EventSetFlowAminoMsg {
  type: "/refractedlabs.flowtrade.v1.EventSetFlow";
  value: EventSetFlowAmino;
}
export interface EventSetFlowSDKType {
  flow: FlowSDKType;
}
export interface EventSetPosition {
  position: Position;
}
export interface EventSetPositionProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.EventSetPosition";
  value: Uint8Array;
}
export interface EventSetPositionAmino {
  position?: PositionAmino;
}
export interface EventSetPositionAminoMsg {
  type: "/refractedlabs.flowtrade.v1.EventSetPosition";
  value: EventSetPositionAmino;
}
export interface EventSetPositionSDKType {
  position: PositionSDKType;
}
function createBaseEventSetParams(): EventSetParams {
  return {
    params: Params.fromPartial({})
  };
}
export const EventSetParams = {
  typeUrl: "/refractedlabs.flowtrade.v1.EventSetParams",
  is(o: any): o is EventSetParams {
    return o && (o.$typeUrl === EventSetParams.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is EventSetParamsSDKType {
    return o && (o.$typeUrl === EventSetParams.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is EventSetParamsAmino {
    return o && (o.$typeUrl === EventSetParams.typeUrl || Params.isAmino(o.params));
  },
  encode(message: EventSetParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetParams {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: EventSetParams): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetParams>): EventSetParams {
    const message = createBaseEventSetParams();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: EventSetParamsAmino): EventSetParams {
    const message = createBaseEventSetParams();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: EventSetParams, useInterfaces: boolean = true): EventSetParamsAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetParamsAminoMsg): EventSetParams {
    return EventSetParams.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetParamsProtoMsg, useInterfaces: boolean = true): EventSetParams {
    return EventSetParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetParams): Uint8Array {
    return EventSetParams.encode(message).finish();
  },
  toProtoMsg(message: EventSetParams): EventSetParamsProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.EventSetParams",
      value: EventSetParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetParams.typeUrl, EventSetParams);
function createBaseEventFlowCreated(): EventFlowCreated {
  return {
    flow: Flow.fromPartial({})
  };
}
export const EventFlowCreated = {
  typeUrl: "/refractedlabs.flowtrade.v1.EventFlowCreated",
  is(o: any): o is EventFlowCreated {
    return o && (o.$typeUrl === EventFlowCreated.typeUrl || Flow.is(o.flow));
  },
  isSDK(o: any): o is EventFlowCreatedSDKType {
    return o && (o.$typeUrl === EventFlowCreated.typeUrl || Flow.isSDK(o.flow));
  },
  isAmino(o: any): o is EventFlowCreatedAmino {
    return o && (o.$typeUrl === EventFlowCreated.typeUrl || Flow.isAmino(o.flow));
  },
  encode(message: EventFlowCreated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== undefined) {
      Flow.encode(message.flow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventFlowCreated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFlowCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow = Flow.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventFlowCreated {
    return {
      flow: isSet(object.flow) ? Flow.fromJSON(object.flow) : undefined
    };
  },
  toJSON(message: EventFlowCreated): unknown {
    const obj: any = {};
    message.flow !== undefined && (obj.flow = message.flow ? Flow.toJSON(message.flow) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventFlowCreated>): EventFlowCreated {
    const message = createBaseEventFlowCreated();
    message.flow = object.flow !== undefined && object.flow !== null ? Flow.fromPartial(object.flow) : undefined;
    return message;
  },
  fromAmino(object: EventFlowCreatedAmino): EventFlowCreated {
    const message = createBaseEventFlowCreated();
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = Flow.fromAmino(object.flow);
    }
    return message;
  },
  toAmino(message: EventFlowCreated, useInterfaces: boolean = true): EventFlowCreatedAmino {
    const obj: any = {};
    obj.flow = message.flow ? Flow.toAmino(message.flow, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventFlowCreatedAminoMsg): EventFlowCreated {
    return EventFlowCreated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventFlowCreatedProtoMsg, useInterfaces: boolean = true): EventFlowCreated {
    return EventFlowCreated.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventFlowCreated): Uint8Array {
    return EventFlowCreated.encode(message).finish();
  },
  toProtoMsg(message: EventFlowCreated): EventFlowCreatedProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.EventFlowCreated",
      value: EventFlowCreated.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventFlowCreated.typeUrl, EventFlowCreated);
function createBaseEventFlowEnded(): EventFlowEnded {
  return {
    flowId: BigInt(0)
  };
}
export const EventFlowEnded = {
  typeUrl: "/refractedlabs.flowtrade.v1.EventFlowEnded",
  is(o: any): o is EventFlowEnded {
    return o && (o.$typeUrl === EventFlowEnded.typeUrl || typeof o.flowId === "bigint");
  },
  isSDK(o: any): o is EventFlowEndedSDKType {
    return o && (o.$typeUrl === EventFlowEnded.typeUrl || typeof o.flow_id === "bigint");
  },
  isAmino(o: any): o is EventFlowEndedAmino {
    return o && (o.$typeUrl === EventFlowEnded.typeUrl || typeof o.flow_id === "bigint");
  },
  encode(message: EventFlowEnded, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowId !== BigInt(0)) {
      writer.uint32(8).uint64(message.flowId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventFlowEnded {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFlowEnded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventFlowEnded {
    return {
      flowId: isSet(object.flowId) ? BigInt(object.flowId.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventFlowEnded): unknown {
    const obj: any = {};
    message.flowId !== undefined && (obj.flowId = (message.flowId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventFlowEnded>): EventFlowEnded {
    const message = createBaseEventFlowEnded();
    message.flowId = object.flowId !== undefined && object.flowId !== null ? BigInt(object.flowId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventFlowEndedAmino): EventFlowEnded {
    const message = createBaseEventFlowEnded();
    if (object.flow_id !== undefined && object.flow_id !== null) {
      message.flowId = BigInt(object.flow_id);
    }
    return message;
  },
  toAmino(message: EventFlowEnded, useInterfaces: boolean = true): EventFlowEndedAmino {
    const obj: any = {};
    obj.flow_id = message.flowId ? message.flowId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventFlowEndedAminoMsg): EventFlowEnded {
    return EventFlowEnded.fromAmino(object.value);
  },
  fromProtoMsg(message: EventFlowEndedProtoMsg, useInterfaces: boolean = true): EventFlowEnded {
    return EventFlowEnded.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventFlowEnded): Uint8Array {
    return EventFlowEnded.encode(message).finish();
  },
  toProtoMsg(message: EventFlowEnded): EventFlowEndedProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.EventFlowEnded",
      value: EventFlowEnded.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventFlowEnded.typeUrl, EventFlowEnded);
function createBaseEventFlowStopped(): EventFlowStopped {
  return {
    flowId: BigInt(0)
  };
}
export const EventFlowStopped = {
  typeUrl: "/refractedlabs.flowtrade.v1.EventFlowStopped",
  is(o: any): o is EventFlowStopped {
    return o && (o.$typeUrl === EventFlowStopped.typeUrl || typeof o.flowId === "bigint");
  },
  isSDK(o: any): o is EventFlowStoppedSDKType {
    return o && (o.$typeUrl === EventFlowStopped.typeUrl || typeof o.flow_id === "bigint");
  },
  isAmino(o: any): o is EventFlowStoppedAmino {
    return o && (o.$typeUrl === EventFlowStopped.typeUrl || typeof o.flow_id === "bigint");
  },
  encode(message: EventFlowStopped, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowId !== BigInt(0)) {
      writer.uint32(8).uint64(message.flowId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventFlowStopped {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFlowStopped();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventFlowStopped {
    return {
      flowId: isSet(object.flowId) ? BigInt(object.flowId.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventFlowStopped): unknown {
    const obj: any = {};
    message.flowId !== undefined && (obj.flowId = (message.flowId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventFlowStopped>): EventFlowStopped {
    const message = createBaseEventFlowStopped();
    message.flowId = object.flowId !== undefined && object.flowId !== null ? BigInt(object.flowId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventFlowStoppedAmino): EventFlowStopped {
    const message = createBaseEventFlowStopped();
    if (object.flow_id !== undefined && object.flow_id !== null) {
      message.flowId = BigInt(object.flow_id);
    }
    return message;
  },
  toAmino(message: EventFlowStopped, useInterfaces: boolean = true): EventFlowStoppedAmino {
    const obj: any = {};
    obj.flow_id = message.flowId ? message.flowId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventFlowStoppedAminoMsg): EventFlowStopped {
    return EventFlowStopped.fromAmino(object.value);
  },
  fromProtoMsg(message: EventFlowStoppedProtoMsg, useInterfaces: boolean = true): EventFlowStopped {
    return EventFlowStopped.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventFlowStopped): Uint8Array {
    return EventFlowStopped.encode(message).finish();
  },
  toProtoMsg(message: EventFlowStopped): EventFlowStoppedProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.EventFlowStopped",
      value: EventFlowStopped.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventFlowStopped.typeUrl, EventFlowStopped);
function createBaseEventFlowCheckedOut(): EventFlowCheckedOut {
  return {
    flowId: BigInt(0),
    returnedDeposit: undefined,
    returnedTokenOut: undefined
  };
}
export const EventFlowCheckedOut = {
  typeUrl: "/refractedlabs.flowtrade.v1.EventFlowCheckedOut",
  is(o: any): o is EventFlowCheckedOut {
    return o && (o.$typeUrl === EventFlowCheckedOut.typeUrl || typeof o.flowId === "bigint");
  },
  isSDK(o: any): o is EventFlowCheckedOutSDKType {
    return o && (o.$typeUrl === EventFlowCheckedOut.typeUrl || typeof o.flow_id === "bigint");
  },
  isAmino(o: any): o is EventFlowCheckedOutAmino {
    return o && (o.$typeUrl === EventFlowCheckedOut.typeUrl || typeof o.flow_id === "bigint");
  },
  encode(message: EventFlowCheckedOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowId !== BigInt(0)) {
      writer.uint32(8).uint64(message.flowId);
    }
    if (message.returnedDeposit !== undefined) {
      Coin.encode(message.returnedDeposit, writer.uint32(18).fork()).ldelim();
    }
    if (message.returnedTokenOut !== undefined) {
      Coin.encode(message.returnedTokenOut, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventFlowCheckedOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFlowCheckedOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowId = reader.uint64();
          break;
        case 2:
          message.returnedDeposit = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.returnedTokenOut = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventFlowCheckedOut {
    return {
      flowId: isSet(object.flowId) ? BigInt(object.flowId.toString()) : BigInt(0),
      returnedDeposit: isSet(object.returnedDeposit) ? Coin.fromJSON(object.returnedDeposit) : undefined,
      returnedTokenOut: isSet(object.returnedTokenOut) ? Coin.fromJSON(object.returnedTokenOut) : undefined
    };
  },
  toJSON(message: EventFlowCheckedOut): unknown {
    const obj: any = {};
    message.flowId !== undefined && (obj.flowId = (message.flowId || BigInt(0)).toString());
    message.returnedDeposit !== undefined && (obj.returnedDeposit = message.returnedDeposit ? Coin.toJSON(message.returnedDeposit) : undefined);
    message.returnedTokenOut !== undefined && (obj.returnedTokenOut = message.returnedTokenOut ? Coin.toJSON(message.returnedTokenOut) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventFlowCheckedOut>): EventFlowCheckedOut {
    const message = createBaseEventFlowCheckedOut();
    message.flowId = object.flowId !== undefined && object.flowId !== null ? BigInt(object.flowId.toString()) : BigInt(0);
    message.returnedDeposit = object.returnedDeposit !== undefined && object.returnedDeposit !== null ? Coin.fromPartial(object.returnedDeposit) : undefined;
    message.returnedTokenOut = object.returnedTokenOut !== undefined && object.returnedTokenOut !== null ? Coin.fromPartial(object.returnedTokenOut) : undefined;
    return message;
  },
  fromAmino(object: EventFlowCheckedOutAmino): EventFlowCheckedOut {
    const message = createBaseEventFlowCheckedOut();
    if (object.flow_id !== undefined && object.flow_id !== null) {
      message.flowId = BigInt(object.flow_id);
    }
    if (object.returned_deposit !== undefined && object.returned_deposit !== null) {
      message.returnedDeposit = Coin.fromAmino(object.returned_deposit);
    }
    if (object.returned_token_out !== undefined && object.returned_token_out !== null) {
      message.returnedTokenOut = Coin.fromAmino(object.returned_token_out);
    }
    return message;
  },
  toAmino(message: EventFlowCheckedOut, useInterfaces: boolean = true): EventFlowCheckedOutAmino {
    const obj: any = {};
    obj.flow_id = message.flowId ? message.flowId.toString() : undefined;
    obj.returned_deposit = message.returnedDeposit ? Coin.toAmino(message.returnedDeposit, useInterfaces) : undefined;
    obj.returned_token_out = message.returnedTokenOut ? Coin.toAmino(message.returnedTokenOut, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventFlowCheckedOutAminoMsg): EventFlowCheckedOut {
    return EventFlowCheckedOut.fromAmino(object.value);
  },
  fromProtoMsg(message: EventFlowCheckedOutProtoMsg, useInterfaces: boolean = true): EventFlowCheckedOut {
    return EventFlowCheckedOut.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventFlowCheckedOut): Uint8Array {
    return EventFlowCheckedOut.encode(message).finish();
  },
  toProtoMsg(message: EventFlowCheckedOut): EventFlowCheckedOutProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.EventFlowCheckedOut",
      value: EventFlowCheckedOut.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventFlowCheckedOut.typeUrl, EventFlowCheckedOut);
function createBaseEventFlowTokenInClaimed(): EventFlowTokenInClaimed {
  return {
    flowId: BigInt(0),
    amount: Coin.fromPartial({}),
    fee: Coin.fromPartial({}),
    treasury: ""
  };
}
export const EventFlowTokenInClaimed = {
  typeUrl: "/refractedlabs.flowtrade.v1.EventFlowTokenInClaimed",
  is(o: any): o is EventFlowTokenInClaimed {
    return o && (o.$typeUrl === EventFlowTokenInClaimed.typeUrl || typeof o.flowId === "bigint" && Coin.is(o.amount) && Coin.is(o.fee) && typeof o.treasury === "string");
  },
  isSDK(o: any): o is EventFlowTokenInClaimedSDKType {
    return o && (o.$typeUrl === EventFlowTokenInClaimed.typeUrl || typeof o.flow_id === "bigint" && Coin.isSDK(o.amount) && Coin.isSDK(o.fee) && typeof o.treasury === "string");
  },
  isAmino(o: any): o is EventFlowTokenInClaimedAmino {
    return o && (o.$typeUrl === EventFlowTokenInClaimed.typeUrl || typeof o.flow_id === "bigint" && Coin.isAmino(o.amount) && Coin.isAmino(o.fee) && typeof o.treasury === "string");
  },
  encode(message: EventFlowTokenInClaimed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowId !== BigInt(0)) {
      writer.uint32(8).uint64(message.flowId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    if (message.treasury !== "") {
      writer.uint32(34).string(message.treasury);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventFlowTokenInClaimed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFlowTokenInClaimed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowId = reader.uint64();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.fee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.treasury = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventFlowTokenInClaimed {
    return {
      flowId: isSet(object.flowId) ? BigInt(object.flowId.toString()) : BigInt(0),
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
      treasury: isSet(object.treasury) ? String(object.treasury) : ""
    };
  },
  toJSON(message: EventFlowTokenInClaimed): unknown {
    const obj: any = {};
    message.flowId !== undefined && (obj.flowId = (message.flowId || BigInt(0)).toString());
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    message.treasury !== undefined && (obj.treasury = message.treasury);
    return obj;
  },
  fromPartial(object: Partial<EventFlowTokenInClaimed>): EventFlowTokenInClaimed {
    const message = createBaseEventFlowTokenInClaimed();
    message.flowId = object.flowId !== undefined && object.flowId !== null ? BigInt(object.flowId.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    message.treasury = object.treasury ?? "";
    return message;
  },
  fromAmino(object: EventFlowTokenInClaimedAmino): EventFlowTokenInClaimed {
    const message = createBaseEventFlowTokenInClaimed();
    if (object.flow_id !== undefined && object.flow_id !== null) {
      message.flowId = BigInt(object.flow_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    if (object.treasury !== undefined && object.treasury !== null) {
      message.treasury = object.treasury;
    }
    return message;
  },
  toAmino(message: EventFlowTokenInClaimed, useInterfaces: boolean = true): EventFlowTokenInClaimedAmino {
    const obj: any = {};
    obj.flow_id = message.flowId ? message.flowId.toString() : undefined;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    obj.treasury = message.treasury === "" ? undefined : message.treasury;
    return obj;
  },
  fromAminoMsg(object: EventFlowTokenInClaimedAminoMsg): EventFlowTokenInClaimed {
    return EventFlowTokenInClaimed.fromAmino(object.value);
  },
  fromProtoMsg(message: EventFlowTokenInClaimedProtoMsg, useInterfaces: boolean = true): EventFlowTokenInClaimed {
    return EventFlowTokenInClaimed.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventFlowTokenInClaimed): Uint8Array {
    return EventFlowTokenInClaimed.encode(message).finish();
  },
  toProtoMsg(message: EventFlowTokenInClaimed): EventFlowTokenInClaimedProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.EventFlowTokenInClaimed",
      value: EventFlowTokenInClaimed.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventFlowTokenInClaimed.typeUrl, EventFlowTokenInClaimed);
function createBaseEventFlowTokenOutClaimed(): EventFlowTokenOutClaimed {
  return {
    flowId: BigInt(0),
    owner: "",
    amount: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const EventFlowTokenOutClaimed = {
  typeUrl: "/refractedlabs.flowtrade.v1.EventFlowTokenOutClaimed",
  is(o: any): o is EventFlowTokenOutClaimed {
    return o && (o.$typeUrl === EventFlowTokenOutClaimed.typeUrl || typeof o.flowId === "bigint" && typeof o.owner === "string" && Coin.is(o.amount) && Coin.is(o.fee));
  },
  isSDK(o: any): o is EventFlowTokenOutClaimedSDKType {
    return o && (o.$typeUrl === EventFlowTokenOutClaimed.typeUrl || typeof o.flow_id === "bigint" && typeof o.owner === "string" && Coin.isSDK(o.amount) && Coin.isSDK(o.fee));
  },
  isAmino(o: any): o is EventFlowTokenOutClaimedAmino {
    return o && (o.$typeUrl === EventFlowTokenOutClaimed.typeUrl || typeof o.flow_id === "bigint" && typeof o.owner === "string" && Coin.isAmino(o.amount) && Coin.isAmino(o.fee));
  },
  encode(message: EventFlowTokenOutClaimed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowId !== BigInt(0)) {
      writer.uint32(8).uint64(message.flowId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventFlowTokenOutClaimed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFlowTokenOutClaimed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowId = reader.uint64();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.fee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventFlowTokenOutClaimed {
    return {
      flowId: isSet(object.flowId) ? BigInt(object.flowId.toString()) : BigInt(0),
      owner: isSet(object.owner) ? String(object.owner) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: EventFlowTokenOutClaimed): unknown {
    const obj: any = {};
    message.flowId !== undefined && (obj.flowId = (message.flowId || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventFlowTokenOutClaimed>): EventFlowTokenOutClaimed {
    const message = createBaseEventFlowTokenOutClaimed();
    message.flowId = object.flowId !== undefined && object.flowId !== null ? BigInt(object.flowId.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: EventFlowTokenOutClaimedAmino): EventFlowTokenOutClaimed {
    const message = createBaseEventFlowTokenOutClaimed();
    if (object.flow_id !== undefined && object.flow_id !== null) {
      message.flowId = BigInt(object.flow_id);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: EventFlowTokenOutClaimed, useInterfaces: boolean = true): EventFlowTokenOutClaimedAmino {
    const obj: any = {};
    obj.flow_id = message.flowId ? message.flowId.toString() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventFlowTokenOutClaimedAminoMsg): EventFlowTokenOutClaimed {
    return EventFlowTokenOutClaimed.fromAmino(object.value);
  },
  fromProtoMsg(message: EventFlowTokenOutClaimedProtoMsg, useInterfaces: boolean = true): EventFlowTokenOutClaimed {
    return EventFlowTokenOutClaimed.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventFlowTokenOutClaimed): Uint8Array {
    return EventFlowTokenOutClaimed.encode(message).finish();
  },
  toProtoMsg(message: EventFlowTokenOutClaimed): EventFlowTokenOutClaimedProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.EventFlowTokenOutClaimed",
      value: EventFlowTokenOutClaimed.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventFlowTokenOutClaimed.typeUrl, EventFlowTokenOutClaimed);
function createBaseEventJoinFlow(): EventJoinFlow {
  return {
    flowId: BigInt(0),
    address: "",
    amount: Coin.fromPartial({})
  };
}
export const EventJoinFlow = {
  typeUrl: "/refractedlabs.flowtrade.v1.EventJoinFlow",
  is(o: any): o is EventJoinFlow {
    return o && (o.$typeUrl === EventJoinFlow.typeUrl || typeof o.flowId === "bigint" && typeof o.address === "string" && Coin.is(o.amount));
  },
  isSDK(o: any): o is EventJoinFlowSDKType {
    return o && (o.$typeUrl === EventJoinFlow.typeUrl || typeof o.flow_id === "bigint" && typeof o.address === "string" && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is EventJoinFlowAmino {
    return o && (o.$typeUrl === EventJoinFlow.typeUrl || typeof o.flow_id === "bigint" && typeof o.address === "string" && Coin.isAmino(o.amount));
  },
  encode(message: EventJoinFlow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowId !== BigInt(0)) {
      writer.uint32(8).uint64(message.flowId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventJoinFlow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventJoinFlow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventJoinFlow {
    return {
      flowId: isSet(object.flowId) ? BigInt(object.flowId.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: EventJoinFlow): unknown {
    const obj: any = {};
    message.flowId !== undefined && (obj.flowId = (message.flowId || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventJoinFlow>): EventJoinFlow {
    const message = createBaseEventJoinFlow();
    message.flowId = object.flowId !== undefined && object.flowId !== null ? BigInt(object.flowId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: EventJoinFlowAmino): EventJoinFlow {
    const message = createBaseEventJoinFlow();
    if (object.flow_id !== undefined && object.flow_id !== null) {
      message.flowId = BigInt(object.flow_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: EventJoinFlow, useInterfaces: boolean = true): EventJoinFlowAmino {
    const obj: any = {};
    obj.flow_id = message.flowId ? message.flowId.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventJoinFlowAminoMsg): EventJoinFlow {
    return EventJoinFlow.fromAmino(object.value);
  },
  fromProtoMsg(message: EventJoinFlowProtoMsg, useInterfaces: boolean = true): EventJoinFlow {
    return EventJoinFlow.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventJoinFlow): Uint8Array {
    return EventJoinFlow.encode(message).finish();
  },
  toProtoMsg(message: EventJoinFlow): EventJoinFlowProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.EventJoinFlow",
      value: EventJoinFlow.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventJoinFlow.typeUrl, EventJoinFlow);
function createBaseEventExitFlow(): EventExitFlow {
  return {
    flowId: BigInt(0),
    address: "",
    amount: Coin.fromPartial({})
  };
}
export const EventExitFlow = {
  typeUrl: "/refractedlabs.flowtrade.v1.EventExitFlow",
  is(o: any): o is EventExitFlow {
    return o && (o.$typeUrl === EventExitFlow.typeUrl || typeof o.flowId === "bigint" && typeof o.address === "string" && Coin.is(o.amount));
  },
  isSDK(o: any): o is EventExitFlowSDKType {
    return o && (o.$typeUrl === EventExitFlow.typeUrl || typeof o.flow_id === "bigint" && typeof o.address === "string" && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is EventExitFlowAmino {
    return o && (o.$typeUrl === EventExitFlow.typeUrl || typeof o.flow_id === "bigint" && typeof o.address === "string" && Coin.isAmino(o.amount));
  },
  encode(message: EventExitFlow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowId !== BigInt(0)) {
      writer.uint32(8).uint64(message.flowId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventExitFlow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExitFlow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventExitFlow {
    return {
      flowId: isSet(object.flowId) ? BigInt(object.flowId.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: EventExitFlow): unknown {
    const obj: any = {};
    message.flowId !== undefined && (obj.flowId = (message.flowId || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventExitFlow>): EventExitFlow {
    const message = createBaseEventExitFlow();
    message.flowId = object.flowId !== undefined && object.flowId !== null ? BigInt(object.flowId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: EventExitFlowAmino): EventExitFlow {
    const message = createBaseEventExitFlow();
    if (object.flow_id !== undefined && object.flow_id !== null) {
      message.flowId = BigInt(object.flow_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: EventExitFlow, useInterfaces: boolean = true): EventExitFlowAmino {
    const obj: any = {};
    obj.flow_id = message.flowId ? message.flowId.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventExitFlowAminoMsg): EventExitFlow {
    return EventExitFlow.fromAmino(object.value);
  },
  fromProtoMsg(message: EventExitFlowProtoMsg, useInterfaces: boolean = true): EventExitFlow {
    return EventExitFlow.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventExitFlow): Uint8Array {
    return EventExitFlow.encode(message).finish();
  },
  toProtoMsg(message: EventExitFlow): EventExitFlowProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.EventExitFlow",
      value: EventExitFlow.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventExitFlow.typeUrl, EventExitFlow);
function createBaseEventSetOperator(): EventSetOperator {
  return {
    flowId: BigInt(0),
    owner: "",
    operator: ""
  };
}
export const EventSetOperator = {
  typeUrl: "/refractedlabs.flowtrade.v1.EventSetOperator",
  is(o: any): o is EventSetOperator {
    return o && (o.$typeUrl === EventSetOperator.typeUrl || typeof o.flowId === "bigint" && typeof o.owner === "string" && typeof o.operator === "string");
  },
  isSDK(o: any): o is EventSetOperatorSDKType {
    return o && (o.$typeUrl === EventSetOperator.typeUrl || typeof o.flow_id === "bigint" && typeof o.owner === "string" && typeof o.operator === "string");
  },
  isAmino(o: any): o is EventSetOperatorAmino {
    return o && (o.$typeUrl === EventSetOperator.typeUrl || typeof o.flow_id === "bigint" && typeof o.owner === "string" && typeof o.operator === "string");
  },
  encode(message: EventSetOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowId !== BigInt(0)) {
      writer.uint32(8).uint64(message.flowId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.operator !== "") {
      writer.uint32(26).string(message.operator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetOperator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowId = reader.uint64();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.operator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetOperator {
    return {
      flowId: isSet(object.flowId) ? BigInt(object.flowId.toString()) : BigInt(0),
      owner: isSet(object.owner) ? String(object.owner) : "",
      operator: isSet(object.operator) ? String(object.operator) : ""
    };
  },
  toJSON(message: EventSetOperator): unknown {
    const obj: any = {};
    message.flowId !== undefined && (obj.flowId = (message.flowId || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.operator !== undefined && (obj.operator = message.operator);
    return obj;
  },
  fromPartial(object: Partial<EventSetOperator>): EventSetOperator {
    const message = createBaseEventSetOperator();
    message.flowId = object.flowId !== undefined && object.flowId !== null ? BigInt(object.flowId.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.operator = object.operator ?? "";
    return message;
  },
  fromAmino(object: EventSetOperatorAmino): EventSetOperator {
    const message = createBaseEventSetOperator();
    if (object.flow_id !== undefined && object.flow_id !== null) {
      message.flowId = BigInt(object.flow_id);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    return message;
  },
  toAmino(message: EventSetOperator, useInterfaces: boolean = true): EventSetOperatorAmino {
    const obj: any = {};
    obj.flow_id = message.flowId ? message.flowId.toString() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.operator = message.operator === "" ? undefined : message.operator;
    return obj;
  },
  fromAminoMsg(object: EventSetOperatorAminoMsg): EventSetOperator {
    return EventSetOperator.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetOperatorProtoMsg, useInterfaces: boolean = true): EventSetOperator {
    return EventSetOperator.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetOperator): Uint8Array {
    return EventSetOperator.encode(message).finish();
  },
  toProtoMsg(message: EventSetOperator): EventSetOperatorProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.EventSetOperator",
      value: EventSetOperator.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetOperator.typeUrl, EventSetOperator);
function createBaseEventSetFlow(): EventSetFlow {
  return {
    flow: Flow.fromPartial({})
  };
}
export const EventSetFlow = {
  typeUrl: "/refractedlabs.flowtrade.v1.EventSetFlow",
  is(o: any): o is EventSetFlow {
    return o && (o.$typeUrl === EventSetFlow.typeUrl || Flow.is(o.flow));
  },
  isSDK(o: any): o is EventSetFlowSDKType {
    return o && (o.$typeUrl === EventSetFlow.typeUrl || Flow.isSDK(o.flow));
  },
  isAmino(o: any): o is EventSetFlowAmino {
    return o && (o.$typeUrl === EventSetFlow.typeUrl || Flow.isAmino(o.flow));
  },
  encode(message: EventSetFlow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== undefined) {
      Flow.encode(message.flow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetFlow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetFlow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow = Flow.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetFlow {
    return {
      flow: isSet(object.flow) ? Flow.fromJSON(object.flow) : undefined
    };
  },
  toJSON(message: EventSetFlow): unknown {
    const obj: any = {};
    message.flow !== undefined && (obj.flow = message.flow ? Flow.toJSON(message.flow) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetFlow>): EventSetFlow {
    const message = createBaseEventSetFlow();
    message.flow = object.flow !== undefined && object.flow !== null ? Flow.fromPartial(object.flow) : undefined;
    return message;
  },
  fromAmino(object: EventSetFlowAmino): EventSetFlow {
    const message = createBaseEventSetFlow();
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = Flow.fromAmino(object.flow);
    }
    return message;
  },
  toAmino(message: EventSetFlow, useInterfaces: boolean = true): EventSetFlowAmino {
    const obj: any = {};
    obj.flow = message.flow ? Flow.toAmino(message.flow, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetFlowAminoMsg): EventSetFlow {
    return EventSetFlow.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetFlowProtoMsg, useInterfaces: boolean = true): EventSetFlow {
    return EventSetFlow.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetFlow): Uint8Array {
    return EventSetFlow.encode(message).finish();
  },
  toProtoMsg(message: EventSetFlow): EventSetFlowProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.EventSetFlow",
      value: EventSetFlow.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetFlow.typeUrl, EventSetFlow);
function createBaseEventSetPosition(): EventSetPosition {
  return {
    position: Position.fromPartial({})
  };
}
export const EventSetPosition = {
  typeUrl: "/refractedlabs.flowtrade.v1.EventSetPosition",
  is(o: any): o is EventSetPosition {
    return o && (o.$typeUrl === EventSetPosition.typeUrl || Position.is(o.position));
  },
  isSDK(o: any): o is EventSetPositionSDKType {
    return o && (o.$typeUrl === EventSetPosition.typeUrl || Position.isSDK(o.position));
  },
  isAmino(o: any): o is EventSetPositionAmino {
    return o && (o.$typeUrl === EventSetPosition.typeUrl || Position.isAmino(o.position));
  },
  encode(message: EventSetPosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetPosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetPosition {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined
    };
  },
  toJSON(message: EventSetPosition): unknown {
    const obj: any = {};
    message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetPosition>): EventSetPosition {
    const message = createBaseEventSetPosition();
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    return message;
  },
  fromAmino(object: EventSetPositionAmino): EventSetPosition {
    const message = createBaseEventSetPosition();
    if (object.position !== undefined && object.position !== null) {
      message.position = Position.fromAmino(object.position);
    }
    return message;
  },
  toAmino(message: EventSetPosition, useInterfaces: boolean = true): EventSetPositionAmino {
    const obj: any = {};
    obj.position = message.position ? Position.toAmino(message.position, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetPositionAminoMsg): EventSetPosition {
    return EventSetPosition.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetPositionProtoMsg, useInterfaces: boolean = true): EventSetPosition {
    return EventSetPosition.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetPosition): Uint8Array {
    return EventSetPosition.encode(message).finish();
  },
  toProtoMsg(message: EventSetPosition): EventSetPositionProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.EventSetPosition",
      value: EventSetPosition.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetPosition.typeUrl, EventSetPosition);