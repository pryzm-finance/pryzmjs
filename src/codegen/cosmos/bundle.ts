import * as _18 from "./app/runtime/v1alpha1/module";
import * as _19 from "./auth/module/v1/module";
import * as _20 from "./auth/v1beta1/auth";
import * as _21 from "./auth/v1beta1/genesis";
import * as _22 from "./auth/v1beta1/query";
import * as _23 from "./auth/v1beta1/tx";
import * as _24 from "./authz/module/v1/module";
import * as _25 from "./authz/v1beta1/authz";
import * as _26 from "./authz/v1beta1/event";
import * as _27 from "./authz/v1beta1/genesis";
import * as _28 from "./authz/v1beta1/query";
import * as _29 from "./authz/v1beta1/tx";
import * as _30 from "./bank/module/v1/module";
import * as _31 from "./bank/v1beta1/authz";
import * as _32 from "./bank/v1beta1/bank";
import * as _33 from "./bank/v1beta1/genesis";
import * as _34 from "./bank/v1beta1/query";
import * as _35 from "./bank/v1beta1/tx";
import * as _36 from "./base/abci/v1beta1/abci";
import * as _37 from "./base/node/v1beta1/query";
import * as _38 from "./base/query/v1beta1/pagination";
import * as _39 from "./base/reflection/v2alpha1/reflection";
import * as _40 from "./base/tendermint/v1beta1/query";
import * as _41 from "./base/tendermint/v1beta1/types";
import * as _42 from "./base/v1beta1/coin";
import * as _43 from "./capability/module/v1/module";
import * as _44 from "./consensus/module/v1/module";
import * as _45 from "./consensus/v1/query";
import * as _46 from "./consensus/v1/tx";
import * as _47 from "./crisis/module/v1/module";
import * as _48 from "./crypto/ed25519/keys";
import * as _49 from "./crypto/hd/v1/hd";
import * as _50 from "./crypto/keyring/v1/record";
import * as _51 from "./crypto/multisig/keys";
import * as _52 from "./crypto/secp256k1/keys";
import * as _53 from "./crypto/secp256r1/keys";
import * as _54 from "./distribution/module/v1/module";
import * as _55 from "./distribution/v1beta1/distribution";
import * as _56 from "./distribution/v1beta1/genesis";
import * as _57 from "./distribution/v1beta1/query";
import * as _58 from "./distribution/v1beta1/tx";
import * as _59 from "./evidence/module/v1/module";
import * as _60 from "./feegrant/module/v1/module";
import * as _61 from "./feegrant/v1beta1/feegrant";
import * as _62 from "./feegrant/v1beta1/genesis";
import * as _63 from "./feegrant/v1beta1/query";
import * as _64 from "./feegrant/v1beta1/tx";
import * as _65 from "./genutil/module/v1/module";
import * as _66 from "./gov/module/v1/module";
import * as _67 from "./gov/v1/genesis";
import * as _68 from "./gov/v1/gov";
import * as _69 from "./gov/v1/query";
import * as _70 from "./gov/v1/tx";
import * as _71 from "./gov/v1beta1/genesis";
import * as _72 from "./gov/v1beta1/gov";
import * as _73 from "./gov/v1beta1/query";
import * as _74 from "./gov/v1beta1/tx";
import * as _75 from "./group/module/v1/module";
import * as _76 from "./group/v1/events";
import * as _77 from "./group/v1/genesis";
import * as _78 from "./group/v1/query";
import * as _79 from "./group/v1/tx";
import * as _80 from "./group/v1/types";
import * as _81 from "./ics23/v1/proofs";
import * as _82 from "./mint/module/v1/module";
import * as _83 from "./mint/v1beta1/genesis";
import * as _84 from "./mint/v1beta1/mint";
import * as _85 from "./mint/v1beta1/query";
import * as _86 from "./mint/v1beta1/tx";
import * as _87 from "./nft/module/v1/module";
import * as _88 from "./orm/module/v1alpha1/module";
import * as _89 from "./orm/query/v1alpha1/query";
import * as _90 from "./params/module/v1/module";
import * as _91 from "./params/v1beta1/params";
import * as _92 from "./params/v1beta1/query";
import * as _93 from "./query/v1/query";
import * as _94 from "./reflection/v1/reflection";
import * as _95 from "./slashing/module/v1/module";
import * as _96 from "./staking/module/v1/module";
import * as _97 from "./staking/v1beta1/authz";
import * as _98 from "./staking/v1beta1/genesis";
import * as _99 from "./staking/v1beta1/query";
import * as _100 from "./staking/v1beta1/staking";
import * as _101 from "./staking/v1beta1/tx";
import * as _102 from "./tx/config/v1/config";
import * as _103 from "./tx/signing/v1beta1/signing";
import * as _104 from "./tx/v1beta1/service";
import * as _105 from "./tx/v1beta1/tx";
import * as _106 from "./upgrade/module/v1/module";
import * as _107 from "./upgrade/v1beta1/query";
import * as _108 from "./upgrade/v1beta1/tx";
import * as _109 from "./upgrade/v1beta1/upgrade";
import * as _110 from "./vesting/module/v1/module";
import * as _111 from "./vesting/v1beta1/tx";
import * as _112 from "./vesting/v1beta1/vesting";
import * as _325 from "./auth/v1beta1/tx.amino";
import * as _326 from "./authz/v1beta1/tx.amino";
import * as _327 from "./bank/v1beta1/tx.amino";
import * as _328 from "./consensus/v1/tx.amino";
import * as _329 from "./distribution/v1beta1/tx.amino";
import * as _330 from "./feegrant/v1beta1/tx.amino";
import * as _331 from "./gov/v1/tx.amino";
import * as _332 from "./gov/v1beta1/tx.amino";
import * as _333 from "./group/v1/tx.amino";
import * as _334 from "./mint/v1beta1/tx.amino";
import * as _335 from "./staking/v1beta1/tx.amino";
import * as _336 from "./upgrade/v1beta1/tx.amino";
import * as _337 from "./vesting/v1beta1/tx.amino";
import * as _338 from "./auth/v1beta1/tx.registry";
import * as _339 from "./authz/v1beta1/tx.registry";
import * as _340 from "./bank/v1beta1/tx.registry";
import * as _341 from "./consensus/v1/tx.registry";
import * as _342 from "./distribution/v1beta1/tx.registry";
import * as _343 from "./feegrant/v1beta1/tx.registry";
import * as _344 from "./gov/v1/tx.registry";
import * as _345 from "./gov/v1beta1/tx.registry";
import * as _346 from "./group/v1/tx.registry";
import * as _347 from "./mint/v1beta1/tx.registry";
import * as _348 from "./staking/v1beta1/tx.registry";
import * as _349 from "./upgrade/v1beta1/tx.registry";
import * as _350 from "./vesting/v1beta1/tx.registry";
import * as _351 from "./auth/v1beta1/query.lcd";
import * as _352 from "./authz/v1beta1/query.lcd";
import * as _353 from "./bank/v1beta1/query.lcd";
import * as _354 from "./base/node/v1beta1/query.lcd";
import * as _355 from "./base/tendermint/v1beta1/query.lcd";
import * as _356 from "./consensus/v1/query.lcd";
import * as _357 from "./distribution/v1beta1/query.lcd";
import * as _358 from "./feegrant/v1beta1/query.lcd";
import * as _359 from "./gov/v1/query.lcd";
import * as _360 from "./gov/v1beta1/query.lcd";
import * as _361 from "./group/v1/query.lcd";
import * as _362 from "./mint/v1beta1/query.lcd";
import * as _363 from "./params/v1beta1/query.lcd";
import * as _364 from "./staking/v1beta1/query.lcd";
import * as _365 from "./tx/v1beta1/service.lcd";
import * as _366 from "./upgrade/v1beta1/query.lcd";
import * as _367 from "./auth/v1beta1/query.rpc.Query";
import * as _368 from "./authz/v1beta1/query.rpc.Query";
import * as _369 from "./bank/v1beta1/query.rpc.Query";
import * as _370 from "./base/node/v1beta1/query.rpc.Service";
import * as _371 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _372 from "./consensus/v1/query.rpc.Query";
import * as _373 from "./distribution/v1beta1/query.rpc.Query";
import * as _374 from "./feegrant/v1beta1/query.rpc.Query";
import * as _375 from "./gov/v1/query.rpc.Query";
import * as _376 from "./gov/v1beta1/query.rpc.Query";
import * as _377 from "./group/v1/query.rpc.Query";
import * as _378 from "./mint/v1beta1/query.rpc.Query";
import * as _379 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _380 from "./params/v1beta1/query.rpc.Query";
import * as _381 from "./staking/v1beta1/query.rpc.Query";
import * as _382 from "./tx/v1beta1/service.rpc.Service";
import * as _383 from "./upgrade/v1beta1/query.rpc.Query";
import * as _384 from "./auth/v1beta1/tx.rpc.msg";
import * as _385 from "./authz/v1beta1/tx.rpc.msg";
import * as _386 from "./bank/v1beta1/tx.rpc.msg";
import * as _387 from "./consensus/v1/tx.rpc.msg";
import * as _388 from "./distribution/v1beta1/tx.rpc.msg";
import * as _389 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _390 from "./gov/v1/tx.rpc.msg";
import * as _391 from "./gov/v1beta1/tx.rpc.msg";
import * as _392 from "./group/v1/tx.rpc.msg";
import * as _393 from "./mint/v1beta1/tx.rpc.msg";
import * as _394 from "./staking/v1beta1/tx.rpc.msg";
import * as _395 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _396 from "./vesting/v1beta1/tx.rpc.msg";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._18
      };
    }
  }
  export namespace auth {
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
      ..._325,
      ..._338,
      ..._351,
      ..._367,
      ..._384
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._24
      };
    }
    export const v1beta1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._326,
      ..._339,
      ..._352,
      ..._368,
      ..._385
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._30
      };
    }
    export const v1beta1 = {
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._327,
      ..._340,
      ..._353,
      ..._369,
      ..._386
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._36
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._37,
        ..._354,
        ..._370
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._38
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._39
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._40,
        ..._41,
        ..._355,
        ..._371
      };
    }
    export const v1beta1 = {
      ..._42
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._43
      };
    }
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._44
      };
    }
    export const v1 = {
      ..._45,
      ..._46,
      ..._328,
      ..._341,
      ..._356,
      ..._372,
      ..._387
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._47
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._48
    };
    export namespace hd {
      export const v1 = {
        ..._49
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._50
      };
    }
    export const multisig = {
      ..._51
    };
    export const secp256k1 = {
      ..._52
    };
    export const secp256r1 = {
      ..._53
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._54
      };
    }
    export const v1beta1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._329,
      ..._342,
      ..._357,
      ..._373,
      ..._388
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._59
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._60
      };
    }
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._330,
      ..._343,
      ..._358,
      ..._374,
      ..._389
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._65
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._66
      };
    }
    export const v1 = {
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._331,
      ..._344,
      ..._359,
      ..._375,
      ..._390
    };
    export const v1beta1 = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._332,
      ..._345,
      ..._360,
      ..._376,
      ..._391
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._75
      };
    }
    export const v1 = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._333,
      ..._346,
      ..._361,
      ..._377,
      ..._392
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._81
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._82
      };
    }
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._334,
      ..._347,
      ..._362,
      ..._378,
      ..._393
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._87
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._88
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._89,
        ..._379
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._90
      };
    }
    export const v1beta1 = {
      ..._91,
      ..._92,
      ..._363,
      ..._380
    };
  }
  export namespace query {
    export const v1 = {
      ..._93
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._94
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._95
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._96
      };
    }
    export const v1beta1 = {
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._335,
      ..._348,
      ..._364,
      ..._381,
      ..._394
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._102
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._103
      };
    }
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._365,
      ..._382
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._106
      };
    }
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._336,
      ..._349,
      ..._366,
      ..._383,
      ..._395
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._110
      };
    }
    export const v1beta1 = {
      ..._111,
      ..._112,
      ..._337,
      ..._350,
      ..._396
    };
  }
}