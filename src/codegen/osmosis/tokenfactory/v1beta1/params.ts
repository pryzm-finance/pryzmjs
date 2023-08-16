import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the tokenfactory module. */
export interface Params {
  /**
   * DenomCreationFee defines the fee to be charged on the creation of a new
   * denom. The fee is drawn from the MsgCreateDenom's sender account, and
   * transferred to the community pool.
   */
  denomCreationFee: Coin[];
  /**
   * DenomCreationGasConsume defines the gas cost for creating a new denom.
   * This is intended as a spam deterrence mechanism.
   * 
   * See: https://github.com/CosmWasm/token-factory/issues/11
   */
  denomCreationGasConsume?: Long;
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsSDKType {
  denom_creation_fee: CoinSDKType[];
  denom_creation_gas_consume?: Long;
}
function createBaseParams(): Params {
  return {
    denomCreationFee: [],
    denomCreationGasConsume: undefined
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denomCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.denomCreationGasConsume !== undefined) {
      writer.uint32(16).uint64(message.denomCreationGasConsume);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.denomCreationGasConsume = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      denomCreationFee: Array.isArray(object?.denomCreationFee) ? object.denomCreationFee.map((e: any) => Coin.fromJSON(e)) : [],
      denomCreationGasConsume: isSet(object.denomCreationGasConsume) ? Long.fromValue(object.denomCreationGasConsume) : undefined
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.denomCreationFee) {
      obj.denomCreationFee = message.denomCreationFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.denomCreationFee = [];
    }
    message.denomCreationGasConsume !== undefined && (obj.denomCreationGasConsume = (message.denomCreationGasConsume || undefined).toString());
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.denomCreationFee = object.denomCreationFee?.map(e => Coin.fromPartial(e)) || [];
    message.denomCreationGasConsume = object.denomCreationGasConsume !== undefined && object.denomCreationGasConsume !== null ? Long.fromValue(object.denomCreationGasConsume) : undefined;
    return message;
  }
};