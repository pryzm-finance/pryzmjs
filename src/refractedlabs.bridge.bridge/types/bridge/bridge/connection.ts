/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "refractedlabs.bridge.bridge";

export enum ConnectionState {
  CONNECTION_STATE_OPEN = 0,
  CONNECTION_STATE_CLOSED = 1,
  UNRECOGNIZED = -1,
}

export function connectionStateFromJSON(object: any): ConnectionState {
  switch (object) {
    case 0:
    case "CONNECTION_STATE_OPEN":
      return ConnectionState.CONNECTION_STATE_OPEN;
    case 1:
    case "CONNECTION_STATE_CLOSED":
      return ConnectionState.CONNECTION_STATE_CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConnectionState.UNRECOGNIZED;
  }
}

export function connectionStateToJSON(object: ConnectionState): string {
  switch (object) {
    case ConnectionState.CONNECTION_STATE_OPEN:
      return "CONNECTION_STATE_OPEN";
    case ConnectionState.CONNECTION_STATE_CLOSED:
      return "CONNECTION_STATE_CLOSED";
    case ConnectionState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Connection {
  connectionId: string;
  contractAddress: string;
  contractCreationBlock: number;
  state: ConnectionState;
  chain: string;
  /** number of blocks after which a block is considered final */
  blocksToFinality: number;
  /** the average time in millis needed to mine a new block */
  blockGenerationTime: number;
}

function createBaseConnection(): Connection {
  return {
    connectionId: "",
    contractAddress: "",
    contractCreationBlock: 0,
    state: 0,
    chain: "",
    blocksToFinality: 0,
    blockGenerationTime: 0,
  };
}

export const Connection = {
  encode(message: Connection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.contractCreationBlock !== 0) {
      writer.uint32(24).uint64(message.contractCreationBlock);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.chain !== "") {
      writer.uint32(42).string(message.chain);
    }
    if (message.blocksToFinality !== 0) {
      writer.uint32(48).uint32(message.blocksToFinality);
    }
    if (message.blockGenerationTime !== 0) {
      writer.uint32(56).uint32(message.blockGenerationTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Connection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.contractCreationBlock = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.state = reader.int32() as any;
          break;
        case 5:
          message.chain = reader.string();
          break;
        case 6:
          message.blocksToFinality = reader.uint32();
          break;
        case 7:
          message.blockGenerationTime = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Connection {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      contractCreationBlock: isSet(object.contractCreationBlock) ? Number(object.contractCreationBlock) : 0,
      state: isSet(object.state) ? connectionStateFromJSON(object.state) : 0,
      chain: isSet(object.chain) ? String(object.chain) : "",
      blocksToFinality: isSet(object.blocksToFinality) ? Number(object.blocksToFinality) : 0,
      blockGenerationTime: isSet(object.blockGenerationTime) ? Number(object.blockGenerationTime) : 0,
    };
  },

  toJSON(message: Connection): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.contractCreationBlock !== undefined
      && (obj.contractCreationBlock = Math.round(message.contractCreationBlock));
    message.state !== undefined && (obj.state = connectionStateToJSON(message.state));
    message.chain !== undefined && (obj.chain = message.chain);
    message.blocksToFinality !== undefined && (obj.blocksToFinality = Math.round(message.blocksToFinality));
    message.blockGenerationTime !== undefined && (obj.blockGenerationTime = Math.round(message.blockGenerationTime));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Connection>, I>>(object: I): Connection {
    const message = createBaseConnection();
    message.connectionId = object.connectionId ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.contractCreationBlock = object.contractCreationBlock ?? 0;
    message.state = object.state ?? 0;
    message.chain = object.chain ?? "";
    message.blocksToFinality = object.blocksToFinality ?? 0;
    message.blockGenerationTime = object.blockGenerationTime ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// @ts-ignore
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
