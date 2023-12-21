import * as _15 from "./app/runtime/v1alpha1/module";
import * as _16 from "./auth/v1beta1/auth";
import * as _17 from "./auth/v1beta1/genesis";
import * as _18 from "./auth/v1beta1/query";
import * as _19 from "./auth/v1beta1/tx";
import * as _20 from "./authz/v1beta1/authz";
import * as _21 from "./authz/v1beta1/event";
import * as _22 from "./authz/v1beta1/genesis";
import * as _23 from "./authz/v1beta1/query";
import * as _24 from "./authz/v1beta1/tx";
import * as _25 from "./bank/v1beta1/authz";
import * as _26 from "./bank/v1beta1/bank";
import * as _27 from "./bank/v1beta1/genesis";
import * as _28 from "./bank/v1beta1/query";
import * as _29 from "./bank/v1beta1/tx";
import * as _30 from "./base/abci/v1beta1/abci";
import * as _31 from "./base/node/v1beta1/query";
import * as _32 from "./base/query/v1beta1/pagination";
import * as _33 from "./base/reflection/v2alpha1/reflection";
import * as _34 from "./base/tendermint/v1beta1/query";
import * as _35 from "./base/tendermint/v1beta1/types";
import * as _36 from "./base/v1beta1/coin";
import * as _37 from "./consensus/v1/query";
import * as _38 from "./consensus/v1/tx";
import * as _39 from "./crypto/ed25519/keys";
import * as _40 from "./crypto/hd/v1/hd";
import * as _41 from "./crypto/keyring/v1/record";
import * as _42 from "./crypto/multisig/keys";
import * as _43 from "./crypto/secp256k1/keys";
import * as _44 from "./crypto/secp256r1/keys";
import * as _45 from "./distribution/v1beta1/distribution";
import * as _46 from "./distribution/v1beta1/genesis";
import * as _47 from "./distribution/v1beta1/query";
import * as _48 from "./distribution/v1beta1/tx";
import * as _49 from "./feegrant/v1beta1/feegrant";
import * as _50 from "./feegrant/v1beta1/genesis";
import * as _51 from "./feegrant/v1beta1/query";
import * as _52 from "./feegrant/v1beta1/tx";
import * as _53 from "./gov/v1/genesis";
import * as _54 from "./gov/v1/gov";
import * as _55 from "./gov/v1/query";
import * as _56 from "./gov/v1/tx";
import * as _57 from "./gov/v1beta1/genesis";
import * as _58 from "./gov/v1beta1/gov";
import * as _59 from "./gov/v1beta1/query";
import * as _60 from "./gov/v1beta1/tx";
import * as _61 from "./group/v1/events";
import * as _62 from "./group/v1/genesis";
import * as _63 from "./group/v1/query";
import * as _64 from "./group/v1/tx";
import * as _65 from "./group/v1/types";
import * as _66 from "./ics23/v1/proofs";
import * as _67 from "./mint/v1beta1/genesis";
import * as _68 from "./mint/v1beta1/mint";
import * as _69 from "./mint/v1beta1/query";
import * as _70 from "./mint/v1beta1/tx";
import * as _71 from "./orm/query/v1alpha1/query";
import * as _72 from "./params/v1beta1/params";
import * as _73 from "./params/v1beta1/query";
import * as _74 from "./query/v1/query";
import * as _75 from "./reflection/v1/reflection";
import * as _76 from "./staking/v1beta1/authz";
import * as _77 from "./staking/v1beta1/genesis";
import * as _78 from "./staking/v1beta1/query";
import * as _79 from "./staking/v1beta1/staking";
import * as _80 from "./staking/v1beta1/tx";
import * as _81 from "./tx/config/v1/config";
import * as _82 from "./tx/signing/v1beta1/signing";
import * as _83 from "./tx/v1beta1/service";
import * as _84 from "./tx/v1beta1/tx";
import * as _85 from "./upgrade/v1beta1/query";
import * as _86 from "./upgrade/v1beta1/tx";
import * as _87 from "./upgrade/v1beta1/upgrade";
import * as _88 from "./vesting/v1beta1/tx";
import * as _89 from "./vesting/v1beta1/vesting";
import * as _281 from "./auth/v1beta1/tx.amino";
import * as _282 from "./authz/v1beta1/tx.amino";
import * as _283 from "./bank/v1beta1/tx.amino";
import * as _284 from "./consensus/v1/tx.amino";
import * as _285 from "./distribution/v1beta1/tx.amino";
import * as _286 from "./feegrant/v1beta1/tx.amino";
import * as _287 from "./gov/v1/tx.amino";
import * as _288 from "./gov/v1beta1/tx.amino";
import * as _289 from "./group/v1/tx.amino";
import * as _290 from "./mint/v1beta1/tx.amino";
import * as _291 from "./staking/v1beta1/tx.amino";
import * as _292 from "./upgrade/v1beta1/tx.amino";
import * as _293 from "./vesting/v1beta1/tx.amino";
import * as _294 from "./auth/v1beta1/tx.registry";
import * as _295 from "./authz/v1beta1/tx.registry";
import * as _296 from "./bank/v1beta1/tx.registry";
import * as _297 from "./consensus/v1/tx.registry";
import * as _298 from "./distribution/v1beta1/tx.registry";
import * as _299 from "./feegrant/v1beta1/tx.registry";
import * as _300 from "./gov/v1/tx.registry";
import * as _301 from "./gov/v1beta1/tx.registry";
import * as _302 from "./group/v1/tx.registry";
import * as _303 from "./mint/v1beta1/tx.registry";
import * as _304 from "./staking/v1beta1/tx.registry";
import * as _305 from "./upgrade/v1beta1/tx.registry";
import * as _306 from "./vesting/v1beta1/tx.registry";
import * as _307 from "./auth/v1beta1/query.lcd";
import * as _308 from "./authz/v1beta1/query.lcd";
import * as _309 from "./bank/v1beta1/query.lcd";
import * as _310 from "./base/node/v1beta1/query.lcd";
import * as _311 from "./base/tendermint/v1beta1/query.lcd";
import * as _312 from "./consensus/v1/query.lcd";
import * as _313 from "./distribution/v1beta1/query.lcd";
import * as _314 from "./feegrant/v1beta1/query.lcd";
import * as _315 from "./gov/v1/query.lcd";
import * as _316 from "./gov/v1beta1/query.lcd";
import * as _317 from "./group/v1/query.lcd";
import * as _318 from "./mint/v1beta1/query.lcd";
import * as _319 from "./params/v1beta1/query.lcd";
import * as _320 from "./staking/v1beta1/query.lcd";
import * as _321 from "./tx/v1beta1/service.lcd";
import * as _322 from "./upgrade/v1beta1/query.lcd";
import * as _323 from "./auth/v1beta1/query.rpc.Query";
import * as _324 from "./authz/v1beta1/query.rpc.Query";
import * as _325 from "./bank/v1beta1/query.rpc.Query";
import * as _326 from "./base/node/v1beta1/query.rpc.Service";
import * as _327 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _328 from "./consensus/v1/query.rpc.Query";
import * as _329 from "./distribution/v1beta1/query.rpc.Query";
import * as _330 from "./feegrant/v1beta1/query.rpc.Query";
import * as _331 from "./gov/v1/query.rpc.Query";
import * as _332 from "./gov/v1beta1/query.rpc.Query";
import * as _333 from "./group/v1/query.rpc.Query";
import * as _334 from "./mint/v1beta1/query.rpc.Query";
import * as _335 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _336 from "./params/v1beta1/query.rpc.Query";
import * as _337 from "./staking/v1beta1/query.rpc.Query";
import * as _338 from "./tx/v1beta1/service.rpc.Service";
import * as _339 from "./upgrade/v1beta1/query.rpc.Query";
import * as _340 from "./auth/v1beta1/tx.rpc.msg";
import * as _341 from "./authz/v1beta1/tx.rpc.msg";
import * as _342 from "./bank/v1beta1/tx.rpc.msg";
import * as _343 from "./consensus/v1/tx.rpc.msg";
import * as _344 from "./distribution/v1beta1/tx.rpc.msg";
import * as _345 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _346 from "./gov/v1/tx.rpc.msg";
import * as _347 from "./gov/v1beta1/tx.rpc.msg";
import * as _348 from "./group/v1/tx.rpc.msg";
import * as _349 from "./mint/v1beta1/tx.rpc.msg";
import * as _350 from "./staking/v1beta1/tx.rpc.msg";
import * as _351 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _352 from "./vesting/v1beta1/tx.rpc.msg";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._15
      };
    }
  }
  export namespace auth {
    export const v1beta1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._281,
      ..._294,
      ..._307,
      ..._323,
      ..._340
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._282,
      ..._295,
      ..._308,
      ..._324,
      ..._341
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._283,
      ..._296,
      ..._309,
      ..._325,
      ..._342
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._30
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._31,
        ..._310,
        ..._326
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._32
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._33
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._34,
        ..._35,
        ..._311,
        ..._327
      };
    }
    export const v1beta1 = {
      ..._36
    };
  }
  export namespace consensus {
    export const v1 = {
      ..._37,
      ..._38,
      ..._284,
      ..._297,
      ..._312,
      ..._328,
      ..._343
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._39
    };
    export namespace hd {
      export const v1 = {
        ..._40
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._41
      };
    }
    export const multisig = {
      ..._42
    };
    export const secp256k1 = {
      ..._43
    };
    export const secp256r1 = {
      ..._44
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._285,
      ..._298,
      ..._313,
      ..._329,
      ..._344
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._286,
      ..._299,
      ..._314,
      ..._330,
      ..._345
    };
  }
  export namespace gov {
    export const v1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._287,
      ..._300,
      ..._315,
      ..._331,
      ..._346
    };
    export const v1beta1 = {
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._288,
      ..._301,
      ..._316,
      ..._332,
      ..._347
    };
  }
  export namespace group {
    export const v1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._289,
      ..._302,
      ..._317,
      ..._333,
      ..._348
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._66
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._290,
      ..._303,
      ..._318,
      ..._334,
      ..._349
    };
  }
  export namespace orm {
    export namespace query {
      export const v1alpha1 = {
        ..._71,
        ..._335
      };
    }
  }
  export namespace params {
    export const v1beta1 = {
      ..._72,
      ..._73,
      ..._319,
      ..._336
    };
  }
  export namespace query {
    export const v1 = {
      ..._74
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._75
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._291,
      ..._304,
      ..._320,
      ..._337,
      ..._350
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._81
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._82
      };
    }
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._321,
      ..._338
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._85,
      ..._86,
      ..._87,
      ..._292,
      ..._305,
      ..._322,
      ..._339,
      ..._351
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._88,
      ..._89,
      ..._293,
      ..._306,
      ..._352
    };
  }
}