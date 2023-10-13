import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
export interface DelegateAllianceEvent {
  allianceSender: string;
  validator: string;
  coin: Coin;
  newShares: string;
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
export interface ClaimAllianceRewardsEventSDKType {
  allianceSender: string;
  validator: string;
  coins: CoinSDKType[];
}
export interface DeductAllianceAssetsEvent {
  coins: Coin[];
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
  decode(input: BinaryReader | Uint8Array, length?: number): DelegateAllianceEvent {
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
          message.coin = Coin.decode(reader, reader.uint32());
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
  }
};
function createBaseUndelegateAllianceEvent(): UndelegateAllianceEvent {
  return {
    allianceSender: "",
    validator: "",
    coin: Coin.fromPartial({}),
    completionTime: Timestamp.fromPartial({})
  };
}
export const UndelegateAllianceEvent = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): UndelegateAllianceEvent {
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
          message.coin = Coin.decode(reader, reader.uint32());
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
  }
};
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
  decode(input: BinaryReader | Uint8Array, length?: number): RedelegateAllianceEvent {
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
          message.coin = Coin.decode(reader, reader.uint32());
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
  }
};
function createBaseClaimAllianceRewardsEvent(): ClaimAllianceRewardsEvent {
  return {
    allianceSender: "",
    validator: "",
    coins: []
  };
}
export const ClaimAllianceRewardsEvent = {
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
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimAllianceRewardsEvent {
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
          message.coins.push(Coin.decode(reader, reader.uint32()));
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
  }
};
function createBaseDeductAllianceAssetsEvent(): DeductAllianceAssetsEvent {
  return {
    coins: []
  };
}
export const DeductAllianceAssetsEvent = {
  encode(message: DeductAllianceAssetsEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeductAllianceAssetsEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeductAllianceAssetsEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
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
  }
};