import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export interface YammConfiguration {
  poolId: bigint;
  lambda?: string;
  /** duration (milliseconds) for virtual balance when adding new pAssets to yamm pools */
  maturityIntroductionIntervalMillis?: string;
  maturityExpirationIntervalMillis?: string;
  introductionVirtualBalanceScaler?: string;
  expirationVirtualBalanceScaler?: string;
  /** if the value is not set, will be read from module parameters */
  buyYGivenInLoanFeeRatio?: string;
  /** if the value is not set, will be read from module parameters */
  sellYGivenOutFeeRatio?: string;
  maxAlpha?: string;
}
export interface YammConfigurationSDKType {
  pool_id: bigint;
  lambda?: string;
  maturity_introduction_interval_millis?: string;
  maturity_expiration_interval_millis?: string;
  introduction_virtual_balance_scaler?: string;
  expiration_virtual_balance_scaler?: string;
  buy_y_given_in_loan_fee_ratio?: string;
  sell_y_given_out_fee_ratio?: string;
  max_alpha?: string;
}
function createBaseYammConfiguration(): YammConfiguration {
  return {
    poolId: BigInt(0),
    lambda: undefined,
    maturityIntroductionIntervalMillis: undefined,
    maturityExpirationIntervalMillis: undefined,
    introductionVirtualBalanceScaler: undefined,
    expirationVirtualBalanceScaler: undefined,
    buyYGivenInLoanFeeRatio: undefined,
    sellYGivenOutFeeRatio: undefined,
    maxAlpha: undefined
  };
}
export const YammConfiguration = {
  encode(message: YammConfiguration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lambda !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.lambda, 18).atomics);
    }
    if (message.maturityIntroductionIntervalMillis !== undefined) {
      writer.uint32(26).string(message.maturityIntroductionIntervalMillis);
    }
    if (message.maturityExpirationIntervalMillis !== undefined) {
      writer.uint32(34).string(message.maturityExpirationIntervalMillis);
    }
    if (message.introductionVirtualBalanceScaler !== undefined) {
      writer.uint32(42).string(message.introductionVirtualBalanceScaler);
    }
    if (message.expirationVirtualBalanceScaler !== undefined) {
      writer.uint32(50).string(message.expirationVirtualBalanceScaler);
    }
    if (message.buyYGivenInLoanFeeRatio !== undefined) {
      writer.uint32(58).string(Decimal.fromUserInput(message.buyYGivenInLoanFeeRatio, 18).atomics);
    }
    if (message.sellYGivenOutFeeRatio !== undefined) {
      writer.uint32(66).string(Decimal.fromUserInput(message.sellYGivenOutFeeRatio, 18).atomics);
    }
    if (message.maxAlpha !== undefined) {
      writer.uint32(74).string(Decimal.fromUserInput(message.maxAlpha, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): YammConfiguration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseYammConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.lambda = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.maturityIntroductionIntervalMillis = reader.string();
          break;
        case 4:
          message.maturityExpirationIntervalMillis = reader.string();
          break;
        case 5:
          message.introductionVirtualBalanceScaler = reader.string();
          break;
        case 6:
          message.expirationVirtualBalanceScaler = reader.string();
          break;
        case 7:
          message.buyYGivenInLoanFeeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.sellYGivenOutFeeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.maxAlpha = Decimal.fromAtomics(reader.string(), 18).toString();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lambda: isSet(object.lambda) ? String(object.lambda) : undefined,
      maturityIntroductionIntervalMillis: isSet(object.maturityIntroductionIntervalMillis) ? String(object.maturityIntroductionIntervalMillis) : undefined,
      maturityExpirationIntervalMillis: isSet(object.maturityExpirationIntervalMillis) ? String(object.maturityExpirationIntervalMillis) : undefined,
      introductionVirtualBalanceScaler: isSet(object.introductionVirtualBalanceScaler) ? String(object.introductionVirtualBalanceScaler) : undefined,
      expirationVirtualBalanceScaler: isSet(object.expirationVirtualBalanceScaler) ? String(object.expirationVirtualBalanceScaler) : undefined,
      buyYGivenInLoanFeeRatio: isSet(object.buyYGivenInLoanFeeRatio) ? String(object.buyYGivenInLoanFeeRatio) : undefined,
      sellYGivenOutFeeRatio: isSet(object.sellYGivenOutFeeRatio) ? String(object.sellYGivenOutFeeRatio) : undefined,
      maxAlpha: isSet(object.maxAlpha) ? String(object.maxAlpha) : undefined
    };
  },
  toJSON(message: YammConfiguration): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lambda !== undefined && (obj.lambda = message.lambda);
    message.maturityIntroductionIntervalMillis !== undefined && (obj.maturityIntroductionIntervalMillis = message.maturityIntroductionIntervalMillis);
    message.maturityExpirationIntervalMillis !== undefined && (obj.maturityExpirationIntervalMillis = message.maturityExpirationIntervalMillis);
    message.introductionVirtualBalanceScaler !== undefined && (obj.introductionVirtualBalanceScaler = message.introductionVirtualBalanceScaler);
    message.expirationVirtualBalanceScaler !== undefined && (obj.expirationVirtualBalanceScaler = message.expirationVirtualBalanceScaler);
    message.buyYGivenInLoanFeeRatio !== undefined && (obj.buyYGivenInLoanFeeRatio = message.buyYGivenInLoanFeeRatio);
    message.sellYGivenOutFeeRatio !== undefined && (obj.sellYGivenOutFeeRatio = message.sellYGivenOutFeeRatio);
    message.maxAlpha !== undefined && (obj.maxAlpha = message.maxAlpha);
    return obj;
  },
  fromPartial(object: Partial<YammConfiguration>): YammConfiguration {
    const message = createBaseYammConfiguration();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lambda = object.lambda ?? undefined;
    message.maturityIntroductionIntervalMillis = object.maturityIntroductionIntervalMillis ?? undefined;
    message.maturityExpirationIntervalMillis = object.maturityExpirationIntervalMillis ?? undefined;
    message.introductionVirtualBalanceScaler = object.introductionVirtualBalanceScaler ?? undefined;
    message.expirationVirtualBalanceScaler = object.expirationVirtualBalanceScaler ?? undefined;
    message.buyYGivenInLoanFeeRatio = object.buyYGivenInLoanFeeRatio ?? undefined;
    message.sellYGivenOutFeeRatio = object.sellYGivenOutFeeRatio ?? undefined;
    message.maxAlpha = object.maxAlpha ?? undefined;
    return message;
  }
};