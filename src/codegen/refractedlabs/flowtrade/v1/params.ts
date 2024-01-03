import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** Params defines the parameters for the module. */
export interface Params {
  /** The deposit amount taken from flow creator and transferred back after the flow ends */
  flowCreationDeposit: Coin;
  /** The minimum possible duration a flow can have */
  minFlowDuration: Duration;
  /** The minimum possible duration from the flow creation time to its start time */
  minDurationToFlowStart: Duration;
  /** the protocol fee ratio taken from token-out */
  tokenOutFeeRatio: string;
  /** the protocol fee ratio taken from token-in */
  tokenInFeeRatio: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** The deposit amount taken from flow creator and transferred back after the flow ends */
  flow_creation_deposit: CoinAmino;
  /** The minimum possible duration a flow can have */
  min_flow_duration: DurationAmino;
  /** The minimum possible duration from the flow creation time to its start time */
  min_duration_to_flow_start: DurationAmino;
  /** the protocol fee ratio taken from token-out */
  token_out_fee_ratio: string;
  /** the protocol fee ratio taken from token-in */
  token_in_fee_ratio: string;
}
export interface ParamsAminoMsg {
  type: "/refractedlabs.flowtrade.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  flow_creation_deposit: CoinSDKType;
  min_flow_duration: DurationSDKType;
  min_duration_to_flow_start: DurationSDKType;
  token_out_fee_ratio: string;
  token_in_fee_ratio: string;
}
function createBaseParams(): Params {
  return {
    flowCreationDeposit: Coin.fromPartial({}),
    minFlowDuration: Duration.fromPartial({}),
    minDurationToFlowStart: Duration.fromPartial({}),
    tokenOutFeeRatio: "",
    tokenInFeeRatio: ""
  };
}
export const Params = {
  typeUrl: "/refractedlabs.flowtrade.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Coin.is(o.flowCreationDeposit) && Duration.is(o.minFlowDuration) && Duration.is(o.minDurationToFlowStart) && typeof o.tokenOutFeeRatio === "string" && typeof o.tokenInFeeRatio === "string");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Coin.isSDK(o.flow_creation_deposit) && Duration.isSDK(o.min_flow_duration) && Duration.isSDK(o.min_duration_to_flow_start) && typeof o.token_out_fee_ratio === "string" && typeof o.token_in_fee_ratio === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Coin.isAmino(o.flow_creation_deposit) && Duration.isAmino(o.min_flow_duration) && Duration.isAmino(o.min_duration_to_flow_start) && typeof o.token_out_fee_ratio === "string" && typeof o.token_in_fee_ratio === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowCreationDeposit !== undefined) {
      Coin.encode(message.flowCreationDeposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.minFlowDuration !== undefined) {
      Duration.encode(message.minFlowDuration, writer.uint32(18).fork()).ldelim();
    }
    if (message.minDurationToFlowStart !== undefined) {
      Duration.encode(message.minDurationToFlowStart, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenOutFeeRatio !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.tokenOutFeeRatio, 18).atomics);
    }
    if (message.tokenInFeeRatio !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.tokenInFeeRatio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowCreationDeposit = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.minFlowDuration = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.minDurationToFlowStart = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.tokenOutFeeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.tokenInFeeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
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
      flowCreationDeposit: isSet(object.flowCreationDeposit) ? Coin.fromJSON(object.flowCreationDeposit) : undefined,
      minFlowDuration: isSet(object.minFlowDuration) ? Duration.fromJSON(object.minFlowDuration) : undefined,
      minDurationToFlowStart: isSet(object.minDurationToFlowStart) ? Duration.fromJSON(object.minDurationToFlowStart) : undefined,
      tokenOutFeeRatio: isSet(object.tokenOutFeeRatio) ? String(object.tokenOutFeeRatio) : "",
      tokenInFeeRatio: isSet(object.tokenInFeeRatio) ? String(object.tokenInFeeRatio) : ""
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.flowCreationDeposit !== undefined && (obj.flowCreationDeposit = message.flowCreationDeposit ? Coin.toJSON(message.flowCreationDeposit) : undefined);
    message.minFlowDuration !== undefined && (obj.minFlowDuration = message.minFlowDuration ? Duration.toJSON(message.minFlowDuration) : undefined);
    message.minDurationToFlowStart !== undefined && (obj.minDurationToFlowStart = message.minDurationToFlowStart ? Duration.toJSON(message.minDurationToFlowStart) : undefined);
    message.tokenOutFeeRatio !== undefined && (obj.tokenOutFeeRatio = message.tokenOutFeeRatio);
    message.tokenInFeeRatio !== undefined && (obj.tokenInFeeRatio = message.tokenInFeeRatio);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.flowCreationDeposit = object.flowCreationDeposit !== undefined && object.flowCreationDeposit !== null ? Coin.fromPartial(object.flowCreationDeposit) : undefined;
    message.minFlowDuration = object.minFlowDuration !== undefined && object.minFlowDuration !== null ? Duration.fromPartial(object.minFlowDuration) : undefined;
    message.minDurationToFlowStart = object.minDurationToFlowStart !== undefined && object.minDurationToFlowStart !== null ? Duration.fromPartial(object.minDurationToFlowStart) : undefined;
    message.tokenOutFeeRatio = object.tokenOutFeeRatio ?? "";
    message.tokenInFeeRatio = object.tokenInFeeRatio ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.flow_creation_deposit !== undefined && object.flow_creation_deposit !== null) {
      message.flowCreationDeposit = Coin.fromAmino(object.flow_creation_deposit);
    }
    if (object.min_flow_duration !== undefined && object.min_flow_duration !== null) {
      message.minFlowDuration = Duration.fromAmino(object.min_flow_duration);
    }
    if (object.min_duration_to_flow_start !== undefined && object.min_duration_to_flow_start !== null) {
      message.minDurationToFlowStart = Duration.fromAmino(object.min_duration_to_flow_start);
    }
    if (object.token_out_fee_ratio !== undefined && object.token_out_fee_ratio !== null) {
      message.tokenOutFeeRatio = object.token_out_fee_ratio;
    }
    if (object.token_in_fee_ratio !== undefined && object.token_in_fee_ratio !== null) {
      message.tokenInFeeRatio = object.token_in_fee_ratio;
    }
    return message;
  },
  toAmino(message: Params, useInterfaces: boolean = true): ParamsAmino {
    const obj: any = {};
    obj.flow_creation_deposit = message.flowCreationDeposit ? Coin.toAmino(message.flowCreationDeposit, useInterfaces) : undefined;
    obj.min_flow_duration = message.minFlowDuration ? Duration.toAmino(message.minFlowDuration, useInterfaces) : undefined;
    obj.min_duration_to_flow_start = message.minDurationToFlowStart ? Duration.toAmino(message.minDurationToFlowStart, useInterfaces) : undefined;
    obj.token_out_fee_ratio = padDecimal(message.tokenOutFeeRatio) === "" ? undefined : padDecimal(message.tokenOutFeeRatio);
    obj.token_in_fee_ratio = padDecimal(message.tokenInFeeRatio) === "" ? undefined : padDecimal(message.tokenInFeeRatio);
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg, useInterfaces: boolean = true): Params {
    return Params.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);