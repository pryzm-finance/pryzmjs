/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "prismfinance.prismcore.oracle";

export interface MsgUpdateParams {
  authority: string;
  params: Params | undefined;
}

export interface MsgUpdateParamsResponse {
}

export interface MsgExchangeRatePreVote {
  feeder: string;
  hash: string;
  validator: string;
}

export interface MsgExchangeRatePreVoteResponse {
}

export interface MsgExchangeRateVote {
  salt: string;
  exchangeRates: string;
  feeder: string;
  validator: string;
}

export interface MsgExchangeRateVoteResponse {
}

export interface MsgDelegateFeedConsent {
  operator: string;
  delegate: string;
}

export interface MsgDelegateFeedConsentResponse {
}

export interface MsgExchangeRateCombinedVote {
  preVoteHash: string;
  voteSalt: string;
  voteExchangeRates: string;
  feeder: string;
  validator: string;
}

export interface MsgExchangeRateCombinedVoteResponse {
}

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgExchangeRatePreVote(): MsgExchangeRatePreVote {
  return { feeder: "", hash: "", validator: "" };
}

export const MsgExchangeRatePreVote = {
  encode(message: MsgExchangeRatePreVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeder !== "") {
      writer.uint32(10).string(message.feeder);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExchangeRatePreVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExchangeRatePreVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeder = reader.string();
          break;
        case 2:
          message.hash = reader.string();
          break;
        case 3:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExchangeRatePreVote {
    return {
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      hash: isSet(object.hash) ? String(object.hash) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
    };
  },

  toJSON(message: MsgExchangeRatePreVote): unknown {
    const obj: any = {};
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.hash !== undefined && (obj.hash = message.hash);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExchangeRatePreVote>, I>>(object: I): MsgExchangeRatePreVote {
    const message = createBaseMsgExchangeRatePreVote();
    message.feeder = object.feeder ?? "";
    message.hash = object.hash ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
};

function createBaseMsgExchangeRatePreVoteResponse(): MsgExchangeRatePreVoteResponse {
  return {};
}

export const MsgExchangeRatePreVoteResponse = {
  encode(_: MsgExchangeRatePreVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExchangeRatePreVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExchangeRatePreVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgExchangeRatePreVoteResponse {
    return {};
  },

  toJSON(_: MsgExchangeRatePreVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExchangeRatePreVoteResponse>, I>>(_: I): MsgExchangeRatePreVoteResponse {
    const message = createBaseMsgExchangeRatePreVoteResponse();
    return message;
  },
};

function createBaseMsgExchangeRateVote(): MsgExchangeRateVote {
  return { salt: "", exchangeRates: "", feeder: "", validator: "" };
}

export const MsgExchangeRateVote = {
  encode(message: MsgExchangeRateVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.salt !== "") {
      writer.uint32(10).string(message.salt);
    }
    if (message.exchangeRates !== "") {
      writer.uint32(18).string(message.exchangeRates);
    }
    if (message.feeder !== "") {
      writer.uint32(26).string(message.feeder);
    }
    if (message.validator !== "") {
      writer.uint32(34).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExchangeRateVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExchangeRateVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.salt = reader.string();
          break;
        case 2:
          message.exchangeRates = reader.string();
          break;
        case 3:
          message.feeder = reader.string();
          break;
        case 4:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExchangeRateVote {
    return {
      salt: isSet(object.salt) ? String(object.salt) : "",
      exchangeRates: isSet(object.exchangeRates) ? String(object.exchangeRates) : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
    };
  },

  toJSON(message: MsgExchangeRateVote): unknown {
    const obj: any = {};
    message.salt !== undefined && (obj.salt = message.salt);
    message.exchangeRates !== undefined && (obj.exchangeRates = message.exchangeRates);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExchangeRateVote>, I>>(object: I): MsgExchangeRateVote {
    const message = createBaseMsgExchangeRateVote();
    message.salt = object.salt ?? "";
    message.exchangeRates = object.exchangeRates ?? "";
    message.feeder = object.feeder ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
};

function createBaseMsgExchangeRateVoteResponse(): MsgExchangeRateVoteResponse {
  return {};
}

export const MsgExchangeRateVoteResponse = {
  encode(_: MsgExchangeRateVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExchangeRateVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExchangeRateVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgExchangeRateVoteResponse {
    return {};
  },

  toJSON(_: MsgExchangeRateVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExchangeRateVoteResponse>, I>>(_: I): MsgExchangeRateVoteResponse {
    const message = createBaseMsgExchangeRateVoteResponse();
    return message;
  },
};

function createBaseMsgDelegateFeedConsent(): MsgDelegateFeedConsent {
  return { operator: "", delegate: "" };
}

export const MsgDelegateFeedConsent = {
  encode(message: MsgDelegateFeedConsent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.delegate !== "") {
      writer.uint32(18).string(message.delegate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateFeedConsent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateFeedConsent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.delegate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelegateFeedConsent {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      delegate: isSet(object.delegate) ? String(object.delegate) : "",
    };
  },

  toJSON(message: MsgDelegateFeedConsent): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.delegate !== undefined && (obj.delegate = message.delegate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateFeedConsent>, I>>(object: I): MsgDelegateFeedConsent {
    const message = createBaseMsgDelegateFeedConsent();
    message.operator = object.operator ?? "";
    message.delegate = object.delegate ?? "";
    return message;
  },
};

function createBaseMsgDelegateFeedConsentResponse(): MsgDelegateFeedConsentResponse {
  return {};
}

export const MsgDelegateFeedConsentResponse = {
  encode(_: MsgDelegateFeedConsentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateFeedConsentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateFeedConsentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDelegateFeedConsentResponse {
    return {};
  },

  toJSON(_: MsgDelegateFeedConsentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateFeedConsentResponse>, I>>(_: I): MsgDelegateFeedConsentResponse {
    const message = createBaseMsgDelegateFeedConsentResponse();
    return message;
  },
};

function createBaseMsgExchangeRateCombinedVote(): MsgExchangeRateCombinedVote {
  return { preVoteHash: "", voteSalt: "", voteExchangeRates: "", feeder: "", validator: "" };
}

export const MsgExchangeRateCombinedVote = {
  encode(message: MsgExchangeRateCombinedVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.preVoteHash !== "") {
      writer.uint32(10).string(message.preVoteHash);
    }
    if (message.voteSalt !== "") {
      writer.uint32(18).string(message.voteSalt);
    }
    if (message.voteExchangeRates !== "") {
      writer.uint32(26).string(message.voteExchangeRates);
    }
    if (message.feeder !== "") {
      writer.uint32(34).string(message.feeder);
    }
    if (message.validator !== "") {
      writer.uint32(42).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExchangeRateCombinedVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExchangeRateCombinedVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.preVoteHash = reader.string();
          break;
        case 2:
          message.voteSalt = reader.string();
          break;
        case 3:
          message.voteExchangeRates = reader.string();
          break;
        case 4:
          message.feeder = reader.string();
          break;
        case 5:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExchangeRateCombinedVote {
    return {
      preVoteHash: isSet(object.preVoteHash) ? String(object.preVoteHash) : "",
      voteSalt: isSet(object.voteSalt) ? String(object.voteSalt) : "",
      voteExchangeRates: isSet(object.voteExchangeRates) ? String(object.voteExchangeRates) : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
    };
  },

  toJSON(message: MsgExchangeRateCombinedVote): unknown {
    const obj: any = {};
    message.preVoteHash !== undefined && (obj.preVoteHash = message.preVoteHash);
    message.voteSalt !== undefined && (obj.voteSalt = message.voteSalt);
    message.voteExchangeRates !== undefined && (obj.voteExchangeRates = message.voteExchangeRates);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExchangeRateCombinedVote>, I>>(object: I): MsgExchangeRateCombinedVote {
    const message = createBaseMsgExchangeRateCombinedVote();
    message.preVoteHash = object.preVoteHash ?? "";
    message.voteSalt = object.voteSalt ?? "";
    message.voteExchangeRates = object.voteExchangeRates ?? "";
    message.feeder = object.feeder ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
};

function createBaseMsgExchangeRateCombinedVoteResponse(): MsgExchangeRateCombinedVoteResponse {
  return {};
}

export const MsgExchangeRateCombinedVoteResponse = {
  encode(_: MsgExchangeRateCombinedVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExchangeRateCombinedVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExchangeRateCombinedVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgExchangeRateCombinedVoteResponse {
    return {};
  },

  toJSON(_: MsgExchangeRateCombinedVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExchangeRateCombinedVoteResponse>, I>>(
    _: I,
  ): MsgExchangeRateCombinedVoteResponse {
    const message = createBaseMsgExchangeRateCombinedVoteResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  ExchangeRatePreVote(request: MsgExchangeRatePreVote): Promise<MsgExchangeRatePreVoteResponse>;
  ExchangeRateVote(request: MsgExchangeRateVote): Promise<MsgExchangeRateVoteResponse>;
  DelegateFeedConsent(request: MsgDelegateFeedConsent): Promise<MsgDelegateFeedConsentResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ExchangeRateCombinedVote(request: MsgExchangeRateCombinedVote): Promise<MsgExchangeRateCombinedVoteResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.ExchangeRatePreVote = this.ExchangeRatePreVote.bind(this);
    this.ExchangeRateVote = this.ExchangeRateVote.bind(this);
    this.DelegateFeedConsent = this.DelegateFeedConsent.bind(this);
    this.ExchangeRateCombinedVote = this.ExchangeRateCombinedVote.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.oracle.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }

  ExchangeRatePreVote(request: MsgExchangeRatePreVote): Promise<MsgExchangeRatePreVoteResponse> {
    const data = MsgExchangeRatePreVote.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.oracle.Msg", "ExchangeRatePreVote", data);
    return promise.then((data) => MsgExchangeRatePreVoteResponse.decode(new _m0.Reader(data)));
  }

  ExchangeRateVote(request: MsgExchangeRateVote): Promise<MsgExchangeRateVoteResponse> {
    const data = MsgExchangeRateVote.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.oracle.Msg", "ExchangeRateVote", data);
    return promise.then((data) => MsgExchangeRateVoteResponse.decode(new _m0.Reader(data)));
  }

  DelegateFeedConsent(request: MsgDelegateFeedConsent): Promise<MsgDelegateFeedConsentResponse> {
    const data = MsgDelegateFeedConsent.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.oracle.Msg", "DelegateFeedConsent", data);
    return promise.then((data) => MsgDelegateFeedConsentResponse.decode(new _m0.Reader(data)));
  }

  ExchangeRateCombinedVote(request: MsgExchangeRateCombinedVote): Promise<MsgExchangeRateCombinedVoteResponse> {
    const data = MsgExchangeRateCombinedVote.encode(request).finish();
    const promise = this.rpc.request("prismfinance.prismcore.oracle.Msg", "ExchangeRateCombinedVote", data);
    return promise.then((data) => MsgExchangeRateCombinedVoteResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
