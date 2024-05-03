import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface DelegateAllianceEvent {
  allianceSender: string;
  validator: string;
  coin: Coin;
  newShares: string;
}
export interface DelegateAllianceEventProtoMsg {
  typeUrl: "/alliance.alliance.DelegateAllianceEvent";
  value: Uint8Array;
}
export interface DelegateAllianceEventAmino {
  allianceSender?: string;
  validator?: string;
  coin?: CoinAmino;
  newShares?: string;
}
export interface DelegateAllianceEventAminoMsg {
  type: "/alliance.alliance.DelegateAllianceEvent";
  value: DelegateAllianceEventAmino;
}
export interface DelegateAllianceEventSDKType {
  allianceSender: string;
  validator: string;
  coin: CoinSDKType;
  newShares: string;
}
export interface UndelegateAllianceEvent {
  allianceSender: string;
  validator: string;
  coin: Coin;
  completionTime: Timestamp;
}
export interface UndelegateAllianceEventProtoMsg {
  typeUrl: "/alliance.alliance.UndelegateAllianceEvent";
  value: Uint8Array;
}
export interface UndelegateAllianceEventAmino {
  allianceSender?: string;
  validator?: string;
  coin?: CoinAmino;
  completionTime?: string;
}
export interface UndelegateAllianceEventAminoMsg {
  type: "/alliance.alliance.UndelegateAllianceEvent";
  value: UndelegateAllianceEventAmino;
}
export interface UndelegateAllianceEventSDKType {
  allianceSender: string;
  validator: string;
  coin: CoinSDKType;
  completionTime: TimestampSDKType;
}
export interface RedelegateAllianceEvent {
  allianceSender: string;
  sourceValidator: string;
  destinationValidator: string;
  coin: Coin;
  completionTime: Timestamp;
}
export interface RedelegateAllianceEventProtoMsg {
  typeUrl: "/alliance.alliance.RedelegateAllianceEvent";
  value: Uint8Array;
}
export interface RedelegateAllianceEventAmino {
  allianceSender?: string;
  sourceValidator?: string;
  destinationValidator?: string;
  coin?: CoinAmino;
  completionTime?: string;
}
export interface RedelegateAllianceEventAminoMsg {
  type: "/alliance.alliance.RedelegateAllianceEvent";
  value: RedelegateAllianceEventAmino;
}
export interface RedelegateAllianceEventSDKType {
  allianceSender: string;
  sourceValidator: string;
  destinationValidator: string;
  coin: CoinSDKType;
  completionTime: TimestampSDKType;
}
export interface ClaimAllianceRewardsEvent {
  allianceSender: string;
  validator: string;
  coins: Coin[];
}
export interface ClaimAllianceRewardsEventProtoMsg {
  typeUrl: "/alliance.alliance.ClaimAllianceRewardsEvent";
  value: Uint8Array;
}
export interface ClaimAllianceRewardsEventAmino {
  allianceSender?: string;
  validator?: string;
  coins?: CoinAmino[];
}
export interface ClaimAllianceRewardsEventAminoMsg {
  type: "/alliance.alliance.ClaimAllianceRewardsEvent";
  value: ClaimAllianceRewardsEventAmino;
}
export interface ClaimAllianceRewardsEventSDKType {
  allianceSender: string;
  validator: string;
  coins: CoinSDKType[];
}
export interface DeductAllianceAssetsEvent {
  coins: Coin[];
}
export interface DeductAllianceAssetsEventProtoMsg {
  typeUrl: "/alliance.alliance.DeductAllianceAssetsEvent";
  value: Uint8Array;
}
export interface DeductAllianceAssetsEventAmino {
  coins?: CoinAmino[];
}
export interface DeductAllianceAssetsEventAminoMsg {
  type: "/alliance.alliance.DeductAllianceAssetsEvent";
  value: DeductAllianceAssetsEventAmino;
}
export interface DeductAllianceAssetsEventSDKType {
  coins: CoinSDKType[];
}
function createBaseDelegateAllianceEvent(): DelegateAllianceEvent {
  return {
    allianceSender: "",
    validator: "",
    coin: Coin.fromPartial({}),
    newShares: ""
  };
}
export const DelegateAllianceEvent = {
  typeUrl: "/alliance.alliance.DelegateAllianceEvent",
  is(o: any): o is DelegateAllianceEvent {
    return o && (o.$typeUrl === DelegateAllianceEvent.typeUrl || typeof o.allianceSender === "string" && typeof o.validator === "string" && Coin.is(o.coin) && typeof o.newShares === "string");
  },
  isSDK(o: any): o is DelegateAllianceEventSDKType {
    return o && (o.$typeUrl === DelegateAllianceEvent.typeUrl || typeof o.allianceSender === "string" && typeof o.validator === "string" && Coin.isSDK(o.coin) && typeof o.newShares === "string");
  },
  isAmino(o: any): o is DelegateAllianceEventAmino {
    return o && (o.$typeUrl === DelegateAllianceEvent.typeUrl || typeof o.allianceSender === "string" && typeof o.validator === "string" && Coin.isAmino(o.coin) && typeof o.newShares === "string");
  },
  encode(message: DelegateAllianceEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allianceSender !== "") {
      writer.uint32(10).string(message.allianceSender);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    if (message.newShares !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.newShares, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): DelegateAllianceEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegateAllianceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allianceSender = reader.string();
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.newShares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegateAllianceEvent {
    return {
      allianceSender: isSet(object.allianceSender) ? String(object.allianceSender) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      newShares: isSet(object.newShares) ? String(object.newShares) : ""
    };
  },
  toJSON(message: DelegateAllianceEvent): unknown {
    const obj: any = {};
    message.allianceSender !== undefined && (obj.allianceSender = message.allianceSender);
    message.validator !== undefined && (obj.validator = message.validator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.newShares !== undefined && (obj.newShares = message.newShares);
    return obj;
  },
  fromPartial(object: Partial<DelegateAllianceEvent>): DelegateAllianceEvent {
    const message = createBaseDelegateAllianceEvent();
    message.allianceSender = object.allianceSender ?? "";
    message.validator = object.validator ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.newShares = object.newShares ?? "";
    return message;
  },
  fromAmino(object: DelegateAllianceEventAmino): DelegateAllianceEvent {
    const message = createBaseDelegateAllianceEvent();
    if (object.allianceSender !== undefined && object.allianceSender !== null) {
      message.allianceSender = object.allianceSender;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    if (object.newShares !== undefined && object.newShares !== null) {
      message.newShares = object.newShares;
    }
    return message;
  },
  toAmino(message: DelegateAllianceEvent, useInterfaces: boolean = true): DelegateAllianceEventAmino {
    const obj: any = {};
    obj.allianceSender = message.allianceSender === "" ? undefined : message.allianceSender;
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.coin = message.coin ? Coin.toAmino(message.coin, useInterfaces) : undefined;
    obj.newShares = message.newShares === "" ? undefined : message.newShares;
    return obj;
  },
  fromAminoMsg(object: DelegateAllianceEventAminoMsg): DelegateAllianceEvent {
    return DelegateAllianceEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegateAllianceEventProtoMsg, useInterfaces: boolean = true): DelegateAllianceEvent {
    return DelegateAllianceEvent.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: DelegateAllianceEvent): Uint8Array {
    return DelegateAllianceEvent.encode(message).finish();
  },
  toProtoMsg(message: DelegateAllianceEvent): DelegateAllianceEventProtoMsg {
    return {
      typeUrl: "/alliance.alliance.DelegateAllianceEvent",
      value: DelegateAllianceEvent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DelegateAllianceEvent.typeUrl, DelegateAllianceEvent);
function createBaseUndelegateAllianceEvent(): UndelegateAllianceEvent {
  return {
    allianceSender: "",
    validator: "",
    coin: Coin.fromPartial({}),
    completionTime: Timestamp.fromPartial({})
  };
}
export const UndelegateAllianceEvent = {
  typeUrl: "/alliance.alliance.UndelegateAllianceEvent",
  is(o: any): o is UndelegateAllianceEvent {
    return o && (o.$typeUrl === UndelegateAllianceEvent.typeUrl || typeof o.allianceSender === "string" && typeof o.validator === "string" && Coin.is(o.coin) && Timestamp.is(o.completionTime));
  },
  isSDK(o: any): o is UndelegateAllianceEventSDKType {
    return o && (o.$typeUrl === UndelegateAllianceEvent.typeUrl || typeof o.allianceSender === "string" && typeof o.validator === "string" && Coin.isSDK(o.coin) && Timestamp.isSDK(o.completionTime));
  },
  isAmino(o: any): o is UndelegateAllianceEventAmino {
    return o && (o.$typeUrl === UndelegateAllianceEvent.typeUrl || typeof o.allianceSender === "string" && typeof o.validator === "string" && Coin.isAmino(o.coin) && Timestamp.isAmino(o.completionTime));
  },
  encode(message: UndelegateAllianceEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allianceSender !== "") {
      writer.uint32(10).string(message.allianceSender);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): UndelegateAllianceEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegateAllianceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allianceSender = reader.string();
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UndelegateAllianceEvent {
    return {
      allianceSender: isSet(object.allianceSender) ? String(object.allianceSender) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
    };
  },
  toJSON(message: UndelegateAllianceEvent): unknown {
    const obj: any = {};
    message.allianceSender !== undefined && (obj.allianceSender = message.allianceSender);
    message.validator !== undefined && (obj.validator = message.validator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<UndelegateAllianceEvent>): UndelegateAllianceEvent {
    const message = createBaseUndelegateAllianceEvent();
    message.allianceSender = object.allianceSender ?? "";
    message.validator = object.validator ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    return message;
  },
  fromAmino(object: UndelegateAllianceEventAmino): UndelegateAllianceEvent {
    const message = createBaseUndelegateAllianceEvent();
    if (object.allianceSender !== undefined && object.allianceSender !== null) {
      message.allianceSender = object.allianceSender;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = Timestamp.fromAmino(object.completionTime);
    }
    return message;
  },
  toAmino(message: UndelegateAllianceEvent, useInterfaces: boolean = true): UndelegateAllianceEventAmino {
    const obj: any = {};
    obj.allianceSender = message.allianceSender === "" ? undefined : message.allianceSender;
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.coin = message.coin ? Coin.toAmino(message.coin, useInterfaces) : undefined;
    obj.completionTime = message.completionTime ? Timestamp.toAmino(message.completionTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: UndelegateAllianceEventAminoMsg): UndelegateAllianceEvent {
    return UndelegateAllianceEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: UndelegateAllianceEventProtoMsg, useInterfaces: boolean = true): UndelegateAllianceEvent {
    return UndelegateAllianceEvent.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: UndelegateAllianceEvent): Uint8Array {
    return UndelegateAllianceEvent.encode(message).finish();
  },
  toProtoMsg(message: UndelegateAllianceEvent): UndelegateAllianceEventProtoMsg {
    return {
      typeUrl: "/alliance.alliance.UndelegateAllianceEvent",
      value: UndelegateAllianceEvent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UndelegateAllianceEvent.typeUrl, UndelegateAllianceEvent);
function createBaseRedelegateAllianceEvent(): RedelegateAllianceEvent {
  return {
    allianceSender: "",
    sourceValidator: "",
    destinationValidator: "",
    coin: Coin.fromPartial({}),
    completionTime: Timestamp.fromPartial({})
  };
}
export const RedelegateAllianceEvent = {
  typeUrl: "/alliance.alliance.RedelegateAllianceEvent",
  is(o: any): o is RedelegateAllianceEvent {
    return o && (o.$typeUrl === RedelegateAllianceEvent.typeUrl || typeof o.allianceSender === "string" && typeof o.sourceValidator === "string" && typeof o.destinationValidator === "string" && Coin.is(o.coin) && Timestamp.is(o.completionTime));
  },
  isSDK(o: any): o is RedelegateAllianceEventSDKType {
    return o && (o.$typeUrl === RedelegateAllianceEvent.typeUrl || typeof o.allianceSender === "string" && typeof o.sourceValidator === "string" && typeof o.destinationValidator === "string" && Coin.isSDK(o.coin) && Timestamp.isSDK(o.completionTime));
  },
  isAmino(o: any): o is RedelegateAllianceEventAmino {
    return o && (o.$typeUrl === RedelegateAllianceEvent.typeUrl || typeof o.allianceSender === "string" && typeof o.sourceValidator === "string" && typeof o.destinationValidator === "string" && Coin.isAmino(o.coin) && Timestamp.isAmino(o.completionTime));
  },
  encode(message: RedelegateAllianceEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allianceSender !== "") {
      writer.uint32(10).string(message.allianceSender);
    }
    if (message.sourceValidator !== "") {
      writer.uint32(18).string(message.sourceValidator);
    }
    if (message.destinationValidator !== "") {
      writer.uint32(26).string(message.destinationValidator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(34).fork()).ldelim();
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RedelegateAllianceEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegateAllianceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allianceSender = reader.string();
          break;
        case 2:
          message.sourceValidator = reader.string();
          break;
        case 3:
          message.destinationValidator = reader.string();
          break;
        case 4:
          message.coin = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegateAllianceEvent {
    return {
      allianceSender: isSet(object.allianceSender) ? String(object.allianceSender) : "",
      sourceValidator: isSet(object.sourceValidator) ? String(object.sourceValidator) : "",
      destinationValidator: isSet(object.destinationValidator) ? String(object.destinationValidator) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
    };
  },
  toJSON(message: RedelegateAllianceEvent): unknown {
    const obj: any = {};
    message.allianceSender !== undefined && (obj.allianceSender = message.allianceSender);
    message.sourceValidator !== undefined && (obj.sourceValidator = message.sourceValidator);
    message.destinationValidator !== undefined && (obj.destinationValidator = message.destinationValidator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<RedelegateAllianceEvent>): RedelegateAllianceEvent {
    const message = createBaseRedelegateAllianceEvent();
    message.allianceSender = object.allianceSender ?? "";
    message.sourceValidator = object.sourceValidator ?? "";
    message.destinationValidator = object.destinationValidator ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    return message;
  },
  fromAmino(object: RedelegateAllianceEventAmino): RedelegateAllianceEvent {
    const message = createBaseRedelegateAllianceEvent();
    if (object.allianceSender !== undefined && object.allianceSender !== null) {
      message.allianceSender = object.allianceSender;
    }
    if (object.sourceValidator !== undefined && object.sourceValidator !== null) {
      message.sourceValidator = object.sourceValidator;
    }
    if (object.destinationValidator !== undefined && object.destinationValidator !== null) {
      message.destinationValidator = object.destinationValidator;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = Timestamp.fromAmino(object.completionTime);
    }
    return message;
  },
  toAmino(message: RedelegateAllianceEvent, useInterfaces: boolean = true): RedelegateAllianceEventAmino {
    const obj: any = {};
    obj.allianceSender = message.allianceSender === "" ? undefined : message.allianceSender;
    obj.sourceValidator = message.sourceValidator === "" ? undefined : message.sourceValidator;
    obj.destinationValidator = message.destinationValidator === "" ? undefined : message.destinationValidator;
    obj.coin = message.coin ? Coin.toAmino(message.coin, useInterfaces) : undefined;
    obj.completionTime = message.completionTime ? Timestamp.toAmino(message.completionTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: RedelegateAllianceEventAminoMsg): RedelegateAllianceEvent {
    return RedelegateAllianceEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: RedelegateAllianceEventProtoMsg, useInterfaces: boolean = true): RedelegateAllianceEvent {
    return RedelegateAllianceEvent.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RedelegateAllianceEvent): Uint8Array {
    return RedelegateAllianceEvent.encode(message).finish();
  },
  toProtoMsg(message: RedelegateAllianceEvent): RedelegateAllianceEventProtoMsg {
    return {
      typeUrl: "/alliance.alliance.RedelegateAllianceEvent",
      value: RedelegateAllianceEvent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RedelegateAllianceEvent.typeUrl, RedelegateAllianceEvent);
function createBaseClaimAllianceRewardsEvent(): ClaimAllianceRewardsEvent {
  return {
    allianceSender: "",
    validator: "",
    coins: []
  };
}
export const ClaimAllianceRewardsEvent = {
  typeUrl: "/alliance.alliance.ClaimAllianceRewardsEvent",
  is(o: any): o is ClaimAllianceRewardsEvent {
    return o && (o.$typeUrl === ClaimAllianceRewardsEvent.typeUrl || typeof o.allianceSender === "string" && typeof o.validator === "string" && Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isSDK(o: any): o is ClaimAllianceRewardsEventSDKType {
    return o && (o.$typeUrl === ClaimAllianceRewardsEvent.typeUrl || typeof o.allianceSender === "string" && typeof o.validator === "string" && Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])));
  },
  isAmino(o: any): o is ClaimAllianceRewardsEventAmino {
    return o && (o.$typeUrl === ClaimAllianceRewardsEvent.typeUrl || typeof o.allianceSender === "string" && typeof o.validator === "string" && Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: ClaimAllianceRewardsEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allianceSender !== "") {
      writer.uint32(10).string(message.allianceSender);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ClaimAllianceRewardsEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimAllianceRewardsEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allianceSender = reader.string();
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClaimAllianceRewardsEvent {
    return {
      allianceSender: isSet(object.allianceSender) ? String(object.allianceSender) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: ClaimAllianceRewardsEvent): unknown {
    const obj: any = {};
    message.allianceSender !== undefined && (obj.allianceSender = message.allianceSender);
    message.validator !== undefined && (obj.validator = message.validator);
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ClaimAllianceRewardsEvent>): ClaimAllianceRewardsEvent {
    const message = createBaseClaimAllianceRewardsEvent();
    message.allianceSender = object.allianceSender ?? "";
    message.validator = object.validator ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ClaimAllianceRewardsEventAmino): ClaimAllianceRewardsEvent {
    const message = createBaseClaimAllianceRewardsEvent();
    if (object.allianceSender !== undefined && object.allianceSender !== null) {
      message.allianceSender = object.allianceSender;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ClaimAllianceRewardsEvent, useInterfaces: boolean = true): ClaimAllianceRewardsEventAmino {
    const obj: any = {};
    obj.allianceSender = message.allianceSender === "" ? undefined : message.allianceSender;
    obj.validator = message.validator === "" ? undefined : message.validator;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: ClaimAllianceRewardsEventAminoMsg): ClaimAllianceRewardsEvent {
    return ClaimAllianceRewardsEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimAllianceRewardsEventProtoMsg, useInterfaces: boolean = true): ClaimAllianceRewardsEvent {
    return ClaimAllianceRewardsEvent.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ClaimAllianceRewardsEvent): Uint8Array {
    return ClaimAllianceRewardsEvent.encode(message).finish();
  },
  toProtoMsg(message: ClaimAllianceRewardsEvent): ClaimAllianceRewardsEventProtoMsg {
    return {
      typeUrl: "/alliance.alliance.ClaimAllianceRewardsEvent",
      value: ClaimAllianceRewardsEvent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ClaimAllianceRewardsEvent.typeUrl, ClaimAllianceRewardsEvent);
function createBaseDeductAllianceAssetsEvent(): DeductAllianceAssetsEvent {
  return {
    coins: []
  };
}
export const DeductAllianceAssetsEvent = {
  typeUrl: "/alliance.alliance.DeductAllianceAssetsEvent",
  is(o: any): o is DeductAllianceAssetsEvent {
    return o && (o.$typeUrl === DeductAllianceAssetsEvent.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isSDK(o: any): o is DeductAllianceAssetsEventSDKType {
    return o && (o.$typeUrl === DeductAllianceAssetsEvent.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])));
  },
  isAmino(o: any): o is DeductAllianceAssetsEventAmino {
    return o && (o.$typeUrl === DeductAllianceAssetsEvent.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: DeductAllianceAssetsEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): DeductAllianceAssetsEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeductAllianceAssetsEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DeductAllianceAssetsEvent {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: DeductAllianceAssetsEvent): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: Partial<DeductAllianceAssetsEvent>): DeductAllianceAssetsEvent {
    const message = createBaseDeductAllianceAssetsEvent();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DeductAllianceAssetsEventAmino): DeductAllianceAssetsEvent {
    const message = createBaseDeductAllianceAssetsEvent();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DeductAllianceAssetsEvent, useInterfaces: boolean = true): DeductAllianceAssetsEventAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: DeductAllianceAssetsEventAminoMsg): DeductAllianceAssetsEvent {
    return DeductAllianceAssetsEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DeductAllianceAssetsEventProtoMsg, useInterfaces: boolean = true): DeductAllianceAssetsEvent {
    return DeductAllianceAssetsEvent.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: DeductAllianceAssetsEvent): Uint8Array {
    return DeductAllianceAssetsEvent.encode(message).finish();
  },
  toProtoMsg(message: DeductAllianceAssetsEvent): DeductAllianceAssetsEventProtoMsg {
    return {
      typeUrl: "/alliance.alliance.DeductAllianceAssetsEvent",
      value: DeductAllianceAssetsEvent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DeductAllianceAssetsEvent.typeUrl, DeductAllianceAssetsEvent);