import * as _19 from "./app/runtime/v1alpha1/module";
import * as _20 from "./auth/module/v1/module";
import * as _21 from "./auth/v1beta1/auth";
import * as _22 from "./auth/v1beta1/genesis";
import * as _23 from "./auth/v1beta1/query";
import * as _24 from "./auth/v1beta1/tx";
import * as _25 from "./authz/module/v1/module";
import * as _26 from "./authz/v1beta1/authz";
import * as _27 from "./authz/v1beta1/event";
import * as _28 from "./authz/v1beta1/genesis";
import * as _29 from "./authz/v1beta1/query";
import * as _30 from "./authz/v1beta1/tx";
import * as _31 from "./bank/module/v1/module";
import * as _32 from "./bank/v1beta1/authz";
import * as _33 from "./bank/v1beta1/bank";
import * as _34 from "./bank/v1beta1/genesis";
import * as _35 from "./bank/v1beta1/query";
import * as _36 from "./bank/v1beta1/tx";
import * as _37 from "./base/abci/v1beta1/abci";
import * as _38 from "./base/node/v1beta1/query";
import * as _39 from "./base/query/v1beta1/pagination";
import * as _40 from "./base/reflection/v2alpha1/reflection";
import * as _41 from "./base/tendermint/v1beta1/query";
import * as _42 from "./base/tendermint/v1beta1/types";
import * as _43 from "./base/v1beta1/coin";
import * as _44 from "./capability/module/v1/module";
import * as _45 from "./consensus/module/v1/module";
import * as _46 from "./consensus/v1/query";
import * as _47 from "./consensus/v1/tx";
import * as _48 from "./crisis/module/v1/module";
import * as _49 from "./crypto/ed25519/keys";
import * as _50 from "./crypto/hd/v1/hd";
import * as _51 from "./crypto/keyring/v1/record";
import * as _52 from "./crypto/multisig/keys";
import * as _53 from "./crypto/secp256k1/keys";
import * as _54 from "./crypto/secp256r1/keys";
import * as _55 from "./distribution/module/v1/module";
import * as _56 from "./distribution/v1beta1/distribution";
import * as _57 from "./distribution/v1beta1/genesis";
import * as _58 from "./distribution/v1beta1/query";
import * as _59 from "./distribution/v1beta1/tx";
import * as _60 from "./evidence/module/v1/module";
import * as _61 from "./feegrant/module/v1/module";
import * as _62 from "./feegrant/v1beta1/feegrant";
import * as _63 from "./feegrant/v1beta1/genesis";
import * as _64 from "./feegrant/v1beta1/query";
import * as _65 from "./feegrant/v1beta1/tx";
import * as _66 from "./genutil/module/v1/module";
import * as _67 from "./gov/module/v1/module";
import * as _68 from "./gov/v1/genesis";
import * as _69 from "./gov/v1/gov";
import * as _70 from "./gov/v1/query";
import * as _71 from "./gov/v1/tx";
import * as _72 from "./gov/v1beta1/genesis";
import * as _73 from "./gov/v1beta1/gov";
import * as _74 from "./gov/v1beta1/query";
import * as _75 from "./gov/v1beta1/tx";
import * as _76 from "./group/module/v1/module";
import * as _77 from "./group/v1/events";
import * as _78 from "./group/v1/genesis";
import * as _79 from "./group/v1/query";
import * as _80 from "./group/v1/tx";
import * as _81 from "./group/v1/types";
import * as _82 from "./ics23/v1/proofs";
import * as _83 from "./mint/module/v1/module";
import * as _84 from "./mint/v1beta1/genesis";
import * as _85 from "./mint/v1beta1/mint";
import * as _86 from "./mint/v1beta1/query";
import * as _87 from "./mint/v1beta1/tx";
import * as _88 from "./nft/module/v1/module";
import * as _89 from "./orm/module/v1alpha1/module";
import * as _90 from "./orm/query/v1alpha1/query";
import * as _91 from "./params/module/v1/module";
import * as _92 from "./params/v1beta1/params";
import * as _93 from "./params/v1beta1/query";
import * as _94 from "./query/v1/query";
import * as _95 from "./reflection/v1/reflection";
import * as _96 from "./slashing/module/v1/module";
import * as _97 from "./staking/module/v1/module";
import * as _98 from "./staking/v1beta1/authz";
import * as _99 from "./staking/v1beta1/genesis";
import * as _100 from "./staking/v1beta1/lsm";
import * as _101 from "./staking/v1beta1/query";
import * as _102 from "./staking/v1beta1/staking";
import * as _103 from "./staking/v1beta1/tx";
import * as _104 from "./tx/config/v1/config";
import * as _105 from "./tx/signing/v1beta1/signing";
import * as _106 from "./tx/v1beta1/service";
import * as _107 from "./tx/v1beta1/tx";
import * as _108 from "./upgrade/module/v1/module";
import * as _109 from "./upgrade/v1beta1/query";
import * as _110 from "./upgrade/v1beta1/tx";
import * as _111 from "./upgrade/v1beta1/upgrade";
import * as _112 from "./vesting/module/v1/module";
import * as _113 from "./vesting/v1beta1/tx";
import * as _114 from "./vesting/v1beta1/vesting";
import * as _336 from "./auth/v1beta1/tx.amino";
import * as _337 from "./authz/v1beta1/tx.amino";
import * as _338 from "./bank/v1beta1/tx.amino";
import * as _339 from "./consensus/v1/tx.amino";
import * as _340 from "./distribution/v1beta1/tx.amino";
import * as _341 from "./feegrant/v1beta1/tx.amino";
import * as _342 from "./gov/v1/tx.amino";
import * as _343 from "./gov/v1beta1/tx.amino";
import * as _344 from "./group/v1/tx.amino";
import * as _345 from "./mint/v1beta1/tx.amino";
import * as _346 from "./staking/v1beta1/tx.amino";
import * as _347 from "./upgrade/v1beta1/tx.amino";
import * as _348 from "./vesting/v1beta1/tx.amino";
import * as _349 from "./auth/v1beta1/tx.registry";
import * as _350 from "./authz/v1beta1/tx.registry";
import * as _351 from "./bank/v1beta1/tx.registry";
import * as _352 from "./consensus/v1/tx.registry";
import * as _353 from "./distribution/v1beta1/tx.registry";
import * as _354 from "./feegrant/v1beta1/tx.registry";
import * as _355 from "./gov/v1/tx.registry";
import * as _356 from "./gov/v1beta1/tx.registry";
import * as _357 from "./group/v1/tx.registry";
import * as _358 from "./mint/v1beta1/tx.registry";
import * as _359 from "./staking/v1beta1/tx.registry";
import * as _360 from "./upgrade/v1beta1/tx.registry";
import * as _361 from "./vesting/v1beta1/tx.registry";
import * as _362 from "./auth/v1beta1/query.lcd";
import * as _363 from "./authz/v1beta1/query.lcd";
import * as _364 from "./bank/v1beta1/query.lcd";
import * as _365 from "./base/node/v1beta1/query.lcd";
import * as _366 from "./base/tendermint/v1beta1/query.lcd";
import * as _367 from "./consensus/v1/query.lcd";
import * as _368 from "./distribution/v1beta1/query.lcd";
import * as _369 from "./feegrant/v1beta1/query.lcd";
import * as _370 from "./gov/v1/query.lcd";
import * as _371 from "./gov/v1beta1/query.lcd";
import * as _372 from "./group/v1/query.lcd";
import * as _373 from "./mint/v1beta1/query.lcd";
import * as _374 from "./params/v1beta1/query.lcd";
import * as _375 from "./staking/v1beta1/query.lcd";
import * as _376 from "./tx/v1beta1/service.lcd";
import * as _377 from "./upgrade/v1beta1/query.lcd";
import * as _378 from "./auth/v1beta1/query.rpc.Query";
import * as _379 from "./authz/v1beta1/query.rpc.Query";
import * as _380 from "./bank/v1beta1/query.rpc.Query";
import * as _381 from "./base/node/v1beta1/query.rpc.Service";
import * as _382 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _383 from "./consensus/v1/query.rpc.Query";
import * as _384 from "./distribution/v1beta1/query.rpc.Query";
import * as _385 from "./feegrant/v1beta1/query.rpc.Query";
import * as _386 from "./gov/v1/query.rpc.Query";
import * as _387 from "./gov/v1beta1/query.rpc.Query";
import * as _388 from "./group/v1/query.rpc.Query";
import * as _389 from "./mint/v1beta1/query.rpc.Query";
import * as _390 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _391 from "./params/v1beta1/query.rpc.Query";
import * as _392 from "./staking/v1beta1/query.rpc.Query";
import * as _393 from "./tx/v1beta1/service.rpc.Service";
import * as _394 from "./upgrade/v1beta1/query.rpc.Query";
import * as _395 from "./auth/v1beta1/tx.rpc.msg";
import * as _396 from "./authz/v1beta1/tx.rpc.msg";
import * as _397 from "./bank/v1beta1/tx.rpc.msg";
import * as _398 from "./consensus/v1/tx.rpc.msg";
import * as _399 from "./distribution/v1beta1/tx.rpc.msg";
import * as _400 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _401 from "./gov/v1/tx.rpc.msg";
import * as _402 from "./gov/v1beta1/tx.rpc.msg";
import * as _403 from "./group/v1/tx.rpc.msg";
import * as _404 from "./mint/v1beta1/tx.rpc.msg";
import * as _405 from "./staking/v1beta1/tx.rpc.msg";
import * as _406 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _407 from "./vesting/v1beta1/tx.rpc.msg";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._19
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._20
      };
    }
    export const v1beta1 = {
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._336,
      ..._349,
      ..._362,
      ..._378,
      ..._395
    };
  }
  export namespace authz {
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
      ..._337,
      ..._350,
      ..._363,
      ..._379,
      ..._396
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._31
      };
    }
    export const v1beta1 = {
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._338,
      ..._351,
      ..._364,
      ..._380,
      ..._397
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._37
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._38,
        ..._365,
        ..._381
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._39
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._40
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._41,
        ..._42,
        ..._366,
        ..._382
      };
    }
    export const v1beta1 = {
      ..._43
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._44
      };
    }
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._45
      };
    }
    export const v1 = {
      ..._46,
      ..._47,
      ..._339,
      ..._352,
      ..._367,
      ..._383,
      ..._398
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._48
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._49
    };
    export namespace hd {
      export const v1 = {
        ..._50
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._51
      };
    }
    export const multisig = {
      ..._52
    };
    export const secp256k1 = {
      ..._53
    };
    export const secp256r1 = {
      ..._54
    };
  }
  export namespace distribution {
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
      ..._340,
      ..._353,
      ..._368,
      ..._384,
      ..._399
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._60
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._61
      };
    }
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._341,
      ..._354,
      ..._369,
      ..._385,
      ..._400
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._66
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._67
      };
    }
    export const v1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._342,
      ..._355,
      ..._370,
      ..._386,
      ..._401
    };
    export const v1beta1 = {
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._343,
      ..._356,
      ..._371,
      ..._387,
      ..._402
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._76
      };
    }
    export const v1 = {
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._344,
      ..._357,
      ..._372,
      ..._388,
      ..._403
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._82
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._83
      };
    }
    export const v1beta1 = {
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._345,
      ..._358,
      ..._373,
      ..._389,
      ..._404
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._88
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._89
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._90,
        ..._390
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._91
      };
    }
    export const v1beta1 = {
      ..._92,
      ..._93,
      ..._374,
      ..._391
    };
  }
  export namespace query {
    export const v1 = {
      ..._94
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._95
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._96
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._97
      };
    }
    export const v1beta1 = {
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._346,
      ..._359,
      ..._375,
      ..._392,
      ..._405
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._104
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._105
      };
    }
    export const v1beta1 = {
      ..._106,
      ..._107,
      ..._376,
      ..._393
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._108
      };
    }
    export const v1beta1 = {
      ..._109,
      ..._110,
      ..._111,
      ..._347,
      ..._360,
      ..._377,
      ..._394,
      ..._406
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._112
      };
    }
    export const v1beta1 = {
      ..._113,
      ..._114,
      ..._348,
      ..._361,
      ..._407
    };
  }
}