import * as _15 from "./app/runtime/v1alpha1/module";
import * as _16 from "./auth/module/v1/module";
import * as _17 from "./auth/v1beta1/auth";
import * as _18 from "./auth/v1beta1/genesis";
import * as _19 from "./auth/v1beta1/query";
import * as _20 from "./auth/v1beta1/tx";
import * as _21 from "./authz/module/v1/module";
import * as _22 from "./authz/v1beta1/authz";
import * as _23 from "./authz/v1beta1/event";
import * as _24 from "./authz/v1beta1/genesis";
import * as _25 from "./authz/v1beta1/query";
import * as _26 from "./authz/v1beta1/tx";
import * as _27 from "./bank/module/v1/module";
import * as _28 from "./bank/v1beta1/authz";
import * as _29 from "./bank/v1beta1/bank";
import * as _30 from "./bank/v1beta1/genesis";
import * as _31 from "./bank/v1beta1/query";
import * as _32 from "./bank/v1beta1/tx";
import * as _33 from "./base/abci/v1beta1/abci";
import * as _34 from "./base/node/v1beta1/query";
import * as _35 from "./base/query/v1beta1/pagination";
import * as _36 from "./base/reflection/v2alpha1/reflection";
import * as _37 from "./base/tendermint/v1beta1/query";
import * as _38 from "./base/tendermint/v1beta1/types";
import * as _39 from "./base/v1beta1/coin";
import * as _40 from "./capability/module/v1/module";
import * as _41 from "./consensus/module/v1/module";
import * as _42 from "./consensus/v1/query";
import * as _43 from "./consensus/v1/tx";
import * as _44 from "./crisis/module/v1/module";
import * as _45 from "./crypto/ed25519/keys";
import * as _46 from "./crypto/hd/v1/hd";
import * as _47 from "./crypto/keyring/v1/record";
import * as _48 from "./crypto/multisig/keys";
import * as _49 from "./crypto/secp256k1/keys";
import * as _50 from "./crypto/secp256r1/keys";
import * as _51 from "./distribution/module/v1/module";
import * as _52 from "./distribution/v1beta1/distribution";
import * as _53 from "./distribution/v1beta1/genesis";
import * as _54 from "./distribution/v1beta1/query";
import * as _55 from "./distribution/v1beta1/tx";
import * as _56 from "./evidence/module/v1/module";
import * as _57 from "./feegrant/module/v1/module";
import * as _58 from "./feegrant/v1beta1/feegrant";
import * as _59 from "./feegrant/v1beta1/genesis";
import * as _60 from "./feegrant/v1beta1/query";
import * as _61 from "./feegrant/v1beta1/tx";
import * as _62 from "./genutil/module/v1/module";
import * as _63 from "./gov/module/v1/module";
import * as _64 from "./gov/v1/genesis";
import * as _65 from "./gov/v1/gov";
import * as _66 from "./gov/v1/query";
import * as _67 from "./gov/v1/tx";
import * as _68 from "./gov/v1beta1/genesis";
import * as _69 from "./gov/v1beta1/gov";
import * as _70 from "./gov/v1beta1/query";
import * as _71 from "./gov/v1beta1/tx";
import * as _72 from "./group/module/v1/module";
import * as _73 from "./group/v1/events";
import * as _74 from "./group/v1/genesis";
import * as _75 from "./group/v1/query";
import * as _76 from "./group/v1/tx";
import * as _77 from "./group/v1/types";
import * as _78 from "./ics23/v1/proofs";
import * as _79 from "./mint/module/v1/module";
import * as _80 from "./mint/v1beta1/genesis";
import * as _81 from "./mint/v1beta1/mint";
import * as _82 from "./mint/v1beta1/query";
import * as _83 from "./mint/v1beta1/tx";
import * as _84 from "./nft/module/v1/module";
import * as _85 from "./orm/module/v1alpha1/module";
import * as _86 from "./orm/query/v1alpha1/query";
import * as _87 from "./params/module/v1/module";
import * as _88 from "./params/v1beta1/params";
import * as _89 from "./params/v1beta1/query";
import * as _90 from "./query/v1/query";
import * as _91 from "./reflection/v1/reflection";
import * as _92 from "./slashing/module/v1/module";
import * as _93 from "./staking/module/v1/module";
import * as _94 from "./staking/v1beta1/authz";
import * as _95 from "./staking/v1beta1/genesis";
import * as _96 from "./staking/v1beta1/query";
import * as _97 from "./staking/v1beta1/staking";
import * as _98 from "./staking/v1beta1/tx";
import * as _99 from "./tx/config/v1/config";
import * as _100 from "./tx/signing/v1beta1/signing";
import * as _101 from "./tx/v1beta1/service";
import * as _102 from "./tx/v1beta1/tx";
import * as _103 from "./upgrade/module/v1/module";
import * as _104 from "./upgrade/v1beta1/query";
import * as _105 from "./upgrade/v1beta1/tx";
import * as _106 from "./upgrade/v1beta1/upgrade";
import * as _107 from "./vesting/module/v1/module";
import * as _108 from "./vesting/v1beta1/tx";
import * as _109 from "./vesting/v1beta1/vesting";
import * as _303 from "./auth/v1beta1/tx.amino";
import * as _304 from "./authz/v1beta1/tx.amino";
import * as _305 from "./bank/v1beta1/tx.amino";
import * as _306 from "./consensus/v1/tx.amino";
import * as _307 from "./distribution/v1beta1/tx.amino";
import * as _308 from "./feegrant/v1beta1/tx.amino";
import * as _309 from "./gov/v1/tx.amino";
import * as _310 from "./gov/v1beta1/tx.amino";
import * as _311 from "./group/v1/tx.amino";
import * as _312 from "./mint/v1beta1/tx.amino";
import * as _313 from "./staking/v1beta1/tx.amino";
import * as _314 from "./upgrade/v1beta1/tx.amino";
import * as _315 from "./vesting/v1beta1/tx.amino";
import * as _316 from "./auth/v1beta1/tx.registry";
import * as _317 from "./authz/v1beta1/tx.registry";
import * as _318 from "./bank/v1beta1/tx.registry";
import * as _319 from "./consensus/v1/tx.registry";
import * as _320 from "./distribution/v1beta1/tx.registry";
import * as _321 from "./feegrant/v1beta1/tx.registry";
import * as _322 from "./gov/v1/tx.registry";
import * as _323 from "./gov/v1beta1/tx.registry";
import * as _324 from "./group/v1/tx.registry";
import * as _325 from "./mint/v1beta1/tx.registry";
import * as _326 from "./staking/v1beta1/tx.registry";
import * as _327 from "./upgrade/v1beta1/tx.registry";
import * as _328 from "./vesting/v1beta1/tx.registry";
import * as _329 from "./auth/v1beta1/query.lcd";
import * as _330 from "./authz/v1beta1/query.lcd";
import * as _331 from "./bank/v1beta1/query.lcd";
import * as _332 from "./base/node/v1beta1/query.lcd";
import * as _333 from "./base/tendermint/v1beta1/query.lcd";
import * as _334 from "./consensus/v1/query.lcd";
import * as _335 from "./distribution/v1beta1/query.lcd";
import * as _336 from "./feegrant/v1beta1/query.lcd";
import * as _337 from "./gov/v1/query.lcd";
import * as _338 from "./gov/v1beta1/query.lcd";
import * as _339 from "./group/v1/query.lcd";
import * as _340 from "./mint/v1beta1/query.lcd";
import * as _341 from "./params/v1beta1/query.lcd";
import * as _342 from "./staking/v1beta1/query.lcd";
import * as _343 from "./tx/v1beta1/service.lcd";
import * as _344 from "./upgrade/v1beta1/query.lcd";
import * as _345 from "./auth/v1beta1/query.rpc.Query";
import * as _346 from "./authz/v1beta1/query.rpc.Query";
import * as _347 from "./bank/v1beta1/query.rpc.Query";
import * as _348 from "./base/node/v1beta1/query.rpc.Service";
import * as _349 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _350 from "./consensus/v1/query.rpc.Query";
import * as _351 from "./distribution/v1beta1/query.rpc.Query";
import * as _352 from "./feegrant/v1beta1/query.rpc.Query";
import * as _353 from "./gov/v1/query.rpc.Query";
import * as _354 from "./gov/v1beta1/query.rpc.Query";
import * as _355 from "./group/v1/query.rpc.Query";
import * as _356 from "./mint/v1beta1/query.rpc.Query";
import * as _357 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _358 from "./params/v1beta1/query.rpc.Query";
import * as _359 from "./staking/v1beta1/query.rpc.Query";
import * as _360 from "./tx/v1beta1/service.rpc.Service";
import * as _361 from "./upgrade/v1beta1/query.rpc.Query";
import * as _362 from "./auth/v1beta1/tx.rpc.msg";
import * as _363 from "./authz/v1beta1/tx.rpc.msg";
import * as _364 from "./bank/v1beta1/tx.rpc.msg";
import * as _365 from "./consensus/v1/tx.rpc.msg";
import * as _366 from "./distribution/v1beta1/tx.rpc.msg";
import * as _367 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _368 from "./gov/v1/tx.rpc.msg";
import * as _369 from "./gov/v1beta1/tx.rpc.msg";
import * as _370 from "./group/v1/tx.rpc.msg";
import * as _371 from "./mint/v1beta1/tx.rpc.msg";
import * as _372 from "./staking/v1beta1/tx.rpc.msg";
import * as _373 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _374 from "./vesting/v1beta1/tx.rpc.msg";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._15
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._16
      };
    }
    export const v1beta1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._303,
      ..._316,
      ..._329,
      ..._345,
      ..._362
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._21
      };
    }
    export const v1beta1 = {
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._304,
      ..._317,
      ..._330,
      ..._346,
      ..._363
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._27
      };
    }
    export const v1beta1 = {
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._305,
      ..._318,
      ..._331,
      ..._347,
      ..._364
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._33
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._34,
        ..._332,
        ..._348
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._35
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._36
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._37,
        ..._38,
        ..._333,
        ..._349
      };
    }
    export const v1beta1 = {
      ..._39
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._40
      };
    }
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._41
      };
    }
    export const v1 = {
      ..._42,
      ..._43,
      ..._306,
      ..._319,
      ..._334,
      ..._350,
      ..._365
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._44
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._45
    };
    export namespace hd {
      export const v1 = {
        ..._46
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._47
      };
    }
    export const multisig = {
      ..._48
    };
    export const secp256k1 = {
      ..._49
    };
    export const secp256r1 = {
      ..._50
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._51
      };
    }
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._307,
      ..._320,
      ..._335,
      ..._351,
      ..._366
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._56
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._57
      };
    }
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._308,
      ..._321,
      ..._336,
      ..._352,
      ..._367
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._62
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._63
      };
    }
    export const v1 = {
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._309,
      ..._322,
      ..._337,
      ..._353,
      ..._368
    };
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._310,
      ..._323,
      ..._338,
      ..._354,
      ..._369
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._72
      };
    }
    export const v1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._311,
      ..._324,
      ..._339,
      ..._355,
      ..._370
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._78
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._79
      };
    }
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._312,
      ..._325,
      ..._340,
      ..._356,
      ..._371
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._84
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._85
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._86,
        ..._357
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._87
      };
    }
    export const v1beta1 = {
      ..._88,
      ..._89,
      ..._341,
      ..._358
    };
  }
  export namespace query {
    export const v1 = {
      ..._90
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._91
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._92
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._93
      };
    }
    export const v1beta1 = {
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._313,
      ..._326,
      ..._342,
      ..._359,
      ..._372
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._99
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._100
      };
    }
    export const v1beta1 = {
      ..._101,
      ..._102,
      ..._343,
      ..._360
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._103
      };
    }
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._106,
      ..._314,
      ..._327,
      ..._344,
      ..._361,
      ..._373
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._107
      };
    }
    export const v1beta1 = {
      ..._108,
      ..._109,
      ..._315,
      ..._328,
      ..._374
    };
  }
}