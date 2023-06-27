import * as _2 from "./app/runtime/v1alpha1/module";
import * as _3 from "./app/v1alpha1/config";
import * as _4 from "./app/v1alpha1/module";
import * as _5 from "./app/v1alpha1/query";
import * as _6 from "./auth/v1beta1/auth";
import * as _7 from "./auth/v1beta1/genesis";
import * as _8 from "./auth/v1beta1/query";
import * as _9 from "./auth/v1beta1/tx";
import * as _10 from "./authz/v1beta1/authz";
import * as _11 from "./authz/v1beta1/event";
import * as _12 from "./authz/v1beta1/genesis";
import * as _13 from "./authz/v1beta1/query";
import * as _14 from "./authz/v1beta1/tx";
import * as _15 from "./autocli/v1/options";
import * as _16 from "./autocli/v1/query";
import * as _17 from "./bank/v1beta1/authz";
import * as _18 from "./bank/v1beta1/bank";
import * as _19 from "./bank/v1beta1/genesis";
import * as _20 from "./bank/v1beta1/query";
import * as _21 from "./bank/v1beta1/tx";
import * as _22 from "./base/abci/v1beta1/abci";
import * as _23 from "./base/kv/v1beta1/kv";
import * as _24 from "./base/node/v1beta1/query";
import * as _25 from "./base/query/v1beta1/pagination";
import * as _26 from "./base/reflection/v1beta1/reflection";
import * as _27 from "./base/reflection/v2alpha1/reflection";
import * as _28 from "./base/snapshots/v1beta1/snapshot";
import * as _29 from "./base/store/v1beta1/commit_info";
import * as _30 from "./base/store/v1beta1/listening";
import * as _31 from "./base/tendermint/v1beta1/query";
import * as _32 from "./base/tendermint/v1beta1/types";
import * as _33 from "./base/v1beta1/coin";
import * as _34 from "./capability/v1beta1/capability";
import * as _35 from "./capability/v1beta1/genesis";
import * as _36 from "./consensus/v1/query";
import * as _37 from "./consensus/v1/tx";
import * as _38 from "./crisis/v1beta1/genesis";
import * as _39 from "./crisis/v1beta1/tx";
import * as _40 from "./crypto/ed25519/keys";
import * as _41 from "./crypto/hd/v1/hd";
import * as _42 from "./crypto/keyring/v1/record";
import * as _43 from "./crypto/multisig/keys";
import * as _44 from "./crypto/secp256k1/keys";
import * as _45 from "./crypto/secp256r1/keys";
import * as _46 from "./distribution/v1beta1/distribution";
import * as _47 from "./distribution/v1beta1/genesis";
import * as _48 from "./distribution/v1beta1/query";
import * as _49 from "./distribution/v1beta1/tx";
import * as _50 from "./evidence/v1beta1/evidence";
import * as _51 from "./evidence/v1beta1/genesis";
import * as _52 from "./evidence/v1beta1/query";
import * as _53 from "./evidence/v1beta1/tx";
import * as _54 from "./feegrant/v1beta1/feegrant";
import * as _55 from "./feegrant/v1beta1/genesis";
import * as _56 from "./feegrant/v1beta1/query";
import * as _57 from "./feegrant/v1beta1/tx";
import * as _58 from "./genutil/v1beta1/genesis";
import * as _59 from "./gov/v1/genesis";
import * as _60 from "./gov/v1/gov";
import * as _61 from "./gov/v1/query";
import * as _62 from "./gov/v1/tx";
import * as _63 from "./gov/v1beta1/genesis";
import * as _64 from "./gov/v1beta1/gov";
import * as _65 from "./gov/v1beta1/query";
import * as _66 from "./gov/v1beta1/tx";
import * as _67 from "./group/v1/events";
import * as _68 from "./group/v1/genesis";
import * as _69 from "./group/v1/query";
import * as _70 from "./group/v1/tx";
import * as _71 from "./group/v1/types";
import * as _72 from "./ics23/v1/proofs";
import * as _73 from "./mint/v1beta1/genesis";
import * as _74 from "./mint/v1beta1/mint";
import * as _75 from "./mint/v1beta1/query";
import * as _76 from "./mint/v1beta1/tx";
import * as _77 from "./msg/v1/msg";
import * as _78 from "./nft/v1beta1/event";
import * as _79 from "./nft/v1beta1/genesis";
import * as _80 from "./nft/v1beta1/nft";
import * as _81 from "./nft/v1beta1/query";
import * as _82 from "./nft/v1beta1/tx";
import * as _83 from "./orm/query/v1alpha1/query";
import * as _84 from "./orm/v1/orm";
import * as _85 from "./orm/v1alpha1/schema";
import * as _86 from "./params/v1beta1/params";
import * as _87 from "./params/v1beta1/query";
import * as _88 from "./query/v1/query";
import * as _89 from "./reflection/v1/reflection";
import * as _90 from "./slashing/v1beta1/genesis";
import * as _91 from "./slashing/v1beta1/query";
import * as _92 from "./slashing/v1beta1/slashing";
import * as _93 from "./slashing/v1beta1/tx";
import * as _94 from "./staking/v1beta1/authz";
import * as _95 from "./staking/v1beta1/genesis";
import * as _96 from "./staking/v1beta1/query";
import * as _97 from "./staking/v1beta1/staking";
import * as _98 from "./staking/v1beta1/tx";
import * as _99 from "./tx/config/v1/config";
import * as _100 from "./tx/signing/v1beta1/signing";
import * as _101 from "./tx/v1beta1/service";
import * as _102 from "./tx/v1beta1/tx";
import * as _103 from "./upgrade/v1beta1/query";
import * as _104 from "./upgrade/v1beta1/tx";
import * as _105 from "./upgrade/v1beta1/upgrade";
import * as _106 from "./vesting/v1beta1/tx";
import * as _107 from "./vesting/v1beta1/vesting";
import * as _255 from "./auth/v1beta1/tx.amino";
import * as _256 from "./authz/v1beta1/tx.amino";
import * as _257 from "./bank/v1beta1/tx.amino";
import * as _258 from "./consensus/v1/tx.amino";
import * as _259 from "./crisis/v1beta1/tx.amino";
import * as _260 from "./distribution/v1beta1/tx.amino";
import * as _261 from "./evidence/v1beta1/tx.amino";
import * as _262 from "./feegrant/v1beta1/tx.amino";
import * as _263 from "./gov/v1/tx.amino";
import * as _264 from "./gov/v1beta1/tx.amino";
import * as _265 from "./group/v1/tx.amino";
import * as _266 from "./mint/v1beta1/tx.amino";
import * as _267 from "./nft/v1beta1/tx.amino";
import * as _268 from "./slashing/v1beta1/tx.amino";
import * as _269 from "./staking/v1beta1/tx.amino";
import * as _270 from "./upgrade/v1beta1/tx.amino";
import * as _271 from "./vesting/v1beta1/tx.amino";
import * as _272 from "./auth/v1beta1/tx.registry";
import * as _273 from "./authz/v1beta1/tx.registry";
import * as _274 from "./bank/v1beta1/tx.registry";
import * as _275 from "./consensus/v1/tx.registry";
import * as _276 from "./crisis/v1beta1/tx.registry";
import * as _277 from "./distribution/v1beta1/tx.registry";
import * as _278 from "./evidence/v1beta1/tx.registry";
import * as _279 from "./feegrant/v1beta1/tx.registry";
import * as _280 from "./gov/v1/tx.registry";
import * as _281 from "./gov/v1beta1/tx.registry";
import * as _282 from "./group/v1/tx.registry";
import * as _283 from "./mint/v1beta1/tx.registry";
import * as _284 from "./nft/v1beta1/tx.registry";
import * as _285 from "./slashing/v1beta1/tx.registry";
import * as _286 from "./staking/v1beta1/tx.registry";
import * as _287 from "./upgrade/v1beta1/tx.registry";
import * as _288 from "./vesting/v1beta1/tx.registry";
import * as _289 from "./auth/v1beta1/query.lcd";
import * as _290 from "./authz/v1beta1/query.lcd";
import * as _291 from "./bank/v1beta1/query.lcd";
import * as _292 from "./base/node/v1beta1/query.lcd";
import * as _293 from "./base/tendermint/v1beta1/query.lcd";
import * as _294 from "./consensus/v1/query.lcd";
import * as _295 from "./distribution/v1beta1/query.lcd";
import * as _296 from "./evidence/v1beta1/query.lcd";
import * as _297 from "./feegrant/v1beta1/query.lcd";
import * as _298 from "./gov/v1/query.lcd";
import * as _299 from "./gov/v1beta1/query.lcd";
import * as _300 from "./group/v1/query.lcd";
import * as _301 from "./mint/v1beta1/query.lcd";
import * as _302 from "./nft/v1beta1/query.lcd";
import * as _303 from "./params/v1beta1/query.lcd";
import * as _304 from "./slashing/v1beta1/query.lcd";
import * as _305 from "./staking/v1beta1/query.lcd";
import * as _306 from "./tx/v1beta1/service.lcd";
import * as _307 from "./upgrade/v1beta1/query.lcd";
import * as _308 from "./app/v1alpha1/query.rpc.Query";
import * as _309 from "./auth/v1beta1/query.rpc.Query";
import * as _310 from "./authz/v1beta1/query.rpc.Query";
import * as _311 from "./autocli/v1/query.rpc.Query";
import * as _312 from "./bank/v1beta1/query.rpc.Query";
import * as _313 from "./base/node/v1beta1/query.rpc.Service";
import * as _314 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _315 from "./consensus/v1/query.rpc.Query";
import * as _316 from "./distribution/v1beta1/query.rpc.Query";
import * as _317 from "./evidence/v1beta1/query.rpc.Query";
import * as _318 from "./feegrant/v1beta1/query.rpc.Query";
import * as _319 from "./gov/v1/query.rpc.Query";
import * as _320 from "./gov/v1beta1/query.rpc.Query";
import * as _321 from "./group/v1/query.rpc.Query";
import * as _322 from "./mint/v1beta1/query.rpc.Query";
import * as _323 from "./nft/v1beta1/query.rpc.Query";
import * as _324 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _325 from "./params/v1beta1/query.rpc.Query";
import * as _326 from "./slashing/v1beta1/query.rpc.Query";
import * as _327 from "./staking/v1beta1/query.rpc.Query";
import * as _328 from "./tx/v1beta1/service.rpc.Service";
import * as _329 from "./upgrade/v1beta1/query.rpc.Query";
import * as _330 from "./auth/v1beta1/tx.rpc.msg";
import * as _331 from "./authz/v1beta1/tx.rpc.msg";
import * as _332 from "./bank/v1beta1/tx.rpc.msg";
import * as _333 from "./consensus/v1/tx.rpc.msg";
import * as _334 from "./crisis/v1beta1/tx.rpc.msg";
import * as _335 from "./distribution/v1beta1/tx.rpc.msg";
import * as _336 from "./evidence/v1beta1/tx.rpc.msg";
import * as _337 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _338 from "./gov/v1/tx.rpc.msg";
import * as _339 from "./gov/v1beta1/tx.rpc.msg";
import * as _340 from "./group/v1/tx.rpc.msg";
import * as _341 from "./mint/v1beta1/tx.rpc.msg";
import * as _342 from "./nft/v1beta1/tx.rpc.msg";
import * as _343 from "./slashing/v1beta1/tx.rpc.msg";
import * as _344 from "./staking/v1beta1/tx.rpc.msg";
import * as _345 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _346 from "./vesting/v1beta1/tx.rpc.msg";
import * as _432 from "./lcd";
import * as _433 from "./rpc.query";
import * as _434 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._2
      };
    }
    export const v1alpha1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._308
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._255,
      ..._272,
      ..._289,
      ..._309,
      ..._330
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._256,
      ..._273,
      ..._290,
      ..._310,
      ..._331
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._15,
      ..._16,
      ..._311
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._257,
      ..._274,
      ..._291,
      ..._312,
      ..._332
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._22
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._23
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._24,
        ..._292,
        ..._313
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._25
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._26
      };
      export const v2alpha1 = {
        ..._27
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._28
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._29,
        ..._30
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._31,
        ..._32,
        ..._293,
        ..._314
      };
    }
    export const v1beta1 = {
      ..._33
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._34,
      ..._35
    };
  }
  export namespace consensus {
    export const v1 = {
      ..._36,
      ..._37,
      ..._258,
      ..._275,
      ..._294,
      ..._315,
      ..._333
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._38,
      ..._39,
      ..._259,
      ..._276,
      ..._334
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._40
    };
    export namespace hd {
      export const v1 = {
        ..._41
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._42
      };
    }
    export const multisig = {
      ..._43
    };
    export const secp256k1 = {
      ..._44
    };
    export const secp256r1 = {
      ..._45
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._260,
      ..._277,
      ..._295,
      ..._316,
      ..._335
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._261,
      ..._278,
      ..._296,
      ..._317,
      ..._336
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._262,
      ..._279,
      ..._297,
      ..._318,
      ..._337
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._58
    };
  }
  export namespace gov {
    export const v1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._263,
      ..._280,
      ..._298,
      ..._319,
      ..._338
    };
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._264,
      ..._281,
      ..._299,
      ..._320,
      ..._339
    };
  }
  export namespace group {
    export const v1 = {
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._265,
      ..._282,
      ..._300,
      ..._321,
      ..._340
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._72
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._266,
      ..._283,
      ..._301,
      ..._322,
      ..._341
    };
  }
  export namespace msg {
    export const v1 = {
      ..._77
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._267,
      ..._284,
      ..._302,
      ..._323,
      ..._342
    };
  }
  export namespace orm {
    export namespace query {
      export const v1alpha1 = {
        ..._83,
        ..._324
      };
    }
    export const v1 = {
      ..._84
    };
    export const v1alpha1 = {
      ..._85
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._86,
      ..._87,
      ..._303,
      ..._325
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
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._268,
      ..._285,
      ..._304,
      ..._326,
      ..._343
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._269,
      ..._286,
      ..._305,
      ..._327,
      ..._344
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
      ..._306,
      ..._328
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._103,
      ..._104,
      ..._105,
      ..._270,
      ..._287,
      ..._307,
      ..._329,
      ..._345
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._106,
      ..._107,
      ..._271,
      ..._288,
      ..._346
    };
  }
  export const ClientFactory = {
    ..._432,
    ..._433,
    ..._434
  };
}