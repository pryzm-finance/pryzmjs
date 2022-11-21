/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../oracle/params";

export const protobufPackage = "prismfinance.prismcore.oracle";

export interface MsgUpdateParams {
  authority: string;
  params: Params | undefined;
}

export interface MsgUpdateParamsResponse {}

export interface MsgExchangeRatePreVote {
  feeder: string;
  hash: string;
  validator: string;
}

export interface MsgExchangeRatePreVoteResponse {}

export interface MsgExchangeRateVote {
  salt: string;
  exchangeRates: string;
  feeder: string;
  validator: string;
}

export interface MsgExchangeRateVoteResponse {}

export interface MsgDelegateFeedConsent {
  operator: string;
  delegate: string;
}

export interface MsgDelegateFeedConsentResponse {}

export interface MsgExchangeRateCombinedVote {
  preVoteHash: string;
  voteSalt: string;
  voteExchangeRates: string;
  feeder: string;
  validator: string;
}

export interface MsgExchangeRateCombinedVoteResponse {}

const baseMsgUpdateParams: object = { authority: "" };

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: Writer = Writer.create()): Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
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
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseMsgUpdateParamsResponse: object = {};

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
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
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateParamsResponse>
  ): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },
};

const baseMsgExchangeRatePreVote: object = {
  feeder: "",
  hash: "",
  validator: "",
};

export const MsgExchangeRatePreVote = {
  encode(
    message: MsgExchangeRatePreVote,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgExchangeRatePreVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExchangeRatePreVote } as MsgExchangeRatePreVote;
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
    const message = { ...baseMsgExchangeRatePreVote } as MsgExchangeRatePreVote;
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = String(object.feeder);
    } else {
      message.feeder = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    return message;
  },

  toJSON(message: MsgExchangeRatePreVote): unknown {
    const obj: any = {};
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.hash !== undefined && (obj.hash = message.hash);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgExchangeRatePreVote>
  ): MsgExchangeRatePreVote {
    const message = { ...baseMsgExchangeRatePreVote } as MsgExchangeRatePreVote;
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    } else {
      message.feeder = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    return message;
  },
};

const baseMsgExchangeRatePreVoteResponse: object = {};

export const MsgExchangeRatePreVoteResponse = {
  encode(
    _: MsgExchangeRatePreVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgExchangeRatePreVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgExchangeRatePreVoteResponse,
    } as MsgExchangeRatePreVoteResponse;
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
    const message = {
      ...baseMsgExchangeRatePreVoteResponse,
    } as MsgExchangeRatePreVoteResponse;
    return message;
  },

  toJSON(_: MsgExchangeRatePreVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgExchangeRatePreVoteResponse>
  ): MsgExchangeRatePreVoteResponse {
    const message = {
      ...baseMsgExchangeRatePreVoteResponse,
    } as MsgExchangeRatePreVoteResponse;
    return message;
  },
};

const baseMsgExchangeRateVote: object = {
  salt: "",
  exchangeRates: "",
  feeder: "",
  validator: "",
};

export const MsgExchangeRateVote = {
  encode(
    message: MsgExchangeRateVote,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgExchangeRateVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExchangeRateVote } as MsgExchangeRateVote;
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
    const message = { ...baseMsgExchangeRateVote } as MsgExchangeRateVote;
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = String(object.salt);
    } else {
      message.salt = "";
    }
    if (object.exchangeRates !== undefined && object.exchangeRates !== null) {
      message.exchangeRates = String(object.exchangeRates);
    } else {
      message.exchangeRates = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = String(object.feeder);
    } else {
      message.feeder = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    return message;
  },

  toJSON(message: MsgExchangeRateVote): unknown {
    const obj: any = {};
    message.salt !== undefined && (obj.salt = message.salt);
    message.exchangeRates !== undefined &&
      (obj.exchangeRates = message.exchangeRates);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgExchangeRateVote>): MsgExchangeRateVote {
    const message = { ...baseMsgExchangeRateVote } as MsgExchangeRateVote;
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = object.salt;
    } else {
      message.salt = "";
    }
    if (object.exchangeRates !== undefined && object.exchangeRates !== null) {
      message.exchangeRates = object.exchangeRates;
    } else {
      message.exchangeRates = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    } else {
      message.feeder = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    return message;
  },
};

const baseMsgExchangeRateVoteResponse: object = {};

export const MsgExchangeRateVoteResponse = {
  encode(
    _: MsgExchangeRateVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgExchangeRateVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgExchangeRateVoteResponse,
    } as MsgExchangeRateVoteResponse;
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
    const message = {
      ...baseMsgExchangeRateVoteResponse,
    } as MsgExchangeRateVoteResponse;
    return message;
  },

  toJSON(_: MsgExchangeRateVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgExchangeRateVoteResponse>
  ): MsgExchangeRateVoteResponse {
    const message = {
      ...baseMsgExchangeRateVoteResponse,
    } as MsgExchangeRateVoteResponse;
    return message;
  },
};

const baseMsgDelegateFeedConsent: object = { operator: "", delegate: "" };

export const MsgDelegateFeedConsent = {
  encode(
    message: MsgDelegateFeedConsent,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.delegate !== "") {
      writer.uint32(18).string(message.delegate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDelegateFeedConsent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDelegateFeedConsent } as MsgDelegateFeedConsent;
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
    const message = { ...baseMsgDelegateFeedConsent } as MsgDelegateFeedConsent;
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = String(object.operator);
    } else {
      message.operator = "";
    }
    if (object.delegate !== undefined && object.delegate !== null) {
      message.delegate = String(object.delegate);
    } else {
      message.delegate = "";
    }
    return message;
  },

  toJSON(message: MsgDelegateFeedConsent): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.delegate !== undefined && (obj.delegate = message.delegate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDelegateFeedConsent>
  ): MsgDelegateFeedConsent {
    const message = { ...baseMsgDelegateFeedConsent } as MsgDelegateFeedConsent;
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    } else {
      message.operator = "";
    }
    if (object.delegate !== undefined && object.delegate !== null) {
      message.delegate = object.delegate;
    } else {
      message.delegate = "";
    }
    return message;
  },
};

const baseMsgDelegateFeedConsentResponse: object = {};

export const MsgDelegateFeedConsentResponse = {
  encode(
    _: MsgDelegateFeedConsentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDelegateFeedConsentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDelegateFeedConsentResponse,
    } as MsgDelegateFeedConsentResponse;
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
    const message = {
      ...baseMsgDelegateFeedConsentResponse,
    } as MsgDelegateFeedConsentResponse;
    return message;
  },

  toJSON(_: MsgDelegateFeedConsentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDelegateFeedConsentResponse>
  ): MsgDelegateFeedConsentResponse {
    const message = {
      ...baseMsgDelegateFeedConsentResponse,
    } as MsgDelegateFeedConsentResponse;
    return message;
  },
};

const baseMsgExchangeRateCombinedVote: object = {
  preVoteHash: "",
  voteSalt: "",
  voteExchangeRates: "",
  feeder: "",
  validator: "",
};

export const MsgExchangeRateCombinedVote = {
  encode(
    message: MsgExchangeRateCombinedVote,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgExchangeRateCombinedVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgExchangeRateCombinedVote,
    } as MsgExchangeRateCombinedVote;
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
    const message = {
      ...baseMsgExchangeRateCombinedVote,
    } as MsgExchangeRateCombinedVote;
    if (object.preVoteHash !== undefined && object.preVoteHash !== null) {
      message.preVoteHash = String(object.preVoteHash);
    } else {
      message.preVoteHash = "";
    }
    if (object.voteSalt !== undefined && object.voteSalt !== null) {
      message.voteSalt = String(object.voteSalt);
    } else {
      message.voteSalt = "";
    }
    if (
      object.voteExchangeRates !== undefined &&
      object.voteExchangeRates !== null
    ) {
      message.voteExchangeRates = String(object.voteExchangeRates);
    } else {
      message.voteExchangeRates = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = String(object.feeder);
    } else {
      message.feeder = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    return message;
  },

  toJSON(message: MsgExchangeRateCombinedVote): unknown {
    const obj: any = {};
    message.preVoteHash !== undefined &&
      (obj.preVoteHash = message.preVoteHash);
    message.voteSalt !== undefined && (obj.voteSalt = message.voteSalt);
    message.voteExchangeRates !== undefined &&
      (obj.voteExchangeRates = message.voteExchangeRates);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgExchangeRateCombinedVote>
  ): MsgExchangeRateCombinedVote {
    const message = {
      ...baseMsgExchangeRateCombinedVote,
    } as MsgExchangeRateCombinedVote;
    if (object.preVoteHash !== undefined && object.preVoteHash !== null) {
      message.preVoteHash = object.preVoteHash;
    } else {
      message.preVoteHash = "";
    }
    if (object.voteSalt !== undefined && object.voteSalt !== null) {
      message.voteSalt = object.voteSalt;
    } else {
      message.voteSalt = "";
    }
    if (
      object.voteExchangeRates !== undefined &&
      object.voteExchangeRates !== null
    ) {
      message.voteExchangeRates = object.voteExchangeRates;
    } else {
      message.voteExchangeRates = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    } else {
      message.feeder = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    return message;
  },
};

const baseMsgExchangeRateCombinedVoteResponse: object = {};

export const MsgExchangeRateCombinedVoteResponse = {
  encode(
    _: MsgExchangeRateCombinedVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgExchangeRateCombinedVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgExchangeRateCombinedVoteResponse,
    } as MsgExchangeRateCombinedVoteResponse;
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
    const message = {
      ...baseMsgExchangeRateCombinedVoteResponse,
    } as MsgExchangeRateCombinedVoteResponse;
    return message;
  },

  toJSON(_: MsgExchangeRateCombinedVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgExchangeRateCombinedVoteResponse>
  ): MsgExchangeRateCombinedVoteResponse {
    const message = {
      ...baseMsgExchangeRateCombinedVoteResponse,
    } as MsgExchangeRateCombinedVoteResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  ExchangeRatePreVote(
    request: MsgExchangeRatePreVote
  ): Promise<MsgExchangeRatePreVoteResponse>;
  ExchangeRateVote(
    request: MsgExchangeRateVote
  ): Promise<MsgExchangeRateVoteResponse>;
  DelegateFeedConsent(
    request: MsgDelegateFeedConsent
  ): Promise<MsgDelegateFeedConsentResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ExchangeRateCombinedVote(
    request: MsgExchangeRateCombinedVote
  ): Promise<MsgExchangeRateCombinedVoteResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.oracle.Msg",
      "UpdateParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new Reader(data))
    );
  }

  ExchangeRatePreVote(
    request: MsgExchangeRatePreVote
  ): Promise<MsgExchangeRatePreVoteResponse> {
    const data = MsgExchangeRatePreVote.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.oracle.Msg",
      "ExchangeRatePreVote",
      data
    );
    return promise.then((data) =>
      MsgExchangeRatePreVoteResponse.decode(new Reader(data))
    );
  }

  ExchangeRateVote(
    request: MsgExchangeRateVote
  ): Promise<MsgExchangeRateVoteResponse> {
    const data = MsgExchangeRateVote.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.oracle.Msg",
      "ExchangeRateVote",
      data
    );
    return promise.then((data) =>
      MsgExchangeRateVoteResponse.decode(new Reader(data))
    );
  }

  DelegateFeedConsent(
    request: MsgDelegateFeedConsent
  ): Promise<MsgDelegateFeedConsentResponse> {
    const data = MsgDelegateFeedConsent.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.oracle.Msg",
      "DelegateFeedConsent",
      data
    );
    return promise.then((data) =>
      MsgDelegateFeedConsentResponse.decode(new Reader(data))
    );
  }

  ExchangeRateCombinedVote(
    request: MsgExchangeRateCombinedVote
  ): Promise<MsgExchangeRateCombinedVoteResponse> {
    const data = MsgExchangeRateCombinedVote.encode(request).finish();
    const promise = this.rpc.request(
      "prismfinance.prismcore.oracle.Msg",
      "ExchangeRateCombinedVote",
      data
    );
    return promise.then((data) =>
      MsgExchangeRateCombinedVoteResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
