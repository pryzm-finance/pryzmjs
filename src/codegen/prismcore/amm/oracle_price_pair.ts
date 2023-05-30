import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
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
}
export interface PairSDKType {
  base: string;
  quote: string;
  pool_id: string;
}
export interface OraclePricePair {
  assetId: string;
  dataSource: string;
  twapDurationMillis: Long;
  twapAlgorithm: TwapAlgorithm;
  disabled: boolean;
  pairs: Pair[];
}
export interface OraclePricePairSDKType {
  asset_id: string;
  data_source: string;
  twap_duration_millis: Long;
  twap_algorithm: TwapAlgorithm;
  disabled: boolean;
  pairs: PairSDKType[];
}
function createBasePair(): Pair {
  return {
    base: "",
    quote: "",
    poolId: ""
  };
}
export const Pair = {
  encode(message: Pair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== "") {
      writer.uint32(10).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(18).string(message.quote);
    }
    if (message.poolId !== "") {
      writer.uint32(26).string(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Pair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
      poolId: isSet(object.poolId) ? String(object.poolId) : ""
    };
  },
  toJSON(message: Pair): unknown {
    const obj: any = {};
    message.base !== undefined && (obj.base = message.base);
    message.quote !== undefined && (obj.quote = message.quote);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },
  fromPartial(object: Partial<Pair>): Pair {
    const message = createBasePair();
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.poolId = object.poolId ?? "";
    return message;
  }
};
function createBaseOraclePricePair(): OraclePricePair {
  return {
    assetId: "",
    dataSource: "",
    twapDurationMillis: Long.UZERO,
    twapAlgorithm: 0,
    disabled: false,
    pairs: []
  };
}
export const OraclePricePair = {
  encode(message: OraclePricePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.dataSource !== "") {
      writer.uint32(18).string(message.dataSource);
    }
    if (!message.twapDurationMillis.isZero()) {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): OraclePricePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePricePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.dataSource = reader.string();
          break;
        case 3:
          message.twapDurationMillis = (reader.uint64() as Long);
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
      dataSource: isSet(object.dataSource) ? String(object.dataSource) : "",
      twapDurationMillis: isSet(object.twapDurationMillis) ? Long.fromValue(object.twapDurationMillis) : Long.UZERO,
      twapAlgorithm: isSet(object.twapAlgorithm) ? twapAlgorithmFromJSON(object.twapAlgorithm) : 0,
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => Pair.fromJSON(e)) : []
    };
  },
  toJSON(message: OraclePricePair): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.dataSource !== undefined && (obj.dataSource = message.dataSource);
    message.twapDurationMillis !== undefined && (obj.twapDurationMillis = (message.twapDurationMillis || Long.UZERO).toString());
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
    message.dataSource = object.dataSource ?? "";
    message.twapDurationMillis = object.twapDurationMillis !== undefined && object.twapDurationMillis !== null ? Long.fromValue(object.twapDurationMillis) : Long.UZERO;
    message.twapAlgorithm = object.twapAlgorithm ?? 0;
    message.disabled = object.disabled ?? false;
    message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
    return message;
  }
};