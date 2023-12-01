import * as _14 from "./app/runtime/v1alpha1/module";
import * as _15 from "./app/v1alpha1/config";
import * as _16 from "./app/v1alpha1/module";
import * as _17 from "./app/v1alpha1/query";
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
import * as _29 from "./autocli/v1/options";
import * as _30 from "./autocli/v1/query";
import * as _31 from "./bank/module/v1/module";
import * as _32 from "./bank/v1beta1/authz";
import * as _33 from "./bank/v1beta1/bank";
import * as _34 from "./bank/v1beta1/genesis";
import * as _35 from "./bank/v1beta1/query";
import * as _36 from "./bank/v1beta1/tx";
import * as _37 from "./base/abci/v1beta1/abci";
import * as _38 from "./base/kv/v1beta1/kv";
import * as _39 from "./base/node/v1beta1/query";
import * as _40 from "./base/query/v1beta1/pagination";
import * as _41 from "./base/reflection/v1beta1/reflection";
import * as _42 from "./base/reflection/v2alpha1/reflection";
import * as _43 from "./base/snapshots/v1beta1/snapshot";
import * as _44 from "./base/store/v1beta1/commit_info";
import * as _45 from "./base/store/v1beta1/listening";
import * as _46 from "./base/tendermint/v1beta1/query";
import * as _47 from "./base/tendermint/v1beta1/types";
import * as _48 from "./base/v1beta1/coin";
import * as _49 from "./capability/module/v1/module";
import * as _50 from "./capability/v1beta1/capability";
import * as _51 from "./capability/v1beta1/genesis";
import * as _52 from "./consensus/module/v1/module";
import * as _53 from "./consensus/v1/query";
import * as _54 from "./consensus/v1/tx";
import * as _55 from "./crisis/module/v1/module";
import * as _56 from "./crisis/v1beta1/genesis";
import * as _57 from "./crisis/v1beta1/tx";
import * as _58 from "./crypto/ed25519/keys";
import * as _59 from "./crypto/hd/v1/hd";
import * as _60 from "./crypto/keyring/v1/record";
import * as _61 from "./crypto/multisig/keys";
import * as _62 from "./crypto/secp256k1/keys";
import * as _63 from "./crypto/secp256r1/keys";
import * as _64 from "./distribution/module/v1/module";
import * as _65 from "./distribution/v1beta1/distribution";
import * as _66 from "./distribution/v1beta1/genesis";
import * as _67 from "./distribution/v1beta1/query";
import * as _68 from "./distribution/v1beta1/tx";
import * as _69 from "./evidence/module/v1/module";
import * as _70 from "./evidence/v1beta1/evidence";
import * as _71 from "./evidence/v1beta1/genesis";
import * as _72 from "./evidence/v1beta1/query";
import * as _73 from "./evidence/v1beta1/tx";
import * as _74 from "./feegrant/module/v1/module";
import * as _75 from "./feegrant/v1beta1/feegrant";
import * as _76 from "./feegrant/v1beta1/genesis";
import * as _77 from "./feegrant/v1beta1/query";
import * as _78 from "./feegrant/v1beta1/tx";
import * as _79 from "./genutil/module/v1/module";
import * as _80 from "./genutil/v1beta1/genesis";
import * as _81 from "./gov/module/v1/module";
import * as _82 from "./gov/v1/genesis";
import * as _83 from "./gov/v1/gov";
import * as _84 from "./gov/v1/query";
import * as _85 from "./gov/v1/tx";
import * as _86 from "./gov/v1beta1/genesis";
import * as _87 from "./gov/v1beta1/gov";
import * as _88 from "./gov/v1beta1/query";
import * as _89 from "./gov/v1beta1/tx";
import * as _90 from "./group/module/v1/module";
import * as _91 from "./group/v1/events";
import * as _92 from "./group/v1/genesis";
import * as _93 from "./group/v1/query";
import * as _94 from "./group/v1/tx";
import * as _95 from "./group/v1/types";
import * as _96 from "./ics23/v1/proofs";
import * as _97 from "./mint/module/v1/module";
import * as _98 from "./mint/v1beta1/genesis";
import * as _99 from "./mint/v1beta1/mint";
import * as _100 from "./mint/v1beta1/query";
import * as _101 from "./mint/v1beta1/tx";
import * as _102 from "./msg/v1/msg";
import * as _103 from "./nft/module/v1/module";
import * as _104 from "./nft/v1beta1/event";
import * as _105 from "./nft/v1beta1/genesis";
import * as _106 from "./nft/v1beta1/nft";
import * as _107 from "./nft/v1beta1/query";
import * as _108 from "./nft/v1beta1/tx";
import * as _109 from "./orm/module/v1alpha1/module";
import * as _110 from "./orm/query/v1alpha1/query";
import * as _111 from "./orm/v1/orm";
import * as _112 from "./orm/v1alpha1/schema";
import * as _113 from "./params/module/v1/module";
import * as _114 from "./params/v1beta1/params";
import * as _115 from "./params/v1beta1/query";
import * as _116 from "./query/v1/query";
import * as _117 from "./reflection/v1/reflection";
import * as _118 from "./slashing/module/v1/module";
import * as _119 from "./slashing/v1beta1/genesis";
import * as _120 from "./slashing/v1beta1/query";
import * as _121 from "./slashing/v1beta1/slashing";
import * as _122 from "./slashing/v1beta1/tx";
import * as _123 from "./staking/module/v1/module";
import * as _124 from "./staking/v1beta1/authz";
import * as _125 from "./staking/v1beta1/genesis";
import * as _126 from "./staking/v1beta1/query";
import * as _127 from "./staking/v1beta1/staking";
import * as _128 from "./staking/v1beta1/tx";
import * as _129 from "./tx/config/v1/config";
import * as _130 from "./tx/signing/v1beta1/signing";
import * as _131 from "./tx/v1beta1/service";
import * as _132 from "./tx/v1beta1/tx";
import * as _133 from "./upgrade/module/v1/module";
import * as _134 from "./upgrade/v1beta1/query";
import * as _135 from "./upgrade/v1beta1/tx";
import * as _136 from "./upgrade/v1beta1/upgrade";
import * as _137 from "./vesting/module/v1/module";
import * as _138 from "./vesting/v1beta1/tx";
import * as _139 from "./vesting/v1beta1/vesting";
import * as _343 from "./auth/v1beta1/tx.amino";
import * as _344 from "./authz/v1beta1/tx.amino";
import * as _345 from "./bank/v1beta1/tx.amino";
import * as _346 from "./consensus/v1/tx.amino";
import * as _347 from "./crisis/v1beta1/tx.amino";
import * as _348 from "./distribution/v1beta1/tx.amino";
import * as _349 from "./evidence/v1beta1/tx.amino";
import * as _350 from "./feegrant/v1beta1/tx.amino";
import * as _351 from "./gov/v1/tx.amino";
import * as _352 from "./gov/v1beta1/tx.amino";
import * as _353 from "./group/v1/tx.amino";
import * as _354 from "./mint/v1beta1/tx.amino";
import * as _355 from "./nft/v1beta1/tx.amino";
import * as _356 from "./slashing/v1beta1/tx.amino";
import * as _357 from "./staking/v1beta1/tx.amino";
import * as _358 from "./upgrade/v1beta1/tx.amino";
import * as _359 from "./vesting/v1beta1/tx.amino";
import * as _360 from "./auth/v1beta1/tx.registry";
import * as _361 from "./authz/v1beta1/tx.registry";
import * as _362 from "./bank/v1beta1/tx.registry";
import * as _363 from "./consensus/v1/tx.registry";
import * as _364 from "./crisis/v1beta1/tx.registry";
import * as _365 from "./distribution/v1beta1/tx.registry";
import * as _366 from "./evidence/v1beta1/tx.registry";
import * as _367 from "./feegrant/v1beta1/tx.registry";
import * as _368 from "./gov/v1/tx.registry";
import * as _369 from "./gov/v1beta1/tx.registry";
import * as _370 from "./group/v1/tx.registry";
import * as _371 from "./mint/v1beta1/tx.registry";
import * as _372 from "./nft/v1beta1/tx.registry";
import * as _373 from "./slashing/v1beta1/tx.registry";
import * as _374 from "./staking/v1beta1/tx.registry";
import * as _375 from "./upgrade/v1beta1/tx.registry";
import * as _376 from "./vesting/v1beta1/tx.registry";
import * as _377 from "./auth/v1beta1/query.lcd";
import * as _378 from "./authz/v1beta1/query.lcd";
import * as _379 from "./bank/v1beta1/query.lcd";
import * as _380 from "./base/node/v1beta1/query.lcd";
import * as _381 from "./base/tendermint/v1beta1/query.lcd";
import * as _382 from "./consensus/v1/query.lcd";
import * as _383 from "./distribution/v1beta1/query.lcd";
import * as _384 from "./evidence/v1beta1/query.lcd";
import * as _385 from "./feegrant/v1beta1/query.lcd";
import * as _386 from "./gov/v1/query.lcd";
import * as _387 from "./gov/v1beta1/query.lcd";
import * as _388 from "./group/v1/query.lcd";
import * as _389 from "./mint/v1beta1/query.lcd";
import * as _390 from "./nft/v1beta1/query.lcd";
import * as _391 from "./params/v1beta1/query.lcd";
import * as _392 from "./slashing/v1beta1/query.lcd";
import * as _393 from "./staking/v1beta1/query.lcd";
import * as _394 from "./tx/v1beta1/service.lcd";
import * as _395 from "./upgrade/v1beta1/query.lcd";
import * as _396 from "./app/v1alpha1/query.rpc.Query";
import * as _397 from "./auth/v1beta1/query.rpc.Query";
import * as _398 from "./authz/v1beta1/query.rpc.Query";
import * as _399 from "./autocli/v1/query.rpc.Query";
import * as _400 from "./bank/v1beta1/query.rpc.Query";
import * as _401 from "./base/node/v1beta1/query.rpc.Service";
import * as _402 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _403 from "./consensus/v1/query.rpc.Query";
import * as _404 from "./distribution/v1beta1/query.rpc.Query";
import * as _405 from "./evidence/v1beta1/query.rpc.Query";
import * as _406 from "./feegrant/v1beta1/query.rpc.Query";
import * as _407 from "./gov/v1/query.rpc.Query";
import * as _408 from "./gov/v1beta1/query.rpc.Query";
import * as _409 from "./group/v1/query.rpc.Query";
import * as _410 from "./mint/v1beta1/query.rpc.Query";
import * as _411 from "./nft/v1beta1/query.rpc.Query";
import * as _412 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _413 from "./params/v1beta1/query.rpc.Query";
import * as _414 from "./slashing/v1beta1/query.rpc.Query";
import * as _415 from "./staking/v1beta1/query.rpc.Query";
import * as _416 from "./tx/v1beta1/service.rpc.Service";
import * as _417 from "./upgrade/v1beta1/query.rpc.Query";
import * as _418 from "./auth/v1beta1/tx.rpc.msg";
import * as _419 from "./authz/v1beta1/tx.rpc.msg";
import * as _420 from "./bank/v1beta1/tx.rpc.msg";
import * as _421 from "./consensus/v1/tx.rpc.msg";
import * as _422 from "./crisis/v1beta1/tx.rpc.msg";
import * as _423 from "./distribution/v1beta1/tx.rpc.msg";
import * as _424 from "./evidence/v1beta1/tx.rpc.msg";
import * as _425 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _426 from "./gov/v1/tx.rpc.msg";
import * as _427 from "./gov/v1beta1/tx.rpc.msg";
import * as _428 from "./group/v1/tx.rpc.msg";
import * as _429 from "./mint/v1beta1/tx.rpc.msg";
import * as _430 from "./nft/v1beta1/tx.rpc.msg";
import * as _431 from "./slashing/v1beta1/tx.rpc.msg";
import * as _432 from "./staking/v1beta1/tx.rpc.msg";
import * as _433 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _434 from "./vesting/v1beta1/tx.rpc.msg";
import * as _536 from "./lcd";
import * as _537 from "./rpc.query";
import * as _538 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._14
      };
    }
    export const v1alpha1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._396
    };
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
      ..._343,
      ..._360,
      ..._377,
      ..._397,
      ..._418
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
      ..._344,
      ..._361,
      ..._378,
      ..._398,
      ..._419
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._29,
      ..._30,
      ..._399
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
      ..._345,
      ..._362,
      ..._379,
      ..._400,
      ..._420
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._37
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._38
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._39,
        ..._380,
        ..._401
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._40
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._41
      };
      export const v2alpha1 = {
        ..._42
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._43
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._44,
        ..._45
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._46,
        ..._47,
        ..._381,
        ..._402
      };
    }
    export const v1beta1 = {
      ..._48
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._49
      };
    }
    export const v1beta1 = {
      ..._50,
      ..._51
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._52
      };
    }
    export const v1 = {
      ..._53,
      ..._54,
      ..._346,
      ..._363,
      ..._382,
      ..._403,
      ..._421
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._55
      };
    }
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._347,
      ..._364,
      ..._422
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._58
    };
    export namespace hd {
      export const v1 = {
        ..._59
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._60
      };
    }
    export const multisig = {
      ..._61
    };
    export const secp256k1 = {
      ..._62
    };
    export const secp256r1 = {
      ..._63
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._64
      };
    }
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._348,
      ..._365,
      ..._383,
      ..._404,
      ..._423
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._69
      };
    }
    export const v1beta1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._349,
      ..._366,
      ..._384,
      ..._405,
      ..._424
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._74
      };
    }
    export const v1beta1 = {
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._350,
      ..._367,
      ..._385,
      ..._406,
      ..._425
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._79
      };
    }
    export const v1beta1 = {
      ..._80
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._81
      };
    }
    export const v1 = {
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._351,
      ..._368,
      ..._386,
      ..._407,
      ..._426
    };
    export const v1beta1 = {
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._352,
      ..._369,
      ..._387,
      ..._408,
      ..._427
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._90
      };
    }
    export const v1 = {
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._353,
      ..._370,
      ..._388,
      ..._409,
      ..._428
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._96
    };
  }
  export namespace mint {
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
      ..._354,
      ..._371,
      ..._389,
      ..._410,
      ..._429
    };
  }
  export namespace msg {
    export const v1 = {
      ..._102
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._103
      };
    }
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._355,
      ..._372,
      ..._390,
      ..._411,
      ..._430
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._109
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._110,
        ..._412
      };
    }
    export const v1 = {
      ..._111
    };
    export const v1alpha1 = {
      ..._112
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._113
      };
    }
    export const v1beta1 = {
      ..._114,
      ..._115,
      ..._391,
      ..._413
    };
  }
  export namespace query {
    export const v1 = {
      ..._116
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._117
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._118
      };
    }
    export const v1beta1 = {
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._356,
      ..._373,
      ..._392,
      ..._414,
      ..._431
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._123
      };
    }
    export const v1beta1 = {
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._357,
      ..._374,
      ..._393,
      ..._415,
      ..._432
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._129
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._130
      };
    }
    export const v1beta1 = {
      ..._131,
      ..._132,
      ..._394,
      ..._416
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._133
      };
    }
    export const v1beta1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._358,
      ..._375,
      ..._395,
      ..._417,
      ..._433
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._137
      };
    }
    export const v1beta1 = {
      ..._138,
      ..._139,
      ..._359,
      ..._376,
      ..._434
    };
  }
  export const ClientFactory = {
    ..._536,
    ..._537,
    ..._538
  };
}