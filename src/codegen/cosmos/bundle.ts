import * as _15 from "./app/runtime/v1alpha1/module";
import * as _16 from "./app/v1alpha1/config";
import * as _17 from "./app/v1alpha1/module";
import * as _18 from "./app/v1alpha1/query";
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
import * as _30 from "./autocli/v1/options";
import * as _31 from "./autocli/v1/query";
import * as _32 from "./bank/module/v1/module";
import * as _33 from "./bank/v1beta1/authz";
import * as _34 from "./bank/v1beta1/bank";
import * as _35 from "./bank/v1beta1/genesis";
import * as _36 from "./bank/v1beta1/query";
import * as _37 from "./bank/v1beta1/tx";
import * as _38 from "./base/abci/v1beta1/abci";
import * as _39 from "./base/kv/v1beta1/kv";
import * as _40 from "./base/node/v1beta1/query";
import * as _41 from "./base/query/v1beta1/pagination";
import * as _42 from "./base/reflection/v1beta1/reflection";
import * as _43 from "./base/reflection/v2alpha1/reflection";
import * as _44 from "./base/snapshots/v1beta1/snapshot";
import * as _45 from "./base/store/v1beta1/commit_info";
import * as _46 from "./base/store/v1beta1/listening";
import * as _47 from "./base/tendermint/v1beta1/query";
import * as _48 from "./base/tendermint/v1beta1/types";
import * as _49 from "./base/v1beta1/coin";
import * as _50 from "./capability/module/v1/module";
import * as _51 from "./capability/v1beta1/capability";
import * as _52 from "./capability/v1beta1/genesis";
import * as _53 from "./consensus/module/v1/module";
import * as _54 from "./consensus/v1/query";
import * as _55 from "./consensus/v1/tx";
import * as _56 from "./crisis/module/v1/module";
import * as _57 from "./crisis/v1beta1/genesis";
import * as _58 from "./crisis/v1beta1/tx";
import * as _59 from "./crypto/ed25519/keys";
import * as _60 from "./crypto/hd/v1/hd";
import * as _61 from "./crypto/keyring/v1/record";
import * as _62 from "./crypto/multisig/keys";
import * as _63 from "./crypto/secp256k1/keys";
import * as _64 from "./crypto/secp256r1/keys";
import * as _65 from "./distribution/module/v1/module";
import * as _66 from "./distribution/v1beta1/distribution";
import * as _67 from "./distribution/v1beta1/genesis";
import * as _68 from "./distribution/v1beta1/query";
import * as _69 from "./distribution/v1beta1/tx";
import * as _70 from "./evidence/module/v1/module";
import * as _71 from "./evidence/v1beta1/evidence";
import * as _72 from "./evidence/v1beta1/genesis";
import * as _73 from "./evidence/v1beta1/query";
import * as _74 from "./evidence/v1beta1/tx";
import * as _75 from "./feegrant/module/v1/module";
import * as _76 from "./feegrant/v1beta1/feegrant";
import * as _77 from "./feegrant/v1beta1/genesis";
import * as _78 from "./feegrant/v1beta1/query";
import * as _79 from "./feegrant/v1beta1/tx";
import * as _80 from "./genutil/module/v1/module";
import * as _81 from "./genutil/v1beta1/genesis";
import * as _82 from "./gov/module/v1/module";
import * as _83 from "./gov/v1/genesis";
import * as _84 from "./gov/v1/gov";
import * as _85 from "./gov/v1/query";
import * as _86 from "./gov/v1/tx";
import * as _87 from "./gov/v1beta1/genesis";
import * as _88 from "./gov/v1beta1/gov";
import * as _89 from "./gov/v1beta1/query";
import * as _90 from "./gov/v1beta1/tx";
import * as _91 from "./group/module/v1/module";
import * as _92 from "./group/v1/events";
import * as _93 from "./group/v1/genesis";
import * as _94 from "./group/v1/query";
import * as _95 from "./group/v1/tx";
import * as _96 from "./group/v1/types";
import * as _97 from "./ics23/v1/proofs";
import * as _98 from "./mint/module/v1/module";
import * as _99 from "./mint/v1beta1/genesis";
import * as _100 from "./mint/v1beta1/mint";
import * as _101 from "./mint/v1beta1/query";
import * as _102 from "./mint/v1beta1/tx";
import * as _103 from "./msg/v1/msg";
import * as _104 from "./nft/module/v1/module";
import * as _105 from "./nft/v1beta1/event";
import * as _106 from "./nft/v1beta1/genesis";
import * as _107 from "./nft/v1beta1/nft";
import * as _108 from "./nft/v1beta1/query";
import * as _109 from "./nft/v1beta1/tx";
import * as _110 from "./orm/module/v1alpha1/module";
import * as _111 from "./orm/query/v1alpha1/query";
import * as _112 from "./orm/v1/orm";
import * as _113 from "./orm/v1alpha1/schema";
import * as _114 from "./params/module/v1/module";
import * as _115 from "./params/v1beta1/params";
import * as _116 from "./params/v1beta1/query";
import * as _117 from "./query/v1/query";
import * as _118 from "./reflection/v1/reflection";
import * as _119 from "./slashing/module/v1/module";
import * as _120 from "./slashing/v1beta1/genesis";
import * as _121 from "./slashing/v1beta1/query";
import * as _122 from "./slashing/v1beta1/slashing";
import * as _123 from "./slashing/v1beta1/tx";
import * as _124 from "./staking/module/v1/module";
import * as _125 from "./staking/v1beta1/authz";
import * as _126 from "./staking/v1beta1/genesis";
import * as _127 from "./staking/v1beta1/query";
import * as _128 from "./staking/v1beta1/staking";
import * as _129 from "./staking/v1beta1/tx";
import * as _130 from "./tx/config/v1/config";
import * as _131 from "./tx/signing/v1beta1/signing";
import * as _132 from "./tx/v1beta1/service";
import * as _133 from "./tx/v1beta1/tx";
import * as _134 from "./upgrade/module/v1/module";
import * as _135 from "./upgrade/v1beta1/query";
import * as _136 from "./upgrade/v1beta1/tx";
import * as _137 from "./upgrade/v1beta1/upgrade";
import * as _138 from "./vesting/module/v1/module";
import * as _139 from "./vesting/v1beta1/tx";
import * as _140 from "./vesting/v1beta1/vesting";
import * as _341 from "./auth/v1beta1/tx.amino";
import * as _342 from "./authz/v1beta1/tx.amino";
import * as _343 from "./bank/v1beta1/tx.amino";
import * as _344 from "./consensus/v1/tx.amino";
import * as _345 from "./crisis/v1beta1/tx.amino";
import * as _346 from "./distribution/v1beta1/tx.amino";
import * as _347 from "./evidence/v1beta1/tx.amino";
import * as _348 from "./feegrant/v1beta1/tx.amino";
import * as _349 from "./gov/v1/tx.amino";
import * as _350 from "./gov/v1beta1/tx.amino";
import * as _351 from "./group/v1/tx.amino";
import * as _352 from "./mint/v1beta1/tx.amino";
import * as _353 from "./nft/v1beta1/tx.amino";
import * as _354 from "./slashing/v1beta1/tx.amino";
import * as _355 from "./staking/v1beta1/tx.amino";
import * as _356 from "./upgrade/v1beta1/tx.amino";
import * as _357 from "./vesting/v1beta1/tx.amino";
import * as _358 from "./auth/v1beta1/tx.registry";
import * as _359 from "./authz/v1beta1/tx.registry";
import * as _360 from "./bank/v1beta1/tx.registry";
import * as _361 from "./consensus/v1/tx.registry";
import * as _362 from "./crisis/v1beta1/tx.registry";
import * as _363 from "./distribution/v1beta1/tx.registry";
import * as _364 from "./evidence/v1beta1/tx.registry";
import * as _365 from "./feegrant/v1beta1/tx.registry";
import * as _366 from "./gov/v1/tx.registry";
import * as _367 from "./gov/v1beta1/tx.registry";
import * as _368 from "./group/v1/tx.registry";
import * as _369 from "./mint/v1beta1/tx.registry";
import * as _370 from "./nft/v1beta1/tx.registry";
import * as _371 from "./slashing/v1beta1/tx.registry";
import * as _372 from "./staking/v1beta1/tx.registry";
import * as _373 from "./upgrade/v1beta1/tx.registry";
import * as _374 from "./vesting/v1beta1/tx.registry";
import * as _375 from "./auth/v1beta1/query.lcd";
import * as _376 from "./authz/v1beta1/query.lcd";
import * as _377 from "./bank/v1beta1/query.lcd";
import * as _378 from "./base/node/v1beta1/query.lcd";
import * as _379 from "./base/tendermint/v1beta1/query.lcd";
import * as _380 from "./consensus/v1/query.lcd";
import * as _381 from "./distribution/v1beta1/query.lcd";
import * as _382 from "./evidence/v1beta1/query.lcd";
import * as _383 from "./feegrant/v1beta1/query.lcd";
import * as _384 from "./gov/v1/query.lcd";
import * as _385 from "./gov/v1beta1/query.lcd";
import * as _386 from "./group/v1/query.lcd";
import * as _387 from "./mint/v1beta1/query.lcd";
import * as _388 from "./nft/v1beta1/query.lcd";
import * as _389 from "./params/v1beta1/query.lcd";
import * as _390 from "./slashing/v1beta1/query.lcd";
import * as _391 from "./staking/v1beta1/query.lcd";
import * as _392 from "./tx/v1beta1/service.lcd";
import * as _393 from "./upgrade/v1beta1/query.lcd";
import * as _394 from "./app/v1alpha1/query.rpc.Query";
import * as _395 from "./auth/v1beta1/query.rpc.Query";
import * as _396 from "./authz/v1beta1/query.rpc.Query";
import * as _397 from "./autocli/v1/query.rpc.Query";
import * as _398 from "./bank/v1beta1/query.rpc.Query";
import * as _399 from "./base/node/v1beta1/query.rpc.Service";
import * as _400 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _401 from "./consensus/v1/query.rpc.Query";
import * as _402 from "./distribution/v1beta1/query.rpc.Query";
import * as _403 from "./evidence/v1beta1/query.rpc.Query";
import * as _404 from "./feegrant/v1beta1/query.rpc.Query";
import * as _405 from "./gov/v1/query.rpc.Query";
import * as _406 from "./gov/v1beta1/query.rpc.Query";
import * as _407 from "./group/v1/query.rpc.Query";
import * as _408 from "./mint/v1beta1/query.rpc.Query";
import * as _409 from "./nft/v1beta1/query.rpc.Query";
import * as _410 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _411 from "./params/v1beta1/query.rpc.Query";
import * as _412 from "./slashing/v1beta1/query.rpc.Query";
import * as _413 from "./staking/v1beta1/query.rpc.Query";
import * as _414 from "./tx/v1beta1/service.rpc.Service";
import * as _415 from "./upgrade/v1beta1/query.rpc.Query";
import * as _416 from "./auth/v1beta1/tx.rpc.msg";
import * as _417 from "./authz/v1beta1/tx.rpc.msg";
import * as _418 from "./bank/v1beta1/tx.rpc.msg";
import * as _419 from "./consensus/v1/tx.rpc.msg";
import * as _420 from "./crisis/v1beta1/tx.rpc.msg";
import * as _421 from "./distribution/v1beta1/tx.rpc.msg";
import * as _422 from "./evidence/v1beta1/tx.rpc.msg";
import * as _423 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _424 from "./gov/v1/tx.rpc.msg";
import * as _425 from "./gov/v1beta1/tx.rpc.msg";
import * as _426 from "./group/v1/tx.rpc.msg";
import * as _427 from "./mint/v1beta1/tx.rpc.msg";
import * as _428 from "./nft/v1beta1/tx.rpc.msg";
import * as _429 from "./slashing/v1beta1/tx.rpc.msg";
import * as _430 from "./staking/v1beta1/tx.rpc.msg";
import * as _431 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _432 from "./vesting/v1beta1/tx.rpc.msg";
import * as _524 from "./lcd";
import * as _525 from "./rpc.query";
import * as _526 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._15
      };
    }
    export const v1alpha1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._394
    };
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
      ..._341,
      ..._358,
      ..._375,
      ..._395,
      ..._416
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
      ..._342,
      ..._359,
      ..._376,
      ..._396,
      ..._417
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._30,
      ..._31,
      ..._397
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._32
      };
    }
    export const v1beta1 = {
      ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._343,
      ..._360,
      ..._377,
      ..._398,
      ..._418
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._38
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._39
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._40,
        ..._378,
        ..._399
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._41
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._42
      };
      export const v2alpha1 = {
        ..._43
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._44
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._45,
        ..._46
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._47,
        ..._48,
        ..._379,
        ..._400
      };
    }
    export const v1beta1 = {
      ..._49
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._50
      };
    }
    export const v1beta1 = {
      ..._51,
      ..._52
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._53
      };
    }
    export const v1 = {
      ..._54,
      ..._55,
      ..._344,
      ..._361,
      ..._380,
      ..._401,
      ..._419
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._56
      };
    }
    export const v1beta1 = {
      ..._57,
      ..._58,
      ..._345,
      ..._362,
      ..._420
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._59
    };
    export namespace hd {
      export const v1 = {
        ..._60
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._61
      };
    }
    export const multisig = {
      ..._62
    };
    export const secp256k1 = {
      ..._63
    };
    export const secp256r1 = {
      ..._64
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._65
      };
    }
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._346,
      ..._363,
      ..._381,
      ..._402,
      ..._421
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._70
      };
    }
    export const v1beta1 = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._347,
      ..._364,
      ..._382,
      ..._403,
      ..._422
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._75
      };
    }
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._348,
      ..._365,
      ..._383,
      ..._404,
      ..._423
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._80
      };
    }
    export const v1beta1 = {
      ..._81
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._82
      };
    }
    export const v1 = {
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._349,
      ..._366,
      ..._384,
      ..._405,
      ..._424
    };
    export const v1beta1 = {
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._350,
      ..._367,
      ..._385,
      ..._406,
      ..._425
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._91
      };
    }
    export const v1 = {
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._351,
      ..._368,
      ..._386,
      ..._407,
      ..._426
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._97
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._98
      };
    }
    export const v1beta1 = {
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._352,
      ..._369,
      ..._387,
      ..._408,
      ..._427
    };
  }
  export namespace msg {
    export const v1 = {
      ..._103
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._104
      };
    }
    export const v1beta1 = {
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._353,
      ..._370,
      ..._388,
      ..._409,
      ..._428
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._110
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._111,
        ..._410
      };
    }
    export const v1 = {
      ..._112
    };
    export const v1alpha1 = {
      ..._113
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._114
      };
    }
    export const v1beta1 = {
      ..._115,
      ..._116,
      ..._389,
      ..._411
    };
  }
  export namespace query {
    export const v1 = {
      ..._117
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._118
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._119
      };
    }
    export const v1beta1 = {
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._354,
      ..._371,
      ..._390,
      ..._412,
      ..._429
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._124
      };
    }
    export const v1beta1 = {
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._355,
      ..._372,
      ..._391,
      ..._413,
      ..._430
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._130
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._131
      };
    }
    export const v1beta1 = {
      ..._132,
      ..._133,
      ..._392,
      ..._414
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._134
      };
    }
    export const v1beta1 = {
      ..._135,
      ..._136,
      ..._137,
      ..._356,
      ..._373,
      ..._393,
      ..._415,
      ..._431
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._138
      };
    }
    export const v1beta1 = {
      ..._139,
      ..._140,
      ..._357,
      ..._374,
      ..._432
    };
  }
  export const ClientFactory = {
    ..._524,
    ..._525,
    ..._526
  };
}