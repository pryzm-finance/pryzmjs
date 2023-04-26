/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { HostChain, HostChainState } from "./host_chain";
import { Params } from "./params";
import { Undelegation } from "./undelegation";

export const protobufPackage = "prismfinance.prismcore.icstaking";

/** GenesisState defines the icstaking module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  portId: string;
  hostChainList: HostChain[];
  hostChainStateList: HostChainState[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  undelegationList: Undelegation[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, portId: "", hostChainList: [], hostChainStateList: [], undelegationList: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.hostChainList) {
      HostChain.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.hostChainStateList) {
      HostChainState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.undelegationList) {
      Undelegation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.hostChainList.push(HostChain.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hostChainStateList.push(HostChainState.decode(reader, reader.uint32()));
          break;
        case 5:
          message.undelegationList.push(Undelegation.decode(reader, reader.uint32()));
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
      portId: isSet(object.portId) ? String(object.portId) : "",
      hostChainList: Array.isArray(object?.hostChainList)
        ? object.hostChainList.map((e: any) => HostChain.fromJSON(e))
        : [],
      hostChainStateList: Array.isArray(object?.hostChainStateList)
        ? object.hostChainStateList.map((e: any) => HostChainState.fromJSON(e))
        : [],
      undelegationList: Array.isArray(object?.undelegationList)
        ? object.undelegationList.map((e: any) => Undelegation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.portId !== undefined && (obj.portId = message.portId);
    if (message.hostChainList) {
      obj.hostChainList = message.hostChainList.map((e) => e ? HostChain.toJSON(e) : undefined);
    } else {
      obj.hostChainList = [];
    }
    if (message.hostChainStateList) {
      obj.hostChainStateList = message.hostChainStateList.map((e) => e ? HostChainState.toJSON(e) : undefined);
    } else {
      obj.hostChainStateList = [];
    }
    if (message.undelegationList) {
      obj.undelegationList = message.undelegationList.map((e) => e ? Undelegation.toJSON(e) : undefined);
    } else {
      obj.undelegationList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.portId = object.portId ?? "";
    message.hostChainList = object.hostChainList?.map((e) => HostChain.fromPartial(e)) || [];
    message.hostChainStateList = object.hostChainStateList?.map((e) => HostChainState.fromPartial(e)) || [];
    message.undelegationList = object.undelegationList?.map((e) => Undelegation.fromPartial(e)) || [];
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
