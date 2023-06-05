import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface QueryBondedAmountRequest {
  assetId: string;
  maturity?: string;
  address?: string;
}
export interface QueryBondedAmountRequestSDKType {
  asset_id: string;
  maturity?: string;
  address?: string;
}
export interface QueryBondedAmountResponse {
  amount: string;
}
export interface QueryBondedAmountResponseSDKType {
  amount: string;
}
export interface QueryRewardRequest {
  denom: string;
  address: string;
}
export interface QueryRewardRequestSDKType {
  denom: string;
  address: string;
}
export interface QueryRewardResponse {
  amount?: Coin;
}
export interface QueryRewardResponseSDKType {
  amount?: CoinSDKType;
}
function createBaseQueryBondedAmountRequest(): QueryBondedAmountRequest {
  return {
    assetId: "",
    maturity: "",
    address: ""
  };
}
export const QueryBondedAmountRequest = {
  encode(message: QueryBondedAmountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.maturity !== "") {
      writer.uint32(18).string(message.maturity);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBondedAmountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondedAmountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.maturity = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBondedAmountRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      maturity: isSet(object.maturity) ? String(object.maturity) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryBondedAmountRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.maturity !== undefined && (obj.maturity = message.maturity);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryBondedAmountRequest>): QueryBondedAmountRequest {
    const message = createBaseQueryBondedAmountRequest();
    message.assetId = object.assetId ?? "";
    message.maturity = object.maturity ?? "";
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryBondedAmountResponse(): QueryBondedAmountResponse {
  return {
    amount: ""
  };
}
export const QueryBondedAmountResponse = {
  encode(message: QueryBondedAmountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBondedAmountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondedAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBondedAmountResponse {
    return {
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: QueryBondedAmountResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<QueryBondedAmountResponse>): QueryBondedAmountResponse {
    const message = createBaseQueryBondedAmountResponse();
    message.amount = object.amount ?? "";
    return message;
  }
};
function createBaseQueryRewardRequest(): QueryRewardRequest {
  return {
    denom: "",
    address: ""
  };
}
export const QueryRewardRequest = {
  encode(message: QueryRewardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRewardRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryRewardRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryRewardRequest>): QueryRewardRequest {
    const message = createBaseQueryRewardRequest();
    message.denom = object.denom ?? "";
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryRewardResponse(): QueryRewardResponse {
  return {
    amount: undefined
  };
}
export const QueryRewardResponse = {
  encode(message: QueryRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRewardResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: QueryRewardResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryRewardResponse>): QueryRewardResponse {
    const message = createBaseQueryRewardResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};