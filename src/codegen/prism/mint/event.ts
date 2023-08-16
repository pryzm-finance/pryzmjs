import { Minter, MinterSDKType } from "./minter";
import { DistributionProportions, DistributionProportionsSDKType } from "./params";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EventMint {
  minter: Minter;
  bondedRatio: string;
  totalMinted: string;
  distributedAmounts: DistributionProportions;
  epochNumber: Long;
}
export interface EventMintSDKType {
  minter: MinterSDKType;
  bonded_ratio: string;
  total_minted: string;
  distributed_amounts: DistributionProportionsSDKType;
  epoch_number: Long;
}
function createBaseEventMint(): EventMint {
  return {
    minter: Minter.fromPartial({}),
    bondedRatio: "",
    totalMinted: "",
    distributedAmounts: DistributionProportions.fromPartial({}),
    epochNumber: Long.ZERO
  };
}
export const EventMint = {
  encode(message: EventMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minter !== undefined) {
      Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }
    if (message.bondedRatio !== "") {
      writer.uint32(18).string(message.bondedRatio);
    }
    if (message.totalMinted !== "") {
      writer.uint32(26).string(message.totalMinted);
    }
    if (message.distributedAmounts !== undefined) {
      DistributionProportions.encode(message.distributedAmounts, writer.uint32(34).fork()).ldelim();
    }
    if (!message.epochNumber.isZero()) {
      writer.uint32(40).int64(message.epochNumber);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minter = Minter.decode(reader, reader.uint32());
          break;
        case 2:
          message.bondedRatio = reader.string();
          break;
        case 3:
          message.totalMinted = reader.string();
          break;
        case 4:
          message.distributedAmounts = DistributionProportions.decode(reader, reader.uint32());
          break;
        case 5:
          message.epochNumber = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventMint {
    return {
      minter: isSet(object.minter) ? Minter.fromJSON(object.minter) : undefined,
      bondedRatio: isSet(object.bondedRatio) ? String(object.bondedRatio) : "",
      totalMinted: isSet(object.totalMinted) ? String(object.totalMinted) : "",
      distributedAmounts: isSet(object.distributedAmounts) ? DistributionProportions.fromJSON(object.distributedAmounts) : undefined,
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.ZERO
    };
  },
  toJSON(message: EventMint): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter ? Minter.toJSON(message.minter) : undefined);
    message.bondedRatio !== undefined && (obj.bondedRatio = message.bondedRatio);
    message.totalMinted !== undefined && (obj.totalMinted = message.totalMinted);
    message.distributedAmounts !== undefined && (obj.distributedAmounts = message.distributedAmounts ? DistributionProportions.toJSON(message.distributedAmounts) : undefined);
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<EventMint>): EventMint {
    const message = createBaseEventMint();
    message.minter = object.minter !== undefined && object.minter !== null ? Minter.fromPartial(object.minter) : undefined;
    message.bondedRatio = object.bondedRatio ?? "";
    message.totalMinted = object.totalMinted ?? "";
    message.distributedAmounts = object.distributedAmounts !== undefined && object.distributedAmounts !== null ? DistributionProportions.fromPartial(object.distributedAmounts) : undefined;
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.ZERO;
    return message;
  }
};