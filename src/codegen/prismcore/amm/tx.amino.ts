//@ts-nocheck
import { swapTypeFromJSON } from "./operations";
import { twapAlgorithmFromJSON } from "./oracle_price_pair";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgSingleSwap, MsgJoinAllTokensExactLpt, MsgJoinTokenExactLpt, MsgJoinExactTokens, MsgExitExactTokens, MsgExitTokenExactLpt, MsgExitAllTokensExactLpt, MsgCreateWeightedPool, MsgUpdateSwapFee, MsgInitializePool, MsgUpdateWeights, MsgBatchSwap, MsgSetYammConfiguration, MsgWhitelistRoute, MsgSetWhitelistedRouteEnabled, MsgSubmitOrder, MsgCancelOrder, MsgProposeMatch, MsgSetCircuitBreakers, MsgSetRecoveryMode, MsgRecoveryExit, MsgSetPauseMode, MsgSetVaultPauseMode, MsgCreateOraclePricePair, MsgUpdateOraclePricePair, MsgDeleteOraclePricePair, MsgSetSwapProtocolFee, MsgSetJoinExitProtocolFee, MsgIntroduceYammLpToWeightedPool, MsgCancelPendingTokenIntroduction, MsgRemoveTokenFromWeightedPool, MsgUpdateParams, MsgAddMaturityToYamm, MsgSetInitializationAllowList } from "./tx";
export interface MsgSingleSwapAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgSingleSwap";
  value: {
    creator: string;
    swap: {
      pool_id: string;
      amount: string;
      swap_type: number;
      token_in: string;
      token_out: string;
    };
    max_amount_in: string;
    min_amount_out: string;
  };
}
export interface MsgJoinAllTokensExactLptAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgJoinAllTokensExactLpt";
  value: {
    creator: string;
    pool_id: string;
    lpt_out: string;
    max_amounts_in: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgJoinTokenExactLptAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgJoinTokenExactLpt";
  value: {
    creator: string;
    pool_id: string;
    lpt_out: string;
    token_in: string;
    max_amount_in: string;
  };
}
export interface MsgJoinExactTokensAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgJoinExactTokens";
  value: {
    creator: string;
    pool_id: string;
    amounts_in: {
      denom: string;
      amount: string;
    }[];
    min_lpt_out: string;
  };
}
export interface MsgExitExactTokensAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgExitExactTokens";
  value: {
    creator: string;
    pool_id: string;
    amounts_out: {
      denom: string;
      amount: string;
    }[];
    max_lpt_in: string;
  };
}
export interface MsgExitTokenExactLptAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgExitTokenExactLpt";
  value: {
    creator: string;
    pool_id: string;
    lpt_in: string;
    token_out: string;
    min_amount_out: string;
  };
}
export interface MsgExitAllTokensExactLptAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgExitAllTokensExactLpt";
  value: {
    creator: string;
    pool_id: string;
    lpt_in: string;
    min_amounts_out: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgCreateWeightedPoolAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgCreateWeightedPool";
  value: {
    creator: string;
    name: string;
    swap_fee_ratio: string;
    pause_window_duration_millis: string;
    pause_buffer_duration_millis: string;
    tokens: {
      denom: string;
      normalized_weight: string;
    }[];
    initialization_allow_list: string[];
  };
}
export interface MsgUpdateSwapFeeAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgUpdateSwapFee";
  value: {
    creator: string;
    pool_id: string;
    swap_fee_ratio: string;
  };
}
export interface MsgInitializePoolAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgInitializePool";
  value: {
    creator: string;
    pool_id: string;
    amounts_in: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgUpdateWeightsAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgUpdateWeights";
  value: {
    creator: string;
    pool_id: string;
    token_weights: {
      denom: string;
      normalized_weight: string;
    }[];
    start_time_unix_millis: string;
    end_time_unix_millis: string;
  };
}
export interface MsgBatchSwapAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgBatchSwap";
  value: {
    creator: string;
    swap_type: number;
    steps: {
      pool_id: string;
      amount: string;
      token_in: string;
      token_out: string;
    }[];
    min_amounts_out: {
      denom: string;
      amount: string;
    }[];
    max_amounts_in: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgSetYammConfigurationAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgSetYammConfiguration";
  value: {
    creator: string;
    configuration: {
      pool_id: string;
      maturity_introduction_interval_millis: string;
      maturity_expiration_interval_millis: string;
      expiration_virtual_balance_scaler: string;
      expired_asset_discount_ratio: string;
      buy_y_given_in_loan_fee_ratio: string;
      sell_y_given_out_fee_ratio: string;
      swap_yield_fee_ratio: string;
      leverage_scaler: string;
      max_weight_ratio: string;
    };
  };
}
export interface MsgWhitelistRouteAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgWhitelistRoute";
  value: {
    authority: string;
    whitelisted_route: {
      steps: {
        pool_id: string;
        token_in: string;
        token_out: string;
      }[];
      enabled: boolean;
    };
  };
}
export interface MsgSetWhitelistedRouteEnabledAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgSetWhitelistedRouteEnabled";
  value: {
    authority: string;
    token_in: string;
    token_out: string;
    enabled: boolean;
  };
}
export interface MsgSubmitOrderAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgSubmitOrder";
  value: {
    creator: string;
    pool_id: string;
    token_in: string;
    token_out: string;
    whitelisted_route: boolean;
    allow_matching: boolean;
    amount_per_step: string;
    total_amount: string;
    millis_interval: string;
    max_step_spot_price: string;
    max_matching_spot_price: string;
  };
}
export interface MsgCancelOrderAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgCancelOrder";
  value: {
    creator: string;
    id: string;
  };
}
export interface MsgProposeMatchAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgProposeMatch";
  value: {
    creator: string;
    pairs: {
      pool_id: string;
      whitelisted_route: boolean;
      token_in: string;
      token_out: string;
      buy_orders: string[];
      sell_orders: string[];
    }[];
  };
}
export interface MsgSetCircuitBreakersAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgSetCircuitBreakers";
  value: {
    creator: string;
    pool_id: string;
    token_circuit_breakers: {
      denom: string;
      circuit_breaker: {
        reference_lpt_price: string;
        lower_bound: string;
        upper_bound: string;
      };
    }[];
  };
}
export interface MsgSetRecoveryModeAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgSetRecoveryMode";
  value: {
    authority: string;
    pool_id: string;
    recovery_mode: boolean;
  };
}
export interface MsgRecoveryExitAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgRecoveryExit";
  value: {
    creator: string;
    pool_id: string;
    lpt_in: string;
    min_amounts_out: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgSetPauseModeAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgSetPauseMode";
  value: {
    creator: string;
    pool_id: string;
    pause_mode: boolean;
  };
}
export interface MsgSetVaultPauseModeAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgSetVaultPauseMode";
  value: {
    authority: string;
    pause_mode: boolean;
  };
}
export interface MsgCreateOraclePricePairAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgCreateOraclePricePair";
  value: {
    authority: string;
    oracle_price_pair: {
      asset_id: string;
      quote_token: string;
      twap_duration_millis: string;
      twap_algorithm: number;
      disabled: boolean;
      pairs: {
        base: string;
        quote: string;
        pool_id: string;
        data_source: string;
      }[];
    };
  };
}
export interface MsgUpdateOraclePricePairAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgUpdateOraclePricePair";
  value: {
    authority: string;
    oracle_price_pair: {
      asset_id: string;
      quote_token: string;
      twap_duration_millis: string;
      twap_algorithm: number;
      disabled: boolean;
      pairs: {
        base: string;
        quote: string;
        pool_id: string;
        data_source: string;
      }[];
    };
  };
}
export interface MsgDeleteOraclePricePairAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgDeleteOraclePricePair";
  value: {
    authority: string;
    asset_id: string;
  };
}
export interface MsgSetSwapProtocolFeeAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgSetSwapProtocolFee";
  value: {
    authority: string;
    pool_id: string;
    swap_protocol_fee: string;
  };
}
export interface MsgSetJoinExitProtocolFeeAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgSetJoinExitProtocolFee";
  value: {
    authority: string;
    pool_id: string;
    join_exit_protocol_fee: string;
  };
}
export interface MsgIntroduceYammLpToWeightedPoolAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgIntroduceYammLpToWeightedPool";
  value: {
    authority: string;
    weighted_pool_id: string;
    yamm_pool_id: string;
    token_normalized_weight: string;
    virtual_balance_interval_millis: string;
  };
}
export interface MsgCancelPendingTokenIntroductionAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgCancelPendingTokenIntroduction";
  value: {
    authority: string;
    asset_id: string;
    target_pool_id: string;
  };
}
export interface MsgRemoveTokenFromWeightedPoolAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgRemoveTokenFromWeightedPool";
  value: {
    creator: string;
    pool_id: string;
    token_denom: string;
    virtual_balance_interval_millis: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgUpdateParams";
  value: {
    authority: string;
    general_pool_parameters: {
      allow_public_pool_creation: boolean;
      default_swap_fee_ratio: string;
      swap_protocol_fee_ratio: string;
      join_exit_protocol_fee_ratio: string;
    };
    yamm_parameters: {
      maturity_introduction_interval_millis: string;
      maturity_expiration_interval_millis: string;
      expiration_virtual_balance_scaler: string;
      expired_asset_discount_ratio: string;
      buy_y_given_in_loan_fee_ratio: string;
      sell_y_given_out_fee_ratio: string;
      swap_yield_fee_ratio: string;
      leverage_scaler: string;
      max_weight_ratio: string;
    };
    order_parameters: {
      step_matching_fee_ratio: string;
      step_swap_fee_ratio: string;
      matching_protocol_fee_ratio: string;
      matching_solver_fee_ratio: string;
      max_orders_per_block: number;
      max_schedule_per_block: number;
      max_exec_order_trade_ratio: string;
      max_order_step_ratio: string;
      min_order_step_ratio: string;
    };
  };
}
export interface MsgAddMaturityToYammAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgAddMaturityToYamm";
  value: {
    authority: string;
    assetId: string;
    maturitySymbol: string;
  };
}
export interface MsgSetInitializationAllowListAminoType extends AminoMsg {
  type: "/prismfinance.prismcore.amm.MsgSetInitializationAllowList";
  value: {
    creator: string;
    pool_id: string;
    initialization_allow_list: string[];
  };
}
export const AminoConverter = {
  "/prismfinance.prismcore.amm.MsgSingleSwap": {
    aminoType: "/prismfinance.prismcore.amm.MsgSingleSwap",
    toAmino: ({
      creator,
      swap,
      maxAmountIn,
      minAmountOut
    }: MsgSingleSwap): MsgSingleSwapAminoType["value"] => {
      return {
        creator,
        swap: {
          pool_id: swap.poolId.toString(),
          amount: swap.amount,
          swap_type: swap.swapType,
          token_in: swap.tokenIn,
          token_out: swap.tokenOut
        },
        max_amount_in: maxAmountIn,
        min_amount_out: minAmountOut
      };
    },
    fromAmino: ({
      creator,
      swap,
      max_amount_in,
      min_amount_out
    }: MsgSingleSwapAminoType["value"]): MsgSingleSwap => {
      return {
        creator,
        swap: {
          poolId: Long.fromString(swap.pool_id),
          amount: swap.amount,
          swapType: swapTypeFromJSON(swap.swap_type),
          tokenIn: swap.token_in,
          tokenOut: swap.token_out
        },
        maxAmountIn: max_amount_in,
        minAmountOut: min_amount_out
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgJoinAllTokensExactLpt": {
    aminoType: "/prismfinance.prismcore.amm.MsgJoinAllTokensExactLpt",
    toAmino: ({
      creator,
      poolId,
      lptOut,
      maxAmountsIn
    }: MsgJoinAllTokensExactLpt): MsgJoinAllTokensExactLptAminoType["value"] => {
      return {
        creator,
        pool_id: poolId.toString(),
        lpt_out: lptOut,
        max_amounts_in: maxAmountsIn.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      creator,
      pool_id,
      lpt_out,
      max_amounts_in
    }: MsgJoinAllTokensExactLptAminoType["value"]): MsgJoinAllTokensExactLpt => {
      return {
        creator,
        poolId: Long.fromString(pool_id),
        lptOut: lpt_out,
        maxAmountsIn: max_amounts_in.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgJoinTokenExactLpt": {
    aminoType: "/prismfinance.prismcore.amm.MsgJoinTokenExactLpt",
    toAmino: ({
      creator,
      poolId,
      lptOut,
      tokenIn,
      maxAmountIn
    }: MsgJoinTokenExactLpt): MsgJoinTokenExactLptAminoType["value"] => {
      return {
        creator,
        pool_id: poolId.toString(),
        lpt_out: lptOut,
        token_in: tokenIn,
        max_amount_in: maxAmountIn
      };
    },
    fromAmino: ({
      creator,
      pool_id,
      lpt_out,
      token_in,
      max_amount_in
    }: MsgJoinTokenExactLptAminoType["value"]): MsgJoinTokenExactLpt => {
      return {
        creator,
        poolId: Long.fromString(pool_id),
        lptOut: lpt_out,
        tokenIn: token_in,
        maxAmountIn: max_amount_in
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgJoinExactTokens": {
    aminoType: "/prismfinance.prismcore.amm.MsgJoinExactTokens",
    toAmino: ({
      creator,
      poolId,
      amountsIn,
      minLptOut
    }: MsgJoinExactTokens): MsgJoinExactTokensAminoType["value"] => {
      return {
        creator,
        pool_id: poolId.toString(),
        amounts_in: amountsIn.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        min_lpt_out: minLptOut
      };
    },
    fromAmino: ({
      creator,
      pool_id,
      amounts_in,
      min_lpt_out
    }: MsgJoinExactTokensAminoType["value"]): MsgJoinExactTokens => {
      return {
        creator,
        poolId: Long.fromString(pool_id),
        amountsIn: amounts_in.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        minLptOut: min_lpt_out
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgExitExactTokens": {
    aminoType: "/prismfinance.prismcore.amm.MsgExitExactTokens",
    toAmino: ({
      creator,
      poolId,
      amountsOut,
      maxLptIn
    }: MsgExitExactTokens): MsgExitExactTokensAminoType["value"] => {
      return {
        creator,
        pool_id: poolId.toString(),
        amounts_out: amountsOut.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        max_lpt_in: maxLptIn
      };
    },
    fromAmino: ({
      creator,
      pool_id,
      amounts_out,
      max_lpt_in
    }: MsgExitExactTokensAminoType["value"]): MsgExitExactTokens => {
      return {
        creator,
        poolId: Long.fromString(pool_id),
        amountsOut: amounts_out.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        maxLptIn: max_lpt_in
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgExitTokenExactLpt": {
    aminoType: "/prismfinance.prismcore.amm.MsgExitTokenExactLpt",
    toAmino: ({
      creator,
      poolId,
      lptIn,
      tokenOut,
      minAmountOut
    }: MsgExitTokenExactLpt): MsgExitTokenExactLptAminoType["value"] => {
      return {
        creator,
        pool_id: poolId.toString(),
        lpt_in: lptIn,
        token_out: tokenOut,
        min_amount_out: minAmountOut
      };
    },
    fromAmino: ({
      creator,
      pool_id,
      lpt_in,
      token_out,
      min_amount_out
    }: MsgExitTokenExactLptAminoType["value"]): MsgExitTokenExactLpt => {
      return {
        creator,
        poolId: Long.fromString(pool_id),
        lptIn: lpt_in,
        tokenOut: token_out,
        minAmountOut: min_amount_out
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgExitAllTokensExactLpt": {
    aminoType: "/prismfinance.prismcore.amm.MsgExitAllTokensExactLpt",
    toAmino: ({
      creator,
      poolId,
      lptIn,
      minAmountsOut
    }: MsgExitAllTokensExactLpt): MsgExitAllTokensExactLptAminoType["value"] => {
      return {
        creator,
        pool_id: poolId.toString(),
        lpt_in: lptIn,
        min_amounts_out: minAmountsOut.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      creator,
      pool_id,
      lpt_in,
      min_amounts_out
    }: MsgExitAllTokensExactLptAminoType["value"]): MsgExitAllTokensExactLpt => {
      return {
        creator,
        poolId: Long.fromString(pool_id),
        lptIn: lpt_in,
        minAmountsOut: min_amounts_out.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgCreateWeightedPool": {
    aminoType: "/prismfinance.prismcore.amm.MsgCreateWeightedPool",
    toAmino: ({
      creator,
      name,
      swapFeeRatio,
      pauseWindowDurationMillis,
      pauseBufferDurationMillis,
      tokens,
      initializationAllowList
    }: MsgCreateWeightedPool): MsgCreateWeightedPoolAminoType["value"] => {
      return {
        creator,
        name,
        swap_fee_ratio: swapFeeRatio,
        pause_window_duration_millis: pauseWindowDurationMillis.toString(),
        pause_buffer_duration_millis: pauseBufferDurationMillis.toString(),
        tokens: tokens.map(el0 => ({
          denom: el0.denom,
          normalized_weight: el0.normalizedWeight
        })),
        initialization_allow_list: initializationAllowList
      };
    },
    fromAmino: ({
      creator,
      name,
      swap_fee_ratio,
      pause_window_duration_millis,
      pause_buffer_duration_millis,
      tokens,
      initialization_allow_list
    }: MsgCreateWeightedPoolAminoType["value"]): MsgCreateWeightedPool => {
      return {
        creator,
        name,
        swapFeeRatio: swap_fee_ratio,
        pauseWindowDurationMillis: Long.fromString(pause_window_duration_millis),
        pauseBufferDurationMillis: Long.fromString(pause_buffer_duration_millis),
        tokens: tokens.map(el0 => ({
          denom: el0.denom,
          normalizedWeight: el0.normalized_weight
        })),
        initializationAllowList: initialization_allow_list
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgUpdateSwapFee": {
    aminoType: "/prismfinance.prismcore.amm.MsgUpdateSwapFee",
    toAmino: ({
      creator,
      poolId,
      swapFeeRatio
    }: MsgUpdateSwapFee): MsgUpdateSwapFeeAminoType["value"] => {
      return {
        creator,
        pool_id: poolId.toString(),
        swap_fee_ratio: swapFeeRatio
      };
    },
    fromAmino: ({
      creator,
      pool_id,
      swap_fee_ratio
    }: MsgUpdateSwapFeeAminoType["value"]): MsgUpdateSwapFee => {
      return {
        creator,
        poolId: Long.fromString(pool_id),
        swapFeeRatio: swap_fee_ratio
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgInitializePool": {
    aminoType: "/prismfinance.prismcore.amm.MsgInitializePool",
    toAmino: ({
      creator,
      poolId,
      amountsIn
    }: MsgInitializePool): MsgInitializePoolAminoType["value"] => {
      return {
        creator,
        pool_id: poolId.toString(),
        amounts_in: amountsIn.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      creator,
      pool_id,
      amounts_in
    }: MsgInitializePoolAminoType["value"]): MsgInitializePool => {
      return {
        creator,
        poolId: Long.fromString(pool_id),
        amountsIn: amounts_in.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgUpdateWeights": {
    aminoType: "/prismfinance.prismcore.amm.MsgUpdateWeights",
    toAmino: ({
      creator,
      poolId,
      tokenWeights,
      startTimeUnixMillis,
      endTimeUnixMillis
    }: MsgUpdateWeights): MsgUpdateWeightsAminoType["value"] => {
      return {
        creator,
        pool_id: poolId.toString(),
        token_weights: tokenWeights.map(el0 => ({
          denom: el0.denom,
          normalized_weight: el0.normalizedWeight
        })),
        start_time_unix_millis: startTimeUnixMillis.toString(),
        end_time_unix_millis: endTimeUnixMillis.toString()
      };
    },
    fromAmino: ({
      creator,
      pool_id,
      token_weights,
      start_time_unix_millis,
      end_time_unix_millis
    }: MsgUpdateWeightsAminoType["value"]): MsgUpdateWeights => {
      return {
        creator,
        poolId: Long.fromString(pool_id),
        tokenWeights: token_weights.map(el0 => ({
          denom: el0.denom,
          normalizedWeight: el0.normalized_weight
        })),
        startTimeUnixMillis: Long.fromString(start_time_unix_millis),
        endTimeUnixMillis: Long.fromString(end_time_unix_millis)
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgBatchSwap": {
    aminoType: "/prismfinance.prismcore.amm.MsgBatchSwap",
    toAmino: ({
      creator,
      swapType,
      steps,
      minAmountsOut,
      maxAmountsIn
    }: MsgBatchSwap): MsgBatchSwapAminoType["value"] => {
      return {
        creator,
        swap_type: swapType,
        steps: steps.map(el0 => ({
          pool_id: el0.poolId.toString(),
          amount: el0.amount,
          token_in: el0.tokenIn,
          token_out: el0.tokenOut
        })),
        min_amounts_out: minAmountsOut.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        max_amounts_in: maxAmountsIn.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      creator,
      swap_type,
      steps,
      min_amounts_out,
      max_amounts_in
    }: MsgBatchSwapAminoType["value"]): MsgBatchSwap => {
      return {
        creator,
        swapType: swapTypeFromJSON(swap_type),
        steps: steps.map(el0 => ({
          poolId: Long.fromString(el0.pool_id),
          amount: el0.amount,
          tokenIn: el0.token_in,
          tokenOut: el0.token_out
        })),
        minAmountsOut: min_amounts_out.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        maxAmountsIn: max_amounts_in.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgSetYammConfiguration": {
    aminoType: "/prismfinance.prismcore.amm.MsgSetYammConfiguration",
    toAmino: ({
      creator,
      configuration
    }: MsgSetYammConfiguration): MsgSetYammConfigurationAminoType["value"] => {
      return {
        creator,
        configuration: {
          pool_id: configuration.poolId.toString(),
          maturity_introduction_interval_millis: configuration.maturityIntroductionIntervalMillis,
          maturity_expiration_interval_millis: configuration.maturityExpirationIntervalMillis,
          expiration_virtual_balance_scaler: configuration.expirationVirtualBalanceScaler,
          expired_asset_discount_ratio: configuration.expiredAssetDiscountRatio,
          buy_y_given_in_loan_fee_ratio: configuration.buyYGivenInLoanFeeRatio,
          sell_y_given_out_fee_ratio: configuration.sellYGivenOutFeeRatio,
          swap_yield_fee_ratio: configuration.swapYieldFeeRatio,
          leverage_scaler: configuration.leverageScaler,
          max_weight_ratio: configuration.maxWeightRatio
        }
      };
    },
    fromAmino: ({
      creator,
      configuration
    }: MsgSetYammConfigurationAminoType["value"]): MsgSetYammConfiguration => {
      return {
        creator,
        configuration: {
          poolId: Long.fromString(configuration.pool_id),
          maturityIntroductionIntervalMillis: configuration.maturity_introduction_interval_millis,
          maturityExpirationIntervalMillis: configuration.maturity_expiration_interval_millis,
          expirationVirtualBalanceScaler: configuration.expiration_virtual_balance_scaler,
          expiredAssetDiscountRatio: configuration.expired_asset_discount_ratio,
          buyYGivenInLoanFeeRatio: configuration.buy_y_given_in_loan_fee_ratio,
          sellYGivenOutFeeRatio: configuration.sell_y_given_out_fee_ratio,
          swapYieldFeeRatio: configuration.swap_yield_fee_ratio,
          leverageScaler: configuration.leverage_scaler,
          maxWeightRatio: configuration.max_weight_ratio
        }
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgWhitelistRoute": {
    aminoType: "/prismfinance.prismcore.amm.MsgWhitelistRoute",
    toAmino: ({
      authority,
      whitelistedRoute
    }: MsgWhitelistRoute): MsgWhitelistRouteAminoType["value"] => {
      return {
        authority,
        whitelisted_route: {
          steps: whitelistedRoute.steps.map(el0 => ({
            pool_id: el0.poolId.toString(),
            token_in: el0.tokenIn,
            token_out: el0.tokenOut
          })),
          enabled: whitelistedRoute.enabled
        }
      };
    },
    fromAmino: ({
      authority,
      whitelisted_route
    }: MsgWhitelistRouteAminoType["value"]): MsgWhitelistRoute => {
      return {
        authority,
        whitelistedRoute: {
          steps: whitelisted_route.steps.map(el1 => ({
            poolId: Long.fromString(el1.pool_id),
            tokenIn: el1.token_in,
            tokenOut: el1.token_out
          })),
          enabled: whitelisted_route.enabled
        }
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgSetWhitelistedRouteEnabled": {
    aminoType: "/prismfinance.prismcore.amm.MsgSetWhitelistedRouteEnabled",
    toAmino: ({
      authority,
      tokenIn,
      tokenOut,
      enabled
    }: MsgSetWhitelistedRouteEnabled): MsgSetWhitelistedRouteEnabledAminoType["value"] => {
      return {
        authority,
        token_in: tokenIn,
        token_out: tokenOut,
        enabled
      };
    },
    fromAmino: ({
      authority,
      token_in,
      token_out,
      enabled
    }: MsgSetWhitelistedRouteEnabledAminoType["value"]): MsgSetWhitelistedRouteEnabled => {
      return {
        authority,
        tokenIn: token_in,
        tokenOut: token_out,
        enabled
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgSubmitOrder": {
    aminoType: "/prismfinance.prismcore.amm.MsgSubmitOrder",
    toAmino: ({
      creator,
      poolId,
      tokenIn,
      tokenOut,
      whitelistedRoute,
      allowMatching,
      amountPerStep,
      totalAmount,
      millisInterval,
      maxStepSpotPrice,
      maxMatchingSpotPrice
    }: MsgSubmitOrder): MsgSubmitOrderAminoType["value"] => {
      return {
        creator,
        pool_id: poolId.toString(),
        token_in: tokenIn,
        token_out: tokenOut,
        whitelisted_route: whitelistedRoute,
        allow_matching: allowMatching,
        amount_per_step: amountPerStep,
        total_amount: totalAmount,
        millis_interval: millisInterval.toString(),
        max_step_spot_price: maxStepSpotPrice,
        max_matching_spot_price: maxMatchingSpotPrice
      };
    },
    fromAmino: ({
      creator,
      pool_id,
      token_in,
      token_out,
      whitelisted_route,
      allow_matching,
      amount_per_step,
      total_amount,
      millis_interval,
      max_step_spot_price,
      max_matching_spot_price
    }: MsgSubmitOrderAminoType["value"]): MsgSubmitOrder => {
      return {
        creator,
        poolId: Long.fromString(pool_id),
        tokenIn: token_in,
        tokenOut: token_out,
        whitelistedRoute: whitelisted_route,
        allowMatching: allow_matching,
        amountPerStep: amount_per_step,
        totalAmount: total_amount,
        millisInterval: Long.fromString(millis_interval),
        maxStepSpotPrice: max_step_spot_price,
        maxMatchingSpotPrice: max_matching_spot_price
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgCancelOrder": {
    aminoType: "/prismfinance.prismcore.amm.MsgCancelOrder",
    toAmino: ({
      creator,
      id
    }: MsgCancelOrder): MsgCancelOrderAminoType["value"] => {
      return {
        creator,
        id: id.toString()
      };
    },
    fromAmino: ({
      creator,
      id
    }: MsgCancelOrderAminoType["value"]): MsgCancelOrder => {
      return {
        creator,
        id: Long.fromString(id)
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgProposeMatch": {
    aminoType: "/prismfinance.prismcore.amm.MsgProposeMatch",
    toAmino: ({
      creator,
      pairs
    }: MsgProposeMatch): MsgProposeMatchAminoType["value"] => {
      return {
        creator,
        pairs: pairs.map(el0 => ({
          pool_id: el0.poolId.toString(),
          whitelisted_route: el0.whitelistedRoute,
          token_in: el0.tokenIn,
          token_out: el0.tokenOut,
          buy_orders: el0.buyOrders.map(el1 => el1.toString()),
          sell_orders: el0.sellOrders.map(el1 => el1.toString())
        }))
      };
    },
    fromAmino: ({
      creator,
      pairs
    }: MsgProposeMatchAminoType["value"]): MsgProposeMatch => {
      return {
        creator,
        pairs: pairs.map(el0 => ({
          poolId: Long.fromString(el0.pool_id),
          whitelistedRoute: el0.whitelisted_route,
          tokenIn: el0.token_in,
          tokenOut: el0.token_out,
          buyOrders: el0.buy_orders.map(el1 => Long.fromString(el1)),
          sellOrders: el0.sell_orders.map(el1 => Long.fromString(el1))
        }))
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgSetCircuitBreakers": {
    aminoType: "/prismfinance.prismcore.amm.MsgSetCircuitBreakers",
    toAmino: ({
      creator,
      poolId,
      tokenCircuitBreakers
    }: MsgSetCircuitBreakers): MsgSetCircuitBreakersAminoType["value"] => {
      return {
        creator,
        pool_id: poolId.toString(),
        token_circuit_breakers: tokenCircuitBreakers.map(el0 => ({
          denom: el0.denom,
          circuit_breaker: {
            reference_lpt_price: el0.circuitBreaker.referenceLptPrice,
            lower_bound: el0.circuitBreaker.lowerBound,
            upper_bound: el0.circuitBreaker.upperBound
          }
        }))
      };
    },
    fromAmino: ({
      creator,
      pool_id,
      token_circuit_breakers
    }: MsgSetCircuitBreakersAminoType["value"]): MsgSetCircuitBreakers => {
      return {
        creator,
        poolId: Long.fromString(pool_id),
        tokenCircuitBreakers: token_circuit_breakers.map(el0 => ({
          denom: el0.denom,
          circuitBreaker: {
            referenceLptPrice: el0.circuit_breaker.reference_lpt_price,
            lowerBound: el0.circuit_breaker.lower_bound,
            upperBound: el0.circuit_breaker.upper_bound
          }
        }))
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgSetRecoveryMode": {
    aminoType: "/prismfinance.prismcore.amm.MsgSetRecoveryMode",
    toAmino: ({
      authority,
      poolId,
      recoveryMode
    }: MsgSetRecoveryMode): MsgSetRecoveryModeAminoType["value"] => {
      return {
        authority,
        pool_id: poolId.toString(),
        recovery_mode: recoveryMode
      };
    },
    fromAmino: ({
      authority,
      pool_id,
      recovery_mode
    }: MsgSetRecoveryModeAminoType["value"]): MsgSetRecoveryMode => {
      return {
        authority,
        poolId: Long.fromString(pool_id),
        recoveryMode: recovery_mode
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgRecoveryExit": {
    aminoType: "/prismfinance.prismcore.amm.MsgRecoveryExit",
    toAmino: ({
      creator,
      poolId,
      lptIn,
      minAmountsOut
    }: MsgRecoveryExit): MsgRecoveryExitAminoType["value"] => {
      return {
        creator,
        pool_id: poolId.toString(),
        lpt_in: lptIn,
        min_amounts_out: minAmountsOut.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      creator,
      pool_id,
      lpt_in,
      min_amounts_out
    }: MsgRecoveryExitAminoType["value"]): MsgRecoveryExit => {
      return {
        creator,
        poolId: Long.fromString(pool_id),
        lptIn: lpt_in,
        minAmountsOut: min_amounts_out.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgSetPauseMode": {
    aminoType: "/prismfinance.prismcore.amm.MsgSetPauseMode",
    toAmino: ({
      creator,
      poolId,
      pauseMode
    }: MsgSetPauseMode): MsgSetPauseModeAminoType["value"] => {
      return {
        creator,
        pool_id: poolId.toString(),
        pause_mode: pauseMode
      };
    },
    fromAmino: ({
      creator,
      pool_id,
      pause_mode
    }: MsgSetPauseModeAminoType["value"]): MsgSetPauseMode => {
      return {
        creator,
        poolId: Long.fromString(pool_id),
        pauseMode: pause_mode
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgSetVaultPauseMode": {
    aminoType: "/prismfinance.prismcore.amm.MsgSetVaultPauseMode",
    toAmino: ({
      authority,
      pauseMode
    }: MsgSetVaultPauseMode): MsgSetVaultPauseModeAminoType["value"] => {
      return {
        authority,
        pause_mode: pauseMode
      };
    },
    fromAmino: ({
      authority,
      pause_mode
    }: MsgSetVaultPauseModeAminoType["value"]): MsgSetVaultPauseMode => {
      return {
        authority,
        pauseMode: pause_mode
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgCreateOraclePricePair": {
    aminoType: "/prismfinance.prismcore.amm.MsgCreateOraclePricePair",
    toAmino: ({
      authority,
      oraclePricePair
    }: MsgCreateOraclePricePair): MsgCreateOraclePricePairAminoType["value"] => {
      return {
        authority,
        oracle_price_pair: {
          asset_id: oraclePricePair.assetId,
          quote_token: oraclePricePair.quoteToken,
          twap_duration_millis: oraclePricePair.twapDurationMillis.toString(),
          twap_algorithm: oraclePricePair.twapAlgorithm,
          disabled: oraclePricePair.disabled,
          pairs: oraclePricePair.pairs.map(el0 => ({
            base: el0.base,
            quote: el0.quote,
            pool_id: el0.poolId,
            data_source: el0.dataSource
          }))
        }
      };
    },
    fromAmino: ({
      authority,
      oracle_price_pair
    }: MsgCreateOraclePricePairAminoType["value"]): MsgCreateOraclePricePair => {
      return {
        authority,
        oraclePricePair: {
          assetId: oracle_price_pair.asset_id,
          quoteToken: oracle_price_pair.quote_token,
          twapDurationMillis: Long.fromString(oracle_price_pair.twap_duration_millis),
          twapAlgorithm: twapAlgorithmFromJSON(oracle_price_pair.twap_algorithm),
          disabled: oracle_price_pair.disabled,
          pairs: oracle_price_pair.pairs.map(el1 => ({
            base: el1.base,
            quote: el1.quote,
            poolId: el1.pool_id,
            dataSource: el1.data_source
          }))
        }
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgUpdateOraclePricePair": {
    aminoType: "/prismfinance.prismcore.amm.MsgUpdateOraclePricePair",
    toAmino: ({
      authority,
      oraclePricePair
    }: MsgUpdateOraclePricePair): MsgUpdateOraclePricePairAminoType["value"] => {
      return {
        authority,
        oracle_price_pair: {
          asset_id: oraclePricePair.assetId,
          quote_token: oraclePricePair.quoteToken,
          twap_duration_millis: oraclePricePair.twapDurationMillis.toString(),
          twap_algorithm: oraclePricePair.twapAlgorithm,
          disabled: oraclePricePair.disabled,
          pairs: oraclePricePair.pairs.map(el0 => ({
            base: el0.base,
            quote: el0.quote,
            pool_id: el0.poolId,
            data_source: el0.dataSource
          }))
        }
      };
    },
    fromAmino: ({
      authority,
      oracle_price_pair
    }: MsgUpdateOraclePricePairAminoType["value"]): MsgUpdateOraclePricePair => {
      return {
        authority,
        oraclePricePair: {
          assetId: oracle_price_pair.asset_id,
          quoteToken: oracle_price_pair.quote_token,
          twapDurationMillis: Long.fromString(oracle_price_pair.twap_duration_millis),
          twapAlgorithm: twapAlgorithmFromJSON(oracle_price_pair.twap_algorithm),
          disabled: oracle_price_pair.disabled,
          pairs: oracle_price_pair.pairs.map(el1 => ({
            base: el1.base,
            quote: el1.quote,
            poolId: el1.pool_id,
            dataSource: el1.data_source
          }))
        }
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgDeleteOraclePricePair": {
    aminoType: "/prismfinance.prismcore.amm.MsgDeleteOraclePricePair",
    toAmino: ({
      authority,
      assetId
    }: MsgDeleteOraclePricePair): MsgDeleteOraclePricePairAminoType["value"] => {
      return {
        authority,
        asset_id: assetId
      };
    },
    fromAmino: ({
      authority,
      asset_id
    }: MsgDeleteOraclePricePairAminoType["value"]): MsgDeleteOraclePricePair => {
      return {
        authority,
        assetId: asset_id
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgSetSwapProtocolFee": {
    aminoType: "/prismfinance.prismcore.amm.MsgSetSwapProtocolFee",
    toAmino: ({
      authority,
      poolId,
      swapProtocolFee
    }: MsgSetSwapProtocolFee): MsgSetSwapProtocolFeeAminoType["value"] => {
      return {
        authority,
        pool_id: poolId.toString(),
        swap_protocol_fee: swapProtocolFee
      };
    },
    fromAmino: ({
      authority,
      pool_id,
      swap_protocol_fee
    }: MsgSetSwapProtocolFeeAminoType["value"]): MsgSetSwapProtocolFee => {
      return {
        authority,
        poolId: Long.fromString(pool_id),
        swapProtocolFee: swap_protocol_fee
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgSetJoinExitProtocolFee": {
    aminoType: "/prismfinance.prismcore.amm.MsgSetJoinExitProtocolFee",
    toAmino: ({
      authority,
      poolId,
      joinExitProtocolFee
    }: MsgSetJoinExitProtocolFee): MsgSetJoinExitProtocolFeeAminoType["value"] => {
      return {
        authority,
        pool_id: poolId.toString(),
        join_exit_protocol_fee: joinExitProtocolFee
      };
    },
    fromAmino: ({
      authority,
      pool_id,
      join_exit_protocol_fee
    }: MsgSetJoinExitProtocolFeeAminoType["value"]): MsgSetJoinExitProtocolFee => {
      return {
        authority,
        poolId: Long.fromString(pool_id),
        joinExitProtocolFee: join_exit_protocol_fee
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgIntroduceYammLpToWeightedPool": {
    aminoType: "/prismfinance.prismcore.amm.MsgIntroduceYammLpToWeightedPool",
    toAmino: ({
      authority,
      weightedPoolId,
      yammPoolId,
      tokenNormalizedWeight,
      virtualBalanceIntervalMillis
    }: MsgIntroduceYammLpToWeightedPool): MsgIntroduceYammLpToWeightedPoolAminoType["value"] => {
      return {
        authority,
        weighted_pool_id: weightedPoolId.toString(),
        yamm_pool_id: yammPoolId.toString(),
        token_normalized_weight: tokenNormalizedWeight,
        virtual_balance_interval_millis: virtualBalanceIntervalMillis.toString()
      };
    },
    fromAmino: ({
      authority,
      weighted_pool_id,
      yamm_pool_id,
      token_normalized_weight,
      virtual_balance_interval_millis
    }: MsgIntroduceYammLpToWeightedPoolAminoType["value"]): MsgIntroduceYammLpToWeightedPool => {
      return {
        authority,
        weightedPoolId: Long.fromString(weighted_pool_id),
        yammPoolId: Long.fromString(yamm_pool_id),
        tokenNormalizedWeight: token_normalized_weight,
        virtualBalanceIntervalMillis: Long.fromString(virtual_balance_interval_millis)
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgCancelPendingTokenIntroduction": {
    aminoType: "/prismfinance.prismcore.amm.MsgCancelPendingTokenIntroduction",
    toAmino: ({
      authority,
      assetId,
      targetPoolId
    }: MsgCancelPendingTokenIntroduction): MsgCancelPendingTokenIntroductionAminoType["value"] => {
      return {
        authority,
        asset_id: assetId,
        target_pool_id: targetPoolId.toString()
      };
    },
    fromAmino: ({
      authority,
      asset_id,
      target_pool_id
    }: MsgCancelPendingTokenIntroductionAminoType["value"]): MsgCancelPendingTokenIntroduction => {
      return {
        authority,
        assetId: asset_id,
        targetPoolId: Long.fromString(target_pool_id)
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgRemoveTokenFromWeightedPool": {
    aminoType: "/prismfinance.prismcore.amm.MsgRemoveTokenFromWeightedPool",
    toAmino: ({
      creator,
      poolId,
      tokenDenom,
      virtualBalanceIntervalMillis
    }: MsgRemoveTokenFromWeightedPool): MsgRemoveTokenFromWeightedPoolAminoType["value"] => {
      return {
        creator,
        pool_id: poolId.toString(),
        token_denom: tokenDenom,
        virtual_balance_interval_millis: virtualBalanceIntervalMillis.toString()
      };
    },
    fromAmino: ({
      creator,
      pool_id,
      token_denom,
      virtual_balance_interval_millis
    }: MsgRemoveTokenFromWeightedPoolAminoType["value"]): MsgRemoveTokenFromWeightedPool => {
      return {
        creator,
        poolId: Long.fromString(pool_id),
        tokenDenom: token_denom,
        virtualBalanceIntervalMillis: Long.fromString(virtual_balance_interval_millis)
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgUpdateParams": {
    aminoType: "/prismfinance.prismcore.amm.MsgUpdateParams",
    toAmino: ({
      authority,
      generalPoolParameters,
      yammParameters,
      orderParameters
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        general_pool_parameters: {
          allow_public_pool_creation: generalPoolParameters.allowPublicPoolCreation,
          default_swap_fee_ratio: generalPoolParameters.defaultSwapFeeRatio,
          swap_protocol_fee_ratio: generalPoolParameters.swapProtocolFeeRatio,
          join_exit_protocol_fee_ratio: generalPoolParameters.joinExitProtocolFeeRatio
        },
        yamm_parameters: {
          maturity_introduction_interval_millis: yammParameters.maturityIntroductionIntervalMillis.toString(),
          maturity_expiration_interval_millis: yammParameters.maturityExpirationIntervalMillis.toString(),
          expiration_virtual_balance_scaler: yammParameters.expirationVirtualBalanceScaler,
          expired_asset_discount_ratio: yammParameters.expiredAssetDiscountRatio,
          buy_y_given_in_loan_fee_ratio: yammParameters.buyYGivenInLoanFeeRatio,
          sell_y_given_out_fee_ratio: yammParameters.sellYGivenOutFeeRatio,
          swap_yield_fee_ratio: yammParameters.swapYieldFeeRatio,
          leverage_scaler: yammParameters.leverageScaler,
          max_weight_ratio: yammParameters.maxWeightRatio
        },
        order_parameters: {
          step_matching_fee_ratio: orderParameters.stepMatchingFeeRatio,
          step_swap_fee_ratio: orderParameters.stepSwapFeeRatio,
          matching_protocol_fee_ratio: orderParameters.matchingProtocolFeeRatio,
          matching_solver_fee_ratio: orderParameters.matchingSolverFeeRatio,
          max_orders_per_block: orderParameters.maxOrdersPerBlock,
          max_schedule_per_block: orderParameters.maxSchedulePerBlock,
          max_exec_order_trade_ratio: orderParameters.maxExecOrderTradeRatio,
          max_order_step_ratio: orderParameters.maxOrderStepRatio,
          min_order_step_ratio: orderParameters.minOrderStepRatio
        }
      };
    },
    fromAmino: ({
      authority,
      general_pool_parameters,
      yamm_parameters,
      order_parameters
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        generalPoolParameters: {
          allowPublicPoolCreation: general_pool_parameters.allow_public_pool_creation,
          defaultSwapFeeRatio: general_pool_parameters.default_swap_fee_ratio,
          swapProtocolFeeRatio: general_pool_parameters.swap_protocol_fee_ratio,
          joinExitProtocolFeeRatio: general_pool_parameters.join_exit_protocol_fee_ratio
        },
        yammParameters: {
          maturityIntroductionIntervalMillis: Long.fromString(yamm_parameters.maturity_introduction_interval_millis),
          maturityExpirationIntervalMillis: Long.fromString(yamm_parameters.maturity_expiration_interval_millis),
          expirationVirtualBalanceScaler: yamm_parameters.expiration_virtual_balance_scaler,
          expiredAssetDiscountRatio: yamm_parameters.expired_asset_discount_ratio,
          buyYGivenInLoanFeeRatio: yamm_parameters.buy_y_given_in_loan_fee_ratio,
          sellYGivenOutFeeRatio: yamm_parameters.sell_y_given_out_fee_ratio,
          swapYieldFeeRatio: yamm_parameters.swap_yield_fee_ratio,
          leverageScaler: yamm_parameters.leverage_scaler,
          maxWeightRatio: yamm_parameters.max_weight_ratio
        },
        orderParameters: {
          stepMatchingFeeRatio: order_parameters.step_matching_fee_ratio,
          stepSwapFeeRatio: order_parameters.step_swap_fee_ratio,
          matchingProtocolFeeRatio: order_parameters.matching_protocol_fee_ratio,
          matchingSolverFeeRatio: order_parameters.matching_solver_fee_ratio,
          maxOrdersPerBlock: order_parameters.max_orders_per_block,
          maxSchedulePerBlock: order_parameters.max_schedule_per_block,
          maxExecOrderTradeRatio: order_parameters.max_exec_order_trade_ratio,
          maxOrderStepRatio: order_parameters.max_order_step_ratio,
          minOrderStepRatio: order_parameters.min_order_step_ratio
        }
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgAddMaturityToYamm": {
    aminoType: "/prismfinance.prismcore.amm.MsgAddMaturityToYamm",
    toAmino: ({
      authority,
      assetId,
      maturitySymbol
    }: MsgAddMaturityToYamm): MsgAddMaturityToYammAminoType["value"] => {
      return {
        authority,
        assetId,
        maturitySymbol
      };
    },
    fromAmino: ({
      authority,
      assetId,
      maturitySymbol
    }: MsgAddMaturityToYammAminoType["value"]): MsgAddMaturityToYamm => {
      return {
        authority,
        assetId,
        maturitySymbol
      };
    }
  },
  "/prismfinance.prismcore.amm.MsgSetInitializationAllowList": {
    aminoType: "/prismfinance.prismcore.amm.MsgSetInitializationAllowList",
    toAmino: ({
      creator,
      poolId,
      initializationAllowList
    }: MsgSetInitializationAllowList): MsgSetInitializationAllowListAminoType["value"] => {
      return {
        creator,
        pool_id: poolId.toString(),
        initialization_allow_list: initializationAllowList
      };
    },
    fromAmino: ({
      creator,
      pool_id,
      initialization_allow_list
    }: MsgSetInitializationAllowListAminoType["value"]): MsgSetInitializationAllowList => {
      return {
        creator,
        poolId: Long.fromString(pool_id),
        initializationAllowList: initialization_allow_list
      };
    }
  }
};