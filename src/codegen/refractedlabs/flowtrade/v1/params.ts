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
  gasParameters: GasParameters;
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
  gas_parameters?: GasParametersAmino;
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
  gas_parameters: GasParametersSDKType;
}
/** Parameters for consuming gas on certain operations */
export interface GasParameters {
  /** gas for creating a new flow */
  flowCreate: bigint;
  /** gas for stopping a flow */
  flowStop: bigint;
}
export interface GasParametersProtoMsg {
  typeUrl: "/refractedlabs.flowtrade.v1.GasParameters";
  value: Uint8Array;
}
/** Parameters for consuming gas on certain operations */
export interface GasParametersAmino {
  /** gas for creating a new flow */
  flow_create?: string;
  /** gas for stopping a flow */
  flow_stop?: string;
}
export interface GasParametersAminoMsg {
  type: "/refractedlabs.flowtrade.v1.GasParameters";
  value: GasParametersAmino;
}
/** Parameters for consuming gas on certain operations */
export interface GasParametersSDKType {
  flow_create: bigint;
  flow_stop: bigint;
}
function createBaseParams(): Params {
  return {
    flowCreationDeposit: Coin.fromPartial({}),
    minFlowDuration: Duration.fromPartial({}),
    minDurationToFlowStart: Duration.fromPartial({}),
    tokenOutFeeRatio: "",
    tokenInFeeRatio: "",
    gasParameters: GasParameters.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/refractedlabs.flowtrade.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Coin.is(o.flowCreationDeposit) && Duration.is(o.minFlowDuration) && Duration.is(o.minDurationToFlowStart) && typeof o.tokenOutFeeRatio === "string" && typeof o.tokenInFeeRatio === "string" && GasParameters.is(o.gasParameters));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Coin.isSDK(o.flow_creation_deposit) && Duration.isSDK(o.min_flow_duration) && Duration.isSDK(o.min_duration_to_flow_start) && typeof o.token_out_fee_ratio === "string" && typeof o.token_in_fee_ratio === "string" && GasParameters.isSDK(o.gas_parameters));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Coin.isAmino(o.flow_creation_deposit) && Duration.isAmino(o.min_flow_duration) && Duration.isAmino(o.min_duration_to_flow_start) && typeof o.token_out_fee_ratio === "string" && typeof o.token_in_fee_ratio === "string" && GasParameters.isAmino(o.gas_parameters));
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
    if (message.gasParameters !== undefined) {
      GasParameters.encode(message.gasParameters, writer.uint32(50).fork()).ldelim();
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
        case 6:
          message.gasParameters = GasParameters.decode(reader, reader.uint32(), useInterfaces);
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
      tokenInFeeRatio: isSet(object.tokenInFeeRatio) ? String(object.tokenInFeeRatio) : "",
      gasParameters: isSet(object.gasParameters) ? GasParameters.fromJSON(object.gasParameters) : undefined
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.flowCreationDeposit !== undefined && (obj.flowCreationDeposit = message.flowCreationDeposit ? Coin.toJSON(message.flowCreationDeposit) : undefined);
    message.minFlowDuration !== undefined && (obj.minFlowDuration = message.minFlowDuration ? Duration.toJSON(message.minFlowDuration) : undefined);
    message.minDurationToFlowStart !== undefined && (obj.minDurationToFlowStart = message.minDurationToFlowStart ? Duration.toJSON(message.minDurationToFlowStart) : undefined);
    message.tokenOutFeeRatio !== undefined && (obj.tokenOutFeeRatio = message.tokenOutFeeRatio);
    message.tokenInFeeRatio !== undefined && (obj.tokenInFeeRatio = message.tokenInFeeRatio);
    message.gasParameters !== undefined && (obj.gasParameters = message.gasParameters ? GasParameters.toJSON(message.gasParameters) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.flowCreationDeposit = object.flowCreationDeposit !== undefined && object.flowCreationDeposit !== null ? Coin.fromPartial(object.flowCreationDeposit) : undefined;
    message.minFlowDuration = object.minFlowDuration !== undefined && object.minFlowDuration !== null ? Duration.fromPartial(object.minFlowDuration) : undefined;
    message.minDurationToFlowStart = object.minDurationToFlowStart !== undefined && object.minDurationToFlowStart !== null ? Duration.fromPartial(object.minDurationToFlowStart) : undefined;
    message.tokenOutFeeRatio = object.tokenOutFeeRatio ?? "";
    message.tokenInFeeRatio = object.tokenInFeeRatio ?? "";
    message.gasParameters = object.gasParameters !== undefined && object.gasParameters !== null ? GasParameters.fromPartial(object.gasParameters) : undefined;
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
    if (object.gas_parameters !== undefined && object.gas_parameters !== null) {
      message.gasParameters = GasParameters.fromAmino(object.gas_parameters);
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
    obj.gas_parameters = message.gasParameters ? GasParameters.toAmino(message.gasParameters, useInterfaces) : undefined;
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
function createBaseGasParameters(): GasParameters {
  return {
    flowCreate: BigInt(0),
    flowStop: BigInt(0)
  };
}
export const GasParameters = {
  typeUrl: "/refractedlabs.flowtrade.v1.GasParameters",
  is(o: any): o is GasParameters {
    return o && (o.$typeUrl === GasParameters.typeUrl || typeof o.flowCreate === "bigint" && typeof o.flowStop === "bigint");
  },
  isSDK(o: any): o is GasParametersSDKType {
    return o && (o.$typeUrl === GasParameters.typeUrl || typeof o.flow_create === "bigint" && typeof o.flow_stop === "bigint");
  },
  isAmino(o: any): o is GasParametersAmino {
    return o && (o.$typeUrl === GasParameters.typeUrl || typeof o.flow_create === "bigint" && typeof o.flow_stop === "bigint");
  },
  encode(message: GasParameters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowCreate !== BigInt(0)) {
      writer.uint32(8).uint64(message.flowCreate);
    }
    if (message.flowStop !== BigInt(0)) {
      writer.uint32(16).uint64(message.flowStop);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GasParameters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowCreate = reader.uint64();
          break;
        case 2:
          message.flowStop = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GasParameters {
    return {
      flowCreate: isSet(object.flowCreate) ? BigInt(object.flowCreate.toString()) : BigInt(0),
      flowStop: isSet(object.flowStop) ? BigInt(object.flowStop.toString()) : BigInt(0)
    };
  },
  toJSON(message: GasParameters): unknown {
    const obj: any = {};
    message.flowCreate !== undefined && (obj.flowCreate = (message.flowCreate || BigInt(0)).toString());
    message.flowStop !== undefined && (obj.flowStop = (message.flowStop || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<GasParameters>): GasParameters {
    const message = createBaseGasParameters();
    message.flowCreate = object.flowCreate !== undefined && object.flowCreate !== null ? BigInt(object.flowCreate.toString()) : BigInt(0);
    message.flowStop = object.flowStop !== undefined && object.flowStop !== null ? BigInt(object.flowStop.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GasParametersAmino): GasParameters {
    const message = createBaseGasParameters();
    if (object.flow_create !== undefined && object.flow_create !== null) {
      message.flowCreate = BigInt(object.flow_create);
    }
    if (object.flow_stop !== undefined && object.flow_stop !== null) {
      message.flowStop = BigInt(object.flow_stop);
    }
    return message;
  },
  toAmino(message: GasParameters, useInterfaces: boolean = true): GasParametersAmino {
    const obj: any = {};
    obj.flow_create = message.flowCreate ? message.flowCreate.toString() : undefined;
    obj.flow_stop = message.flowStop ? message.flowStop.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GasParametersAminoMsg): GasParameters {
    return GasParameters.fromAmino(object.value);
  },
  fromProtoMsg(message: GasParametersProtoMsg, useInterfaces: boolean = true): GasParameters {
    return GasParameters.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GasParameters): Uint8Array {
    return GasParameters.encode(message).finish();
  },
  toProtoMsg(message: GasParameters): GasParametersProtoMsg {
    return {
      typeUrl: "/refractedlabs.flowtrade.v1.GasParameters",
      value: GasParameters.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GasParameters.typeUrl, GasParameters);