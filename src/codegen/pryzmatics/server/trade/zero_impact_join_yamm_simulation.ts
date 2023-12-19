import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface QueryZeroImpactJoinYammSimulationRequest {
  cAmountIn: Coin;
}
export interface QueryZeroImpactJoinYammSimulationRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryZeroImpactJoinYammSimulationRequest";
  value: Uint8Array;
}
export interface QueryZeroImpactJoinYammSimulationRequestAmino {
  c_amount_in?: CoinAmino;
}
export interface QueryZeroImpactJoinYammSimulationRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryZeroImpactJoinYammSimulationRequest";
  value: QueryZeroImpactJoinYammSimulationRequestAmino;
}
export interface QueryZeroImpactJoinYammSimulationRequestSDKType {
  c_amount_in: CoinSDKType;
}
export interface QueryZeroImpactJoinYammSimulationResponse {
  cAmountIn: Coin;
  lptOut: Coin;
  yOut: Coin[];
  feeAmount: Coin;
  feePercentage: string;
}
export interface QueryZeroImpactJoinYammSimulationResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryZeroImpactJoinYammSimulationResponse";
  value: Uint8Array;
}
export interface QueryZeroImpactJoinYammSimulationResponseAmino {
  c_amount_in?: CoinAmino;
  lpt_out?: CoinAmino;
  y_out?: CoinAmino[];
  fee_amount?: CoinAmino;
  fee_percentage?: string;
}
export interface QueryZeroImpactJoinYammSimulationResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryZeroImpactJoinYammSimulationResponse";
  value: QueryZeroImpactJoinYammSimulationResponseAmino;
}
export interface QueryZeroImpactJoinYammSimulationResponseSDKType {
  c_amount_in: CoinSDKType;
  lpt_out: CoinSDKType;
  y_out: CoinSDKType[];
  fee_amount: CoinSDKType;
  fee_percentage: string;
}
function createBaseQueryZeroImpactJoinYammSimulationRequest(): QueryZeroImpactJoinYammSimulationRequest {
  return {
    cAmountIn: Coin.fromPartial({})
  };
}
export const QueryZeroImpactJoinYammSimulationRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryZeroImpactJoinYammSimulationRequest",
  encode(message: QueryZeroImpactJoinYammSimulationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cAmountIn !== undefined) {
      Coin.encode(message.cAmountIn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryZeroImpactJoinYammSimulationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZeroImpactJoinYammSimulationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cAmountIn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryZeroImpactJoinYammSimulationRequest {
    return {
      cAmountIn: isSet(object.cAmountIn) ? Coin.fromJSON(object.cAmountIn) : undefined
    };
  },
  toJSON(message: QueryZeroImpactJoinYammSimulationRequest): unknown {
    const obj: any = {};
    message.cAmountIn !== undefined && (obj.cAmountIn = message.cAmountIn ? Coin.toJSON(message.cAmountIn) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryZeroImpactJoinYammSimulationRequest>): QueryZeroImpactJoinYammSimulationRequest {
    const message = createBaseQueryZeroImpactJoinYammSimulationRequest();
    message.cAmountIn = object.cAmountIn !== undefined && object.cAmountIn !== null ? Coin.fromPartial(object.cAmountIn) : undefined;
    return message;
  },
  fromAmino(object: QueryZeroImpactJoinYammSimulationRequestAmino): QueryZeroImpactJoinYammSimulationRequest {
    const message = createBaseQueryZeroImpactJoinYammSimulationRequest();
    if (object.c_amount_in !== undefined && object.c_amount_in !== null) {
      message.cAmountIn = Coin.fromAmino(object.c_amount_in);
    }
    return message;
  },
  toAmino(message: QueryZeroImpactJoinYammSimulationRequest): QueryZeroImpactJoinYammSimulationRequestAmino {
    const obj: any = {};
    obj.c_amount_in = message.cAmountIn ? Coin.toAmino(message.cAmountIn) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryZeroImpactJoinYammSimulationRequestAminoMsg): QueryZeroImpactJoinYammSimulationRequest {
    return QueryZeroImpactJoinYammSimulationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZeroImpactJoinYammSimulationRequestProtoMsg): QueryZeroImpactJoinYammSimulationRequest {
    return QueryZeroImpactJoinYammSimulationRequest.decode(message.value);
  },
  toProto(message: QueryZeroImpactJoinYammSimulationRequest): Uint8Array {
    return QueryZeroImpactJoinYammSimulationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryZeroImpactJoinYammSimulationRequest): QueryZeroImpactJoinYammSimulationRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryZeroImpactJoinYammSimulationRequest",
      value: QueryZeroImpactJoinYammSimulationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryZeroImpactJoinYammSimulationResponse(): QueryZeroImpactJoinYammSimulationResponse {
  return {
    cAmountIn: Coin.fromPartial({}),
    lptOut: Coin.fromPartial({}),
    yOut: [],
    feeAmount: Coin.fromPartial({}),
    feePercentage: ""
  };
}
export const QueryZeroImpactJoinYammSimulationResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryZeroImpactJoinYammSimulationResponse",
  encode(message: QueryZeroImpactJoinYammSimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cAmountIn !== undefined) {
      Coin.encode(message.cAmountIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.yOut) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.feeAmount !== undefined) {
      Coin.encode(message.feeAmount, writer.uint32(34).fork()).ldelim();
    }
    if (message.feePercentage !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.feePercentage, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryZeroImpactJoinYammSimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZeroImpactJoinYammSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cAmountIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.lptOut = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.yOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.feeAmount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.feePercentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryZeroImpactJoinYammSimulationResponse {
    return {
      cAmountIn: isSet(object.cAmountIn) ? Coin.fromJSON(object.cAmountIn) : undefined,
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      yOut: Array.isArray(object?.yOut) ? object.yOut.map((e: any) => Coin.fromJSON(e)) : [],
      feeAmount: isSet(object.feeAmount) ? Coin.fromJSON(object.feeAmount) : undefined,
      feePercentage: isSet(object.feePercentage) ? String(object.feePercentage) : ""
    };
  },
  toJSON(message: QueryZeroImpactJoinYammSimulationResponse): unknown {
    const obj: any = {};
    message.cAmountIn !== undefined && (obj.cAmountIn = message.cAmountIn ? Coin.toJSON(message.cAmountIn) : undefined);
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    if (message.yOut) {
      obj.yOut = message.yOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.yOut = [];
    }
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount ? Coin.toJSON(message.feeAmount) : undefined);
    message.feePercentage !== undefined && (obj.feePercentage = message.feePercentage);
    return obj;
  },
  fromPartial(object: Partial<QueryZeroImpactJoinYammSimulationResponse>): QueryZeroImpactJoinYammSimulationResponse {
    const message = createBaseQueryZeroImpactJoinYammSimulationResponse();
    message.cAmountIn = object.cAmountIn !== undefined && object.cAmountIn !== null ? Coin.fromPartial(object.cAmountIn) : undefined;
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.yOut = object.yOut?.map(e => Coin.fromPartial(e)) || [];
    message.feeAmount = object.feeAmount !== undefined && object.feeAmount !== null ? Coin.fromPartial(object.feeAmount) : undefined;
    message.feePercentage = object.feePercentage ?? "";
    return message;
  },
  fromAmino(object: QueryZeroImpactJoinYammSimulationResponseAmino): QueryZeroImpactJoinYammSimulationResponse {
    const message = createBaseQueryZeroImpactJoinYammSimulationResponse();
    if (object.c_amount_in !== undefined && object.c_amount_in !== null) {
      message.cAmountIn = Coin.fromAmino(object.c_amount_in);
    }
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = Coin.fromAmino(object.lpt_out);
    }
    message.yOut = object.y_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.fee_amount !== undefined && object.fee_amount !== null) {
      message.feeAmount = Coin.fromAmino(object.fee_amount);
    }
    if (object.fee_percentage !== undefined && object.fee_percentage !== null) {
      message.feePercentage = object.fee_percentage;
    }
    return message;
  },
  toAmino(message: QueryZeroImpactJoinYammSimulationResponse): QueryZeroImpactJoinYammSimulationResponseAmino {
    const obj: any = {};
    obj.c_amount_in = message.cAmountIn ? Coin.toAmino(message.cAmountIn) : undefined;
    obj.lpt_out = message.lptOut ? Coin.toAmino(message.lptOut) : undefined;
    if (message.yOut) {
      obj.y_out = message.yOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.y_out = [];
    }
    obj.fee_amount = message.feeAmount ? Coin.toAmino(message.feeAmount) : undefined;
    obj.fee_percentage = message.feePercentage;
    return obj;
  },
  fromAminoMsg(object: QueryZeroImpactJoinYammSimulationResponseAminoMsg): QueryZeroImpactJoinYammSimulationResponse {
    return QueryZeroImpactJoinYammSimulationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZeroImpactJoinYammSimulationResponseProtoMsg): QueryZeroImpactJoinYammSimulationResponse {
    return QueryZeroImpactJoinYammSimulationResponse.decode(message.value);
  },
  toProto(message: QueryZeroImpactJoinYammSimulationResponse): Uint8Array {
    return QueryZeroImpactJoinYammSimulationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryZeroImpactJoinYammSimulationResponse): QueryZeroImpactJoinYammSimulationResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryZeroImpactJoinYammSimulationResponse",
      value: QueryZeroImpactJoinYammSimulationResponse.encode(message).finish()
    };
  }
};