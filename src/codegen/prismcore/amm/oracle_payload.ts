import { Pair, PairSDKType } from "./oracle_price_pair";
import { Long, isSet, isObject } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface HostChainHeight {
  /** the revision that the client is currently on */
  revisionNumber: Long;
  /** the height within the given revision */
  revisionHeight: Long;
}
export interface HostChainHeightSDKType {
  revision_number: Long;
  revision_height: Long;
}
export interface OraclePayload_DataSourceBlockHeightsEntry {
  key: string;
  value?: HostChainHeight;
}
export interface OraclePayload_DataSourceBlockHeightsEntrySDKType {
  key: string;
  value?: HostChainHeightSDKType;
}
/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayload {
  dataSourceBlockHeights?: {
    [key: string]: HostChainHeight;
  };
  price: string;
  pairs: Pair[];
  quoteToken: string;
}
/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayloadSDKType {
  data_source_block_heights?: {
    [key: string]: HostChainHeightSDKType;
  };
  price: string;
  pairs: PairSDKType[];
  quote_token: string;
}
function createBaseHostChainHeight(): HostChainHeight {
  return {
    revisionNumber: Long.UZERO,
    revisionHeight: Long.UZERO
  };
}
export const HostChainHeight = {
  encode(message: HostChainHeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.revisionNumber.isZero()) {
      writer.uint32(8).uint64(message.revisionNumber);
    }
    if (!message.revisionHeight.isZero()) {
      writer.uint32(16).uint64(message.revisionHeight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): HostChainHeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChainHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revisionNumber = (reader.uint64() as Long);
          break;
        case 2:
          message.revisionHeight = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostChainHeight {
    return {
      revisionNumber: isSet(object.revisionNumber) ? Long.fromValue(object.revisionNumber) : Long.UZERO,
      revisionHeight: isSet(object.revisionHeight) ? Long.fromValue(object.revisionHeight) : Long.UZERO
    };
  },
  toJSON(message: HostChainHeight): unknown {
    const obj: any = {};
    message.revisionNumber !== undefined && (obj.revisionNumber = (message.revisionNumber || Long.UZERO).toString());
    message.revisionHeight !== undefined && (obj.revisionHeight = (message.revisionHeight || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<HostChainHeight>): HostChainHeight {
    const message = createBaseHostChainHeight();
    message.revisionNumber = object.revisionNumber !== undefined && object.revisionNumber !== null ? Long.fromValue(object.revisionNumber) : Long.UZERO;
    message.revisionHeight = object.revisionHeight !== undefined && object.revisionHeight !== null ? Long.fromValue(object.revisionHeight) : Long.UZERO;
    return message;
  }
};
function createBaseOraclePayload_DataSourceBlockHeightsEntry(): OraclePayload_DataSourceBlockHeightsEntry {
  return {
    key: "",
    value: undefined
  };
}
export const OraclePayload_DataSourceBlockHeightsEntry = {
  encode(message: OraclePayload_DataSourceBlockHeightsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      HostChainHeight.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OraclePayload_DataSourceBlockHeightsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePayload_DataSourceBlockHeightsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = HostChainHeight.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OraclePayload_DataSourceBlockHeightsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? HostChainHeight.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: OraclePayload_DataSourceBlockHeightsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? HostChainHeight.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: Partial<OraclePayload_DataSourceBlockHeightsEntry>): OraclePayload_DataSourceBlockHeightsEntry {
    const message = createBaseOraclePayload_DataSourceBlockHeightsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? HostChainHeight.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBaseOraclePayload(): OraclePayload {
  return {
    dataSourceBlockHeights: {},
    price: "",
    pairs: [],
    quoteToken: ""
  };
}
export const OraclePayload = {
  encode(message: OraclePayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.dataSourceBlockHeights).forEach(([key, value]) => {
      OraclePayload_DataSourceBlockHeightsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.quoteToken !== "") {
      writer.uint32(34).string(message.quoteToken);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OraclePayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = OraclePayload_DataSourceBlockHeightsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.dataSourceBlockHeights[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.price = reader.string();
          break;
        case 3:
          message.pairs.push(Pair.decode(reader, reader.uint32()));
          break;
        case 4:
          message.quoteToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OraclePayload {
    return {
      dataSourceBlockHeights: isObject(object.dataSourceBlockHeights) ? Object.entries(object.dataSourceBlockHeights).reduce<{
        [key: string]: HostChainHeight;
      }>((acc, [key, value]) => {
        acc[key] = HostChainHeight.fromJSON(value);
        return acc;
      }, {}) : {},
      price: isSet(object.price) ? String(object.price) : "",
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => Pair.fromJSON(e)) : [],
      quoteToken: isSet(object.quoteToken) ? String(object.quoteToken) : ""
    };
  },
  toJSON(message: OraclePayload): unknown {
    const obj: any = {};
    obj.dataSourceBlockHeights = {};
    if (message.dataSourceBlockHeights) {
      Object.entries(message.dataSourceBlockHeights).forEach(([k, v]) => {
        obj.dataSourceBlockHeights[k] = HostChainHeight.toJSON(v);
      });
    }
    message.price !== undefined && (obj.price = message.price);
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? Pair.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    message.quoteToken !== undefined && (obj.quoteToken = message.quoteToken);
    return obj;
  },
  fromPartial(object: Partial<OraclePayload>): OraclePayload {
    const message = createBaseOraclePayload();
    message.dataSourceBlockHeights = Object.entries(object.dataSourceBlockHeights ?? {}).reduce<{
      [key: string]: HostChainHeight;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = HostChainHeight.fromPartial(value);
      }
      return acc;
    }, {});
    message.price = object.price ?? "";
    message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
    message.quoteToken = object.quoteToken ?? "";
    return message;
  }
};