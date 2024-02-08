import * as _17 from "./app/runtime/v1alpha1/module";
import * as _18 from "./auth/module/v1/module";
import * as _19 from "./auth/v1beta1/auth";
import * as _20 from "./auth/v1beta1/genesis";
import * as _21 from "./auth/v1beta1/query";
import * as _22 from "./auth/v1beta1/tx";
import * as _23 from "./authz/module/v1/module";
import * as _24 from "./authz/v1beta1/authz";
import * as _25 from "./authz/v1beta1/event";
import * as _26 from "./authz/v1beta1/genesis";
import * as _27 from "./authz/v1beta1/query";
import * as _28 from "./authz/v1beta1/tx";
import * as _29 from "./bank/module/v1/module";
import * as _30 from "./bank/v1beta1/authz";
import * as _31 from "./bank/v1beta1/bank";
import * as _32 from "./bank/v1beta1/genesis";
import * as _33 from "./bank/v1beta1/query";
import * as _34 from "./bank/v1beta1/tx";
import * as _35 from "./base/abci/v1beta1/abci";
import * as _36 from "./base/node/v1beta1/query";
import * as _37 from "./base/query/v1beta1/pagination";
import * as _38 from "./base/reflection/v2alpha1/reflection";
import * as _39 from "./base/tendermint/v1beta1/query";
import * as _40 from "./base/tendermint/v1beta1/types";
import * as _41 from "./base/v1beta1/coin";
import * as _42 from "./capability/module/v1/module";
import * as _43 from "./consensus/module/v1/module";
import * as _44 from "./consensus/v1/query";
import * as _45 from "./consensus/v1/tx";
import * as _46 from "./crisis/module/v1/module";
import * as _47 from "./crypto/ed25519/keys";
import * as _48 from "./crypto/hd/v1/hd";
import * as _49 from "./crypto/keyring/v1/record";
import * as _50 from "./crypto/multisig/keys";
import * as _51 from "./crypto/secp256k1/keys";
import * as _52 from "./crypto/secp256r1/keys";
import * as _53 from "./distribution/module/v1/module";
import * as _54 from "./distribution/v1beta1/distribution";
import * as _55 from "./distribution/v1beta1/genesis";
import * as _56 from "./distribution/v1beta1/query";
import * as _57 from "./distribution/v1beta1/tx";
import * as _58 from "./evidence/module/v1/module";
import * as _59 from "./feegrant/module/v1/module";
import * as _60 from "./feegrant/v1beta1/feegrant";
import * as _61 from "./feegrant/v1beta1/genesis";
import * as _62 from "./feegrant/v1beta1/query";
import * as _63 from "./feegrant/v1beta1/tx";
import * as _64 from "./genutil/module/v1/module";
import * as _65 from "./gov/module/v1/module";
import * as _66 from "./gov/v1/genesis";
import * as _67 from "./gov/v1/gov";
import * as _68 from "./gov/v1/query";
import * as _69 from "./gov/v1/tx";
import * as _70 from "./gov/v1beta1/genesis";
import * as _71 from "./gov/v1beta1/gov";
import * as _72 from "./gov/v1beta1/query";
import * as _73 from "./gov/v1beta1/tx";
import * as _74 from "./group/module/v1/module";
import * as _75 from "./group/v1/events";
import * as _76 from "./group/v1/genesis";
import * as _77 from "./group/v1/query";
import * as _78 from "./group/v1/tx";
import * as _79 from "./group/v1/types";
import * as _80 from "./ics23/v1/proofs";
import * as _81 from "./mint/module/v1/module";
import * as _82 from "./mint/v1beta1/genesis";
import * as _83 from "./mint/v1beta1/mint";
import * as _84 from "./mint/v1beta1/query";
import * as _85 from "./mint/v1beta1/tx";
import * as _86 from "./nft/module/v1/module";
import * as _87 from "./orm/module/v1alpha1/module";
import * as _88 from "./orm/query/v1alpha1/query";
import * as _89 from "./params/module/v1/module";
import * as _90 from "./params/v1beta1/params";
import * as _91 from "./params/v1beta1/query";
import * as _92 from "./query/v1/query";
import * as _93 from "./reflection/v1/reflection";
import * as _94 from "./slashing/module/v1/module";
import * as _95 from "./staking/module/v1/module";
import * as _96 from "./staking/v1beta1/authz";
import * as _97 from "./staking/v1beta1/genesis";
import * as _98 from "./staking/v1beta1/query";
import * as _99 from "./staking/v1beta1/staking";
import * as _100 from "./staking/v1beta1/tx";
import * as _101 from "./tx/config/v1/config";
import * as _102 from "./tx/signing/v1beta1/signing";
import * as _103 from "./tx/v1beta1/service";
import * as _104 from "./tx/v1beta1/tx";
import * as _105 from "./upgrade/module/v1/module";
import * as _106 from "./upgrade/v1beta1/query";
import * as _107 from "./upgrade/v1beta1/tx";
import * as _108 from "./upgrade/v1beta1/upgrade";
import * as _109 from "./vesting/module/v1/module";
import * as _110 from "./vesting/v1beta1/tx";
import * as _111 from "./vesting/v1beta1/vesting";
import * as _306 from "./auth/v1beta1/tx.amino";
import * as _307 from "./authz/v1beta1/tx.amino";
import * as _308 from "./bank/v1beta1/tx.amino";
import * as _309 from "./consensus/v1/tx.amino";
import * as _310 from "./distribution/v1beta1/tx.amino";
import * as _311 from "./feegrant/v1beta1/tx.amino";
import * as _312 from "./gov/v1/tx.amino";
import * as _313 from "./gov/v1beta1/tx.amino";
import * as _314 from "./group/v1/tx.amino";
import * as _315 from "./mint/v1beta1/tx.amino";
import * as _316 from "./staking/v1beta1/tx.amino";
import * as _317 from "./upgrade/v1beta1/tx.amino";
import * as _318 from "./vesting/v1beta1/tx.amino";
import * as _319 from "./auth/v1beta1/tx.registry";
import * as _320 from "./authz/v1beta1/tx.registry";
import * as _321 from "./bank/v1beta1/tx.registry";
import * as _322 from "./consensus/v1/tx.registry";
import * as _323 from "./distribution/v1beta1/tx.registry";
import * as _324 from "./feegrant/v1beta1/tx.registry";
import * as _325 from "./gov/v1/tx.registry";
import * as _326 from "./gov/v1beta1/tx.registry";
import * as _327 from "./group/v1/tx.registry";
import * as _328 from "./mint/v1beta1/tx.registry";
import * as _329 from "./staking/v1beta1/tx.registry";
import * as _330 from "./upgrade/v1beta1/tx.registry";
import * as _331 from "./vesting/v1beta1/tx.registry";
import * as _332 from "./auth/v1beta1/query.lcd";
import * as _333 from "./authz/v1beta1/query.lcd";
import * as _334 from "./bank/v1beta1/query.lcd";
import * as _335 from "./base/node/v1beta1/query.lcd";
import * as _336 from "./base/tendermint/v1beta1/query.lcd";
import * as _337 from "./consensus/v1/query.lcd";
import * as _338 from "./distribution/v1beta1/query.lcd";
import * as _339 from "./feegrant/v1beta1/query.lcd";
import * as _340 from "./gov/v1/query.lcd";
import * as _341 from "./gov/v1beta1/query.lcd";
import * as _342 from "./group/v1/query.lcd";
import * as _343 from "./mint/v1beta1/query.lcd";
import * as _344 from "./params/v1beta1/query.lcd";
import * as _345 from "./staking/v1beta1/query.lcd";
import * as _346 from "./tx/v1beta1/service.lcd";
import * as _347 from "./upgrade/v1beta1/query.lcd";
import * as _348 from "./auth/v1beta1/query.rpc.Query";
import * as _349 from "./authz/v1beta1/query.rpc.Query";
import * as _350 from "./bank/v1beta1/query.rpc.Query";
import * as _351 from "./base/node/v1beta1/query.rpc.Service";
import * as _352 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _353 from "./consensus/v1/query.rpc.Query";
import * as _354 from "./distribution/v1beta1/query.rpc.Query";
import * as _355 from "./feegrant/v1beta1/query.rpc.Query";
import * as _356 from "./gov/v1/query.rpc.Query";
import * as _357 from "./gov/v1beta1/query.rpc.Query";
import * as _358 from "./group/v1/query.rpc.Query";
import * as _359 from "./mint/v1beta1/query.rpc.Query";
import * as _360 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _361 from "./params/v1beta1/query.rpc.Query";
import * as _362 from "./staking/v1beta1/query.rpc.Query";
import * as _363 from "./tx/v1beta1/service.rpc.Service";
import * as _364 from "./upgrade/v1beta1/query.rpc.Query";
import * as _365 from "./auth/v1beta1/tx.rpc.msg";
import * as _366 from "./authz/v1beta1/tx.rpc.msg";
import * as _367 from "./bank/v1beta1/tx.rpc.msg";
import * as _368 from "./consensus/v1/tx.rpc.msg";
import * as _369 from "./distribution/v1beta1/tx.rpc.msg";
import * as _370 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _371 from "./gov/v1/tx.rpc.msg";
import * as _372 from "./gov/v1beta1/tx.rpc.msg";
import * as _373 from "./group/v1/tx.rpc.msg";
import * as _374 from "./mint/v1beta1/tx.rpc.msg";
import * as _375 from "./staking/v1beta1/tx.rpc.msg";
import * as _376 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _377 from "./vesting/v1beta1/tx.rpc.msg";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._17
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._18
      };
    }
    export const v1beta1 = {
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._306,
      ..._319,
      ..._332,
      ..._348,
      ..._365
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._23
      };
    }
    export const v1beta1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._307,
      ..._320,
      ..._333,
      ..._349,
      ..._366
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._29
      };
    }
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._308,
      ..._321,
      ..._334,
      ..._350,
      ..._367
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._35
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._36,
        ..._335,
        ..._351
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._37
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._38
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._39,
        ..._40,
        ..._336,
        ..._352
      };
    }
    export const v1beta1 = {
      ..._41
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._42
      };
    }
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._43
      };
    }
    export const v1 = {
      ..._44,
      ..._45,
      ..._309,
      ..._322,
      ..._337,
      ..._353,
      ..._368
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._46
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._47
    };
    export namespace hd {
      export const v1 = {
        ..._48
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._49
      };
    }
    export const multisig = {
      ..._50
    };
    export const secp256k1 = {
      ..._51
    };
    export const secp256r1 = {
      ..._52
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._53
      };
    }
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._310,
      ..._323,
      ..._338,
      ..._354,
      ..._369
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._58
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._59
      };
    }
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._311,
      ..._324,
      ..._339,
      ..._355,
      ..._370
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._64
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._65
      };
    }
    export const v1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._312,
      ..._325,
      ..._340,
      ..._356,
      ..._371
    };
    export const v1beta1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._313,
      ..._326,
      ..._341,
      ..._357,
      ..._372
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._74
      };
    }
    export const v1 = {
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._314,
      ..._327,
      ..._342,
      ..._358,
      ..._373
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._80
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._81
      };
    }
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._315,
      ..._328,
      ..._343,
      ..._359,
      ..._374
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._86
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._87
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._88,
        ..._360
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._89
      };
    }
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._344,
      ..._361
    };
  }
  export namespace query {
    export const v1 = {
      ..._92
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._93
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._94
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._95
      };
    }
    export const v1beta1 = {
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._316,
      ..._329,
      ..._345,
      ..._362,
      ..._375
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._101
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._102
      };
    }
    export const v1beta1 = {
      ..._103,
      ..._104,
      ..._346,
      ..._363
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._105
      };
    }
    export const v1beta1 = {
      ..._106,
      ..._107,
      ..._108,
      ..._317,
      ..._330,
      ..._347,
      ..._364,
      ..._376
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._109
      };
    }
    export const v1beta1 = {
      ..._110,
      ..._111,
      ..._318,
      ..._331,
      ..._377
    };
  }
}