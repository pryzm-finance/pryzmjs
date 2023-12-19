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
import * as _94 from "./staking/v1beta1/query";
import * as _95 from "./staking/v1beta1/staking";
import * as _96 from "./staking/v1beta1/tx";
import * as _97 from "./tx/config/v1/config";
import * as _98 from "./tx/signing/v1beta1/signing";
import * as _99 from "./tx/v1beta1/service";
import * as _100 from "./tx/v1beta1/tx";
import * as _101 from "./upgrade/module/v1/module";
import * as _102 from "./upgrade/v1beta1/query";
import * as _103 from "./upgrade/v1beta1/tx";
import * as _104 from "./upgrade/v1beta1/upgrade";
import * as _105 from "./vesting/module/v1/module";
import * as _106 from "./vesting/v1beta1/tx";
import * as _107 from "./vesting/v1beta1/vesting";
import * as _299 from "./auth/v1beta1/tx.amino";
import * as _300 from "./authz/v1beta1/tx.amino";
import * as _301 from "./bank/v1beta1/tx.amino";
import * as _302 from "./consensus/v1/tx.amino";
import * as _303 from "./distribution/v1beta1/tx.amino";
import * as _304 from "./feegrant/v1beta1/tx.amino";
import * as _305 from "./gov/v1/tx.amino";
import * as _306 from "./gov/v1beta1/tx.amino";
import * as _307 from "./group/v1/tx.amino";
import * as _308 from "./mint/v1beta1/tx.amino";
import * as _309 from "./staking/v1beta1/tx.amino";
import * as _310 from "./upgrade/v1beta1/tx.amino";
import * as _311 from "./vesting/v1beta1/tx.amino";
import * as _312 from "./auth/v1beta1/tx.registry";
import * as _313 from "./authz/v1beta1/tx.registry";
import * as _314 from "./bank/v1beta1/tx.registry";
import * as _315 from "./consensus/v1/tx.registry";
import * as _316 from "./distribution/v1beta1/tx.registry";
import * as _317 from "./feegrant/v1beta1/tx.registry";
import * as _318 from "./gov/v1/tx.registry";
import * as _319 from "./gov/v1beta1/tx.registry";
import * as _320 from "./group/v1/tx.registry";
import * as _321 from "./mint/v1beta1/tx.registry";
import * as _322 from "./staking/v1beta1/tx.registry";
import * as _323 from "./upgrade/v1beta1/tx.registry";
import * as _324 from "./vesting/v1beta1/tx.registry";
import * as _325 from "./auth/v1beta1/query.lcd";
import * as _326 from "./authz/v1beta1/query.lcd";
import * as _327 from "./bank/v1beta1/query.lcd";
import * as _328 from "./base/node/v1beta1/query.lcd";
import * as _329 from "./consensus/v1/query.lcd";
import * as _330 from "./distribution/v1beta1/query.lcd";
import * as _331 from "./feegrant/v1beta1/query.lcd";
import * as _332 from "./gov/v1/query.lcd";
import * as _333 from "./gov/v1beta1/query.lcd";
import * as _334 from "./group/v1/query.lcd";
import * as _335 from "./mint/v1beta1/query.lcd";
import * as _336 from "./params/v1beta1/query.lcd";
import * as _337 from "./staking/v1beta1/query.lcd";
import * as _338 from "./tx/v1beta1/service.lcd";
import * as _339 from "./upgrade/v1beta1/query.lcd";
import * as _340 from "./auth/v1beta1/query.rpc.Query";
import * as _341 from "./authz/v1beta1/query.rpc.Query";
import * as _342 from "./bank/v1beta1/query.rpc.Query";
import * as _343 from "./base/node/v1beta1/query.rpc.Service";
import * as _344 from "./consensus/v1/query.rpc.Query";
import * as _345 from "./distribution/v1beta1/query.rpc.Query";
import * as _346 from "./feegrant/v1beta1/query.rpc.Query";
import * as _347 from "./gov/v1/query.rpc.Query";
import * as _348 from "./gov/v1beta1/query.rpc.Query";
import * as _349 from "./group/v1/query.rpc.Query";
import * as _350 from "./mint/v1beta1/query.rpc.Query";
import * as _351 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _352 from "./params/v1beta1/query.rpc.Query";
import * as _353 from "./staking/v1beta1/query.rpc.Query";
import * as _354 from "./tx/v1beta1/service.rpc.Service";
import * as _355 from "./upgrade/v1beta1/query.rpc.Query";
import * as _356 from "./auth/v1beta1/tx.rpc.msg";
import * as _357 from "./authz/v1beta1/tx.rpc.msg";
import * as _358 from "./bank/v1beta1/tx.rpc.msg";
import * as _359 from "./consensus/v1/tx.rpc.msg";
import * as _360 from "./distribution/v1beta1/tx.rpc.msg";
import * as _361 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _362 from "./gov/v1/tx.rpc.msg";
import * as _363 from "./gov/v1beta1/tx.rpc.msg";
import * as _364 from "./group/v1/tx.rpc.msg";
import * as _365 from "./mint/v1beta1/tx.rpc.msg";
import * as _366 from "./staking/v1beta1/tx.rpc.msg";
import * as _367 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _368 from "./vesting/v1beta1/tx.rpc.msg";
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
      ..._299,
      ..._312,
      ..._325,
      ..._340,
      ..._356
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
      ..._300,
      ..._313,
      ..._326,
      ..._341,
      ..._357
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
      ..._301,
      ..._314,
      ..._327,
      ..._342,
      ..._358
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
        ..._328,
        ..._343
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
      ..._302,
      ..._315,
      ..._329,
      ..._344,
      ..._359
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
      ..._303,
      ..._316,
      ..._330,
      ..._345,
      ..._360
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
      ..._304,
      ..._317,
      ..._331,
      ..._346,
      ..._361
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
      ..._305,
      ..._318,
      ..._332,
      ..._347,
      ..._362
    };
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._306,
      ..._319,
      ..._333,
      ..._348,
      ..._363
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
      ..._307,
      ..._320,
      ..._334,
      ..._349,
      ..._364
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
      ..._308,
      ..._321,
      ..._335,
      ..._350,
      ..._365
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
        ..._351
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
      ..._336,
      ..._352
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
      ..._309,
      ..._322,
      ..._337,
      ..._353,
      ..._366
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._97
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._98
      };
    }
    export const v1beta1 = {
      ..._99,
      ..._100,
      ..._338,
      ..._354
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._101
      };
    }
    export const v1beta1 = {
      ..._102,
      ..._103,
      ..._104,
      ..._310,
      ..._323,
      ..._339,
      ..._355,
      ..._367
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._105
      };
    }
    export const v1beta1 = {
      ..._106,
      ..._107,
      ..._311,
      ..._324,
      ..._368
    };
  }
}