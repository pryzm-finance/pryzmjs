//@ts-nocheck
import { MsgUpdateParams, MsgRegisterHostChain, MsgUpdateHostChain, MsgStake, MsgUnstake, MsgRedeemUnstaked, MsgInstantUnstake, MsgRebalanceDelegations, MsgRegisterInterchainAccount } from "./tx";
export const AminoConverter = {
  "/pryzm.icstaking.v1.MsgUpdateParams": {
    aminoType: "pryzm/icstaking/v1/UpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/pryzm.icstaking.v1.MsgRegisterHostChain": {
    aminoType: "pryzm/icstaking/v1/RegisterHostChain",
    toAmino: MsgRegisterHostChain.toAmino,
    fromAmino: MsgRegisterHostChain.fromAmino
  },
  "/pryzm.icstaking.v1.MsgUpdateHostChain": {
    aminoType: "pryzm/icstaking/v1/UpdateHostChain",
    toAmino: MsgUpdateHostChain.toAmino,
    fromAmino: MsgUpdateHostChain.fromAmino
  },
  "/pryzm.icstaking.v1.MsgStake": {
    aminoType: "pryzm/icstaking/v1/Stake",
    toAmino: MsgStake.toAmino,
    fromAmino: MsgStake.fromAmino
  },
  "/pryzm.icstaking.v1.MsgUnstake": {
    aminoType: "pryzm/icstaking/v1/Unstake",
    toAmino: MsgUnstake.toAmino,
    fromAmino: MsgUnstake.fromAmino
  },
  "/pryzm.icstaking.v1.MsgRedeemUnstaked": {
    aminoType: "pryzm/icstaking/v1/RedeemUnstaked",
    toAmino: MsgRedeemUnstaked.toAmino,
    fromAmino: MsgRedeemUnstaked.fromAmino
  },
  "/pryzm.icstaking.v1.MsgInstantUnstake": {
    aminoType: "pryzm/icstaking/v1/InstantUnstake",
    toAmino: MsgInstantUnstake.toAmino,
    fromAmino: MsgInstantUnstake.fromAmino
  },
  "/pryzm.icstaking.v1.MsgRebalanceDelegations": {
    aminoType: "pryzm/icstaking/v1/RebalanceDelegations",
    toAmino: MsgRebalanceDelegations.toAmino,
    fromAmino: MsgRebalanceDelegations.fromAmino
  },
  "/pryzm.icstaking.v1.MsgRegisterInterchainAccount": {
    aminoType: "pryzm/icstaking/v1/RegInterchainAccount",
    toAmino: MsgRegisterInterchainAccount.toAmino,
    fromAmino: MsgRegisterInterchainAccount.fromAmino
  }
};