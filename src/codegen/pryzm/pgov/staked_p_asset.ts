import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** StakedPAsset stores the amount of pAssets staked for an account */
export interface StakedPAsset {
  /** the address of owner */
  account: string;
  /** pAsset denom */
  pAsset: string;
  /** staked amount */
  amount: string;
}
/** StakedPAsset stores the amount of pAssets staked for an account */
export interface StakedPAssetSDKType {
  account: string;
  p_asset: string;
  amount: string;
}
export interface TotalStakedPAsset {
  /** the address of owner */
  account: string;
  /** asset denom */
  asset: string;
  /** staked amount */
  amount: string;
}
export interface TotalStakedPAssetSDKType {
  account: string;
  asset: string;
  amount: string;
}
function createBaseStakedPAsset(): StakedPAsset {
  return {
    account: "",
    pAsset: "",
    amount: ""
  };
}
export const StakedPAsset = {
  encode(message: StakedPAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.pAsset !== "") {
      writer.uint32(18).string(message.pAsset);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakedPAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakedPAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.pAsset = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StakedPAsset {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      pAsset: isSet(object.pAsset) ? String(object.pAsset) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: StakedPAsset): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.pAsset !== undefined && (obj.pAsset = message.pAsset);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<StakedPAsset>): StakedPAsset {
    const message = createBaseStakedPAsset();
    message.account = object.account ?? "";
    message.pAsset = object.pAsset ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};
function createBaseTotalStakedPAsset(): TotalStakedPAsset {
  return {
    account: "",
    asset: "",
    amount: ""
  };
}
export const TotalStakedPAsset = {
  encode(message: TotalStakedPAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalStakedPAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalStakedPAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TotalStakedPAsset {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: TotalStakedPAsset): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.asset !== undefined && (obj.asset = message.asset);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<TotalStakedPAsset>): TotalStakedPAsset {
    const message = createBaseTotalStakedPAsset();
    message.account = object.account ?? "";
    message.asset = object.asset ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};