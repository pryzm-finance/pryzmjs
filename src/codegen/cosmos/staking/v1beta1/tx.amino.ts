//@ts-nocheck
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate, MsgCancelUnbondingDelegation, MsgUpdateParams, MsgTokenizeShares, MsgRedeemTokensForShares, MsgTransferTokenizeShareRecord, MsgDisableTokenizeShares, MsgEnableTokenizeShares } from "./tx";
export const AminoConverter = {
  "/cosmos.staking.v1beta1.MsgCreateValidator": {
    aminoType: "cosmos-sdk/MsgCreateValidator",
    toAmino: MsgCreateValidator.toAmino,
    fromAmino: MsgCreateValidator.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgEditValidator": {
    aminoType: "cosmos-sdk/MsgEditValidator",
    toAmino: MsgEditValidator.toAmino,
    fromAmino: MsgEditValidator.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgDelegate": {
    aminoType: "cosmos-sdk/MsgDelegate",
    toAmino: MsgDelegate.toAmino,
    fromAmino: MsgDelegate.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
    aminoType: "cosmos-sdk/MsgBeginRedelegate",
    toAmino: MsgBeginRedelegate.toAmino,
    fromAmino: MsgBeginRedelegate.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgUndelegate": {
    aminoType: "cosmos-sdk/MsgUndelegate",
    toAmino: MsgUndelegate.toAmino,
    fromAmino: MsgUndelegate.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
    aminoType: "cosmos-sdk/MsgCancelUnbondingDelegation",
    toAmino: MsgCancelUnbondingDelegation.toAmino,
    fromAmino: MsgCancelUnbondingDelegation.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/staking/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgTokenizeShares": {
    aminoType: "cosmos-sdk/MsgTokenizeShares",
    toAmino: MsgTokenizeShares.toAmino,
    fromAmino: MsgTokenizeShares.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgRedeemTokensForShares": {
    aminoType: "cosmos-sdk/MsgRedeemTokensForShares",
    toAmino: MsgRedeemTokensForShares.toAmino,
    fromAmino: MsgRedeemTokensForShares.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord": {
    aminoType: "cosmos-sdk/MsgTransferTokenizeShareRecord",
    toAmino: MsgTransferTokenizeShareRecord.toAmino,
    fromAmino: MsgTransferTokenizeShareRecord.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgDisableTokenizeShares": {
    aminoType: "cosmos-sdk/MsgDisableTokenizeShares",
    toAmino: MsgDisableTokenizeShares.toAmino,
    fromAmino: MsgDisableTokenizeShares.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgEnableTokenizeShares": {
    aminoType: "cosmos-sdk/MsgEnableTokenizeShares",
    toAmino: MsgEnableTokenizeShares.toAmino,
    fromAmino: MsgEnableTokenizeShares.fromAmino
  }
};