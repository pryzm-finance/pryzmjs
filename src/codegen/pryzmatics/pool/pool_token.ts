import { TokenType, tokenTypeFromJSON, tokenTypeToJSON } from "./token";
import { PoolType, poolTypeFromJSON, poolTypeToJSON } from "../../pryzm/amm/v1/pool";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export interface PoolToken {
  denom: string;
  type: TokenType;
  poolId: bigint;
  poolType: PoolType;
  poolLpDenom: string;
  balance: string;
  weight: string;
  priceLpTerms?: string;
  virtual: boolean;
}
export interface PoolTokenSDKType {
  denom: string;
  type: TokenType;
  pool_id: bigint;
  pool_type: PoolType;
  pool_lp_denom: string;
  balance: string;
  weight: string;
  price_lp_terms?: string;
  virtual: boolean;
}
function createBasePoolToken(): PoolToken {
  return {
    denom: "",
    type: 0,
    poolId: BigInt(0),
    poolType: 0,
    poolLpDenom: "",
    balance: "",
    weight: "",
    priceLpTerms: undefined,
    virtual: false
  };
}
export const PoolToken = {
  encode(message: PoolToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.poolType !== 0) {
      writer.uint32(32).int32(message.poolType);
    }
    if (message.poolLpDenom !== "") {
      writer.uint32(42).string(message.poolLpDenom);
    }
    if (message.balance !== "") {
      writer.uint32(50).string(message.balance);
    }
    if (message.weight !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.weight, 18).atomics);
    }
    if (message.priceLpTerms !== undefined) {
      writer.uint32(66).string(Decimal.fromUserInput(message.priceLpTerms, 18).atomics);
    }
    if (message.virtual === true) {
      writer.uint32(72).bool(message.virtual);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.type = (reader.int32() as any);
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.poolType = (reader.int32() as any);
          break;
        case 5:
          message.poolLpDenom = reader.string();
          break;
        case 6:
          message.balance = reader.string();
          break;
        case 7:
          message.weight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.priceLpTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.virtual = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolToken {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      type: isSet(object.type) ? tokenTypeFromJSON(object.type) : -1,
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      poolType: isSet(object.poolType) ? poolTypeFromJSON(object.poolType) : -1,
      poolLpDenom: isSet(object.poolLpDenom) ? String(object.poolLpDenom) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      weight: isSet(object.weight) ? String(object.weight) : "",
      priceLpTerms: isSet(object.priceLpTerms) ? String(object.priceLpTerms) : undefined,
      virtual: isSet(object.virtual) ? Boolean(object.virtual) : false
    };
  },
  toJSON(message: PoolToken): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.type !== undefined && (obj.type = tokenTypeToJSON(message.type));
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.poolType !== undefined && (obj.poolType = poolTypeToJSON(message.poolType));
    message.poolLpDenom !== undefined && (obj.poolLpDenom = message.poolLpDenom);
    message.balance !== undefined && (obj.balance = message.balance);
    message.weight !== undefined && (obj.weight = message.weight);
    message.priceLpTerms !== undefined && (obj.priceLpTerms = message.priceLpTerms);
    message.virtual !== undefined && (obj.virtual = message.virtual);
    return obj;
  },
  fromPartial(object: Partial<PoolToken>): PoolToken {
    const message = createBasePoolToken();
    message.denom = object.denom ?? "";
    message.type = object.type ?? 0;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.poolType = object.poolType ?? 0;
    message.poolLpDenom = object.poolLpDenom ?? "";
    message.balance = object.balance ?? "";
    message.weight = object.weight ?? "";
    message.priceLpTerms = object.priceLpTerms ?? undefined;
    message.virtual = object.virtual ?? false;
    return message;
  }
};