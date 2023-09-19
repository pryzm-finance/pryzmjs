import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** TwapAlgorithm enumerates the valid algorithms for twap_algorithm. */
export enum TwapAlgorithm {
  TWAP_ALGORITHM_ARITHMETIC = 0,
  TWAP_ALGORITHM_GEOMETRIC = 1,
  UNRECOGNIZED = -1,
}
export const TwapAlgorithmSDKType = TwapAlgorithm;
export function twapAlgorithmFromJSON(object: any): TwapAlgorithm {
  switch (object) {
    case 0:
    case "TWAP_ALGORITHM_ARITHMETIC":
      return TwapAlgorithm.TWAP_ALGORITHM_ARITHMETIC;
    case 1:
    case "TWAP_ALGORITHM_GEOMETRIC":
      return TwapAlgorithm.TWAP_ALGORITHM_GEOMETRIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TwapAlgorithm.UNRECOGNIZED;
  }
}
export function twapAlgorithmToJSON(object: TwapAlgorithm): string {
  switch (object) {
    case TwapAlgorithm.TWAP_ALGORITHM_ARITHMETIC:
      return "TWAP_ALGORITHM_ARITHMETIC";
    case TwapAlgorithm.TWAP_ALGORITHM_GEOMETRIC:
      return "TWAP_ALGORITHM_GEOMETRIC";
    case TwapAlgorithm.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Pair {
  base: string;
  quote: string;
  /** refers to the data source pool (e.g. osmosis gamm pool) */
  poolId: string;
  dataSource: string;
}
export interface PairSDKType {
  base: string;
  quote: string;
  pool_id: string;
  data_source: string;
}
export interface OraclePricePair {
  assetId: string;
  /**
   * this is the token denom which should exist in the target weighted pool in pryzm chain
   * the reason for adding this property and not using the pairs, is that the token denom in various chains might be different
   * for example usdc token might have contract or ibc denom on different chains with different channel and ids
   */
  quoteToken: string;
  twapDurationMillis: bigint;
  twapAlgorithm: TwapAlgorithm;
  disabled: boolean;
  pairs: Pair[];
}
export interface OraclePricePairSDKType {
  asset_id: string;
  quote_token: string;
  twap_duration_millis: bigint;
  twap_algorithm: TwapAlgorithm;
  disabled: boolean;
  pairs: PairSDKType[];
}
function createBasePair(): Pair {
  return {
    base: "",
    quote: "",
    poolId: "",
    dataSource: ""
  };
}
export const Pair = {
  encode(message: Pair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base !== "") {
      writer.uint32(10).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(18).string(message.quote);
    }
    if (message.poolId !== "") {
      writer.uint32(26).string(message.poolId);
    }
    if (message.dataSource !== "") {
      writer.uint32(34).string(message.dataSource);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base = reader.string();
          break;
        case 2:
          message.quote = reader.string();
          break;
        case 3:
          message.poolId = reader.string();
          break;
        case 4:
          message.dataSource = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pair {
    return {
      base: isSet(object.base) ? String(object.base) : "",
      quote: isSet(object.quote) ? String(object.quote) : "",
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      dataSource: isSet(object.dataSource) ? String(object.dataSource) : ""
    };
  },
  toJSON(message: Pair): unknown {
    const obj: any = {};
    message.base !== undefined && (obj.base = message.base);
    message.quote !== undefined && (obj.quote = message.quote);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.dataSource !== undefined && (obj.dataSource = message.dataSource);
    return obj;
  },
  fromPartial(object: Partial<Pair>): Pair {
    const message = createBasePair();
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.poolId = object.poolId ?? "";
    message.dataSource = object.dataSource ?? "";
    return message;
  }
};
function createBaseOraclePricePair(): OraclePricePair {
  return {
    assetId: "",
    quoteToken: "",
    twapDurationMillis: BigInt(0),
    twapAlgorithm: 0,
    disabled: false,
    pairs: []
  };
}
export const OraclePricePair = {
  encode(message: OraclePricePair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.quoteToken !== "") {
      writer.uint32(18).string(message.quoteToken);
    }
    if (message.twapDurationMillis !== BigInt(0)) {
      writer.uint32(24).uint64(message.twapDurationMillis);
    }
    if (message.twapAlgorithm !== 0) {
      writer.uint32(32).int32(message.twapAlgorithm);
    }
    if (message.disabled === true) {
      writer.uint32(40).bool(message.disabled);
    }
    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OraclePricePair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePricePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.quoteToken = reader.string();
          break;
        case 3:
          message.twapDurationMillis = reader.uint64();
          break;
        case 4:
          message.twapAlgorithm = (reader.int32() as any);
          break;
        case 5:
          message.disabled = reader.bool();
          break;
        case 6:
          message.pairs.push(Pair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OraclePricePair {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      quoteToken: isSet(object.quoteToken) ? String(object.quoteToken) : "",
      twapDurationMillis: isSet(object.twapDurationMillis) ? BigInt(object.twapDurationMillis.toString()) : BigInt(0),
      twapAlgorithm: isSet(object.twapAlgorithm) ? twapAlgorithmFromJSON(object.twapAlgorithm) : -1,
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => Pair.fromJSON(e)) : []
    };
  },
  toJSON(message: OraclePricePair): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.quoteToken !== undefined && (obj.quoteToken = message.quoteToken);
    message.twapDurationMillis !== undefined && (obj.twapDurationMillis = (message.twapDurationMillis || BigInt(0)).toString());
    message.twapAlgorithm !== undefined && (obj.twapAlgorithm = twapAlgorithmToJSON(message.twapAlgorithm));
    message.disabled !== undefined && (obj.disabled = message.disabled);
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? Pair.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<OraclePricePair>): OraclePricePair {
    const message = createBaseOraclePricePair();
    message.assetId = object.assetId ?? "";
    message.quoteToken = object.quoteToken ?? "";
    message.twapDurationMillis = object.twapDurationMillis !== undefined && object.twapDurationMillis !== null ? BigInt(object.twapDurationMillis.toString()) : BigInt(0);
    message.twapAlgorithm = object.twapAlgorithm ?? 0;
    message.disabled = object.disabled ?? false;
    message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
    return message;
  }
};