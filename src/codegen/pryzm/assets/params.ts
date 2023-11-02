import { FeeRatios, FeeRatiosSDKType } from "./refractable_asset";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  defaultFeeRatios: FeeRatios;
  /** the list of admin addresses, able to register new assets or disable an existing asset */
  admins: string[];
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  default_fee_ratios: FeeRatiosSDKType;
  admins: string[];
}
function createBaseParams(): Params {
  return {
    defaultFeeRatios: FeeRatios.fromPartial({}),
    admins: []
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.defaultFeeRatios !== undefined) {
      FeeRatios.encode(message.defaultFeeRatios, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.admins) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultFeeRatios = FeeRatios.decode(reader, reader.uint32());
          break;
        case 2:
          message.admins.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      defaultFeeRatios: isSet(object.defaultFeeRatios) ? FeeRatios.fromJSON(object.defaultFeeRatios) : undefined,
      admins: Array.isArray(object?.admins) ? object.admins.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.defaultFeeRatios !== undefined && (obj.defaultFeeRatios = message.defaultFeeRatios ? FeeRatios.toJSON(message.defaultFeeRatios) : undefined);
    if (message.admins) {
      obj.admins = message.admins.map(e => e);
    } else {
      obj.admins = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.defaultFeeRatios = object.defaultFeeRatios !== undefined && object.defaultFeeRatios !== null ? FeeRatios.fromPartial(object.defaultFeeRatios) : undefined;
    message.admins = object.admins?.map(e => e) || [];
    return message;
  }
};