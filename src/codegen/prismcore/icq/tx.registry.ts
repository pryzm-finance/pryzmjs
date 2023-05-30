import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitQueryResponse } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/prismfinance.prismcore.icq.MsgSubmitQueryResponse", MsgSubmitQueryResponse]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    submitQueryResponse(value: MsgSubmitQueryResponse) {
      return {
        typeUrl: "/prismfinance.prismcore.icq.MsgSubmitQueryResponse",
        value: MsgSubmitQueryResponse.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitQueryResponse(value: MsgSubmitQueryResponse) {
      return {
        typeUrl: "/prismfinance.prismcore.icq.MsgSubmitQueryResponse",
        value
      };
    }
  },
  toJSON: {
    submitQueryResponse(value: MsgSubmitQueryResponse) {
      return {
        typeUrl: "/prismfinance.prismcore.icq.MsgSubmitQueryResponse",
        value: MsgSubmitQueryResponse.toJSON(value)
      };
    }
  },
  fromJSON: {
    submitQueryResponse(value: any) {
      return {
        typeUrl: "/prismfinance.prismcore.icq.MsgSubmitQueryResponse",
        value: MsgSubmitQueryResponse.fromJSON(value)
      };
    }
  },
  fromPartial: {
    submitQueryResponse(value: MsgSubmitQueryResponse) {
      return {
        typeUrl: "/prismfinance.prismcore.icq.MsgSubmitQueryResponse",
        value: MsgSubmitQueryResponse.fromPartial(value)
      };
    }
  }
};