import * as _13 from "./app/runtime/v1alpha1/module";
import * as _14 from "./auth/module/v1/module";
import * as _15 from "./auth/v1beta1/auth";
import * as _16 from "./auth/v1beta1/genesis";
import * as _17 from "./auth/v1beta1/query";
import * as _18 from "./auth/v1beta1/tx";
import * as _19 from "./authz/module/v1/module";
import * as _20 from "./authz/v1beta1/authz";
import * as _21 from "./authz/v1beta1/event";
import * as _22 from "./authz/v1beta1/genesis";
import * as _23 from "./authz/v1beta1/query";
import * as _24 from "./authz/v1beta1/tx";
import * as _25 from "./bank/module/v1/module";
import * as _26 from "./bank/v1beta1/authz";
import * as _27 from "./bank/v1beta1/bank";
import * as _28 from "./bank/v1beta1/genesis";
import * as _29 from "./bank/v1beta1/query";
import * as _30 from "./bank/v1beta1/tx";
import * as _31 from "./base/abci/v1beta1/abci";
import * as _32 from "./base/node/v1beta1/query";
import * as _33 from "./base/query/v1beta1/pagination";
import * as _34 from "./base/reflection/v2alpha1/reflection";
import * as _35 from "./base/tendermint/v1beta1/query";
import * as _36 from "./base/tendermint/v1beta1/types";
import * as _37 from "./base/v1beta1/coin";
import * as _38 from "./capability/module/v1/module";
import * as _39 from "./consensus/module/v1/module";
import * as _40 from "./consensus/v1/query";
import * as _41 from "./consensus/v1/tx";
import * as _42 from "./crisis/module/v1/module";
import * as _43 from "./crypto/ed25519/keys";
import * as _44 from "./crypto/hd/v1/hd";
import * as _45 from "./crypto/keyring/v1/record";
import * as _46 from "./crypto/multisig/keys";
import * as _47 from "./crypto/secp256k1/keys";
import * as _48 from "./crypto/secp256r1/keys";
import * as _49 from "./distribution/module/v1/module";
import * as _50 from "./distribution/v1beta1/distribution";
import * as _51 from "./distribution/v1beta1/genesis";
import * as _52 from "./distribution/v1beta1/query";
import * as _53 from "./distribution/v1beta1/tx";
import * as _54 from "./evidence/module/v1/module";
import * as _55 from "./feegrant/module/v1/module";
import * as _56 from "./feegrant/v1beta1/feegrant";
import * as _57 from "./feegrant/v1beta1/genesis";
import * as _58 from "./feegrant/v1beta1/query";
import * as _59 from "./feegrant/v1beta1/tx";
import * as _60 from "./genutil/module/v1/module";
import * as _61 from "./gov/module/v1/module";
import * as _62 from "./gov/v1/genesis";
import * as _63 from "./gov/v1/gov";
import * as _64 from "./gov/v1/query";
import * as _65 from "./gov/v1/tx";
import * as _66 from "./gov/v1beta1/genesis";
import * as _67 from "./gov/v1beta1/gov";
import * as _68 from "./gov/v1beta1/query";
import * as _69 from "./gov/v1beta1/tx";
import * as _70 from "./group/module/v1/module";
import * as _71 from "./group/v1/events";
import * as _72 from "./group/v1/genesis";
import * as _73 from "./group/v1/query";
import * as _74 from "./group/v1/tx";
import * as _75 from "./group/v1/types";
import * as _76 from "./ics23/v1/proofs";
import * as _77 from "./mint/module/v1/module";
import * as _78 from "./mint/v1beta1/genesis";
import * as _79 from "./mint/v1beta1/mint";
import * as _80 from "./mint/v1beta1/query";
import * as _81 from "./mint/v1beta1/tx";
import * as _82 from "./nft/module/v1/module";
import * as _83 from "./orm/module/v1alpha1/module";
import * as _84 from "./orm/query/v1alpha1/query";
import * as _85 from "./params/module/v1/module";
import * as _86 from "./params/v1beta1/params";
import * as _87 from "./params/v1beta1/query";
import * as _88 from "./query/v1/query";
import * as _89 from "./reflection/v1/reflection";
import * as _90 from "./slashing/module/v1/module";
import * as _91 from "./staking/module/v1/module";
import * as _92 from "./staking/v1beta1/authz";
import * as _93 from "./staking/v1beta1/genesis";
import * as _94 from "./staking/v1beta1/lsm";
import * as _95 from "./staking/v1beta1/query";
import * as _96 from "./staking/v1beta1/staking";
import * as _97 from "./staking/v1beta1/tx";
import * as _98 from "./tx/config/v1/config";
import * as _99 from "./tx/signing/v1beta1/signing";
import * as _100 from "./tx/v1beta1/service";
import * as _101 from "./tx/v1beta1/tx";
import * as _102 from "./upgrade/module/v1/module";
import * as _103 from "./upgrade/v1beta1/query";
import * as _104 from "./upgrade/v1beta1/tx";
import * as _105 from "./upgrade/v1beta1/upgrade";
import * as _106 from "./vesting/module/v1/module";
import * as _107 from "./vesting/v1beta1/tx";
import * as _108 from "./vesting/v1beta1/vesting";
import * as _276 from "./auth/v1beta1/tx.amino";
import * as _277 from "./authz/v1beta1/tx.amino";
import * as _278 from "./bank/v1beta1/tx.amino";
import * as _279 from "./consensus/v1/tx.amino";
import * as _280 from "./distribution/v1beta1/tx.amino";
import * as _281 from "./feegrant/v1beta1/tx.amino";
import * as _282 from "./gov/v1/tx.amino";
import * as _283 from "./gov/v1beta1/tx.amino";
import * as _284 from "./group/v1/tx.amino";
import * as _285 from "./mint/v1beta1/tx.amino";
import * as _286 from "./staking/v1beta1/tx.amino";
import * as _287 from "./upgrade/v1beta1/tx.amino";
import * as _288 from "./vesting/v1beta1/tx.amino";
import * as _289 from "./auth/v1beta1/tx.registry";
import * as _290 from "./authz/v1beta1/tx.registry";
import * as _291 from "./bank/v1beta1/tx.registry";
import * as _292 from "./consensus/v1/tx.registry";
import * as _293 from "./distribution/v1beta1/tx.registry";
import * as _294 from "./feegrant/v1beta1/tx.registry";
import * as _295 from "./gov/v1/tx.registry";
import * as _296 from "./gov/v1beta1/tx.registry";
import * as _297 from "./group/v1/tx.registry";
import * as _298 from "./mint/v1beta1/tx.registry";
import * as _299 from "./staking/v1beta1/tx.registry";
import * as _300 from "./upgrade/v1beta1/tx.registry";
import * as _301 from "./vesting/v1beta1/tx.registry";
import * as _302 from "./auth/v1beta1/query.lcd";
import * as _303 from "./authz/v1beta1/query.lcd";
import * as _304 from "./bank/v1beta1/query.lcd";
import * as _305 from "./base/node/v1beta1/query.lcd";
import * as _306 from "./base/tendermint/v1beta1/query.lcd";
import * as _307 from "./consensus/v1/query.lcd";
import * as _308 from "./distribution/v1beta1/query.lcd";
import * as _309 from "./feegrant/v1beta1/query.lcd";
import * as _310 from "./gov/v1/query.lcd";
import * as _311 from "./gov/v1beta1/query.lcd";
import * as _312 from "./group/v1/query.lcd";
import * as _313 from "./mint/v1beta1/query.lcd";
import * as _314 from "./params/v1beta1/query.lcd";
import * as _315 from "./staking/v1beta1/query.lcd";
import * as _316 from "./tx/v1beta1/service.lcd";
import * as _317 from "./upgrade/v1beta1/query.lcd";
import * as _318 from "./auth/v1beta1/query.rpc.Query";
import * as _319 from "./authz/v1beta1/query.rpc.Query";
import * as _320 from "./bank/v1beta1/query.rpc.Query";
import * as _321 from "./base/node/v1beta1/query.rpc.Service";
import * as _322 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _323 from "./consensus/v1/query.rpc.Query";
import * as _324 from "./distribution/v1beta1/query.rpc.Query";
import * as _325 from "./feegrant/v1beta1/query.rpc.Query";
import * as _326 from "./gov/v1/query.rpc.Query";
import * as _327 from "./gov/v1beta1/query.rpc.Query";
import * as _328 from "./group/v1/query.rpc.Query";
import * as _329 from "./mint/v1beta1/query.rpc.Query";
import * as _330 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _331 from "./params/v1beta1/query.rpc.Query";
import * as _332 from "./staking/v1beta1/query.rpc.Query";
import * as _333 from "./tx/v1beta1/service.rpc.Service";
import * as _334 from "./upgrade/v1beta1/query.rpc.Query";
import * as _335 from "./auth/v1beta1/tx.rpc.msg";
import * as _336 from "./authz/v1beta1/tx.rpc.msg";
import * as _337 from "./bank/v1beta1/tx.rpc.msg";
import * as _338 from "./consensus/v1/tx.rpc.msg";
import * as _339 from "./distribution/v1beta1/tx.rpc.msg";
import * as _340 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _341 from "./gov/v1/tx.rpc.msg";
import * as _342 from "./gov/v1beta1/tx.rpc.msg";
import * as _343 from "./group/v1/tx.rpc.msg";
import * as _344 from "./mint/v1beta1/tx.rpc.msg";
import * as _345 from "./staking/v1beta1/tx.rpc.msg";
import * as _346 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _347 from "./vesting/v1beta1/tx.rpc.msg";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._13
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._14
      };
    }
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._276,
      ..._289,
      ..._302,
      ..._318,
      ..._335
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._19
      };
    }
    export const v1beta1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._277,
      ..._290,
      ..._303,
      ..._319,
      ..._336
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._25
      };
    }
    export const v1beta1 = {
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._278,
      ..._291,
      ..._304,
      ..._320,
      ..._337
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._31
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._32,
        ..._305,
        ..._321
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._33
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._34
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._35,
        ..._36,
        ..._306,
        ..._322
      };
    }
    export const v1beta1 = {
      ..._37
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._38
      };
    }
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._39
      };
    }
    export const v1 = {
      ..._40,
      ..._41,
      ..._279,
      ..._292,
      ..._307,
      ..._323,
      ..._338
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._42
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._43
    };
    export namespace hd {
      export const v1 = {
        ..._44
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._45
      };
    }
    export const multisig = {
      ..._46
    };
    export const secp256k1 = {
      ..._47
    };
    export const secp256r1 = {
      ..._48
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._49
      };
    }
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._280,
      ..._293,
      ..._308,
      ..._324,
      ..._339
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._54
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._55
      };
    }
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._281,
      ..._294,
      ..._309,
      ..._325,
      ..._340
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._60
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._61
      };
    }
    export const v1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._282,
      ..._295,
      ..._310,
      ..._326,
      ..._341
    };
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._283,
      ..._296,
      ..._311,
      ..._327,
      ..._342
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._70
      };
    }
    export const v1 = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._284,
      ..._297,
      ..._312,
      ..._328,
      ..._343
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._76
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._77
      };
    }
    export const v1beta1 = {
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._285,
      ..._298,
      ..._313,
      ..._329,
      ..._344
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._82
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._83
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._84,
        ..._330
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._85
      };
    }
    export const v1beta1 = {
      ..._86,
      ..._87,
      ..._314,
      ..._331
    };
  }
  export namespace query {
    export const v1 = {
      ..._88
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._89
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._90
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._91
      };
    }
    export const v1beta1 = {
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._286,
      ..._299,
      ..._315,
      ..._332,
      ..._345
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._98
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._99
      };
    }
    export const v1beta1 = {
      ..._100,
      ..._101,
      ..._316,
      ..._333
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._102
      };
    }
    export const v1beta1 = {
      ..._103,
      ..._104,
      ..._105,
      ..._287,
      ..._300,
      ..._317,
      ..._334,
      ..._346
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._106
      };
    }
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._288,
      ..._301,
      ..._347
    };
  }
}