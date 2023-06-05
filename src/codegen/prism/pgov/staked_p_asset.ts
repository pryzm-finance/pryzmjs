import * as _m0 from "protobufjs/minimal";
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
function createBaseStakedPAsset(): StakedPAsset {
  return {
    account: "",
    pAsset: "",
    amount: ""
  };
}
export const StakedPAsset = {
  encode(message: StakedPAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): StakedPAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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