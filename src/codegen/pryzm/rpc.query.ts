import { grpc } from "@improbable-eng/grpc-web";
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
export const createGrpcWebClient = async ({
  endpoint
}: {
  endpoint: string;
}) => {
  endpoint = endpoint.replace(/\/*$/, "");
  const {
    GrpcWebImpl
  } = await import("../cosmos/app/v1alpha1/query.rpc.Query");
  let grpcWeb;
  if (typeof document !== "undefined") {
    grpcWeb = new GrpcWebImpl(endpoint, {
      transport: grpc.CrossBrowserHttpTransport({
        withCredentials: false
      })
    });
  } else if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    grpcWeb = new GrpcWebImpl(endpoint, {
      transport: NodeHttpTransport()
    });
  } else {
    grpcWeb = new GrpcWebImpl(endpoint, {
      transport: NodeHttpTransport()
    });
  }
  return {
    cosmos: {
      app: {
        v1alpha1: new (await import("../cosmos/app/v1alpha1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      auth: {
        v1beta1: new (await import("../cosmos/auth/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      autocli: {
        v1: new (await import("../cosmos/autocli/v1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      base: {
        node: {
          v1beta1: new (await import("../cosmos/base/node/v1beta1/query.rpc.Service")).ServiceClientImpl(grpcWeb)
        },
        tendermint: {
          v1beta1: new (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).ServiceClientImpl(grpcWeb)
        }
      },
      consensus: {
        v1: new (await import("../cosmos/consensus/v1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      evidence: {
        v1beta1: new (await import("../cosmos/evidence/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      feegrant: {
        v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/query.rpc.Query")).QueryClientImpl(grpcWeb),
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      group: {
        v1: new (await import("../cosmos/group/v1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      mint: {
        v1beta1: new (await import("../cosmos/mint/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      nft: {
        v1beta1: new (await import("../cosmos/nft/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      orm: {
        query: {
          v1alpha1: new (await import("../cosmos/orm/query/v1alpha1/query.rpc.Query")).QueryClientImpl(grpcWeb)
        }
      },
      params: {
        v1beta1: new (await import("../cosmos/params/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      slashing: {
        v1beta1: new (await import("../cosmos/slashing/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.rpc.Service")).ServiceClientImpl(grpcWeb)
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      }
    },
    pryzm: {
      amm: {
        v1: new (await import("./amm/v1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      assets: {
        v1: new (await import("./assets/v1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      icstaking: {
        v1: new (await import("./icstaking/v1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      incentives: {
        v1: new (await import("./incentives/v1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      mint: {
        v1: new (await import("./mint/v1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      pgov: {
        v1: new (await import("./pgov/v1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      refractor: {
        v1: new (await import("./refractor/v1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      treasury: {
        v1: new (await import("./treasury/v1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      ystaking: {
        v1: new (await import("./ystaking/v1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      }
    }
  };
};