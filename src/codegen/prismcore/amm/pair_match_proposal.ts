import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface PairMatchProposal {
  poolId: Long;
  whitelistedRoute: boolean;
  tokenIn: string;
  tokenOut: string;
  buyOrders: Long[];
  sellOrders: Long[];
}
export interface PairMatchProposalSDKType {
  pool_id: Long;
  whitelisted_route: boolean;
  token_in: string;
  token_out: string;
  buy_orders: Long[];
  sell_orders: Long[];
}
function createBasePairMatchProposal(): PairMatchProposal {
  return {
    poolId: Long.UZERO,
    whitelistedRoute: false,
    tokenIn: "",
    tokenOut: "",
    buyOrders: [],
    sellOrders: []
  };
}
export const PairMatchProposal = {
  encode(message: PairMatchProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(16).bool(message.whitelistedRoute);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    writer.uint32(42).fork();
    for (const v of message.buyOrders) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.sellOrders) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PairMatchProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePairMatchProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.whitelistedRoute = reader.bool();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.buyOrders.push((reader.uint64() as Long));
            }
          } else {
            message.buyOrders.push((reader.uint64() as Long));
          }
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sellOrders.push((reader.uint64() as Long));
            }
          } else {
            message.sellOrders.push((reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PairMatchProposal {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      buyOrders: Array.isArray(object?.buyOrders) ? object.buyOrders.map((e: any) => Long.fromValue(e)) : [],
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => Long.fromValue(e)) : []
    };
  },
  toJSON(message: PairMatchProposal): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    if (message.buyOrders) {
      obj.buyOrders = message.buyOrders.map(e => (e || Long.UZERO).toString());
    } else {
      obj.buyOrders = [];
    }
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e => (e || Long.UZERO).toString());
    } else {
      obj.sellOrders = [];
    }
    return obj;
  },
  fromPartial(object: Partial<PairMatchProposal>): PairMatchProposal {
    const message = createBasePairMatchProposal();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.buyOrders = object.buyOrders?.map(e => Long.fromValue(e)) || [];
    message.sellOrders = object.sellOrders?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};