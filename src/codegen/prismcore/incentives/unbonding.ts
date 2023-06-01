import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Unbonding {
  id: Long;
  completionTime?: Timestamp;
  address: string;
  treasuryAddress: string;
  amount?: Coin;
}
export interface UnbondingSDKType {
  id: Long;
  completion_time?: TimestampSDKType;
  address: string;
  treasury_address: string;
  amount?: CoinSDKType;
}
function createBaseUnbonding(): Unbonding {
  return {
    id: Long.UZERO,
    completionTime: undefined,
    address: "",
    treasuryAddress: "",
    amount: undefined
  };
}
export const Unbonding = {
  encode(message: Unbonding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.treasuryAddress !== "") {
      writer.uint32(34).string(message.treasuryAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Unbonding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        case 2:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.treasuryAddress = reader.string();
          break;
        case 5:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Unbonding {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      address: isSet(object.address) ? String(object.address) : "",
      treasuryAddress: isSet(object.treasuryAddress) ? String(object.treasuryAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: Unbonding): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    message.address !== undefined && (obj.address = message.address);
    message.treasuryAddress !== undefined && (obj.treasuryAddress = message.treasuryAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Unbonding>): Unbonding {
    const message = createBaseUnbonding();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    message.address = object.address ?? "";
    message.treasuryAddress = object.treasuryAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};