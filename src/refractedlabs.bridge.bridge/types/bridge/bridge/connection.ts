/* eslint-disable */
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
  state: ConnectionState;
  chain: string;
}

function createBaseConnection(): Connection {
  return { connectionId: "", contractAddress: "", state: 0, chain: "" };
}

export const Connection = {
  encode(message: Connection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.chain !== "") {
      writer.uint32(34).string(message.chain);
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
          message.state = reader.int32() as any;
          break;
        case 4:
          message.chain = reader.string();
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
      state: isSet(object.state) ? connectionStateFromJSON(object.state) : 0,
      chain: isSet(object.chain) ? String(object.chain) : "",
    };
  },

  toJSON(message: Connection): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.state !== undefined && (obj.state = connectionStateToJSON(message.state));
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Connection>, I>>(object: I): Connection {
    const message = createBaseConnection();
    message.connectionId = object.connectionId ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.state = object.state ?? 0;
    message.chain = object.chain ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
