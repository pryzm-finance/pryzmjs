import { Height, HeightSDKType } from "../../ibc/core/client/v1/client";
import { Pair, PairSDKType } from "./oracle_price_pair";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, isObject } from "../../helpers";
import { Decimal } from "@cosmjs/math";
export interface OraclePayload_DataSourceBlockHeightsEntry {
  key: string;
  value: Height;
}
export interface OraclePayload_DataSourceBlockHeightsEntrySDKType {
  key: string;
  value: HeightSDKType;
}
/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayload {
  dataSourceBlockHeights: {
    [key: string]: Height;
  };
  price: string;
  pairs: Pair[];
  quoteToken: string;
}
/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayloadSDKType {
  data_source_block_heights: {
    [key: string]: HeightSDKType;
  };
  price: string;
  pairs: PairSDKType[];
  quote_token: string;
}
function createBaseOraclePayload_DataSourceBlockHeightsEntry(): OraclePayload_DataSourceBlockHeightsEntry {
  return {
    key: "",
    value: Height.fromPartial({})
  };
}
export const OraclePayload_DataSourceBlockHeightsEntry = {
  encode(message: OraclePayload_DataSourceBlockHeightsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Height.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OraclePayload_DataSourceBlockHeightsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePayload_DataSourceBlockHeightsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Height.decode(reader, reader.uint32());
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
      value: isSet(object.value) ? Height.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: OraclePayload_DataSourceBlockHeightsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Height.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: Partial<OraclePayload_DataSourceBlockHeightsEntry>): OraclePayload_DataSourceBlockHeightsEntry {
    const message = createBaseOraclePayload_DataSourceBlockHeightsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Height.fromPartial(object.value) : undefined;
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
  encode(message: OraclePayload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.dataSourceBlockHeights).forEach(([key, value]) => {
      OraclePayload_DataSourceBlockHeightsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    if (message.price !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.quoteToken !== "") {
      writer.uint32(34).string(message.quoteToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OraclePayload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
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
        [key: string]: Height;
      }>((acc, [key, value]) => {
        acc[key] = Height.fromJSON(value);
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
        obj.dataSourceBlockHeights[k] = Height.toJSON(v);
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
      [key: string]: Height;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Height.fromPartial(value);
      }
      return acc;
    }, {});
    message.price = object.price ?? "";
    message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
    message.quoteToken = object.quoteToken ?? "";
    return message;
  }
};