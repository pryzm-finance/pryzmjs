import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  unbondingPeriod: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/pryzm.incentives.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  unbonding_period?: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "/pryzm.incentives.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  unbonding_period: DurationSDKType;
}
function createBaseParams(): Params {
  return {
    unbondingPeriod: Duration.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/pryzm.incentives.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbondingPeriod !== undefined) {
      Duration.encode(message.unbondingPeriod, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      unbondingPeriod: isSet(object.unbondingPeriod) ? Duration.fromJSON(object.unbondingPeriod) : undefined
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.unbondingPeriod !== undefined && (obj.unbondingPeriod = message.unbondingPeriod ? Duration.toJSON(message.unbondingPeriod) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.unbondingPeriod = object.unbondingPeriod !== undefined && object.unbondingPeriod !== null ? Duration.fromPartial(object.unbondingPeriod) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.unbonding_period !== undefined && object.unbonding_period !== null) {
      message.unbondingPeriod = Duration.fromAmino(object.unbonding_period);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.unbonding_period = message.unbondingPeriod ? Duration.toAmino(message.unbondingPeriod) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};