import { SwapStep, SwapStepAmino, SwapStepSDKType } from "../../pryzm/amm/v1/operations";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
export interface SwapSteps {
  steps: SwapStep[];
}
export interface SwapStepsProtoMsg {
  typeUrl: "/pryzmatics.trade.SwapSteps";
  value: Uint8Array;
}
export interface SwapStepsAmino {
  steps?: SwapStepAmino[];
}
export interface SwapStepsAminoMsg {
  type: "/pryzmatics.trade.SwapSteps";
  value: SwapStepsAmino;
}
export interface SwapStepsSDKType {
  steps: SwapStepSDKType[];
}
function createBaseSwapSteps(): SwapSteps {
  return {
    steps: []
  };
}
export const SwapSteps = {
  typeUrl: "/pryzmatics.trade.SwapSteps",
  is(o: any): o is SwapSteps {
    return o && (o.$typeUrl === SwapSteps.typeUrl || Array.isArray(o.steps) && (!o.steps.length || SwapStep.is(o.steps[0])));
  },
  isSDK(o: any): o is SwapStepsSDKType {
    return o && (o.$typeUrl === SwapSteps.typeUrl || Array.isArray(o.steps) && (!o.steps.length || SwapStep.isSDK(o.steps[0])));
  },
  isAmino(o: any): o is SwapStepsAmino {
    return o && (o.$typeUrl === SwapSteps.typeUrl || Array.isArray(o.steps) && (!o.steps.length || SwapStep.isAmino(o.steps[0])));
  },
  encode(message: SwapSteps, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.steps) {
      SwapStep.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SwapSteps {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapSteps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steps.push(SwapStep.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapSteps {
    return {
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => SwapStep.fromJSON(e)) : []
    };
  },
  toJSON(message: SwapSteps): unknown {
    const obj: any = {};
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? SwapStep.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    return obj;
  },
  fromPartial(object: Partial<SwapSteps>): SwapSteps {
    const message = createBaseSwapSteps();
    message.steps = object.steps?.map(e => SwapStep.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SwapStepsAmino): SwapSteps {
    const message = createBaseSwapSteps();
    message.steps = object.steps?.map(e => SwapStep.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SwapSteps, useInterfaces: boolean = true): SwapStepsAmino {
    const obj: any = {};
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? SwapStep.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.steps = message.steps;
    }
    return obj;
  },
  fromAminoMsg(object: SwapStepsAminoMsg): SwapSteps {
    return SwapSteps.fromAmino(object.value);
  },
  fromProtoMsg(message: SwapStepsProtoMsg, useInterfaces: boolean = true): SwapSteps {
    return SwapSteps.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SwapSteps): Uint8Array {
    return SwapSteps.encode(message).finish();
  },
  toProtoMsg(message: SwapSteps): SwapStepsProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.SwapSteps",
      value: SwapSteps.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SwapSteps.typeUrl, SwapSteps);