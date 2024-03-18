import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface TallyResult {
  yesCount: string;
  abstainCount: string;
  noCount: string;
  noWithVetoCount: string;
  votingPowerPercentage: string;
  updatedTime?: Timestamp;
}
export interface TallyResultProtoMsg {
  typeUrl: "/pryzmatics.gov.TallyResult";
  value: Uint8Array;
}
export interface TallyResultAmino {
  yes_count?: string;
  abstain_count?: string;
  no_count?: string;
  no_with_veto_count?: string;
  voting_power_percentage?: string;
  updated_time?: string;
}
export interface TallyResultAminoMsg {
  type: "/pryzmatics.gov.TallyResult";
  value: TallyResultAmino;
}
export interface TallyResultSDKType {
  yes_count: string;
  abstain_count: string;
  no_count: string;
  no_with_veto_count: string;
  voting_power_percentage: string;
  updated_time?: TimestampSDKType;
}
function createBaseTallyResult(): TallyResult {
  return {
    yesCount: "",
    abstainCount: "",
    noCount: "",
    noWithVetoCount: "",
    votingPowerPercentage: "",
    updatedTime: undefined
  };
}
export const TallyResult = {
  typeUrl: "/pryzmatics.gov.TallyResult",
  is(o: any): o is TallyResult {
    return o && (o.$typeUrl === TallyResult.typeUrl || typeof o.yesCount === "string" && typeof o.abstainCount === "string" && typeof o.noCount === "string" && typeof o.noWithVetoCount === "string" && typeof o.votingPowerPercentage === "string");
  },
  isSDK(o: any): o is TallyResultSDKType {
    return o && (o.$typeUrl === TallyResult.typeUrl || typeof o.yes_count === "string" && typeof o.abstain_count === "string" && typeof o.no_count === "string" && typeof o.no_with_veto_count === "string" && typeof o.voting_power_percentage === "string");
  },
  isAmino(o: any): o is TallyResultAmino {
    return o && (o.$typeUrl === TallyResult.typeUrl || typeof o.yes_count === "string" && typeof o.abstain_count === "string" && typeof o.no_count === "string" && typeof o.no_with_veto_count === "string" && typeof o.voting_power_percentage === "string");
  },
  encode(message: TallyResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yesCount !== "") {
      writer.uint32(10).string(message.yesCount);
    }
    if (message.abstainCount !== "") {
      writer.uint32(18).string(message.abstainCount);
    }
    if (message.noCount !== "") {
      writer.uint32(26).string(message.noCount);
    }
    if (message.noWithVetoCount !== "") {
      writer.uint32(34).string(message.noWithVetoCount);
    }
    if (message.votingPowerPercentage !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.votingPowerPercentage, 18).atomics);
    }
    if (message.updatedTime !== undefined) {
      Timestamp.encode(message.updatedTime, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): TallyResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yesCount = reader.string();
          break;
        case 2:
          message.abstainCount = reader.string();
          break;
        case 3:
          message.noCount = reader.string();
          break;
        case 4:
          message.noWithVetoCount = reader.string();
          break;
        case 5:
          message.votingPowerPercentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.updatedTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TallyResult {
    return {
      yesCount: isSet(object.yesCount) ? String(object.yesCount) : "",
      abstainCount: isSet(object.abstainCount) ? String(object.abstainCount) : "",
      noCount: isSet(object.noCount) ? String(object.noCount) : "",
      noWithVetoCount: isSet(object.noWithVetoCount) ? String(object.noWithVetoCount) : "",
      votingPowerPercentage: isSet(object.votingPowerPercentage) ? String(object.votingPowerPercentage) : "",
      updatedTime: isSet(object.updatedTime) ? fromJsonTimestamp(object.updatedTime) : undefined
    };
  },
  toJSON(message: TallyResult): unknown {
    const obj: any = {};
    message.yesCount !== undefined && (obj.yesCount = message.yesCount);
    message.abstainCount !== undefined && (obj.abstainCount = message.abstainCount);
    message.noCount !== undefined && (obj.noCount = message.noCount);
    message.noWithVetoCount !== undefined && (obj.noWithVetoCount = message.noWithVetoCount);
    message.votingPowerPercentage !== undefined && (obj.votingPowerPercentage = message.votingPowerPercentage);
    message.updatedTime !== undefined && (obj.updatedTime = fromTimestamp(message.updatedTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<TallyResult>): TallyResult {
    const message = createBaseTallyResult();
    message.yesCount = object.yesCount ?? "";
    message.abstainCount = object.abstainCount ?? "";
    message.noCount = object.noCount ?? "";
    message.noWithVetoCount = object.noWithVetoCount ?? "";
    message.votingPowerPercentage = object.votingPowerPercentage ?? "";
    message.updatedTime = object.updatedTime !== undefined && object.updatedTime !== null ? Timestamp.fromPartial(object.updatedTime) : undefined;
    return message;
  },
  fromAmino(object: TallyResultAmino): TallyResult {
    const message = createBaseTallyResult();
    if (object.yes_count !== undefined && object.yes_count !== null) {
      message.yesCount = object.yes_count;
    }
    if (object.abstain_count !== undefined && object.abstain_count !== null) {
      message.abstainCount = object.abstain_count;
    }
    if (object.no_count !== undefined && object.no_count !== null) {
      message.noCount = object.no_count;
    }
    if (object.no_with_veto_count !== undefined && object.no_with_veto_count !== null) {
      message.noWithVetoCount = object.no_with_veto_count;
    }
    if (object.voting_power_percentage !== undefined && object.voting_power_percentage !== null) {
      message.votingPowerPercentage = object.voting_power_percentage;
    }
    if (object.updated_time !== undefined && object.updated_time !== null) {
      message.updatedTime = Timestamp.fromAmino(object.updated_time);
    }
    return message;
  },
  toAmino(message: TallyResult, useInterfaces: boolean = true): TallyResultAmino {
    const obj: any = {};
    obj.yes_count = message.yesCount === "" ? undefined : message.yesCount;
    obj.abstain_count = message.abstainCount === "" ? undefined : message.abstainCount;
    obj.no_count = message.noCount === "" ? undefined : message.noCount;
    obj.no_with_veto_count = message.noWithVetoCount === "" ? undefined : message.noWithVetoCount;
    obj.voting_power_percentage = padDecimal(message.votingPowerPercentage) === "" ? undefined : padDecimal(message.votingPowerPercentage);
    obj.updated_time = message.updatedTime ? Timestamp.toAmino(message.updatedTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: TallyResultAminoMsg): TallyResult {
    return TallyResult.fromAmino(object.value);
  },
  fromProtoMsg(message: TallyResultProtoMsg, useInterfaces: boolean = true): TallyResult {
    return TallyResult.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: TallyResult): Uint8Array {
    return TallyResult.encode(message).finish();
  },
  toProtoMsg(message: TallyResult): TallyResultProtoMsg {
    return {
      typeUrl: "/pryzmatics.gov.TallyResult",
      value: TallyResult.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TallyResult.typeUrl, TallyResult);