/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "prismfinance.prismcore.amm";

export interface OrderControlParameters {
  stepMatchingFeeRatio: string;
  stepSwapFeeRatio: string;
  matchingProtocolFeeRatio: string;
  matchingSolverFeeRatio: string;
}

/** Params defines the parameters for the module. */
export interface Params {
  allowPublicPoolCreation: boolean;
  defaultSwapFeeRatio: string;
  /** duration (milliseconds) for virtual balance when adding new pAssets to yamm pools */
  yammMaturityIntroductionIntervalMillis: number;
  yammMaturityExpirationIntervalMillis: number;
  yammExpirationVirtualBalanceScaler: string;
  /**
   * discount ratio applied to constant sum equations for trading cAsset-pAsset where pAsset is expired or close
   * to expiry
   */
  yammExpiredAssetDiscountRatio: string;
  yammBuyYGivenInDefaultLoanFeeRatio: string;
  yammSellYGivenOutDefaultFeeRatio: string;
  yammDefaultSwapYieldFeeRatio: string;
  orderControlParams: OrderControlParameters | undefined;
}

function createBaseOrderControlParameters(): OrderControlParameters {
  return { stepMatchingFeeRatio: "", stepSwapFeeRatio: "", matchingProtocolFeeRatio: "", matchingSolverFeeRatio: "" };
}

export const OrderControlParameters = {
  encode(message: OrderControlParameters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderControlParameters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderControlParameters();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderControlParameters {
    return {
      stepMatchingFeeRatio: isSet(object.stepMatchingFeeRatio) ? String(object.stepMatchingFeeRatio) : "",
      stepSwapFeeRatio: isSet(object.stepSwapFeeRatio) ? String(object.stepSwapFeeRatio) : "",
      matchingProtocolFeeRatio: isSet(object.matchingProtocolFeeRatio) ? String(object.matchingProtocolFeeRatio) : "",
      matchingSolverFeeRatio: isSet(object.matchingSolverFeeRatio) ? String(object.matchingSolverFeeRatio) : "",
    };
  },

  toJSON(message: OrderControlParameters): unknown {
    const obj: any = {};
    message.stepMatchingFeeRatio !== undefined && (obj.stepMatchingFeeRatio = message.stepMatchingFeeRatio);
    message.stepSwapFeeRatio !== undefined && (obj.stepSwapFeeRatio = message.stepSwapFeeRatio);
    message.matchingProtocolFeeRatio !== undefined && (obj.matchingProtocolFeeRatio = message.matchingProtocolFeeRatio);
    message.matchingSolverFeeRatio !== undefined && (obj.matchingSolverFeeRatio = message.matchingSolverFeeRatio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrderControlParameters>, I>>(object: I): OrderControlParameters {
    const message = createBaseOrderControlParameters();
    message.stepMatchingFeeRatio = object.stepMatchingFeeRatio ?? "";
    message.stepSwapFeeRatio = object.stepSwapFeeRatio ?? "";
    message.matchingProtocolFeeRatio = object.matchingProtocolFeeRatio ?? "";
    message.matchingSolverFeeRatio = object.matchingSolverFeeRatio ?? "";
    return message;
  },
};

function createBaseParams(): Params {
  return {
    allowPublicPoolCreation: false,
    defaultSwapFeeRatio: "",
    yammMaturityIntroductionIntervalMillis: 0,
    yammMaturityExpirationIntervalMillis: 0,
    yammExpirationVirtualBalanceScaler: "",
    yammExpiredAssetDiscountRatio: "",
    yammBuyYGivenInDefaultLoanFeeRatio: "",
    yammSellYGivenOutDefaultFeeRatio: "",
    yammDefaultSwapYieldFeeRatio: "",
    orderControlParams: undefined,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allowPublicPoolCreation === true) {
      writer.uint32(8).bool(message.allowPublicPoolCreation);
    }
    if (message.defaultSwapFeeRatio !== "") {
      writer.uint32(18).string(message.defaultSwapFeeRatio);
    }
    if (message.yammMaturityIntroductionIntervalMillis !== 0) {
      writer.uint32(24).int64(message.yammMaturityIntroductionIntervalMillis);
    }
    if (message.yammMaturityExpirationIntervalMillis !== 0) {
      writer.uint32(32).int64(message.yammMaturityExpirationIntervalMillis);
    }
    if (message.yammExpirationVirtualBalanceScaler !== "") {
      writer.uint32(42).string(message.yammExpirationVirtualBalanceScaler);
    }
    if (message.yammExpiredAssetDiscountRatio !== "") {
      writer.uint32(50).string(message.yammExpiredAssetDiscountRatio);
    }
    if (message.yammBuyYGivenInDefaultLoanFeeRatio !== "") {
      writer.uint32(58).string(message.yammBuyYGivenInDefaultLoanFeeRatio);
    }
    if (message.yammSellYGivenOutDefaultFeeRatio !== "") {
      writer.uint32(66).string(message.yammSellYGivenOutDefaultFeeRatio);
    }
    if (message.yammDefaultSwapYieldFeeRatio !== "") {
      writer.uint32(74).string(message.yammDefaultSwapYieldFeeRatio);
    }
    if (message.orderControlParams !== undefined) {
      OrderControlParameters.encode(message.orderControlParams, writer.uint32(82).fork()).ldelim();
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
          message.allowPublicPoolCreation = reader.bool();
          break;
        case 2:
          message.defaultSwapFeeRatio = reader.string();
          break;
        case 3:
          message.yammMaturityIntroductionIntervalMillis = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.yammMaturityExpirationIntervalMillis = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.yammExpirationVirtualBalanceScaler = reader.string();
          break;
        case 6:
          message.yammExpiredAssetDiscountRatio = reader.string();
          break;
        case 7:
          message.yammBuyYGivenInDefaultLoanFeeRatio = reader.string();
          break;
        case 8:
          message.yammSellYGivenOutDefaultFeeRatio = reader.string();
          break;
        case 9:
          message.yammDefaultSwapYieldFeeRatio = reader.string();
          break;
        case 10:
          message.orderControlParams = OrderControlParameters.decode(reader, reader.uint32());
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
      allowPublicPoolCreation: isSet(object.allowPublicPoolCreation) ? Boolean(object.allowPublicPoolCreation) : false,
      defaultSwapFeeRatio: isSet(object.defaultSwapFeeRatio) ? String(object.defaultSwapFeeRatio) : "",
      yammMaturityIntroductionIntervalMillis: isSet(object.yammMaturityIntroductionIntervalMillis)
        ? Number(object.yammMaturityIntroductionIntervalMillis)
        : 0,
      yammMaturityExpirationIntervalMillis: isSet(object.yammMaturityExpirationIntervalMillis)
        ? Number(object.yammMaturityExpirationIntervalMillis)
        : 0,
      yammExpirationVirtualBalanceScaler: isSet(object.yammExpirationVirtualBalanceScaler)
        ? String(object.yammExpirationVirtualBalanceScaler)
        : "",
      yammExpiredAssetDiscountRatio: isSet(object.yammExpiredAssetDiscountRatio)
        ? String(object.yammExpiredAssetDiscountRatio)
        : "",
      yammBuyYGivenInDefaultLoanFeeRatio: isSet(object.yammBuyYGivenInDefaultLoanFeeRatio)
        ? String(object.yammBuyYGivenInDefaultLoanFeeRatio)
        : "",
      yammSellYGivenOutDefaultFeeRatio: isSet(object.yammSellYGivenOutDefaultFeeRatio)
        ? String(object.yammSellYGivenOutDefaultFeeRatio)
        : "",
      yammDefaultSwapYieldFeeRatio: isSet(object.yammDefaultSwapYieldFeeRatio)
        ? String(object.yammDefaultSwapYieldFeeRatio)
        : "",
      orderControlParams: isSet(object.orderControlParams)
        ? OrderControlParameters.fromJSON(object.orderControlParams)
        : undefined,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.allowPublicPoolCreation !== undefined && (obj.allowPublicPoolCreation = message.allowPublicPoolCreation);
    message.defaultSwapFeeRatio !== undefined && (obj.defaultSwapFeeRatio = message.defaultSwapFeeRatio);
    message.yammMaturityIntroductionIntervalMillis !== undefined
      && (obj.yammMaturityIntroductionIntervalMillis = Math.round(message.yammMaturityIntroductionIntervalMillis));
    message.yammMaturityExpirationIntervalMillis !== undefined
      && (obj.yammMaturityExpirationIntervalMillis = Math.round(message.yammMaturityExpirationIntervalMillis));
    message.yammExpirationVirtualBalanceScaler !== undefined
      && (obj.yammExpirationVirtualBalanceScaler = message.yammExpirationVirtualBalanceScaler);
    message.yammExpiredAssetDiscountRatio !== undefined
      && (obj.yammExpiredAssetDiscountRatio = message.yammExpiredAssetDiscountRatio);
    message.yammBuyYGivenInDefaultLoanFeeRatio !== undefined
      && (obj.yammBuyYGivenInDefaultLoanFeeRatio = message.yammBuyYGivenInDefaultLoanFeeRatio);
    message.yammSellYGivenOutDefaultFeeRatio !== undefined
      && (obj.yammSellYGivenOutDefaultFeeRatio = message.yammSellYGivenOutDefaultFeeRatio);
    message.yammDefaultSwapYieldFeeRatio !== undefined
      && (obj.yammDefaultSwapYieldFeeRatio = message.yammDefaultSwapYieldFeeRatio);
    message.orderControlParams !== undefined && (obj.orderControlParams = message.orderControlParams
      ? OrderControlParameters.toJSON(message.orderControlParams)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.allowPublicPoolCreation = object.allowPublicPoolCreation ?? false;
    message.defaultSwapFeeRatio = object.defaultSwapFeeRatio ?? "";
    message.yammMaturityIntroductionIntervalMillis = object.yammMaturityIntroductionIntervalMillis ?? 0;
    message.yammMaturityExpirationIntervalMillis = object.yammMaturityExpirationIntervalMillis ?? 0;
    message.yammExpirationVirtualBalanceScaler = object.yammExpirationVirtualBalanceScaler ?? "";
    message.yammExpiredAssetDiscountRatio = object.yammExpiredAssetDiscountRatio ?? "";
    message.yammBuyYGivenInDefaultLoanFeeRatio = object.yammBuyYGivenInDefaultLoanFeeRatio ?? "";
    message.yammSellYGivenOutDefaultFeeRatio = object.yammSellYGivenOutDefaultFeeRatio ?? "";
    message.yammDefaultSwapYieldFeeRatio = object.yammDefaultSwapYieldFeeRatio ?? "";
    message.orderControlParams = (object.orderControlParams !== undefined && object.orderControlParams !== null)
      ? OrderControlParameters.fromPartial(object.orderControlParams)
      : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// @ts-ignore
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
