import { isSet } from "../helpers";
import { BinaryReader, BinaryWriter } from "../binary";
import { GlobalDecoderRegistry } from "../registry";
export enum CaptchaVersion {
  CaptchaVersionV2 = 0,
  CaptchaVersionV3 = 1,
  CaptchaVersionH = 2,
  UNRECOGNIZED = -1,
}
export const CaptchaVersionSDKType = CaptchaVersion;
export const CaptchaVersionAmino = CaptchaVersion;
export function captchaVersionFromJSON(object: any): CaptchaVersion {
  switch (object) {
    case 0:
    case "CaptchaVersionV2":
      return CaptchaVersion.CaptchaVersionV2;
    case 1:
    case "CaptchaVersionV3":
      return CaptchaVersion.CaptchaVersionV3;
    case 2:
    case "CaptchaVersionH":
      return CaptchaVersion.CaptchaVersionH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CaptchaVersion.UNRECOGNIZED;
  }
}
export function captchaVersionToJSON(object: CaptchaVersion): string {
  switch (object) {
    case CaptchaVersion.CaptchaVersionV2:
      return "CaptchaVersionV2";
    case CaptchaVersion.CaptchaVersionV3:
      return "CaptchaVersionV3";
    case CaptchaVersion.CaptchaVersionH:
      return "CaptchaVersionH";
    case CaptchaVersion.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface CaptchaRequest {
  response: string;
  version: CaptchaVersion;
}
export interface CaptchaRequestProtoMsg {
  typeUrl: "/captcha.CaptchaRequest";
  value: Uint8Array;
}
export interface CaptchaRequestAmino {
  response?: string;
  version?: CaptchaVersion;
}
export interface CaptchaRequestAminoMsg {
  type: "/captcha.CaptchaRequest";
  value: CaptchaRequestAmino;
}
export interface CaptchaRequestSDKType {
  response: string;
  version: CaptchaVersion;
}
function createBaseCaptchaRequest(): CaptchaRequest {
  return {
    response: "",
    version: 0
  };
}
export const CaptchaRequest = {
  typeUrl: "/captcha.CaptchaRequest",
  is(o: any): o is CaptchaRequest {
    return o && (o.$typeUrl === CaptchaRequest.typeUrl || typeof o.response === "string" && isSet(o.version));
  },
  isSDK(o: any): o is CaptchaRequestSDKType {
    return o && (o.$typeUrl === CaptchaRequest.typeUrl || typeof o.response === "string" && isSet(o.version));
  },
  isAmino(o: any): o is CaptchaRequestAmino {
    return o && (o.$typeUrl === CaptchaRequest.typeUrl || typeof o.response === "string" && isSet(o.version));
  },
  encode(message: CaptchaRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.response !== "") {
      writer.uint32(10).string(message.response);
    }
    if (message.version !== 0) {
      writer.uint32(16).int32(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): CaptchaRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCaptchaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = reader.string();
          break;
        case 2:
          message.version = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CaptchaRequest {
    return {
      response: isSet(object.response) ? String(object.response) : "",
      version: isSet(object.version) ? captchaVersionFromJSON(object.version) : -1
    };
  },
  toJSON(message: CaptchaRequest): unknown {
    const obj: any = {};
    message.response !== undefined && (obj.response = message.response);
    message.version !== undefined && (obj.version = captchaVersionToJSON(message.version));
    return obj;
  },
  fromPartial(object: Partial<CaptchaRequest>): CaptchaRequest {
    const message = createBaseCaptchaRequest();
    message.response = object.response ?? "";
    message.version = object.version ?? 0;
    return message;
  },
  fromAmino(object: CaptchaRequestAmino): CaptchaRequest {
    const message = createBaseCaptchaRequest();
    if (object.response !== undefined && object.response !== null) {
      message.response = object.response;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: CaptchaRequest, useInterfaces: boolean = true): CaptchaRequestAmino {
    const obj: any = {};
    obj.response = message.response === "" ? undefined : message.response;
    obj.version = message.version === 0 ? undefined : message.version;
    return obj;
  },
  fromAminoMsg(object: CaptchaRequestAminoMsg): CaptchaRequest {
    return CaptchaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CaptchaRequestProtoMsg, useInterfaces: boolean = true): CaptchaRequest {
    return CaptchaRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: CaptchaRequest): Uint8Array {
    return CaptchaRequest.encode(message).finish();
  },
  toProtoMsg(message: CaptchaRequest): CaptchaRequestProtoMsg {
    return {
      typeUrl: "/captcha.CaptchaRequest",
      value: CaptchaRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CaptchaRequest.typeUrl, CaptchaRequest);