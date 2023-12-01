import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface OraclePreVote {
  validator: string;
  hash: string;
  submitBlock: bigint;
}
export interface OraclePreVoteSDKType {
  validator: string;
  hash: string;
  submit_block: bigint;
}
function createBaseOraclePreVote(): OraclePreVote {
  return {
    validator: "",
    hash: "",
    submitBlock: BigInt(0)
  };
}
export const OraclePreVote = {
  encode(message: OraclePreVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    if (message.submitBlock !== BigInt(0)) {
      writer.uint32(24).int64(message.submitBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OraclePreVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePreVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.hash = reader.string();
          break;
        case 3:
          message.submitBlock = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OraclePreVote {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      hash: isSet(object.hash) ? String(object.hash) : "",
      submitBlock: isSet(object.submitBlock) ? BigInt(object.submitBlock.toString()) : BigInt(0)
    };
  },
  toJSON(message: OraclePreVote): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.hash !== undefined && (obj.hash = message.hash);
    message.submitBlock !== undefined && (obj.submitBlock = (message.submitBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<OraclePreVote>): OraclePreVote {
    const message = createBaseOraclePreVote();
    message.validator = object.validator ?? "";
    message.hash = object.hash ?? "";
    message.submitBlock = object.submitBlock !== undefined && object.submitBlock !== null ? BigInt(object.submitBlock.toString()) : BigInt(0);
    return message;
  }
};