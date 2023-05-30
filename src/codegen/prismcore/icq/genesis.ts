import { InterchainQuery, InterchainQuerySDKType } from "./interchain_query";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
  queries: InterchainQuery[];
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateSDKType {
  queries: InterchainQuerySDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    queries: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queries) {
      InterchainQuery.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.queries.push(InterchainQuery.decode(reader, reader.uint32()));
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
      queries: Array.isArray(object?.queries) ? object.queries.map((e: any) => InterchainQuery.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.queries) {
      obj.queries = message.queries.map(e => e ? InterchainQuery.toJSON(e) : undefined);
    } else {
      obj.queries = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.queries = object.queries?.map(e => InterchainQuery.fromPartial(e)) || [];
    return message;
  }
};