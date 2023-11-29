import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
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
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowCreationDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.minFlowDuration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.minDurationToFlowStart = Duration.decode(reader, reader.uint32());
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
  }
};