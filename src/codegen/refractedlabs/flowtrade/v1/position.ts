import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface Position {
  /** the flow for which this position is created */
  flow: bigint;
  /** the address of the position's owner */
  owner: string;
  /**
   * the address that the owner has delegated position management to.
   * the operator is allowed to manage the position
   */
  operator: string;
  /** an index for the amount of purchase that has already been applied */
  distIndex: string;
  /** the current amount of token-in provided to buy token-out */
  tokenInBalance: string;
  /** the amount of already spent in tokens */
  spentTokenIn: string;
  /** the shares of this position from the flow */
  shares: string;
  /** the amount of out tokens that has purchased by user */
  purchasedTokenOut: string;
  /** the amount of purchased token that are paid for, but not calculated in purchased_token_out because of rounding errors */
  pendingPurchase: string;
  /** the amount of purchase that has been claimed by user and already transferred to their account */
  claimedAmount: string;
}
export interface PositionProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.Position";
  value: Uint8Array;
}
export interface PositionAmino {
  /** the flow for which this position is created */
  flow?: string;
  /** the address of the position's owner */
  owner?: string;
  /**
   * the address that the owner has delegated position management to.
   * the operator is allowed to manage the position
   */
  operator?: string;
  /** an index for the amount of purchase that has already been applied */
  dist_index?: string;
  /** the current amount of token-in provided to buy token-out */
  token_in_balance?: string;
  /** the amount of already spent in tokens */
  spent_token_in?: string;
  /** the shares of this position from the flow */
  shares?: string;
  /** the amount of out tokens that has purchased by user */
  purchased_token_out?: string;
  /** the amount of purchased token that are paid for, but not calculated in purchased_token_out because of rounding errors */
  pending_purchase?: string;
  /** the amount of purchase that has been claimed by user and already transferred to their account */
  claimed_amount?: string;
}
export interface PositionAminoMsg {
  type: "/refractedlabs.flowtrade.v1.Position";
  value: PositionAmino;
}
export interface PositionSDKType {
  flow: bigint;
  owner: string;
  operator: string;
  dist_index: string;
  token_in_balance: string;
  spent_token_in: string;
  shares: string;
  purchased_token_out: string;
  pending_purchase: string;
  claimed_amount: string;
}
function createBasePosition(): Position {
  return {
    flow: BigInt(0),
    owner: "",
    operator: "",
    distIndex: "",
    tokenInBalance: "",
    spentTokenIn: "",
    shares: "",
    purchasedTokenOut: "",
    pendingPurchase: "",
    claimedAmount: ""
  };
}
export const Position = {
  typeUrl: "/refractedlabs.flowtrade.v1.Position",
  is(o: any): o is Position {
    return o && (o.$typeUrl === Position.typeUrl || typeof o.flow === "bigint" && typeof o.owner === "string" && typeof o.operator === "string" && typeof o.distIndex === "string" && typeof o.tokenInBalance === "string" && typeof o.spentTokenIn === "string" && typeof o.shares === "string" && typeof o.purchasedTokenOut === "string" && typeof o.pendingPurchase === "string" && typeof o.claimedAmount === "string");
  },
  isSDK(o: any): o is PositionSDKType {
    return o && (o.$typeUrl === Position.typeUrl || typeof o.flow === "bigint" && typeof o.owner === "string" && typeof o.operator === "string" && typeof o.dist_index === "string" && typeof o.token_in_balance === "string" && typeof o.spent_token_in === "string" && typeof o.shares === "string" && typeof o.purchased_token_out === "string" && typeof o.pending_purchase === "string" && typeof o.claimed_amount === "string");
  },
  isAmino(o: any): o is PositionAmino {
    return o && (o.$typeUrl === Position.typeUrl || typeof o.flow === "bigint" && typeof o.owner === "string" && typeof o.operator === "string" && typeof o.dist_index === "string" && typeof o.token_in_balance === "string" && typeof o.spent_token_in === "string" && typeof o.shares === "string" && typeof o.purchased_token_out === "string" && typeof o.pending_purchase === "string" && typeof o.claimed_amount === "string");
  },
  encode(message: Position, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== BigInt(0)) {
      writer.uint32(8).uint64(message.flow);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.operator !== "") {
      writer.uint32(26).string(message.operator);
    }
    if (message.distIndex !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.distIndex, 18).atomics);
    }
    if (message.tokenInBalance !== "") {
      writer.uint32(42).string(message.tokenInBalance);
    }
    if (message.spentTokenIn !== "") {
      writer.uint32(50).string(message.spentTokenIn);
    }
    if (message.shares !== "") {
      writer.uint32(58).string(message.shares);
    }
    if (message.purchasedTokenOut !== "") {
      writer.uint32(66).string(message.purchasedTokenOut);
    }
    if (message.pendingPurchase !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.pendingPurchase, 18).atomics);
    }
    if (message.claimedAmount !== "") {
      writer.uint32(82).string(message.claimedAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Position {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow = reader.uint64();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.operator = reader.string();
          break;
        case 4:
          message.distIndex = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.tokenInBalance = reader.string();
          break;
        case 6:
          message.spentTokenIn = reader.string();
          break;
        case 7:
          message.shares = reader.string();
          break;
        case 8:
          message.purchasedTokenOut = reader.string();
          break;
        case 9:
          message.pendingPurchase = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.claimedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Position {
    return {
      flow: isSet(object.flow) ? BigInt(object.flow.toString()) : BigInt(0),
      owner: isSet(object.owner) ? String(object.owner) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      distIndex: isSet(object.distIndex) ? String(object.distIndex) : "",
      tokenInBalance: isSet(object.tokenInBalance) ? String(object.tokenInBalance) : "",
      spentTokenIn: isSet(object.spentTokenIn) ? String(object.spentTokenIn) : "",
      shares: isSet(object.shares) ? String(object.shares) : "",
      purchasedTokenOut: isSet(object.purchasedTokenOut) ? String(object.purchasedTokenOut) : "",
      pendingPurchase: isSet(object.pendingPurchase) ? String(object.pendingPurchase) : "",
      claimedAmount: isSet(object.claimedAmount) ? String(object.claimedAmount) : ""
    };
  },
  toJSON(message: Position): unknown {
    const obj: any = {};
    message.flow !== undefined && (obj.flow = (message.flow || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.operator !== undefined && (obj.operator = message.operator);
    message.distIndex !== undefined && (obj.distIndex = message.distIndex);
    message.tokenInBalance !== undefined && (obj.tokenInBalance = message.tokenInBalance);
    message.spentTokenIn !== undefined && (obj.spentTokenIn = message.spentTokenIn);
    message.shares !== undefined && (obj.shares = message.shares);
    message.purchasedTokenOut !== undefined && (obj.purchasedTokenOut = message.purchasedTokenOut);
    message.pendingPurchase !== undefined && (obj.pendingPurchase = message.pendingPurchase);
    message.claimedAmount !== undefined && (obj.claimedAmount = message.claimedAmount);
    return obj;
  },
  fromPartial(object: Partial<Position>): Position {
    const message = createBasePosition();
    message.flow = object.flow !== undefined && object.flow !== null ? BigInt(object.flow.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.operator = object.operator ?? "";
    message.distIndex = object.distIndex ?? "";
    message.tokenInBalance = object.tokenInBalance ?? "";
    message.spentTokenIn = object.spentTokenIn ?? "";
    message.shares = object.shares ?? "";
    message.purchasedTokenOut = object.purchasedTokenOut ?? "";
    message.pendingPurchase = object.pendingPurchase ?? "";
    message.claimedAmount = object.claimedAmount ?? "";
    return message;
  },
  fromAmino(object: PositionAmino): Position {
    const message = createBasePosition();
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = BigInt(object.flow);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.dist_index !== undefined && object.dist_index !== null) {
      message.distIndex = object.dist_index;
    }
    if (object.token_in_balance !== undefined && object.token_in_balance !== null) {
      message.tokenInBalance = object.token_in_balance;
    }
    if (object.spent_token_in !== undefined && object.spent_token_in !== null) {
      message.spentTokenIn = object.spent_token_in;
    }
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = object.shares;
    }
    if (object.purchased_token_out !== undefined && object.purchased_token_out !== null) {
      message.purchasedTokenOut = object.purchased_token_out;
    }
    if (object.pending_purchase !== undefined && object.pending_purchase !== null) {
      message.pendingPurchase = object.pending_purchase;
    }
    if (object.claimed_amount !== undefined && object.claimed_amount !== null) {
      message.claimedAmount = object.claimed_amount;
    }
    return message;
  },
  toAmino(message: Position, useInterfaces: boolean = true): PositionAmino {
    const obj: any = {};
    obj.flow = message.flow ? message.flow.toString() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.dist_index = padDecimal(message.distIndex) === "" ? undefined : padDecimal(message.distIndex);
    obj.token_in_balance = message.tokenInBalance === "" ? undefined : message.tokenInBalance;
    obj.spent_token_in = message.spentTokenIn === "" ? undefined : message.spentTokenIn;
    obj.shares = message.shares === "" ? undefined : message.shares;
    obj.purchased_token_out = message.purchasedTokenOut === "" ? undefined : message.purchasedTokenOut;
    obj.pending_purchase = padDecimal(message.pendingPurchase) === "" ? undefined : padDecimal(message.pendingPurchase);
    obj.claimed_amount = message.claimedAmount === "" ? undefined : message.claimedAmount;
    return obj;
  },
  fromAminoMsg(object: PositionAminoMsg): Position {
    return Position.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionProtoMsg, useInterfaces: boolean = true): Position {
    return Position.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Position): Uint8Array {
    return Position.encode(message).finish();
  },
  toProtoMsg(message: Position): PositionProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.Position",
      value: Position.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Position.typeUrl, Position);