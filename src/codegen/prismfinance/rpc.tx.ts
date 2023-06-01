import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    crisis: {
      v1beta1: new (await import("../cosmos/crisis/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    evidence: {
      v1beta1: new (await import("../cosmos/evidence/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/tx.rpc.msg")).MsgClientImpl(rpc),
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    group: {
      v1: new (await import("../cosmos/group/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    nft: {
      v1beta1: new (await import("../cosmos/nft/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    vesting: {
      v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  prismfinance: {
    prismcore: {
      amm: new (await import("../prismcore/amm/tx.rpc.msg")).MsgClientImpl(rpc),
      assets: new (await import("../prismcore/assets/tx.rpc.msg")).MsgClientImpl(rpc),
      icq: new (await import("../prismcore/icq/tx.rpc.msg")).MsgClientImpl(rpc),
      icstaking: new (await import("../prismcore/icstaking/tx.rpc.msg")).MsgClientImpl(rpc),
      incentives: new (await import("../prismcore/incentives/tx.rpc.msg")).MsgClientImpl(rpc),
      mint: new (await import("../prismcore/mint/tx.rpc.msg")).MsgClientImpl(rpc),
      pgov: new (await import("../prismcore/pgov/tx.rpc.msg")).MsgClientImpl(rpc),
      refractor: new (await import("../prismcore/refractor/tx.rpc.msg")).MsgClientImpl(rpc),
      treasury: new (await import("../prismcore/treasury/tx.rpc.msg")).MsgClientImpl(rpc),
      ystaking: new (await import("../prismcore/ystaking/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});