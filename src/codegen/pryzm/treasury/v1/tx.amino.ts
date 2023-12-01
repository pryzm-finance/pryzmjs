//@ts-nocheck
import { actionTypeFromJSON } from "./action";
import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams, MsgSetAction } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/pryzm.treasury.v1.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      gas_fee_take_ratio: string;
    };
  };
}
export interface MsgSetActionAminoType extends AminoMsg {
  type: "/pryzm.treasury.v1.MsgSetAction";
  value: {
    authority: string;
    action: {
      action_type: number;
      occurrence: {
        seconds: string;
        nanos: number;
      };
      expiration: {
        seconds: string;
        nanos: number;
      };
      period: {
        seconds: string;
        nanos: number;
      };
      flow_trade_settings: {
        start_delay: {
          seconds: string;
          nanos: number;
        };
        duration: {
          seconds: string;
          nanos: number;
        };
        dist_interval: {
          seconds: string;
          nanos: number;
        };
        limit_price: string;
        exit_window_duration: {
          seconds: string;
          nanos: number;
        };
      };
      excluded_denoms: string[];
    };
  };
}
export const AminoConverter = {
  "/pryzm.treasury.v1.MsgUpdateParams": {
    aminoType: "/pryzm.treasury.v1.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          gas_fee_take_ratio: params.gasFeeTakeRatio
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          gasFeeTakeRatio: params.gas_fee_take_ratio
        }
      };
    }
  },
  "/pryzm.treasury.v1.MsgSetAction": {
    aminoType: "/pryzm.treasury.v1.MsgSetAction",
    toAmino: ({
      authority,
      action
    }: MsgSetAction): MsgSetActionAminoType["value"] => {
      return {
        authority,
        action: {
          action_type: action.actionType,
          occurrence: action.occurrence,
          expiration: action.expiration,
          period: (action.period * 1_000_000_000).toString(),
          flow_trade_settings: {
            start_delay: (action.flowTradeSettings.startDelay * 1_000_000_000).toString(),
            duration: (action.flowTradeSettings.duration * 1_000_000_000).toString(),
            dist_interval: (action.flowTradeSettings.distInterval * 1_000_000_000).toString(),
            limit_price: action.flowTradeSettings.limitPrice,
            exit_window_duration: (action.flowTradeSettings.exitWindowDuration * 1_000_000_000).toString()
          },
          excluded_denoms: action.excludedDenoms
        }
      };
    },
    fromAmino: ({
      authority,
      action
    }: MsgSetActionAminoType["value"]): MsgSetAction => {
      return {
        authority,
        action: {
          actionType: actionTypeFromJSON(action.action_type),
          occurrence: action.occurrence,
          expiration: action.expiration,
          period: {
            seconds: BigInt(Math.floor(parseInt(action.period) / 1_000_000_000)),
            nanos: parseInt(action.period) % 1_000_000_000
          },
          flowTradeSettings: {
            startDelay: {
              seconds: BigInt(Math.floor(parseInt(action.flow_trade_settings.start_delay) / 1_000_000_000)),
              nanos: parseInt(action.flow_trade_settings.start_delay) % 1_000_000_000
            },
            duration: {
              seconds: BigInt(Math.floor(parseInt(action.flow_trade_settings.duration) / 1_000_000_000)),
              nanos: parseInt(action.flow_trade_settings.duration) % 1_000_000_000
            },
            distInterval: {
              seconds: BigInt(Math.floor(parseInt(action.flow_trade_settings.dist_interval) / 1_000_000_000)),
              nanos: parseInt(action.flow_trade_settings.dist_interval) % 1_000_000_000
            },
            limitPrice: action.flow_trade_settings.limit_price,
            exitWindowDuration: {
              seconds: BigInt(Math.floor(parseInt(action.flow_trade_settings.exit_window_duration) / 1_000_000_000)),
              nanos: parseInt(action.flow_trade_settings.exit_window_duration) % 1_000_000_000
            }
          },
          excludedDenoms: action.excluded_denoms
        }
      };
    }
  }
};