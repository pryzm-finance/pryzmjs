import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface YammConfiguration {
  poolId: Long;
  /** duration (milliseconds) for virtual balance when adding new pAssets to yamm pools */
  maturityIntroductionIntervalMillis?: string;
  maturityExpirationIntervalMillis?: string;
  expirationVirtualBalanceScaler?: string;
  /**
   * if the value is not set, will be read from module parameters
   * discount ratio applied to constant sum equations for trading cAsset-pAsset where pAsset is expired or close
   * to expiry
   */
  expiredAssetDiscountRatio?: string;
  /** if the value is not set, will be read from module parameters */
  buyYGivenInLoanFeeRatio?: string;
  /** if the value is not set, will be read from module parameters */
  sellYGivenOutFeeRatio?: string;
  /** if the value is not set, will be read from module parameters */
  swapYieldFeeRatio?: string;
  /** if the value is not set, will be read from module parameters */
  leverageScaler?: string;
  /** zero means no limit, and nil means using the value from module parameters */
  maxWeightRatio?: string;
}
export interface YammConfigurationSDKType {
  pool_id: Long;
  maturity_introduction_interval_millis?: string;
  maturity_expiration_interval_millis?: string;
  expiration_virtual_balance_scaler?: string;
  expired_asset_discount_ratio?: string;
  buy_y_given_in_loan_fee_ratio?: string;
  sell_y_given_out_fee_ratio?: string;
  swap_yield_fee_ratio?: string;
  leverage_scaler?: string;
  max_weight_ratio?: string;
}
function createBaseYammConfiguration(): YammConfiguration {
  return {
    poolId: Long.UZERO,
    maturityIntroductionIntervalMillis: undefined,
    maturityExpirationIntervalMillis: undefined,
    expirationVirtualBalanceScaler: undefined,
    expiredAssetDiscountRatio: undefined,
    buyYGivenInLoanFeeRatio: undefined,
    sellYGivenOutFeeRatio: undefined,
    swapYieldFeeRatio: undefined,
    leverageScaler: undefined,
    maxWeightRatio: undefined
  };
}
export const YammConfiguration = {
  encode(message: YammConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.maturityIntroductionIntervalMillis !== undefined) {
      writer.uint32(18).string(message.maturityIntroductionIntervalMillis);
    }
    if (message.maturityExpirationIntervalMillis !== undefined) {
      writer.uint32(26).string(message.maturityExpirationIntervalMillis);
    }
    if (message.expirationVirtualBalanceScaler !== undefined) {
      writer.uint32(34).string(message.expirationVirtualBalanceScaler);
    }
    if (message.expiredAssetDiscountRatio !== undefined) {
      writer.uint32(42).string(message.expiredAssetDiscountRatio);
    }
    if (message.buyYGivenInLoanFeeRatio !== undefined) {
      writer.uint32(50).string(message.buyYGivenInLoanFeeRatio);
    }
    if (message.sellYGivenOutFeeRatio !== undefined) {
      writer.uint32(58).string(message.sellYGivenOutFeeRatio);
    }
    if (message.swapYieldFeeRatio !== undefined) {
      writer.uint32(66).string(message.swapYieldFeeRatio);
    }
    if (message.leverageScaler !== undefined) {
      writer.uint32(74).string(message.leverageScaler);
    }
    if (message.maxWeightRatio !== undefined) {
      writer.uint32(82).string(message.maxWeightRatio);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): YammConfiguration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseYammConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.maturityIntroductionIntervalMillis = reader.string();
          break;
        case 3:
          message.maturityExpirationIntervalMillis = reader.string();
          break;
        case 4:
          message.expirationVirtualBalanceScaler = reader.string();
          break;
        case 5:
          message.expiredAssetDiscountRatio = reader.string();
          break;
        case 6:
          message.buyYGivenInLoanFeeRatio = reader.string();
          break;
        case 7:
          message.sellYGivenOutFeeRatio = reader.string();
          break;
        case 8:
          message.swapYieldFeeRatio = reader.string();
          break;
        case 9:
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
  fromJSON(object: any): YammConfiguration {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      maturityIntroductionIntervalMillis: isSet(object.maturityIntroductionIntervalMillis) ? String(object.maturityIntroductionIntervalMillis) : undefined,
      maturityExpirationIntervalMillis: isSet(object.maturityExpirationIntervalMillis) ? String(object.maturityExpirationIntervalMillis) : undefined,
      expirationVirtualBalanceScaler: isSet(object.expirationVirtualBalanceScaler) ? String(object.expirationVirtualBalanceScaler) : undefined,
      expiredAssetDiscountRatio: isSet(object.expiredAssetDiscountRatio) ? String(object.expiredAssetDiscountRatio) : undefined,
      buyYGivenInLoanFeeRatio: isSet(object.buyYGivenInLoanFeeRatio) ? String(object.buyYGivenInLoanFeeRatio) : undefined,
      sellYGivenOutFeeRatio: isSet(object.sellYGivenOutFeeRatio) ? String(object.sellYGivenOutFeeRatio) : undefined,
      swapYieldFeeRatio: isSet(object.swapYieldFeeRatio) ? String(object.swapYieldFeeRatio) : undefined,
      leverageScaler: isSet(object.leverageScaler) ? String(object.leverageScaler) : undefined,
      maxWeightRatio: isSet(object.maxWeightRatio) ? String(object.maxWeightRatio) : undefined
    };
  },
  toJSON(message: YammConfiguration): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.maturityIntroductionIntervalMillis !== undefined && (obj.maturityIntroductionIntervalMillis = message.maturityIntroductionIntervalMillis);
    message.maturityExpirationIntervalMillis !== undefined && (obj.maturityExpirationIntervalMillis = message.maturityExpirationIntervalMillis);
    message.expirationVirtualBalanceScaler !== undefined && (obj.expirationVirtualBalanceScaler = message.expirationVirtualBalanceScaler);
    message.expiredAssetDiscountRatio !== undefined && (obj.expiredAssetDiscountRatio = message.expiredAssetDiscountRatio);
    message.buyYGivenInLoanFeeRatio !== undefined && (obj.buyYGivenInLoanFeeRatio = message.buyYGivenInLoanFeeRatio);
    message.sellYGivenOutFeeRatio !== undefined && (obj.sellYGivenOutFeeRatio = message.sellYGivenOutFeeRatio);
    message.swapYieldFeeRatio !== undefined && (obj.swapYieldFeeRatio = message.swapYieldFeeRatio);
    message.leverageScaler !== undefined && (obj.leverageScaler = message.leverageScaler);
    message.maxWeightRatio !== undefined && (obj.maxWeightRatio = message.maxWeightRatio);
    return obj;
  },
  fromPartial(object: Partial<YammConfiguration>): YammConfiguration {
    const message = createBaseYammConfiguration();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.maturityIntroductionIntervalMillis = object.maturityIntroductionIntervalMillis ?? undefined;
    message.maturityExpirationIntervalMillis = object.maturityExpirationIntervalMillis ?? undefined;
    message.expirationVirtualBalanceScaler = object.expirationVirtualBalanceScaler ?? undefined;
    message.expiredAssetDiscountRatio = object.expiredAssetDiscountRatio ?? undefined;
    message.buyYGivenInLoanFeeRatio = object.buyYGivenInLoanFeeRatio ?? undefined;
    message.sellYGivenOutFeeRatio = object.sellYGivenOutFeeRatio ?? undefined;
    message.swapYieldFeeRatio = object.swapYieldFeeRatio ?? undefined;
    message.leverageScaler = object.leverageScaler ?? undefined;
    message.maxWeightRatio = object.maxWeightRatio ?? undefined;
    return message;
  }
};