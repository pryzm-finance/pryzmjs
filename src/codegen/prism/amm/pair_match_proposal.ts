import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface PairMatchProposal {
  poolId: bigint;
  whitelistedRoute: boolean;
  tokenIn: string;
  tokenOut: string;
  buyOrders: bigint[];
  sellOrders: bigint[];
}
export interface PairMatchProposalSDKType {
  pool_id: bigint;
  whitelisted_route: boolean;
  token_in: string;
  token_out: string;
  buy_orders: bigint[];
  sell_orders: bigint[];
}
function createBasePairMatchProposal(): PairMatchProposal {
  return {
    poolId: BigInt(0),
    whitelistedRoute: false,
    tokenIn: "",
    tokenOut: "",
    buyOrders: [],
    sellOrders: []
  };
}
export const PairMatchProposal = {
  encode(message: PairMatchProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): PairMatchProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePairMatchProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
              message.buyOrders.push(reader.uint64());
            }
          } else {
            message.buyOrders.push(reader.uint64());
          }
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sellOrders.push(reader.uint64());
            }
          } else {
            message.sellOrders.push(reader.uint64());
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      buyOrders: Array.isArray(object?.buyOrders) ? object.buyOrders.map((e: any) => BigInt(e.toString())) : [],
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: PairMatchProposal): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    if (message.buyOrders) {
      obj.buyOrders = message.buyOrders.map(e => (e || BigInt(0)).toString());
    } else {
      obj.buyOrders = [];
    }
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e => (e || BigInt(0)).toString());
    } else {
      obj.sellOrders = [];
    }
    return obj;
  },
  fromPartial(object: Partial<PairMatchProposal>): PairMatchProposal {
    const message = createBasePairMatchProposal();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.buyOrders = object.buyOrders?.map(e => BigInt(e.toString())) || [];
    message.sellOrders = object.sellOrders?.map(e => BigInt(e.toString())) || [];
    return message;
  }
};