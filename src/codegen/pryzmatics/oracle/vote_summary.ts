import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface VoteSummary {
  totalVotePeriods: bigint;
  totalSlashWindows: bigint;
}
export interface VoteSummaryProtoMsg {
  typeUrl: "/pryzmatics.oracle.VoteSummary";
  value: Uint8Array;
}
export interface VoteSummaryAmino {
  total_vote_periods?: string;
  total_slash_windows?: string;
}
export interface VoteSummaryAminoMsg {
  type: "/pryzmatics.oracle.VoteSummary";
  value: VoteSummaryAmino;
}
export interface VoteSummarySDKType {
  total_vote_periods: bigint;
  total_slash_windows: bigint;
}
function createBaseVoteSummary(): VoteSummary {
  return {
    totalVotePeriods: BigInt(0),
    totalSlashWindows: BigInt(0)
  };
}
export const VoteSummary = {
  typeUrl: "/pryzmatics.oracle.VoteSummary",
  is(o: any): o is VoteSummary {
    return o && (o.$typeUrl === VoteSummary.typeUrl || typeof o.totalVotePeriods === "bigint" && typeof o.totalSlashWindows === "bigint");
  },
  isSDK(o: any): o is VoteSummarySDKType {
    return o && (o.$typeUrl === VoteSummary.typeUrl || typeof o.total_vote_periods === "bigint" && typeof o.total_slash_windows === "bigint");
  },
  isAmino(o: any): o is VoteSummaryAmino {
    return o && (o.$typeUrl === VoteSummary.typeUrl || typeof o.total_vote_periods === "bigint" && typeof o.total_slash_windows === "bigint");
  },
  encode(message: VoteSummary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalVotePeriods !== BigInt(0)) {
      writer.uint32(16).int64(message.totalVotePeriods);
    }
    if (message.totalSlashWindows !== BigInt(0)) {
      writer.uint32(24).int64(message.totalSlashWindows);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): VoteSummary {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.totalVotePeriods = reader.int64();
          break;
        case 3:
          message.totalSlashWindows = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VoteSummary {
    return {
      totalVotePeriods: isSet(object.totalVotePeriods) ? BigInt(object.totalVotePeriods.toString()) : BigInt(0),
      totalSlashWindows: isSet(object.totalSlashWindows) ? BigInt(object.totalSlashWindows.toString()) : BigInt(0)
    };
  },
  toJSON(message: VoteSummary): unknown {
    const obj: any = {};
    message.totalVotePeriods !== undefined && (obj.totalVotePeriods = (message.totalVotePeriods || BigInt(0)).toString());
    message.totalSlashWindows !== undefined && (obj.totalSlashWindows = (message.totalSlashWindows || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<VoteSummary>): VoteSummary {
    const message = createBaseVoteSummary();
    message.totalVotePeriods = object.totalVotePeriods !== undefined && object.totalVotePeriods !== null ? BigInt(object.totalVotePeriods.toString()) : BigInt(0);
    message.totalSlashWindows = object.totalSlashWindows !== undefined && object.totalSlashWindows !== null ? BigInt(object.totalSlashWindows.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VoteSummaryAmino): VoteSummary {
    const message = createBaseVoteSummary();
    if (object.total_vote_periods !== undefined && object.total_vote_periods !== null) {
      message.totalVotePeriods = BigInt(object.total_vote_periods);
    }
    if (object.total_slash_windows !== undefined && object.total_slash_windows !== null) {
      message.totalSlashWindows = BigInt(object.total_slash_windows);
    }
    return message;
  },
  toAmino(message: VoteSummary, useInterfaces: boolean = true): VoteSummaryAmino {
    const obj: any = {};
    obj.total_vote_periods = message.totalVotePeriods ? message.totalVotePeriods.toString() : undefined;
    obj.total_slash_windows = message.totalSlashWindows ? message.totalSlashWindows.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VoteSummaryAminoMsg): VoteSummary {
    return VoteSummary.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteSummaryProtoMsg, useInterfaces: boolean = true): VoteSummary {
    return VoteSummary.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: VoteSummary): Uint8Array {
    return VoteSummary.encode(message).finish();
  },
  toProtoMsg(message: VoteSummary): VoteSummaryProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.VoteSummary",
      value: VoteSummary.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(VoteSummary.typeUrl, VoteSummary);