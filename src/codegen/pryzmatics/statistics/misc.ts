import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface Misc {
  blockTime: Timestamp;
  liquidity: string;
  walletsCount: bigint;
  totalTxCount: bigint;
  error: string;
}
export interface MiscProtoMsg {
  typeUrl: "/pryzmatics.statistics.Misc";
  value: Uint8Array;
}
export interface MiscAmino {
  block_time?: string;
  liquidity?: string;
  wallets_count?: string;
  total_tx_count?: string;
  error?: string;
}
export interface MiscAminoMsg {
  type: "/pryzmatics.statistics.Misc";
  value: MiscAmino;
}
export interface MiscSDKType {
  block_time: TimestampSDKType;
  liquidity: string;
  wallets_count: bigint;
  total_tx_count: bigint;
  error: string;
}
function createBaseMisc(): Misc {
  return {
    blockTime: Timestamp.fromPartial({}),
    liquidity: "",
    walletsCount: BigInt(0),
    totalTxCount: BigInt(0),
    error: ""
  };
}
export const Misc = {
  typeUrl: "/pryzmatics.statistics.Misc",
  is(o: any): o is Misc {
    return o && (o.$typeUrl === Misc.typeUrl || Timestamp.is(o.blockTime) && typeof o.liquidity === "string" && typeof o.walletsCount === "bigint" && typeof o.totalTxCount === "bigint" && typeof o.error === "string");
  },
  isSDK(o: any): o is MiscSDKType {
    return o && (o.$typeUrl === Misc.typeUrl || Timestamp.isSDK(o.block_time) && typeof o.liquidity === "string" && typeof o.wallets_count === "bigint" && typeof o.total_tx_count === "bigint" && typeof o.error === "string");
  },
  isAmino(o: any): o is MiscAmino {
    return o && (o.$typeUrl === Misc.typeUrl || Timestamp.isAmino(o.block_time) && typeof o.liquidity === "string" && typeof o.wallets_count === "bigint" && typeof o.total_tx_count === "bigint" && typeof o.error === "string");
  },
  encode(message: Misc, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.liquidity !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.liquidity, 18).atomics);
    }
    if (message.walletsCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.walletsCount);
    }
    if (message.totalTxCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.totalTxCount);
    }
    if (message.error !== "") {
      writer.uint32(42).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Misc {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.liquidity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.walletsCount = reader.uint64();
          break;
        case 4:
          message.totalTxCount = reader.uint64();
          break;
        case 5:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Misc {
    return {
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : "",
      walletsCount: isSet(object.walletsCount) ? BigInt(object.walletsCount.toString()) : BigInt(0),
      totalTxCount: isSet(object.totalTxCount) ? BigInt(object.totalTxCount.toString()) : BigInt(0),
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: Misc): unknown {
    const obj: any = {};
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    message.walletsCount !== undefined && (obj.walletsCount = (message.walletsCount || BigInt(0)).toString());
    message.totalTxCount !== undefined && (obj.totalTxCount = (message.totalTxCount || BigInt(0)).toString());
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<Misc>): Misc {
    const message = createBaseMisc();
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    message.liquidity = object.liquidity ?? "";
    message.walletsCount = object.walletsCount !== undefined && object.walletsCount !== null ? BigInt(object.walletsCount.toString()) : BigInt(0);
    message.totalTxCount = object.totalTxCount !== undefined && object.totalTxCount !== null ? BigInt(object.totalTxCount.toString()) : BigInt(0);
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: MiscAmino): Misc {
    const message = createBaseMisc();
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = Timestamp.fromAmino(object.block_time);
    }
    if (object.liquidity !== undefined && object.liquidity !== null) {
      message.liquidity = object.liquidity;
    }
    if (object.wallets_count !== undefined && object.wallets_count !== null) {
      message.walletsCount = BigInt(object.wallets_count);
    }
    if (object.total_tx_count !== undefined && object.total_tx_count !== null) {
      message.totalTxCount = BigInt(object.total_tx_count);
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: Misc, useInterfaces: boolean = true): MiscAmino {
    const obj: any = {};
    obj.block_time = message.blockTime ? Timestamp.toAmino(message.blockTime, useInterfaces) : undefined;
    obj.liquidity = padDecimal(message.liquidity) === "" ? undefined : padDecimal(message.liquidity);
    obj.wallets_count = message.walletsCount ? message.walletsCount.toString() : undefined;
    obj.total_tx_count = message.totalTxCount ? message.totalTxCount.toString() : undefined;
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: MiscAminoMsg): Misc {
    return Misc.fromAmino(object.value);
  },
  fromProtoMsg(message: MiscProtoMsg, useInterfaces: boolean = true): Misc {
    return Misc.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Misc): Uint8Array {
    return Misc.encode(message).finish();
  },
  toProtoMsg(message: Misc): MiscProtoMsg {
    return {
      typeUrl: "/pryzmatics.statistics.Misc",
      value: Misc.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Misc.typeUrl, Misc);