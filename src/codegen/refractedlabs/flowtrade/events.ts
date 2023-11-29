import { Params, ParamsSDKType } from "./params";
import { Flow, FlowSDKType } from "./flow";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Position, PositionSDKType } from "./position";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface EventSetParams {
  params: Params;
}
export interface EventSetParamsSDKType {
  params: ParamsSDKType;
}
export interface EventFlowCreated {
  flow: Flow;
}
export interface EventFlowCreatedSDKType {
  flow: FlowSDKType;
}
export interface EventFlowEnded {
  flowId: bigint;
}
export interface EventFlowEndedSDKType {
  flow_id: bigint;
}
export interface EventFlowStopped {
  flowId: bigint;
}
export interface EventFlowStoppedSDKType {
  flow_id: bigint;
}
export interface EventFlowCheckedOut {
  flowId: bigint;
  returnedDeposit: Coin;
  returnedTokenOut: Coin;
}
export interface EventFlowCheckedOutSDKType {
  flow_id: bigint;
  returned_deposit: CoinSDKType;
  returned_token_out: CoinSDKType;
}
export interface EventFlowTokenInClaimed {
  flowId: bigint;
  amount: Coin;
  fee: Coin;
  treasury: string;
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
export interface EventSetOperatorSDKType {
  flow_id: bigint;
  owner: string;
  operator: string;
}
export interface EventSetFlow {
  flow: Flow;
}
export interface EventSetFlowSDKType {
  flow: FlowSDKType;
}
export interface EventSetPosition {
  position: Position;
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
  encode(message: EventSetParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
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
  }
};
function createBaseEventFlowCreated(): EventFlowCreated {
  return {
    flow: Flow.fromPartial({})
  };
}
export const EventFlowCreated = {
  encode(message: EventFlowCreated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== undefined) {
      Flow.encode(message.flow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventFlowCreated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFlowCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow = Flow.decode(reader, reader.uint32());
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
  }
};
function createBaseEventFlowEnded(): EventFlowEnded {
  return {
    flowId: BigInt(0)
  };
}
export const EventFlowEnded = {
  encode(message: EventFlowEnded, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowId !== BigInt(0)) {
      writer.uint32(8).uint64(message.flowId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventFlowEnded {
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
  }
};
function createBaseEventFlowStopped(): EventFlowStopped {
  return {
    flowId: BigInt(0)
  };
}
export const EventFlowStopped = {
  encode(message: EventFlowStopped, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowId !== BigInt(0)) {
      writer.uint32(8).uint64(message.flowId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventFlowStopped {
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
  }
};
function createBaseEventFlowCheckedOut(): EventFlowCheckedOut {
  return {
    flowId: BigInt(0),
    returnedDeposit: Coin.fromPartial({}),
    returnedTokenOut: Coin.fromPartial({})
  };
}
export const EventFlowCheckedOut = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventFlowCheckedOut {
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
          message.returnedDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.returnedTokenOut = Coin.decode(reader, reader.uint32());
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
  }
};
function createBaseEventFlowTokenInClaimed(): EventFlowTokenInClaimed {
  return {
    flowId: BigInt(0),
    amount: Coin.fromPartial({}),
    fee: Coin.fromPartial({}),
    treasury: ""
  };
}
export const EventFlowTokenInClaimed = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventFlowTokenInClaimed {
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
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.fee = Coin.decode(reader, reader.uint32());
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
  }
};
function createBaseEventFlowTokenOutClaimed(): EventFlowTokenOutClaimed {
  return {
    flowId: BigInt(0),
    owner: "",
    amount: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const EventFlowTokenOutClaimed = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventFlowTokenOutClaimed {
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
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.fee = Coin.decode(reader, reader.uint32());
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
  }
};
function createBaseEventJoinFlow(): EventJoinFlow {
  return {
    flowId: BigInt(0),
    address: "",
    amount: Coin.fromPartial({})
  };
}
export const EventJoinFlow = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventJoinFlow {
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
          message.amount = Coin.decode(reader, reader.uint32());
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
  }
};
function createBaseEventExitFlow(): EventExitFlow {
  return {
    flowId: BigInt(0),
    address: "",
    amount: Coin.fromPartial({})
  };
}
export const EventExitFlow = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventExitFlow {
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
          message.amount = Coin.decode(reader, reader.uint32());
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
  }
};
function createBaseEventSetOperator(): EventSetOperator {
  return {
    flowId: BigInt(0),
    owner: "",
    operator: ""
  };
}
export const EventSetOperator = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetOperator {
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
  }
};
function createBaseEventSetFlow(): EventSetFlow {
  return {
    flow: Flow.fromPartial({})
  };
}
export const EventSetFlow = {
  encode(message: EventSetFlow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== undefined) {
      Flow.encode(message.flow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetFlow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetFlow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow = Flow.decode(reader, reader.uint32());
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
  }
};
function createBaseEventSetPosition(): EventSetPosition {
  return {
    position: Position.fromPartial({})
  };
}
export const EventSetPosition = {
  encode(message: EventSetPosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetPosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32());
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
  }
};