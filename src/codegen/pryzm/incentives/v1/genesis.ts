import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { Bond, BondAmino, BondSDKType } from "./bond";
import { Unbonding, UnbondingAmino, UnbondingSDKType } from "./unbonding";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the incentives module's genesis state. */
export interface GenesisState {
  params: Params;
  poolList: Pool[];
  bondList: Bond[];
  unbondingList: Unbonding[];
  unbondingCount: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/pryzm.incentives.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the incentives module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  pool_list?: PoolAmino[];
  bond_list?: BondAmino[];
  unbonding_list?: UnbondingAmino[];
  unbonding_count?: string;
}
export interface GenesisStateAminoMsg {
  type: "/pryzm.incentives.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the incentives module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  pool_list: PoolSDKType[];
  bond_list: BondSDKType[];
  unbonding_list: UnbondingSDKType[];
  unbonding_count: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    poolList: [],
    bondList: [],
    unbondingList: [],
    unbondingCount: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/pryzm.incentives.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.unbondingCount !== BigInt(0)) {
      writer.uint32(40).uint64(message.unbondingCount);
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
          message.poolList.push(Pool.decode(reader, reader.uint32()));
          break;
        case 3:
          message.bondList.push(Bond.decode(reader, reader.uint32()));
          break;
        case 4:
          message.unbondingList.push(Unbonding.decode(reader, reader.uint32()));
          break;
        case 5:
          message.unbondingCount = reader.uint64();
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
      unbondingCount: isSet(object.unbondingCount) ? BigInt(object.unbondingCount.toString()) : BigInt(0)
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
    message.unbondingCount !== undefined && (obj.unbondingCount = (message.unbondingCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.poolList = object.poolList?.map(e => Pool.fromPartial(e)) || [];
    message.bondList = object.bondList?.map(e => Bond.fromPartial(e)) || [];
    message.unbondingList = object.unbondingList?.map(e => Unbonding.fromPartial(e)) || [];
    message.unbondingCount = object.unbondingCount !== undefined && object.unbondingCount !== null ? BigInt(object.unbondingCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.poolList = object.pool_list?.map(e => Pool.fromAmino(e)) || [];
    message.bondList = object.bond_list?.map(e => Bond.fromAmino(e)) || [];
    message.unbondingList = object.unbonding_list?.map(e => Unbonding.fromAmino(e)) || [];
    if (object.unbonding_count !== undefined && object.unbonding_count !== null) {
      message.unbondingCount = BigInt(object.unbonding_count);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.poolList) {
      obj.pool_list = message.poolList.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pool_list = [];
    }
    if (message.bondList) {
      obj.bond_list = message.bondList.map(e => e ? Bond.toAmino(e) : undefined);
    } else {
      obj.bond_list = [];
    }
    if (message.unbondingList) {
      obj.unbonding_list = message.unbondingList.map(e => e ? Unbonding.toAmino(e) : undefined);
    } else {
      obj.unbonding_list = [];
    }
    obj.unbonding_count = message.unbondingCount ? message.unbondingCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};