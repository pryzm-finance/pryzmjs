import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface TreasuryBalance {
  denom: string;
  balance: string;
  balanceStableCoinTerms: string;
}
export interface TreasuryBalanceProtoMsg {
  typeUrl: "/pryzmatics.statistics.TreasuryBalance";
  value: Uint8Array;
}
export interface TreasuryBalanceAmino {
  denom?: string;
  balance?: string;
  balance_stable_coin_terms?: string;
}
export interface TreasuryBalanceAminoMsg {
  type: "/pryzmatics.statistics.TreasuryBalance";
  value: TreasuryBalanceAmino;
}
export interface TreasuryBalanceSDKType {
  denom: string;
  balance: string;
  balance_stable_coin_terms: string;
}
function createBaseTreasuryBalance(): TreasuryBalance {
  return {
    denom: "",
    balance: "",
    balanceStableCoinTerms: ""
  };
}
export const TreasuryBalance = {
  typeUrl: "/pryzmatics.statistics.TreasuryBalance",
  is(o: any): o is TreasuryBalance {
    return o && (o.$typeUrl === TreasuryBalance.typeUrl || typeof o.denom === "string" && typeof o.balance === "string" && typeof o.balanceStableCoinTerms === "string");
  },
  isSDK(o: any): o is TreasuryBalanceSDKType {
    return o && (o.$typeUrl === TreasuryBalance.typeUrl || typeof o.denom === "string" && typeof o.balance === "string" && typeof o.balance_stable_coin_terms === "string");
  },
  isAmino(o: any): o is TreasuryBalanceAmino {
    return o && (o.$typeUrl === TreasuryBalance.typeUrl || typeof o.denom === "string" && typeof o.balance === "string" && typeof o.balance_stable_coin_terms === "string");
  },
  encode(message: TreasuryBalance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.balance !== "") {
      writer.uint32(18).string(message.balance);
    }
    if (message.balanceStableCoinTerms !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.balanceStableCoinTerms, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): TreasuryBalance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTreasuryBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.balance = reader.string();
          break;
        case 3:
          message.balanceStableCoinTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TreasuryBalance {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      balanceStableCoinTerms: isSet(object.balanceStableCoinTerms) ? String(object.balanceStableCoinTerms) : ""
    };
  },
  toJSON(message: TreasuryBalance): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.balance !== undefined && (obj.balance = message.balance);
    message.balanceStableCoinTerms !== undefined && (obj.balanceStableCoinTerms = message.balanceStableCoinTerms);
    return obj;
  },
  fromPartial(object: Partial<TreasuryBalance>): TreasuryBalance {
    const message = createBaseTreasuryBalance();
    message.denom = object.denom ?? "";
    message.balance = object.balance ?? "";
    message.balanceStableCoinTerms = object.balanceStableCoinTerms ?? "";
    return message;
  },
  fromAmino(object: TreasuryBalanceAmino): TreasuryBalance {
    const message = createBaseTreasuryBalance();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    if (object.balance_stable_coin_terms !== undefined && object.balance_stable_coin_terms !== null) {
      message.balanceStableCoinTerms = object.balance_stable_coin_terms;
    }
    return message;
  },
  toAmino(message: TreasuryBalance, useInterfaces: boolean = true): TreasuryBalanceAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.balance = message.balance === "" ? undefined : message.balance;
    obj.balance_stable_coin_terms = padDecimal(message.balanceStableCoinTerms) === "" ? undefined : padDecimal(message.balanceStableCoinTerms);
    return obj;
  },
  fromAminoMsg(object: TreasuryBalanceAminoMsg): TreasuryBalance {
    return TreasuryBalance.fromAmino(object.value);
  },
  fromProtoMsg(message: TreasuryBalanceProtoMsg, useInterfaces: boolean = true): TreasuryBalance {
    return TreasuryBalance.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: TreasuryBalance): Uint8Array {
    return TreasuryBalance.encode(message).finish();
  },
  toProtoMsg(message: TreasuryBalance): TreasuryBalanceProtoMsg {
    return {
      typeUrl: "/pryzmatics.statistics.TreasuryBalance",
      value: TreasuryBalance.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TreasuryBalance.typeUrl, TreasuryBalance);