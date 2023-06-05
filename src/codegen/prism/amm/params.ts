import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface OrderParameters {
  stepMatchingFeeRatio: string;
  stepSwapFeeRatio: string;
  matchingProtocolFeeRatio: string;
  matchingSolverFeeRatio: string;
  maxOrdersPerBlock: number;
  maxSchedulePerBlock: number;
  maxExecOrderTradeRatio: string;
  maxOrderStepRatio: string;
  minOrderStepRatio: string;
}
export interface OrderParametersSDKType {
  step_matching_fee_ratio: string;
  step_swap_fee_ratio: string;
  matching_protocol_fee_ratio: string;
  matching_solver_fee_ratio: string;
  max_orders_per_block: number;
  max_schedule_per_block: number;
  max_exec_order_trade_ratio: string;
  max_order_step_ratio: string;
  min_order_step_ratio: string;
}
export interface YammParameters {
  /** duration (milliseconds) for virtual balance when adding new pAssets to yamm pools */
  maturityIntroductionIntervalMillis: Long;
  maturityExpirationIntervalMillis: Long;
  expirationVirtualBalanceScaler: string;
  /**
   * discount ratio applied to constant sum equations for trading cAsset-pAsset where pAsset is expired or close
   * to expiry
   */
  expiredAssetDiscountRatio: string;
  buyYGivenInLoanFeeRatio: string;
  sellYGivenOutFeeRatio: string;
  swapYieldFeeRatio: string;
  leverageScaler: string;
  /** zero means no limit */
  maxWeightRatio: string;
}
export interface YammParametersSDKType {
  maturity_introduction_interval_millis: Long;
  maturity_expiration_interval_millis: Long;
  expiration_virtual_balance_scaler: string;
  expired_asset_discount_ratio: string;
  buy_y_given_in_loan_fee_ratio: string;
  sell_y_given_out_fee_ratio: string;
  swap_yield_fee_ratio: string;
  leverage_scaler: string;
  max_weight_ratio: string;
}
export interface GeneralPoolParameters {
  allowPublicPoolCreation: boolean;
  defaultSwapFeeRatio: string;
  swapProtocolFeeRatio: string;
  joinExitProtocolFeeRatio: string;
}
export interface GeneralPoolParametersSDKType {
  allow_public_pool_creation: boolean;
  default_swap_fee_ratio: string;
  swap_protocol_fee_ratio: string;
  join_exit_protocol_fee_ratio: string;
}
/** Params defines the parameters for the module. */
export interface Params {
  generalPoolParameters?: GeneralPoolParameters;
  yammParameters?: YammParameters;
  orderParameters?: OrderParameters;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  general_pool_parameters?: GeneralPoolParametersSDKType;
  yamm_parameters?: YammParametersSDKType;
  order_parameters?: OrderParametersSDKType;
}
function createBaseOrderParameters(): OrderParameters {
  return {
    stepMatchingFeeRatio: "",
    stepSwapFeeRatio: "",
    matchingProtocolFeeRatio: "",
    matchingSolverFeeRatio: "",
    maxOrdersPerBlock: 0,
    maxSchedulePerBlock: 0,
    maxExecOrderTradeRatio: "",
    maxOrderStepRatio: "",
    minOrderStepRatio: ""
  };
}
export const OrderParameters = {
  encode(message: OrderParameters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stepMatchingFeeRatio !== "") {
      writer.uint32(10).string(message.stepMatchingFeeRatio);
    }
    if (message.stepSwapFeeRatio !== "") {
      writer.uint32(18).string(message.stepSwapFeeRatio);
    }
    if (message.matchingProtocolFeeRatio !== "") {
      writer.uint32(26).string(message.matchingProtocolFeeRatio);
    }
    if (message.matchingSolverFeeRatio !== "") {
      writer.uint32(34).string(message.matchingSolverFeeRatio);
    }
    if (message.maxOrdersPerBlock !== 0) {
      writer.uint32(40).int32(message.maxOrdersPerBlock);
    }
    if (message.maxSchedulePerBlock !== 0) {
      writer.uint32(48).int32(message.maxSchedulePerBlock);
    }
    if (message.maxExecOrderTradeRatio !== "") {
      writer.uint32(58).string(message.maxExecOrderTradeRatio);
    }
    if (message.maxOrderStepRatio !== "") {
      writer.uint32(66).string(message.maxOrderStepRatio);
    }
    if (message.minOrderStepRatio !== "") {
      writer.uint32(74).string(message.minOrderStepRatio);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OrderParameters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stepMatchingFeeRatio = reader.string();
          break;
        case 2:
          message.stepSwapFeeRatio = reader.string();
          break;
        case 3:
          message.matchingProtocolFeeRatio = reader.string();
          break;
        case 4:
          message.matchingSolverFeeRatio = reader.string();
          break;
        case 5:
          message.maxOrdersPerBlock = reader.int32();
          break;
        case 6:
          message.maxSchedulePerBlock = reader.int32();
          break;
        case 7:
          message.maxExecOrderTradeRatio = reader.string();
          break;
        case 8:
          message.maxOrderStepRatio = reader.string();
          break;
        case 9:
          message.minOrderStepRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderParameters {
    return {
      stepMatchingFeeRatio: isSet(object.stepMatchingFeeRatio) ? String(object.stepMatchingFeeRatio) : "",
      stepSwapFeeRatio: isSet(object.stepSwapFeeRatio) ? String(object.stepSwapFeeRatio) : "",
      matchingProtocolFeeRatio: isSet(object.matchingProtocolFeeRatio) ? String(object.matchingProtocolFeeRatio) : "",
      matchingSolverFeeRatio: isSet(object.matchingSolverFeeRatio) ? String(object.matchingSolverFeeRatio) : "",
      maxOrdersPerBlock: isSet(object.maxOrdersPerBlock) ? Number(object.maxOrdersPerBlock) : 0,
      maxSchedulePerBlock: isSet(object.maxSchedulePerBlock) ? Number(object.maxSchedulePerBlock) : 0,
      maxExecOrderTradeRatio: isSet(object.maxExecOrderTradeRatio) ? String(object.maxExecOrderTradeRatio) : "",
      maxOrderStepRatio: isSet(object.maxOrderStepRatio) ? String(object.maxOrderStepRatio) : "",
      minOrderStepRatio: isSet(object.minOrderStepRatio) ? String(object.minOrderStepRatio) : ""
    };
  },
  toJSON(message: OrderParameters): unknown {
    const obj: any = {};
    message.stepMatchingFeeRatio !== undefined && (obj.stepMatchingFeeRatio = message.stepMatchingFeeRatio);
    message.stepSwapFeeRatio !== undefined && (obj.stepSwapFeeRatio = message.stepSwapFeeRatio);
    message.matchingProtocolFeeRatio !== undefined && (obj.matchingProtocolFeeRatio = message.matchingProtocolFeeRatio);
    message.matchingSolverFeeRatio !== undefined && (obj.matchingSolverFeeRatio = message.matchingSolverFeeRatio);
    message.maxOrdersPerBlock !== undefined && (obj.maxOrdersPerBlock = Math.round(message.maxOrdersPerBlock));
    message.maxSchedulePerBlock !== undefined && (obj.maxSchedulePerBlock = Math.round(message.maxSchedulePerBlock));
    message.maxExecOrderTradeRatio !== undefined && (obj.maxExecOrderTradeRatio = message.maxExecOrderTradeRatio);
    message.maxOrderStepRatio !== undefined && (obj.maxOrderStepRatio = message.maxOrderStepRatio);
    message.minOrderStepRatio !== undefined && (obj.minOrderStepRatio = message.minOrderStepRatio);
    return obj;
  },
  fromPartial(object: Partial<OrderParameters>): OrderParameters {
    const message = createBaseOrderParameters();
    message.stepMatchingFeeRatio = object.stepMatchingFeeRatio ?? "";
    message.stepSwapFeeRatio = object.stepSwapFeeRatio ?? "";
    message.matchingProtocolFeeRatio = object.matchingProtocolFeeRatio ?? "";
    message.matchingSolverFeeRatio = object.matchingSolverFeeRatio ?? "";
    message.maxOrdersPerBlock = object.maxOrdersPerBlock ?? 0;
    message.maxSchedulePerBlock = object.maxSchedulePerBlock ?? 0;
    message.maxExecOrderTradeRatio = object.maxExecOrderTradeRatio ?? "";
    message.maxOrderStepRatio = object.maxOrderStepRatio ?? "";
    message.minOrderStepRatio = object.minOrderStepRatio ?? "";
    return message;
  }
};
function createBaseYammParameters(): YammParameters {
  return {
    maturityIntroductionIntervalMillis: Long.ZERO,
    maturityExpirationIntervalMillis: Long.ZERO,
    expirationVirtualBalanceScaler: "",
    expiredAssetDiscountRatio: "",
    buyYGivenInLoanFeeRatio: "",
    sellYGivenOutFeeRatio: "",
    swapYieldFeeRatio: "",
    leverageScaler: "",
    maxWeightRatio: ""
  };
}
export const YammParameters = {
  encode(message: YammParameters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maturityIntroductionIntervalMillis.isZero()) {
      writer.uint32(8).int64(message.maturityIntroductionIntervalMillis);
    }
    if (!message.maturityExpirationIntervalMillis.isZero()) {
      writer.uint32(16).int64(message.maturityExpirationIntervalMillis);
    }
    if (message.expirationVirtualBalanceScaler !== "") {
      writer.uint32(26).string(message.expirationVirtualBalanceScaler);
    }
    if (message.expiredAssetDiscountRatio !== "") {
      writer.uint32(34).string(message.expiredAssetDiscountRatio);
    }
    if (message.buyYGivenInLoanFeeRatio !== "") {
      writer.uint32(42).string(message.buyYGivenInLoanFeeRatio);
    }
    if (message.sellYGivenOutFeeRatio !== "") {
      writer.uint32(50).string(message.sellYGivenOutFeeRatio);
    }
    if (message.swapYieldFeeRatio !== "") {
      writer.uint32(58).string(message.swapYieldFeeRatio);
    }
    if (message.leverageScaler !== "") {
      writer.uint32(66).string(message.leverageScaler);
    }
    if (message.maxWeightRatio !== "") {
      writer.uint32(82).string(message.maxWeightRatio);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): YammParameters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseYammParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maturityIntroductionIntervalMillis = (reader.int64() as Long);
          break;
        case 2:
          message.maturityExpirationIntervalMillis = (reader.int64() as Long);
          break;
        case 3:
          message.expirationVirtualBalanceScaler = reader.string();
          break;
        case 4:
          message.expiredAssetDiscountRatio = reader.string();
          break;
        case 5:
          message.buyYGivenInLoanFeeRatio = reader.string();
          break;
        case 6:
          message.sellYGivenOutFeeRatio = reader.string();
          break;
        case 7:
          message.swapYieldFeeRatio = reader.string();
          break;
        case 8:
          message.leverageScaler = reader.string();
          break;
        case 10:
          message.maxWeightRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): YammParameters {
    return {
      maturityIntroductionIntervalMillis: isSet(object.maturityIntroductionIntervalMillis) ? Long.fromValue(object.maturityIntroductionIntervalMillis) : Long.ZERO,
      maturityExpirationIntervalMillis: isSet(object.maturityExpirationIntervalMillis) ? Long.fromValue(object.maturityExpirationIntervalMillis) : Long.ZERO,
      expirationVirtualBalanceScaler: isSet(object.expirationVirtualBalanceScaler) ? String(object.expirationVirtualBalanceScaler) : "",
      expiredAssetDiscountRatio: isSet(object.expiredAssetDiscountRatio) ? String(object.expiredAssetDiscountRatio) : "",
      buyYGivenInLoanFeeRatio: isSet(object.buyYGivenInLoanFeeRatio) ? String(object.buyYGivenInLoanFeeRatio) : "",
      sellYGivenOutFeeRatio: isSet(object.sellYGivenOutFeeRatio) ? String(object.sellYGivenOutFeeRatio) : "",
      swapYieldFeeRatio: isSet(object.swapYieldFeeRatio) ? String(object.swapYieldFeeRatio) : "",
      leverageScaler: isSet(object.leverageScaler) ? String(object.leverageScaler) : "",
      maxWeightRatio: isSet(object.maxWeightRatio) ? String(object.maxWeightRatio) : ""
    };
  },
  toJSON(message: YammParameters): unknown {
    const obj: any = {};
    message.maturityIntroductionIntervalMillis !== undefined && (obj.maturityIntroductionIntervalMillis = (message.maturityIntroductionIntervalMillis || Long.ZERO).toString());
    message.maturityExpirationIntervalMillis !== undefined && (obj.maturityExpirationIntervalMillis = (message.maturityExpirationIntervalMillis || Long.ZERO).toString());
    message.expirationVirtualBalanceScaler !== undefined && (obj.expirationVirtualBalanceScaler = message.expirationVirtualBalanceScaler);
    message.expiredAssetDiscountRatio !== undefined && (obj.expiredAssetDiscountRatio = message.expiredAssetDiscountRatio);
    message.buyYGivenInLoanFeeRatio !== undefined && (obj.buyYGivenInLoanFeeRatio = message.buyYGivenInLoanFeeRatio);
    message.sellYGivenOutFeeRatio !== undefined && (obj.sellYGivenOutFeeRatio = message.sellYGivenOutFeeRatio);
    message.swapYieldFeeRatio !== undefined && (obj.swapYieldFeeRatio = message.swapYieldFeeRatio);
    message.leverageScaler !== undefined && (obj.leverageScaler = message.leverageScaler);
    message.maxWeightRatio !== undefined && (obj.maxWeightRatio = message.maxWeightRatio);
    return obj;
  },
  fromPartial(object: Partial<YammParameters>): YammParameters {
    const message = createBaseYammParameters();
    message.maturityIntroductionIntervalMillis = object.maturityIntroductionIntervalMillis !== undefined && object.maturityIntroductionIntervalMillis !== null ? Long.fromValue(object.maturityIntroductionIntervalMillis) : Long.ZERO;
    message.maturityExpirationIntervalMillis = object.maturityExpirationIntervalMillis !== undefined && object.maturityExpirationIntervalMillis !== null ? Long.fromValue(object.maturityExpirationIntervalMillis) : Long.ZERO;
    message.expirationVirtualBalanceScaler = object.expirationVirtualBalanceScaler ?? "";
    message.expiredAssetDiscountRatio = object.expiredAssetDiscountRatio ?? "";
    message.buyYGivenInLoanFeeRatio = object.buyYGivenInLoanFeeRatio ?? "";
    message.sellYGivenOutFeeRatio = object.sellYGivenOutFeeRatio ?? "";
    message.swapYieldFeeRatio = object.swapYieldFeeRatio ?? "";
    message.leverageScaler = object.leverageScaler ?? "";
    message.maxWeightRatio = object.maxWeightRatio ?? "";
    return message;
  }
};
function createBaseGeneralPoolParameters(): GeneralPoolParameters {
  return {
    allowPublicPoolCreation: false,
    defaultSwapFeeRatio: "",
    swapProtocolFeeRatio: "",
    joinExitProtocolFeeRatio: ""
  };
}
export const GeneralPoolParameters = {
  encode(message: GeneralPoolParameters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allowPublicPoolCreation === true) {
      writer.uint32(8).bool(message.allowPublicPoolCreation);
    }
    if (message.defaultSwapFeeRatio !== "") {
      writer.uint32(18).string(message.defaultSwapFeeRatio);
    }
    if (message.swapProtocolFeeRatio !== "") {
      writer.uint32(26).string(message.swapProtocolFeeRatio);
    }
    if (message.joinExitProtocolFeeRatio !== "") {
      writer.uint32(34).string(message.joinExitProtocolFeeRatio);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GeneralPoolParameters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneralPoolParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowPublicPoolCreation = reader.bool();
          break;
        case 2:
          message.defaultSwapFeeRatio = reader.string();
          break;
        case 3:
          message.swapProtocolFeeRatio = reader.string();
          break;
        case 4:
          message.joinExitProtocolFeeRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GeneralPoolParameters {
    return {
      allowPublicPoolCreation: isSet(object.allowPublicPoolCreation) ? Boolean(object.allowPublicPoolCreation) : false,
      defaultSwapFeeRatio: isSet(object.defaultSwapFeeRatio) ? String(object.defaultSwapFeeRatio) : "",
      swapProtocolFeeRatio: isSet(object.swapProtocolFeeRatio) ? String(object.swapProtocolFeeRatio) : "",
      joinExitProtocolFeeRatio: isSet(object.joinExitProtocolFeeRatio) ? String(object.joinExitProtocolFeeRatio) : ""
    };
  },
  toJSON(message: GeneralPoolParameters): unknown {
    const obj: any = {};
    message.allowPublicPoolCreation !== undefined && (obj.allowPublicPoolCreation = message.allowPublicPoolCreation);
    message.defaultSwapFeeRatio !== undefined && (obj.defaultSwapFeeRatio = message.defaultSwapFeeRatio);
    message.swapProtocolFeeRatio !== undefined && (obj.swapProtocolFeeRatio = message.swapProtocolFeeRatio);
    message.joinExitProtocolFeeRatio !== undefined && (obj.joinExitProtocolFeeRatio = message.joinExitProtocolFeeRatio);
    return obj;
  },
  fromPartial(object: Partial<GeneralPoolParameters>): GeneralPoolParameters {
    const message = createBaseGeneralPoolParameters();
    message.allowPublicPoolCreation = object.allowPublicPoolCreation ?? false;
    message.defaultSwapFeeRatio = object.defaultSwapFeeRatio ?? "";
    message.swapProtocolFeeRatio = object.swapProtocolFeeRatio ?? "";
    message.joinExitProtocolFeeRatio = object.joinExitProtocolFeeRatio ?? "";
    return message;
  }
};
function createBaseParams(): Params {
  return {
    generalPoolParameters: undefined,
    yammParameters: undefined,
    orderParameters: undefined
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.generalPoolParameters !== undefined) {
      GeneralPoolParameters.encode(message.generalPoolParameters, writer.uint32(10).fork()).ldelim();
    }
    if (message.yammParameters !== undefined) {
      YammParameters.encode(message.yammParameters, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderParameters !== undefined) {
      OrderParameters.encode(message.orderParameters, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.generalPoolParameters = GeneralPoolParameters.decode(reader, reader.uint32());
          break;
        case 2:
          message.yammParameters = YammParameters.decode(reader, reader.uint32());
          break;
        case 3:
          message.orderParameters = OrderParameters.decode(reader, reader.uint32());
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
      generalPoolParameters: isSet(object.generalPoolParameters) ? GeneralPoolParameters.fromJSON(object.generalPoolParameters) : undefined,
      yammParameters: isSet(object.yammParameters) ? YammParameters.fromJSON(object.yammParameters) : undefined,
      orderParameters: isSet(object.orderParameters) ? OrderParameters.fromJSON(object.orderParameters) : undefined
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.generalPoolParameters !== undefined && (obj.generalPoolParameters = message.generalPoolParameters ? GeneralPoolParameters.toJSON(message.generalPoolParameters) : undefined);
    message.yammParameters !== undefined && (obj.yammParameters = message.yammParameters ? YammParameters.toJSON(message.yammParameters) : undefined);
    message.orderParameters !== undefined && (obj.orderParameters = message.orderParameters ? OrderParameters.toJSON(message.orderParameters) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.generalPoolParameters = object.generalPoolParameters !== undefined && object.generalPoolParameters !== null ? GeneralPoolParameters.fromPartial(object.generalPoolParameters) : undefined;
    message.yammParameters = object.yammParameters !== undefined && object.yammParameters !== null ? YammParameters.fromPartial(object.yammParameters) : undefined;
    message.orderParameters = object.orderParameters !== undefined && object.orderParameters !== null ? OrderParameters.fromPartial(object.orderParameters) : undefined;
    return message;
  }
};