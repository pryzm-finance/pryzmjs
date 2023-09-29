import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface VoteSummary {
  totalVotePeriods: bigint;
  totalSlashWindows: bigint;
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
  encode(message: VoteSummary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalVotePeriods !== BigInt(0)) {
      writer.uint32(16).int64(message.totalVotePeriods);
    }
    if (message.totalSlashWindows !== BigInt(0)) {
      writer.uint32(24).int64(message.totalSlashWindows);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VoteSummary {
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
  }
};