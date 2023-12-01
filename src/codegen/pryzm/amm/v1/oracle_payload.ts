import { Height, HeightSDKType } from "../../../ibc/core/client/v1/client";
import { Pair, PairSDKType } from "./oracle_price_pair";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface OraclePayloadDataSourceBlockHeight {
  dataSource: string;
  blockHeight: Height;
}
export interface OraclePayloadDataSourceBlockHeightSDKType {
  data_source: string;
  block_height: HeightSDKType;
}
/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayload {
  dataSourceBlockHeights: OraclePayloadDataSourceBlockHeight[];
  price: string;
  pairs: Pair[];
  quoteToken: string;
}
/** OraclePayload defines the structure of oracle vote payload */
export interface OraclePayloadSDKType {
  data_source_block_heights: OraclePayloadDataSourceBlockHeightSDKType[];
  price: string;
  pairs: PairSDKType[];
  quote_token: string;
}
function createBaseOraclePayloadDataSourceBlockHeight(): OraclePayloadDataSourceBlockHeight {
  return {
    dataSource: "",
    blockHeight: Height.fromPartial({})
  };
}
export const OraclePayloadDataSourceBlockHeight = {
  encode(message: OraclePayloadDataSourceBlockHeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dataSource !== "") {
      writer.uint32(10).string(message.dataSource);
    }
    if (message.blockHeight !== undefined) {
      Height.encode(message.blockHeight, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OraclePayloadDataSourceBlockHeight {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePayloadDataSourceBlockHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataSource = reader.string();
          break;
        case 2:
          message.blockHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OraclePayloadDataSourceBlockHeight {
    return {
      dataSource: isSet(object.dataSource) ? String(object.dataSource) : "",
      blockHeight: isSet(object.blockHeight) ? Height.fromJSON(object.blockHeight) : undefined
    };
  },
  toJSON(message: OraclePayloadDataSourceBlockHeight): unknown {
    const obj: any = {};
    message.dataSource !== undefined && (obj.dataSource = message.dataSource);
    message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight ? Height.toJSON(message.blockHeight) : undefined);
    return obj;
  },
  fromPartial(object: Partial<OraclePayloadDataSourceBlockHeight>): OraclePayloadDataSourceBlockHeight {
    const message = createBaseOraclePayloadDataSourceBlockHeight();
    message.dataSource = object.dataSource ?? "";
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Height.fromPartial(object.blockHeight) : undefined;
    return message;
  }
};
function createBaseOraclePayload(): OraclePayload {
  return {
    dataSourceBlockHeights: [],
    price: "",
    pairs: [],
    quoteToken: ""
  };
}
export const OraclePayload = {
  encode(message: OraclePayload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.dataSourceBlockHeights) {
      OraclePayloadDataSourceBlockHeight.encode(v!, writer.uint32(10).fork()).ldelim();
    }
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
          message.dataSourceBlockHeights.push(OraclePayloadDataSourceBlockHeight.decode(reader, reader.uint32()));
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
      dataSourceBlockHeights: Array.isArray(object?.dataSourceBlockHeights) ? object.dataSourceBlockHeights.map((e: any) => OraclePayloadDataSourceBlockHeight.fromJSON(e)) : [],
      price: isSet(object.price) ? String(object.price) : "",
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => Pair.fromJSON(e)) : [],
      quoteToken: isSet(object.quoteToken) ? String(object.quoteToken) : ""
    };
  },
  toJSON(message: OraclePayload): unknown {
    const obj: any = {};
    if (message.dataSourceBlockHeights) {
      obj.dataSourceBlockHeights = message.dataSourceBlockHeights.map(e => e ? OraclePayloadDataSourceBlockHeight.toJSON(e) : undefined);
    } else {
      obj.dataSourceBlockHeights = [];
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
    message.dataSourceBlockHeights = object.dataSourceBlockHeights?.map(e => OraclePayloadDataSourceBlockHeight.fromPartial(e)) || [];
    message.price = object.price ?? "";
    message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
    message.quoteToken = object.quoteToken ?? "";
    return message;
  }
};