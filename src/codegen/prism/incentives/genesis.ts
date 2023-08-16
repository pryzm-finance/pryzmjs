import { Params, ParamsSDKType } from "./params";
import { Pool, PoolSDKType } from "./pool";
import { Bond, BondSDKType } from "./bond";
import { Unbonding, UnbondingSDKType } from "./unbonding";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the incentives module's genesis state. */
export interface GenesisState {
  params: Params;
  poolList: Pool[];
  bondList: Bond[];
  unbondingList: Unbonding[];
  unbondingCount: Long;
}
/** GenesisState defines the incentives module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  pool_list: PoolSDKType[];
  bond_list: BondSDKType[];
  unbonding_list: UnbondingSDKType[];
  unbonding_count: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    poolList: [],
    bondList: [],
    unbondingList: [],
    unbondingCount: Long.UZERO
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.poolList) {
      Pool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.bondList) {
      Bond.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.unbondingList) {
      Unbonding.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (!message.unbondingCount.isZero()) {
      writer.uint32(40).uint64(message.unbondingCount);
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
          message.poolList.push(Pool.decode(reader, reader.uint32()));
          break;
        case 3:
          message.bondList.push(Bond.decode(reader, reader.uint32()));
          break;
        case 4:
          message.unbondingList.push(Unbonding.decode(reader, reader.uint32()));
          break;
        case 5:
          message.unbondingCount = (reader.uint64() as Long);
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
      poolList: Array.isArray(object?.poolList) ? object.poolList.map((e: any) => Pool.fromJSON(e)) : [],
      bondList: Array.isArray(object?.bondList) ? object.bondList.map((e: any) => Bond.fromJSON(e)) : [],
      unbondingList: Array.isArray(object?.unbondingList) ? object.unbondingList.map((e: any) => Unbonding.fromJSON(e)) : [],
      unbondingCount: isSet(object.unbondingCount) ? Long.fromValue(object.unbondingCount) : Long.UZERO
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.poolList) {
      obj.poolList = message.poolList.map(e => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.poolList = [];
    }
    if (message.bondList) {
      obj.bondList = message.bondList.map(e => e ? Bond.toJSON(e) : undefined);
    } else {
      obj.bondList = [];
    }
    if (message.unbondingList) {
      obj.unbondingList = message.unbondingList.map(e => e ? Unbonding.toJSON(e) : undefined);
    } else {
      obj.unbondingList = [];
    }
    message.unbondingCount !== undefined && (obj.unbondingCount = (message.unbondingCount || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.poolList = object.poolList?.map(e => Pool.fromPartial(e)) || [];
    message.bondList = object.bondList?.map(e => Bond.fromPartial(e)) || [];
    message.unbondingList = object.unbondingList?.map(e => Unbonding.fromPartial(e)) || [];
    message.unbondingCount = object.unbondingCount !== undefined && object.unbondingCount !== null ? Long.fromValue(object.unbondingCount) : Long.UZERO;
    return message;
  }
};