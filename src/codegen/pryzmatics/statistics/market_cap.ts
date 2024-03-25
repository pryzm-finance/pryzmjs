import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface MarketCap {
  fullyDiluted: string;
  circulating: string;
}
export interface MarketCapProtoMsg {
  typeUrl: "/pryzmatics.statistics.MarketCap";
  value: Uint8Array;
}
export interface MarketCapAmino {
  fully_diluted?: string;
  circulating?: string;
}
export interface MarketCapAminoMsg {
  type: "/pryzmatics.statistics.MarketCap";
  value: MarketCapAmino;
}
export interface MarketCapSDKType {
  fully_diluted: string;
  circulating: string;
}
function createBaseMarketCap(): MarketCap {
  return {
    fullyDiluted: "",
    circulating: ""
  };
}
export const MarketCap = {
  typeUrl: "/pryzmatics.statistics.MarketCap",
  is(o: any): o is MarketCap {
    return o && (o.$typeUrl === MarketCap.typeUrl || typeof o.fullyDiluted === "string" && typeof o.circulating === "string");
  },
  isSDK(o: any): o is MarketCapSDKType {
    return o && (o.$typeUrl === MarketCap.typeUrl || typeof o.fully_diluted === "string" && typeof o.circulating === "string");
  },
  isAmino(o: any): o is MarketCapAmino {
    return o && (o.$typeUrl === MarketCap.typeUrl || typeof o.fully_diluted === "string" && typeof o.circulating === "string");
  },
  encode(message: MarketCap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fullyDiluted !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.fullyDiluted, 18).atomics);
    }
    if (message.circulating !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.circulating, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MarketCap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketCap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullyDiluted = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.circulating = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MarketCap {
    return {
      fullyDiluted: isSet(object.fullyDiluted) ? String(object.fullyDiluted) : "",
      circulating: isSet(object.circulating) ? String(object.circulating) : ""
    };
  },
  toJSON(message: MarketCap): unknown {
    const obj: any = {};
    message.fullyDiluted !== undefined && (obj.fullyDiluted = message.fullyDiluted);
    message.circulating !== undefined && (obj.circulating = message.circulating);
    return obj;
  },
  fromPartial(object: Partial<MarketCap>): MarketCap {
    const message = createBaseMarketCap();
    message.fullyDiluted = object.fullyDiluted ?? "";
    message.circulating = object.circulating ?? "";
    return message;
  },
  fromAmino(object: MarketCapAmino): MarketCap {
    const message = createBaseMarketCap();
    if (object.fully_diluted !== undefined && object.fully_diluted !== null) {
      message.fullyDiluted = object.fully_diluted;
    }
    if (object.circulating !== undefined && object.circulating !== null) {
      message.circulating = object.circulating;
    }
    return message;
  },
  toAmino(message: MarketCap, useInterfaces: boolean = true): MarketCapAmino {
    const obj: any = {};
    obj.fully_diluted = padDecimal(message.fullyDiluted) === "" ? undefined : padDecimal(message.fullyDiluted);
    obj.circulating = padDecimal(message.circulating) === "" ? undefined : padDecimal(message.circulating);
    return obj;
  },
  fromAminoMsg(object: MarketCapAminoMsg): MarketCap {
    return MarketCap.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketCapProtoMsg, useInterfaces: boolean = true): MarketCap {
    return MarketCap.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MarketCap): Uint8Array {
    return MarketCap.encode(message).finish();
  },
  toProtoMsg(message: MarketCap): MarketCapProtoMsg {
    return {
      typeUrl: "/pryzmatics.statistics.MarketCap",
      value: MarketCap.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MarketCap.typeUrl, MarketCap);