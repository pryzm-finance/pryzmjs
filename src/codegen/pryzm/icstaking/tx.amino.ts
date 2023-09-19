//@ts-nocheck
import { connectionTypeFromJSON, transferChannelTypeFromJSON } from "./host_chain";
import { AminoMsg } from "@cosmjs/amino";
import { iCARegistrationTypeFromJSON, MsgUpdateParams, MsgRegisterHostChain, MsgUpdateHostChain, MsgStake, MsgUnstake, MsgRedeemUnstaked, MsgInstantUnstake, MsgRebalanceDelegations, MsgRegisterInterchainAccount } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/pryzm.icstaking.MsgUpdateParams";
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
        rebalance_params: {
          max_msgs: number;
          rebalance_threshold: string;
          min_rebalance_amount: string;
          min_rebalance_interval: {
            seconds: string;
            nanos: number;
          };
        };
      };
    };
  };
}
export interface MsgRegisterHostChainAminoType extends AminoMsg {
  type: "/pryzm.icstaking.MsgRegisterHostChain";
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
        rebalance_params: {
          max_msgs: number;
          rebalance_threshold: string;
          min_rebalance_amount: string;
          min_rebalance_interval: {
            seconds: string;
            nanos: number;
          };
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
  type: "/pryzm.icstaking.MsgUpdateHostChain";
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
      rebalance_params: {
        max_msgs: number;
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
export interface MsgStakeAminoType extends AminoMsg {
  type: "/pryzm.icstaking.MsgStake";
  value: {
    creator: string;
    host_chain: string;
    transfer_channel: string;
    amount: string;
  };
}
export interface MsgUnstakeAminoType extends AminoMsg {
  type: "/pryzm.icstaking.MsgUnstake";
  value: {
    creator: string;
    host_chain: string;
    transfer_channel: string;
    c_amount: string;
  };
}
export interface MsgRedeemUnstakedAminoType extends AminoMsg {
  type: "/pryzm.icstaking.MsgRedeemUnstaked";
  value: {
    creator: string;
    host_chain: string;
    transfer_channel: string;
    u_amount: string;
    epoch: string;
  };
}
export interface MsgInstantUnstakeAminoType extends AminoMsg {
  type: "/pryzm.icstaking.MsgInstantUnstake";
  value: {
    creator: string;
    host_chain: string;
    transfer_channel: string;
    min_c_amount: string;
    max_c_amount: string;
  };
}
export interface MsgRebalanceDelegationsAminoType extends AminoMsg {
  type: "/pryzm.icstaking.MsgRebalanceDelegations";
  value: {
    creator: string;
    host_chain: string;
  };
}
export interface MsgRegisterInterchainAccountAminoType extends AminoMsg {
  type: "/pryzm.icstaking.MsgRegisterInterchainAccount";
  value: {
    creator: string;
    host_chain: string;
    registration_type: number;
  };
}
export const AminoConverter = {
  "/pryzm.icstaking.MsgUpdateParams": {
    aminoType: "/pryzm.icstaking.MsgUpdateParams",
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
            rebalance_params: {
              max_msgs: params.stakingParams.rebalanceParams.maxMsgs,
              rebalance_threshold: params.stakingParams.rebalanceParams.rebalanceThreshold,
              min_rebalance_amount: params.stakingParams.rebalanceParams.minRebalanceAmount,
              min_rebalance_interval: (params.stakingParams.rebalanceParams.minRebalanceInterval * 1_000_000_000).toString()
            }
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
            rebalanceParams: {
              maxMsgs: params.staking_params.rebalance_params.max_msgs,
              rebalanceThreshold: params.staking_params.rebalance_params.rebalance_threshold,
              minRebalanceAmount: params.staking_params.rebalance_params.min_rebalance_amount,
              minRebalanceInterval: {
                seconds: BigInt(Math.floor(parseInt(params.staking_params.rebalance_params.min_rebalance_interval) / 1_000_000_000)),
                nanos: parseInt(params.staking_params.rebalance_params.min_rebalance_interval) % 1_000_000_000
              }
            }
          }
        }
      };
    }
  },
  "/pryzm.icstaking.MsgRegisterHostChain": {
    aminoType: "/pryzm.icstaking.MsgRegisterHostChain",
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
            rebalance_params: {
              max_msgs: hostChain.params.rebalanceParams.maxMsgs,
              rebalance_threshold: hostChain.params.rebalanceParams.rebalanceThreshold,
              min_rebalance_amount: hostChain.params.rebalanceParams.minRebalanceAmount,
              min_rebalance_interval: (hostChain.params.rebalanceParams.minRebalanceInterval * 1_000_000_000).toString()
            }
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
            rebalanceParams: {
              maxMsgs: host_chain.params.rebalance_params.max_msgs,
              rebalanceThreshold: host_chain.params.rebalance_params.rebalance_threshold,
              minRebalanceAmount: host_chain.params.rebalance_params.min_rebalance_amount,
              minRebalanceInterval: {
                seconds: BigInt(Math.floor(parseInt(host_chain.params.rebalance_params.min_rebalance_interval) / 1_000_000_000)),
                nanos: parseInt(host_chain.params.rebalance_params.min_rebalance_interval) % 1_000_000_000
              }
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
  "/pryzm.icstaking.MsgUpdateHostChain": {
    aminoType: "/pryzm.icstaking.MsgUpdateHostChain",
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
          rebalance_params: {
            max_msgs: params.rebalanceParams.maxMsgs,
            rebalance_threshold: params.rebalanceParams.rebalanceThreshold,
            min_rebalance_amount: params.rebalanceParams.minRebalanceAmount,
            min_rebalance_interval: (params.rebalanceParams.minRebalanceInterval * 1_000_000_000).toString()
          }
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
          rebalanceParams: {
            maxMsgs: params.rebalance_params.max_msgs,
            rebalanceThreshold: params.rebalance_params.rebalance_threshold,
            minRebalanceAmount: params.rebalance_params.min_rebalance_amount,
            minRebalanceInterval: {
              seconds: BigInt(Math.floor(parseInt(params.rebalance_params.min_rebalance_interval) / 1_000_000_000)),
              nanos: parseInt(params.rebalance_params.min_rebalance_interval) % 1_000_000_000
            }
          }
        }
      };
    }
  },
  "/pryzm.icstaking.MsgStake": {
    aminoType: "/pryzm.icstaking.MsgStake",
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
  "/pryzm.icstaking.MsgUnstake": {
    aminoType: "/pryzm.icstaking.MsgUnstake",
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
  "/pryzm.icstaking.MsgRedeemUnstaked": {
    aminoType: "/pryzm.icstaking.MsgRedeemUnstaked",
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
  "/pryzm.icstaking.MsgInstantUnstake": {
    aminoType: "/pryzm.icstaking.MsgInstantUnstake",
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
  "/pryzm.icstaking.MsgRebalanceDelegations": {
    aminoType: "/pryzm.icstaking.MsgRebalanceDelegations",
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
  "/pryzm.icstaking.MsgRegisterInterchainAccount": {
    aminoType: "/pryzm.icstaking.MsgRegisterInterchainAccount",
    toAmino: ({
      creator,
      hostChain,
      registrationType
    }: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountAminoType["value"] => {
      return {
        creator,
        host_chain: hostChain,
        registration_type: registrationType
      };
    },
    fromAmino: ({
      creator,
      host_chain,
      registration_type
    }: MsgRegisterInterchainAccountAminoType["value"]): MsgRegisterInterchainAccount => {
      return {
        creator,
        hostChain: host_chain,
        registrationType: iCARegistrationTypeFromJSON(registration_type)
      };
    }
  }
};