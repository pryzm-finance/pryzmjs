/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ActorDelegation } from "./actor_delegation";
import { ActorMissCounter } from "./actor_miss_counter";
import { Connection } from "./connection";
import { ConsensusStatus } from "./consensus_status";
import { MessageMetadata } from "./message";
import { Params } from "./params";
import { Ping } from "./ping";
import { RetriableMessage } from "./retriable_message";

export const protobufPackage = "refractedlabs.bridge.bridge";

/** GenesisState defines the bridge module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  connectionList: Connection[];
  messageMetadataList: MessageMetadata[];
  consensusStatusList: ConsensusStatus[];
  actorMissCounterList: ActorMissCounter[];
  actorDelegationList: ActorDelegation[];
  retriableMessageList: RetriableMessage[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  pingList: Ping[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    connectionList: [],
    messageMetadataList: [],
    consensusStatusList: [],
    actorMissCounterList: [],
    actorDelegationList: [],
    retriableMessageList: [],
    pingList: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.connectionList) {
      Connection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.messageMetadataList) {
      MessageMetadata.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.consensusStatusList) {
      ConsensusStatus.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.actorMissCounterList) {
      ActorMissCounter.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.actorDelegationList) {
      ActorDelegation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.retriableMessageList) {
      RetriableMessage.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.pingList) {
      Ping.encode(v!, writer.uint32(66).fork()).ldelim();
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
          message.connectionList.push(Connection.decode(reader, reader.uint32()));
          break;
        case 3:
          message.messageMetadataList.push(MessageMetadata.decode(reader, reader.uint32()));
          break;
        case 4:
          message.consensusStatusList.push(ConsensusStatus.decode(reader, reader.uint32()));
          break;
        case 5:
          message.actorMissCounterList.push(ActorMissCounter.decode(reader, reader.uint32()));
          break;
        case 6:
          message.actorDelegationList.push(ActorDelegation.decode(reader, reader.uint32()));
          break;
        case 7:
          message.retriableMessageList.push(RetriableMessage.decode(reader, reader.uint32()));
          break;
        case 8:
          message.pingList.push(Ping.decode(reader, reader.uint32()));
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
      connectionList: Array.isArray(object?.connectionList)
        ? object.connectionList.map((e: any) => Connection.fromJSON(e))
        : [],
      messageMetadataList: Array.isArray(object?.messageMetadataList)
        ? object.messageMetadataList.map((e: any) => MessageMetadata.fromJSON(e))
        : [],
      consensusStatusList: Array.isArray(object?.consensusStatusList)
        ? object.consensusStatusList.map((e: any) => ConsensusStatus.fromJSON(e))
        : [],
      actorMissCounterList: Array.isArray(object?.actorMissCounterList)
        ? object.actorMissCounterList.map((e: any) => ActorMissCounter.fromJSON(e))
        : [],
      actorDelegationList: Array.isArray(object?.actorDelegationList)
        ? object.actorDelegationList.map((e: any) => ActorDelegation.fromJSON(e))
        : [],
      retriableMessageList: Array.isArray(object?.retriableMessageList)
        ? object.retriableMessageList.map((e: any) => RetriableMessage.fromJSON(e))
        : [],
      pingList: Array.isArray(object?.pingList) ? object.pingList.map((e: any) => Ping.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.connectionList) {
      obj.connectionList = message.connectionList.map((e) => e ? Connection.toJSON(e) : undefined);
    } else {
      obj.connectionList = [];
    }
    if (message.messageMetadataList) {
      obj.messageMetadataList = message.messageMetadataList.map((e) => e ? MessageMetadata.toJSON(e) : undefined);
    } else {
      obj.messageMetadataList = [];
    }
    if (message.consensusStatusList) {
      obj.consensusStatusList = message.consensusStatusList.map((e) => e ? ConsensusStatus.toJSON(e) : undefined);
    } else {
      obj.consensusStatusList = [];
    }
    if (message.actorMissCounterList) {
      obj.actorMissCounterList = message.actorMissCounterList.map((e) => e ? ActorMissCounter.toJSON(e) : undefined);
    } else {
      obj.actorMissCounterList = [];
    }
    if (message.actorDelegationList) {
      obj.actorDelegationList = message.actorDelegationList.map((e) => e ? ActorDelegation.toJSON(e) : undefined);
    } else {
      obj.actorDelegationList = [];
    }
    if (message.retriableMessageList) {
      obj.retriableMessageList = message.retriableMessageList.map((e) => e ? RetriableMessage.toJSON(e) : undefined);
    } else {
      obj.retriableMessageList = [];
    }
    if (message.pingList) {
      obj.pingList = message.pingList.map((e) => e ? Ping.toJSON(e) : undefined);
    } else {
      obj.pingList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.connectionList = object.connectionList?.map((e) => Connection.fromPartial(e)) || [];
    message.messageMetadataList = object.messageMetadataList?.map((e) => MessageMetadata.fromPartial(e)) || [];
    message.consensusStatusList = object.consensusStatusList?.map((e) => ConsensusStatus.fromPartial(e)) || [];
    message.actorMissCounterList = object.actorMissCounterList?.map((e) => ActorMissCounter.fromPartial(e)) || [];
    message.actorDelegationList = object.actorDelegationList?.map((e) => ActorDelegation.fromPartial(e)) || [];
    message.retriableMessageList = object.retriableMessageList?.map((e) => RetriableMessage.fromPartial(e)) || [];
    message.pingList = object.pingList?.map((e) => Ping.fromPartial(e)) || [];
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
