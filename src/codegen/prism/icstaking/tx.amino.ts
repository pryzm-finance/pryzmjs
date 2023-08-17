//@ts-nocheck
import { connectionTypeFromJSON, transferChannelTypeFromJSON } from "./host_chain";
import { AminoMsg } from "@cosmjs/amino";
import { iCATypeFromJSON, MsgUpdateParams, MsgRegisterHostChain, MsgUpdateHostChain, MsgStake, MsgUnstake, MsgRedeemUnstaked, MsgInstantUnstake, MsgRebalanceDelegations, MsgRedeemInterchainAccount } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/prism.icstaking.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      staking_params: {
        fee_ratios: {
          yield: string;
          staking: string;
          unstaking: string;
          instant_unstaking: string;
        };
        delegation_interval: {
          seconds: string;
          nanos: number;
        };
        undelegation_interval: {
          seconds: string;
          nanos: number;
        };
        ibc_transfer_timeout: {
          seconds: string;
          nanos: number;
        };
        ica_timeout: {
          seconds: string;
          nanos: number;
        };
        max_undelegation_msgs: number;
        max_redelegation_msgs: number;
        rebalance_threshold: string;
        min_rebalance_amount: string;
        min_rebalance_interval: {
          seconds: string;
          nanos: number;
        };
      };
    };
  };
}
export interface MsgRegisterHostChainAminoType extends AminoMsg {
  type: "/prism.icstaking.MsgRegisterHostChain";
  value: {
    authority: string;
    host_chain: {
      id: string;
      connection_type: number;
      connection_id: string;
      base_denom: string;
      transfer_channels: {
        type: number;
        id: string;
        wrapped_denom: string;
        destination_chain: string;
      }[];
      params: {
        fee_ratios: {
          yield: string;
          staking: string;
          unstaking: string;
          instant_unstaking: string;
        };
        delegation_interval: {
          seconds: string;
          nanos: number;
        };
        undelegation_interval: {
          seconds: string;
          nanos: number;
        };
        ibc_transfer_timeout: {
          seconds: string;
          nanos: number;
        };
        ica_timeout: {
          seconds: string;
          nanos: number;
        };
        max_undelegation_msgs: number;
        max_redelegation_msgs: number;
        rebalance_threshold: string;
        min_rebalance_amount: string;
        min_rebalance_interval: {
          seconds: string;
          nanos: number;
        };
      };
      validators: {
        address: string;
        weight: string;
      }[];
    };
  };
}
export interface MsgUpdateHostChainAminoType extends AminoMsg {
  type: "/prism.icstaking.MsgUpdateHostChain";
  value: {
    authority: string;
    host_chain_id: string;
    validators: {
      address: string;
      weight: string;
    }[];
    params: {
      fee_ratios: {
        yield: string;
        staking: string;
        unstaking: string;
        instant_unstaking: string;
      };
      delegation_interval: {
        seconds: string;
        nanos: number;
      };
      undelegation_interval: {
        seconds: string;
        nanos: number;
      };
      ibc_transfer_timeout: {
        seconds: string;
        nanos: number;
      };
      ica_timeout: {
        seconds: string;
        nanos: number;
      };
      max_undelegation_msgs: number;
      max_redelegation_msgs: number;
      rebalance_threshold: string;
      min_rebalance_amount: string;
      min_rebalance_interval: {
        seconds: string;
        nanos: number;
      };
    };
  };
}
export interface MsgStakeAminoType extends AminoMsg {
  type: "/prism.icstaking.MsgStake";
  value: {
    creator: string;
    host_chain: string;
    transfer_channel: string;
    amount: string;
  };
}
export interface MsgUnstakeAminoType extends AminoMsg {
  type: "/prism.icstaking.MsgUnstake";
  value: {
    creator: string;
    host_chain: string;
    transfer_channel: string;
    c_amount: string;
  };
}
export interface MsgRedeemUnstakedAminoType extends AminoMsg {
  type: "/prism.icstaking.MsgRedeemUnstaked";
  value: {
    creator: string;
    host_chain: string;
    transfer_channel: string;
    u_amount: string;
    epoch: string;
  };
}
export interface MsgInstantUnstakeAminoType extends AminoMsg {
  type: "/prism.icstaking.MsgInstantUnstake";
  value: {
    creator: string;
    host_chain: string;
    transfer_channel: string;
    min_c_amount: string;
    max_c_amount: string;
  };
}
export interface MsgRebalanceDelegationsAminoType extends AminoMsg {
  type: "/prism.icstaking.MsgRebalanceDelegations";
  value: {
    creator: string;
    host_chain: string;
  };
}
export interface MsgRedeemInterchainAccountAminoType extends AminoMsg {
  type: "/prism.icstaking.MsgRedeemInterchainAccount";
  value: {
    creator: string;
    host_chain: string;
    account_type: number;
  };
}
export const AminoConverter = {
  "/prism.icstaking.MsgUpdateParams": {
    aminoType: "/prism.icstaking.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          staking_params: {
            fee_ratios: {
              yield: params.stakingParams.feeRatios.yield,
              staking: params.stakingParams.feeRatios.staking,
              unstaking: params.stakingParams.feeRatios.unstaking,
              instant_unstaking: params.stakingParams.feeRatios.instantUnstaking
            },
            delegation_interval: (params.stakingParams.delegationInterval * 1_000_000_000).toString(),
            undelegation_interval: (params.stakingParams.undelegationInterval * 1_000_000_000).toString(),
            ibc_transfer_timeout: (params.stakingParams.ibcTransferTimeout * 1_000_000_000).toString(),
            ica_timeout: (params.stakingParams.icaTimeout * 1_000_000_000).toString(),
            max_undelegation_msgs: params.stakingParams.maxUndelegationMsgs,
            max_redelegation_msgs: params.stakingParams.maxRedelegationMsgs,
            rebalance_threshold: params.stakingParams.rebalanceThreshold,
            min_rebalance_amount: params.stakingParams.minRebalanceAmount,
            min_rebalance_interval: (params.stakingParams.minRebalanceInterval * 1_000_000_000).toString()
          }
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
          stakingParams: {
            feeRatios: {
              yield: params.staking_params.fee_ratios.yield,
              staking: params.staking_params.fee_ratios.staking,
              unstaking: params.staking_params.fee_ratios.unstaking,
              instantUnstaking: params.staking_params.fee_ratios.instant_unstaking
            },
            delegationInterval: {
              seconds: BigInt(Math.floor(parseInt(params.staking_params.delegation_interval) / 1_000_000_000)),
              nanos: parseInt(params.staking_params.delegation_interval) % 1_000_000_000
            },
            undelegationInterval: {
              seconds: BigInt(Math.floor(parseInt(params.staking_params.undelegation_interval) / 1_000_000_000)),
              nanos: parseInt(params.staking_params.undelegation_interval) % 1_000_000_000
            },
            ibcTransferTimeout: {
              seconds: BigInt(Math.floor(parseInt(params.staking_params.ibc_transfer_timeout) / 1_000_000_000)),
              nanos: parseInt(params.staking_params.ibc_transfer_timeout) % 1_000_000_000
            },
            icaTimeout: {
              seconds: BigInt(Math.floor(parseInt(params.staking_params.ica_timeout) / 1_000_000_000)),
              nanos: parseInt(params.staking_params.ica_timeout) % 1_000_000_000
            },
            maxUndelegationMsgs: params.staking_params.max_undelegation_msgs,
            maxRedelegationMsgs: params.staking_params.max_redelegation_msgs,
            rebalanceThreshold: params.staking_params.rebalance_threshold,
            minRebalanceAmount: params.staking_params.min_rebalance_amount,
            minRebalanceInterval: {
              seconds: BigInt(Math.floor(parseInt(params.staking_params.min_rebalance_interval) / 1_000_000_000)),
              nanos: parseInt(params.staking_params.min_rebalance_interval) % 1_000_000_000
            }
          }
        }
      };
    }
  },
  "/prism.icstaking.MsgRegisterHostChain": {
    aminoType: "/prism.icstaking.MsgRegisterHostChain",
    toAmino: ({
      authority,
      hostChain
    }: MsgRegisterHostChain): MsgRegisterHostChainAminoType["value"] => {
      return {
        authority,
        host_chain: {
          id: hostChain.id,
          connection_type: hostChain.connectionType,
          connection_id: hostChain.connectionId,
          base_denom: hostChain.baseDenom,
          transfer_channels: hostChain.transferChannels.map(el0 => ({
            type: el0.type,
            id: el0.id,
            wrapped_denom: el0.wrappedDenom,
            destination_chain: el0.destinationChain
          })),
          params: {
            fee_ratios: {
              yield: hostChain.params.feeRatios.yield,
              staking: hostChain.params.feeRatios.staking,
              unstaking: hostChain.params.feeRatios.unstaking,
              instant_unstaking: hostChain.params.feeRatios.instantUnstaking
            },
            delegation_interval: (hostChain.params.delegationInterval * 1_000_000_000).toString(),
            undelegation_interval: (hostChain.params.undelegationInterval * 1_000_000_000).toString(),
            ibc_transfer_timeout: (hostChain.params.ibcTransferTimeout * 1_000_000_000).toString(),
            ica_timeout: (hostChain.params.icaTimeout * 1_000_000_000).toString(),
            max_undelegation_msgs: hostChain.params.maxUndelegationMsgs,
            max_redelegation_msgs: hostChain.params.maxRedelegationMsgs,
            rebalance_threshold: hostChain.params.rebalanceThreshold,
            min_rebalance_amount: hostChain.params.minRebalanceAmount,
            min_rebalance_interval: (hostChain.params.minRebalanceInterval * 1_000_000_000).toString()
          },
          validators: hostChain.validators.map(el0 => ({
            address: el0.address,
            weight: el0.weight
          }))
        }
      };
    },
    fromAmino: ({
      authority,
      host_chain
    }: MsgRegisterHostChainAminoType["value"]): MsgRegisterHostChain => {
      return {
        authority,
        hostChain: {
          id: host_chain.id,
          connectionType: connectionTypeFromJSON(host_chain.connection_type),
          connectionId: host_chain.connection_id,
          baseDenom: host_chain.base_denom,
          transferChannels: host_chain.transfer_channels.map(el1 => ({
            type: transferChannelTypeFromJSON(el1.type),
            id: el1.id,
            wrappedDenom: el1.wrapped_denom,
            destinationChain: el1.destination_chain
          })),
          params: {
            feeRatios: {
              yield: host_chain.params.fee_ratios.yield,
              staking: host_chain.params.fee_ratios.staking,
              unstaking: host_chain.params.fee_ratios.unstaking,
              instantUnstaking: host_chain.params.fee_ratios.instant_unstaking
            },
            delegationInterval: {
              seconds: BigInt(Math.floor(parseInt(host_chain.params.delegation_interval) / 1_000_000_000)),
              nanos: parseInt(host_chain.params.delegation_interval) % 1_000_000_000
            },
            undelegationInterval: {
              seconds: BigInt(Math.floor(parseInt(host_chain.params.undelegation_interval) / 1_000_000_000)),
              nanos: parseInt(host_chain.params.undelegation_interval) % 1_000_000_000
            },
            ibcTransferTimeout: {
              seconds: BigInt(Math.floor(parseInt(host_chain.params.ibc_transfer_timeout) / 1_000_000_000)),
              nanos: parseInt(host_chain.params.ibc_transfer_timeout) % 1_000_000_000
            },
            icaTimeout: {
              seconds: BigInt(Math.floor(parseInt(host_chain.params.ica_timeout) / 1_000_000_000)),
              nanos: parseInt(host_chain.params.ica_timeout) % 1_000_000_000
            },
            maxUndelegationMsgs: host_chain.params.max_undelegation_msgs,
            maxRedelegationMsgs: host_chain.params.max_redelegation_msgs,
            rebalanceThreshold: host_chain.params.rebalance_threshold,
            minRebalanceAmount: host_chain.params.min_rebalance_amount,
            minRebalanceInterval: {
              seconds: BigInt(Math.floor(parseInt(host_chain.params.min_rebalance_interval) / 1_000_000_000)),
              nanos: parseInt(host_chain.params.min_rebalance_interval) % 1_000_000_000
            }
          },
          validators: host_chain.validators.map(el1 => ({
            address: el1.address,
            weight: el1.weight
          }))
        }
      };
    }
  },
  "/prism.icstaking.MsgUpdateHostChain": {
    aminoType: "/prism.icstaking.MsgUpdateHostChain",
    toAmino: ({
      authority,
      hostChainId,
      validators,
      params
    }: MsgUpdateHostChain): MsgUpdateHostChainAminoType["value"] => {
      return {
        authority,
        host_chain_id: hostChainId,
        validators: validators.map(el0 => ({
          address: el0.address,
          weight: el0.weight
        })),
        params: {
          fee_ratios: {
            yield: params.feeRatios.yield,
            staking: params.feeRatios.staking,
            unstaking: params.feeRatios.unstaking,
            instant_unstaking: params.feeRatios.instantUnstaking
          },
          delegation_interval: (params.delegationInterval * 1_000_000_000).toString(),
          undelegation_interval: (params.undelegationInterval * 1_000_000_000).toString(),
          ibc_transfer_timeout: (params.ibcTransferTimeout * 1_000_000_000).toString(),
          ica_timeout: (params.icaTimeout * 1_000_000_000).toString(),
          max_undelegation_msgs: params.maxUndelegationMsgs,
          max_redelegation_msgs: params.maxRedelegationMsgs,
          rebalance_threshold: params.rebalanceThreshold,
          min_rebalance_amount: params.minRebalanceAmount,
          min_rebalance_interval: (params.minRebalanceInterval * 1_000_000_000).toString()
        }
      };
    },
    fromAmino: ({
      authority,
      host_chain_id,
      validators,
      params
    }: MsgUpdateHostChainAminoType["value"]): MsgUpdateHostChain => {
      return {
        authority,
        hostChainId: host_chain_id,
        validators: validators.map(el0 => ({
          address: el0.address,
          weight: el0.weight
        })),
        params: {
          feeRatios: {
            yield: params.fee_ratios.yield,
            staking: params.fee_ratios.staking,
            unstaking: params.fee_ratios.unstaking,
            instantUnstaking: params.fee_ratios.instant_unstaking
          },
          delegationInterval: {
            seconds: BigInt(Math.floor(parseInt(params.delegation_interval) / 1_000_000_000)),
            nanos: parseInt(params.delegation_interval) % 1_000_000_000
          },
          undelegationInterval: {
            seconds: BigInt(Math.floor(parseInt(params.undelegation_interval) / 1_000_000_000)),
            nanos: parseInt(params.undelegation_interval) % 1_000_000_000
          },
          ibcTransferTimeout: {
            seconds: BigInt(Math.floor(parseInt(params.ibc_transfer_timeout) / 1_000_000_000)),
            nanos: parseInt(params.ibc_transfer_timeout) % 1_000_000_000
          },
          icaTimeout: {
            seconds: BigInt(Math.floor(parseInt(params.ica_timeout) / 1_000_000_000)),
            nanos: parseInt(params.ica_timeout) % 1_000_000_000
          },
          maxUndelegationMsgs: params.max_undelegation_msgs,
          maxRedelegationMsgs: params.max_redelegation_msgs,
          rebalanceThreshold: params.rebalance_threshold,
          minRebalanceAmount: params.min_rebalance_amount,
          minRebalanceInterval: {
            seconds: BigInt(Math.floor(parseInt(params.min_rebalance_interval) / 1_000_000_000)),
            nanos: parseInt(params.min_rebalance_interval) % 1_000_000_000
          }
        }
      };
    }
  },
  "/prism.icstaking.MsgStake": {
    aminoType: "/prism.icstaking.MsgStake",
    toAmino: ({
      creator,
      hostChain,
      transferChannel,
      amount
    }: MsgStake): MsgStakeAminoType["value"] => {
      return {
        creator,
        host_chain: hostChain,
        transfer_channel: transferChannel,
        amount
      };
    },
    fromAmino: ({
      creator,
      host_chain,
      transfer_channel,
      amount
    }: MsgStakeAminoType["value"]): MsgStake => {
      return {
        creator,
        hostChain: host_chain,
        transferChannel: transfer_channel,
        amount
      };
    }
  },
  "/prism.icstaking.MsgUnstake": {
    aminoType: "/prism.icstaking.MsgUnstake",
    toAmino: ({
      creator,
      hostChain,
      transferChannel,
      cAmount
    }: MsgUnstake): MsgUnstakeAminoType["value"] => {
      return {
        creator,
        host_chain: hostChain,
        transfer_channel: transferChannel,
        c_amount: cAmount
      };
    },
    fromAmino: ({
      creator,
      host_chain,
      transfer_channel,
      c_amount
    }: MsgUnstakeAminoType["value"]): MsgUnstake => {
      return {
        creator,
        hostChain: host_chain,
        transferChannel: transfer_channel,
        cAmount: c_amount
      };
    }
  },
  "/prism.icstaking.MsgRedeemUnstaked": {
    aminoType: "/prism.icstaking.MsgRedeemUnstaked",
    toAmino: ({
      creator,
      hostChain,
      transferChannel,
      uAmount,
      epoch
    }: MsgRedeemUnstaked): MsgRedeemUnstakedAminoType["value"] => {
      return {
        creator,
        host_chain: hostChain,
        transfer_channel: transferChannel,
        u_amount: uAmount,
        epoch: epoch.toString()
      };
    },
    fromAmino: ({
      creator,
      host_chain,
      transfer_channel,
      u_amount,
      epoch
    }: MsgRedeemUnstakedAminoType["value"]): MsgRedeemUnstaked => {
      return {
        creator,
        hostChain: host_chain,
        transferChannel: transfer_channel,
        uAmount: u_amount,
        epoch: BigInt(epoch)
      };
    }
  },
  "/prism.icstaking.MsgInstantUnstake": {
    aminoType: "/prism.icstaking.MsgInstantUnstake",
    toAmino: ({
      creator,
      hostChain,
      transferChannel,
      minCAmount,
      maxCAmount
    }: MsgInstantUnstake): MsgInstantUnstakeAminoType["value"] => {
      return {
        creator,
        host_chain: hostChain,
        transfer_channel: transferChannel,
        min_c_amount: minCAmount,
        max_c_amount: maxCAmount
      };
    },
    fromAmino: ({
      creator,
      host_chain,
      transfer_channel,
      min_c_amount,
      max_c_amount
    }: MsgInstantUnstakeAminoType["value"]): MsgInstantUnstake => {
      return {
        creator,
        hostChain: host_chain,
        transferChannel: transfer_channel,
        minCAmount: min_c_amount,
        maxCAmount: max_c_amount
      };
    }
  },
  "/prism.icstaking.MsgRebalanceDelegations": {
    aminoType: "/prism.icstaking.MsgRebalanceDelegations",
    toAmino: ({
      creator,
      hostChain
    }: MsgRebalanceDelegations): MsgRebalanceDelegationsAminoType["value"] => {
      return {
        creator,
        host_chain: hostChain
      };
    },
    fromAmino: ({
      creator,
      host_chain
    }: MsgRebalanceDelegationsAminoType["value"]): MsgRebalanceDelegations => {
      return {
        creator,
        hostChain: host_chain
      };
    }
  },
  "/prism.icstaking.MsgRedeemInterchainAccount": {
    aminoType: "/prism.icstaking.MsgRedeemInterchainAccount",
    toAmino: ({
      creator,
      hostChain,
      accountType
    }: MsgRedeemInterchainAccount): MsgRedeemInterchainAccountAminoType["value"] => {
      return {
        creator,
        host_chain: hostChain,
        account_type: accountType
      };
    },
    fromAmino: ({
      creator,
      host_chain,
      account_type
    }: MsgRedeemInterchainAccountAminoType["value"]): MsgRedeemInterchainAccount => {
      return {
        creator,
        hostChain: host_chain,
        accountType: iCATypeFromJSON(account_type)
      };
    }
  }
};