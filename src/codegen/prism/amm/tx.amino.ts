//@ts-nocheck
import { swapTypeFromJSON } from "./operations";
import { twapAlgorithmFromJSON } from "./oracle_price_pair";
import { AminoMsg } from "@cosmjs/amino";
import { MsgSingleSwap, MsgJoinAllTokensExactLpt, MsgJoinTokenExactLpt, MsgJoinExactTokens, MsgExitExactTokens, MsgExitTokenExactLpt, MsgExitAllTokensExactLpt, MsgCreateWeightedPool, MsgUpdateSwapFee, MsgInitializePool, MsgUpdateWeights, MsgBatchSwap, MsgSetYammConfiguration, MsgWhitelistRoute, MsgSetWhitelistedRouteEnabled, MsgSubmitOrder, MsgCancelOrder, MsgProposeMatch, MsgSetCircuitBreakers, MsgSetRecoveryMode, MsgRecoveryExit, MsgSetPauseMode, MsgSetVaultPauseMode, MsgCreateOraclePricePair, MsgUpdateOraclePricePair, MsgDeleteOraclePricePair, MsgSetSwapProtocolFee, MsgSetJoinExitProtocolFee, MsgIntroduceYammLpToWeightedPool, MsgIntroduceAssetBaseTokenToWeightedPool, MsgCancelPendingTokenIntroduction, MsgRemoveTokenFromWeightedPool, MsgUpdateParams, MsgAddMaturityToYamm, MsgSetInitializationAllowList } from "./tx";
export interface MsgSingleSwapAminoType extends AminoMsg {
  type: "/prism.amm.MsgSingleSwap";
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
  type: "/prism.amm.MsgJoinAllTokensExactLpt";
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
  type: "/prism.amm.MsgJoinTokenExactLpt";
  value: {
    creator: string;
    pool_id: string;
    lpt_out: string;
    token_in: string;
    max_amount_in: string;
  };
}
export interface MsgJoinExactTokensAminoType extends AminoMsg {
  type: "/prism.amm.MsgJoinExactTokens";
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
  type: "/prism.amm.MsgExitExactTokens";
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
  type: "/prism.amm.MsgExitTokenExactLpt";
  value: {
    creator: string;
    pool_id: string;
    lpt_in: string;
    token_out: string;
    min_amount_out: string;
  };
}
export interface MsgExitAllTokensExactLptAminoType extends AminoMsg {
  type: "/prism.amm.MsgExitAllTokensExactLpt";
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
  type: "/prism.amm.MsgCreateWeightedPool";
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
  type: "/prism.amm.MsgUpdateSwapFee";
  value: {
    creator: string;
    pool_id: string;
    swap_fee_ratio: string;
  };
}
export interface MsgInitializePoolAminoType extends AminoMsg {
  type: "/prism.amm.MsgInitializePool";
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
  type: "/prism.amm.MsgUpdateWeights";
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
  type: "/prism.amm.MsgBatchSwap";
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
  type: "/prism.amm.MsgSetYammConfiguration";
  value: {
    creator: string;
    configuration: {
      pool_id: string;
      lambda: string;
      maturity_introduction_interval_millis: string;
      maturity_expiration_interval_millis: string;
      introduction_virtual_balance_scaler: string;
      expiration_virtual_balance_scaler: string;
      buy_y_given_in_loan_fee_ratio: string;
      sell_y_given_out_fee_ratio: string;
      max_alpha: string;
    };
  };
}
export interface MsgWhitelistRouteAminoType extends AminoMsg {
  type: "/prism.amm.MsgWhitelistRoute";
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
  type: "/prism.amm.MsgSetWhitelistedRouteEnabled";
  value: {
    authority: string;
    token_in: string;
    token_out: string;
    enabled: boolean;
  };
}
export interface MsgSubmitOrderAminoType extends AminoMsg {
  type: "/prism.amm.MsgSubmitOrder";
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
  type: "/prism.amm.MsgCancelOrder";
  value: {
    creator: string;
    id: string;
  };
}
export interface MsgProposeMatchAminoType extends AminoMsg {
  type: "/prism.amm.MsgProposeMatch";
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
  type: "/prism.amm.MsgSetCircuitBreakers";
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
  type: "/prism.amm.MsgSetRecoveryMode";
  value: {
    authority: string;
    pool_id: string;
    recovery_mode: boolean;
  };
}
export interface MsgRecoveryExitAminoType extends AminoMsg {
  type: "/prism.amm.MsgRecoveryExit";
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
  type: "/prism.amm.MsgSetPauseMode";
  value: {
    creator: string;
    pool_id: string;
    pause_mode: boolean;
  };
}
export interface MsgSetVaultPauseModeAminoType extends AminoMsg {
  type: "/prism.amm.MsgSetVaultPauseMode";
  value: {
    authority: string;
    pause_mode: boolean;
  };
}
export interface MsgCreateOraclePricePairAminoType extends AminoMsg {
  type: "/prism.amm.MsgCreateOraclePricePair";
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
  type: "/prism.amm.MsgUpdateOraclePricePair";
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
  type: "/prism.amm.MsgDeleteOraclePricePair";
  value: {
    authority: string;
    asset_id: string;
  };
}
export interface MsgSetSwapProtocolFeeAminoType extends AminoMsg {
  type: "/prism.amm.MsgSetSwapProtocolFee";
  value: {
    authority: string;
    pool_id: string;
    swap_protocol_fee: string;
  };
}
export interface MsgSetJoinExitProtocolFeeAminoType extends AminoMsg {
  type: "/prism.amm.MsgSetJoinExitProtocolFee";
  value: {
    authority: string;
    pool_id: string;
    join_exit_protocol_fee: string;
  };
}
export interface MsgIntroduceYammLpToWeightedPoolAminoType extends AminoMsg {
  type: "/prism.amm.MsgIntroduceYammLpToWeightedPool";
  value: {
    authority: string;
    weighted_pool_id: string;
    yamm_pool_id: string;
    token_normalized_weight: string;
    virtual_balance_interval_millis: string;
  };
}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolAminoType extends AminoMsg {
  type: "/prism.amm.MsgIntroduceAssetBaseTokenToWeightedPool";
  value: {
    authority: string;
    weighted_pool_id: string;
    token_denom: string;
    asset_id: string;
    token_normalized_weight: string;
    virtual_balance_interval_millis: string;
  };
}
export interface MsgCancelPendingTokenIntroductionAminoType extends AminoMsg {
  type: "/prism.amm.MsgCancelPendingTokenIntroduction";
  value: {
    authority: string;
    asset_id: string;
    target_pool_id: string;
  };
}
export interface MsgRemoveTokenFromWeightedPoolAminoType extends AminoMsg {
  type: "/prism.amm.MsgRemoveTokenFromWeightedPool";
  value: {
    creator: string;
    pool_id: string;
    token_denom: string;
    virtual_balance_interval_millis: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/prism.amm.MsgUpdateParams";
  value: {
    authority: string;
    general_pool_parameters: {
      allow_public_pool_creation: boolean;
      default_swap_fee_ratio: string;
      swap_protocol_fee_ratio: string;
      join_exit_protocol_fee_ratio: string;
    };
    yamm_parameters: {
      lambda: string;
      maturity_introduction_interval_millis: string;
      maturity_expiration_interval_millis: string;
      introduction_virtual_balance_scaler: string;
      expiration_virtual_balance_scaler: string;
      buy_y_given_in_loan_fee_ratio: string;
      sell_y_given_out_fee_ratio: string;
      max_alpha: string;
      default_initialization_allow_list: string[];
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
  type: "/prism.amm.MsgAddMaturityToYamm";
  value: {
    authority: string;
    assetId: string;
    maturitySymbol: string;
  };
}
export interface MsgSetInitializationAllowListAminoType extends AminoMsg {
  type: "/prism.amm.MsgSetInitializationAllowList";
  value: {
    creator: string;
    pool_id: string;
    initialization_allow_list: string[];
  };
}
export const AminoConverter = {
  "/prism.amm.MsgSingleSwap": {
    aminoType: "/prism.amm.MsgSingleSwap",
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
          poolId: BigInt(swap.pool_id),
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
  "/prism.amm.MsgJoinAllTokensExactLpt": {
    aminoType: "/prism.amm.MsgJoinAllTokensExactLpt",
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
        poolId: BigInt(pool_id),
        lptOut: lpt_out,
        maxAmountsIn: max_amounts_in.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/prism.amm.MsgJoinTokenExactLpt": {
    aminoType: "/prism.amm.MsgJoinTokenExactLpt",
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
        poolId: BigInt(pool_id),
        lptOut: lpt_out,
        tokenIn: token_in,
        maxAmountIn: max_amount_in
      };
    }
  },
  "/prism.amm.MsgJoinExactTokens": {
    aminoType: "/prism.amm.MsgJoinExactTokens",
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
        poolId: BigInt(pool_id),
        amountsIn: amounts_in.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        minLptOut: min_lpt_out
      };
    }
  },
  "/prism.amm.MsgExitExactTokens": {
    aminoType: "/prism.amm.MsgExitExactTokens",
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
        poolId: BigInt(pool_id),
        amountsOut: amounts_out.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        maxLptIn: max_lpt_in
      };
    }
  },
  "/prism.amm.MsgExitTokenExactLpt": {
    aminoType: "/prism.amm.MsgExitTokenExactLpt",
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
        poolId: BigInt(pool_id),
        lptIn: lpt_in,
        tokenOut: token_out,
        minAmountOut: min_amount_out
      };
    }
  },
  "/prism.amm.MsgExitAllTokensExactLpt": {
    aminoType: "/prism.amm.MsgExitAllTokensExactLpt",
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
        poolId: BigInt(pool_id),
        lptIn: lpt_in,
        minAmountsOut: min_amounts_out.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/prism.amm.MsgCreateWeightedPool": {
    aminoType: "/prism.amm.MsgCreateWeightedPool",
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
        pauseWindowDurationMillis: BigInt(pause_window_duration_millis),
        pauseBufferDurationMillis: BigInt(pause_buffer_duration_millis),
        tokens: tokens.map(el0 => ({
          denom: el0.denom,
          normalizedWeight: el0.normalized_weight
        })),
        initializationAllowList: initialization_allow_list
      };
    }
  },
  "/prism.amm.MsgUpdateSwapFee": {
    aminoType: "/prism.amm.MsgUpdateSwapFee",
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
        poolId: BigInt(pool_id),
        swapFeeRatio: swap_fee_ratio
      };
    }
  },
  "/prism.amm.MsgInitializePool": {
    aminoType: "/prism.amm.MsgInitializePool",
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
        poolId: BigInt(pool_id),
        amountsIn: amounts_in.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/prism.amm.MsgUpdateWeights": {
    aminoType: "/prism.amm.MsgUpdateWeights",
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
        poolId: BigInt(pool_id),
        tokenWeights: token_weights.map(el0 => ({
          denom: el0.denom,
          normalizedWeight: el0.normalized_weight
        })),
        startTimeUnixMillis: BigInt(start_time_unix_millis),
        endTimeUnixMillis: BigInt(end_time_unix_millis)
      };
    }
  },
  "/prism.amm.MsgBatchSwap": {
    aminoType: "/prism.amm.MsgBatchSwap",
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
          poolId: BigInt(el0.pool_id),
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
  "/prism.amm.MsgSetYammConfiguration": {
    aminoType: "/prism.amm.MsgSetYammConfiguration",
    toAmino: ({
      creator,
      configuration
    }: MsgSetYammConfiguration): MsgSetYammConfigurationAminoType["value"] => {
      return {
        creator,
        configuration: {
          pool_id: configuration.poolId.toString(),
          lambda: configuration.lambda,
          maturity_introduction_interval_millis: configuration.maturityIntroductionIntervalMillis,
          maturity_expiration_interval_millis: configuration.maturityExpirationIntervalMillis,
          introduction_virtual_balance_scaler: configuration.introductionVirtualBalanceScaler,
          expiration_virtual_balance_scaler: configuration.expirationVirtualBalanceScaler,
          buy_y_given_in_loan_fee_ratio: configuration.buyYGivenInLoanFeeRatio,
          sell_y_given_out_fee_ratio: configuration.sellYGivenOutFeeRatio,
          max_alpha: configuration.maxAlpha
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
          poolId: BigInt(configuration.pool_id),
          lambda: configuration.lambda,
          maturityIntroductionIntervalMillis: configuration.maturity_introduction_interval_millis,
          maturityExpirationIntervalMillis: configuration.maturity_expiration_interval_millis,
          introductionVirtualBalanceScaler: configuration.introduction_virtual_balance_scaler,
          expirationVirtualBalanceScaler: configuration.expiration_virtual_balance_scaler,
          buyYGivenInLoanFeeRatio: configuration.buy_y_given_in_loan_fee_ratio,
          sellYGivenOutFeeRatio: configuration.sell_y_given_out_fee_ratio,
          maxAlpha: configuration.max_alpha
        }
      };
    }
  },
  "/prism.amm.MsgWhitelistRoute": {
    aminoType: "/prism.amm.MsgWhitelistRoute",
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
            poolId: BigInt(el1.pool_id),
            tokenIn: el1.token_in,
            tokenOut: el1.token_out
          })),
          enabled: whitelisted_route.enabled
        }
      };
    }
  },
  "/prism.amm.MsgSetWhitelistedRouteEnabled": {
    aminoType: "/prism.amm.MsgSetWhitelistedRouteEnabled",
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
  "/prism.amm.MsgSubmitOrder": {
    aminoType: "/prism.amm.MsgSubmitOrder",
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
        poolId: BigInt(pool_id),
        tokenIn: token_in,
        tokenOut: token_out,
        whitelistedRoute: whitelisted_route,
        allowMatching: allow_matching,
        amountPerStep: amount_per_step,
        totalAmount: total_amount,
        millisInterval: BigInt(millis_interval),
        maxStepSpotPrice: max_step_spot_price,
        maxMatchingSpotPrice: max_matching_spot_price
      };
    }
  },
  "/prism.amm.MsgCancelOrder": {
    aminoType: "/prism.amm.MsgCancelOrder",
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
        id: BigInt(id)
      };
    }
  },
  "/prism.amm.MsgProposeMatch": {
    aminoType: "/prism.amm.MsgProposeMatch",
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
          poolId: BigInt(el0.pool_id),
          whitelistedRoute: el0.whitelisted_route,
          tokenIn: el0.token_in,
          tokenOut: el0.token_out,
          buyOrders: el0.buy_orders.map(el1 => BigInt(el1)),
          sellOrders: el0.sell_orders.map(el1 => BigInt(el1))
        }))
      };
    }
  },
  "/prism.amm.MsgSetCircuitBreakers": {
    aminoType: "/prism.amm.MsgSetCircuitBreakers",
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
        poolId: BigInt(pool_id),
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
  "/prism.amm.MsgSetRecoveryMode": {
    aminoType: "/prism.amm.MsgSetRecoveryMode",
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
        poolId: BigInt(pool_id),
        recoveryMode: recovery_mode
      };
    }
  },
  "/prism.amm.MsgRecoveryExit": {
    aminoType: "/prism.amm.MsgRecoveryExit",
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
        poolId: BigInt(pool_id),
        lptIn: lpt_in,
        minAmountsOut: min_amounts_out.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/prism.amm.MsgSetPauseMode": {
    aminoType: "/prism.amm.MsgSetPauseMode",
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
        poolId: BigInt(pool_id),
        pauseMode: pause_mode
      };
    }
  },
  "/prism.amm.MsgSetVaultPauseMode": {
    aminoType: "/prism.amm.MsgSetVaultPauseMode",
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
  "/prism.amm.MsgCreateOraclePricePair": {
    aminoType: "/prism.amm.MsgCreateOraclePricePair",
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
          twapDurationMillis: BigInt(oracle_price_pair.twap_duration_millis),
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
  "/prism.amm.MsgUpdateOraclePricePair": {
    aminoType: "/prism.amm.MsgUpdateOraclePricePair",
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
          twapDurationMillis: BigInt(oracle_price_pair.twap_duration_millis),
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
  "/prism.amm.MsgDeleteOraclePricePair": {
    aminoType: "/prism.amm.MsgDeleteOraclePricePair",
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
  "/prism.amm.MsgSetSwapProtocolFee": {
    aminoType: "/prism.amm.MsgSetSwapProtocolFee",
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
        poolId: BigInt(pool_id),
        swapProtocolFee: swap_protocol_fee
      };
    }
  },
  "/prism.amm.MsgSetJoinExitProtocolFee": {
    aminoType: "/prism.amm.MsgSetJoinExitProtocolFee",
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
        poolId: BigInt(pool_id),
        joinExitProtocolFee: join_exit_protocol_fee
      };
    }
  },
  "/prism.amm.MsgIntroduceYammLpToWeightedPool": {
    aminoType: "/prism.amm.MsgIntroduceYammLpToWeightedPool",
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
        weightedPoolId: BigInt(weighted_pool_id),
        yammPoolId: BigInt(yamm_pool_id),
        tokenNormalizedWeight: token_normalized_weight,
        virtualBalanceIntervalMillis: BigInt(virtual_balance_interval_millis)
      };
    }
  },
  "/prism.amm.MsgIntroduceAssetBaseTokenToWeightedPool": {
    aminoType: "/prism.amm.MsgIntroduceAssetBaseTokenToWeightedPool",
    toAmino: ({
      authority,
      weightedPoolId,
      tokenDenom,
      assetId,
      tokenNormalizedWeight,
      virtualBalanceIntervalMillis
    }: MsgIntroduceAssetBaseTokenToWeightedPool): MsgIntroduceAssetBaseTokenToWeightedPoolAminoType["value"] => {
      return {
        authority,
        weighted_pool_id: weightedPoolId.toString(),
        token_denom: tokenDenom,
        asset_id: assetId,
        token_normalized_weight: tokenNormalizedWeight,
        virtual_balance_interval_millis: virtualBalanceIntervalMillis.toString()
      };
    },
    fromAmino: ({
      authority,
      weighted_pool_id,
      token_denom,
      asset_id,
      token_normalized_weight,
      virtual_balance_interval_millis
    }: MsgIntroduceAssetBaseTokenToWeightedPoolAminoType["value"]): MsgIntroduceAssetBaseTokenToWeightedPool => {
      return {
        authority,
        weightedPoolId: BigInt(weighted_pool_id),
        tokenDenom: token_denom,
        assetId: asset_id,
        tokenNormalizedWeight: token_normalized_weight,
        virtualBalanceIntervalMillis: BigInt(virtual_balance_interval_millis)
      };
    }
  },
  "/prism.amm.MsgCancelPendingTokenIntroduction": {
    aminoType: "/prism.amm.MsgCancelPendingTokenIntroduction",
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
        targetPoolId: BigInt(target_pool_id)
      };
    }
  },
  "/prism.amm.MsgRemoveTokenFromWeightedPool": {
    aminoType: "/prism.amm.MsgRemoveTokenFromWeightedPool",
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
        poolId: BigInt(pool_id),
        tokenDenom: token_denom,
        virtualBalanceIntervalMillis: BigInt(virtual_balance_interval_millis)
      };
    }
  },
  "/prism.amm.MsgUpdateParams": {
    aminoType: "/prism.amm.MsgUpdateParams",
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
          lambda: yammParameters.lambda,
          maturity_introduction_interval_millis: yammParameters.maturityIntroductionIntervalMillis.toString(),
          maturity_expiration_interval_millis: yammParameters.maturityExpirationIntervalMillis.toString(),
          introduction_virtual_balance_scaler: yammParameters.introductionVirtualBalanceScaler,
          expiration_virtual_balance_scaler: yammParameters.expirationVirtualBalanceScaler,
          buy_y_given_in_loan_fee_ratio: yammParameters.buyYGivenInLoanFeeRatio,
          sell_y_given_out_fee_ratio: yammParameters.sellYGivenOutFeeRatio,
          max_alpha: yammParameters.maxAlpha,
          default_initialization_allow_list: yammParameters.defaultInitializationAllowList
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
          lambda: yamm_parameters.lambda,
          maturityIntroductionIntervalMillis: BigInt(yamm_parameters.maturity_introduction_interval_millis),
          maturityExpirationIntervalMillis: BigInt(yamm_parameters.maturity_expiration_interval_millis),
          introductionVirtualBalanceScaler: yamm_parameters.introduction_virtual_balance_scaler,
          expirationVirtualBalanceScaler: yamm_parameters.expiration_virtual_balance_scaler,
          buyYGivenInLoanFeeRatio: yamm_parameters.buy_y_given_in_loan_fee_ratio,
          sellYGivenOutFeeRatio: yamm_parameters.sell_y_given_out_fee_ratio,
          maxAlpha: yamm_parameters.max_alpha,
          defaultInitializationAllowList: yamm_parameters.default_initialization_allow_list
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
  "/prism.amm.MsgAddMaturityToYamm": {
    aminoType: "/prism.amm.MsgAddMaturityToYamm",
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
  "/prism.amm.MsgSetInitializationAllowList": {
    aminoType: "/prism.amm.MsgSetInitializationAllowList",
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
        poolId: BigInt(pool_id),
        initializationAllowList: initialization_allow_list
      };
    }
  }
};