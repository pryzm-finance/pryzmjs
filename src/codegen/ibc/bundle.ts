import * as _124 from "./applications/interchain_accounts/controller/v1/controller";
import * as _125 from "./applications/interchain_accounts/controller/v1/query";
import * as _126 from "./applications/interchain_accounts/controller/v1/tx";
import * as _127 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _128 from "./applications/interchain_accounts/host/v1/host";
import * as _129 from "./applications/interchain_accounts/host/v1/query";
import * as _130 from "./applications/interchain_accounts/host/v1/tx";
import * as _131 from "./applications/interchain_accounts/v1/account";
import * as _132 from "./applications/interchain_accounts/v1/metadata";
import * as _133 from "./applications/interchain_accounts/v1/packet";
import * as _134 from "./applications/transfer/v1/authz";
import * as _135 from "./applications/transfer/v1/genesis";
import * as _136 from "./applications/transfer/v1/query";
import * as _137 from "./applications/transfer/v1/transfer";
import * as _138 from "./applications/transfer/v1/tx";
import * as _139 from "./applications/transfer/v2/packet";
import * as _140 from "./core/channel/v1/channel";
import * as _141 from "./core/channel/v1/genesis";
import * as _142 from "./core/channel/v1/query";
import * as _143 from "./core/channel/v1/tx";
import * as _144 from "./core/client/v1/client";
import * as _145 from "./core/client/v1/genesis";
import * as _146 from "./core/client/v1/query";
import * as _147 from "./core/client/v1/tx";
import * as _148 from "./core/commitment/v1/commitment";
import * as _149 from "./core/connection/v1/connection";
import * as _150 from "./core/connection/v1/genesis";
import * as _151 from "./core/connection/v1/query";
import * as _152 from "./core/connection/v1/tx";
import * as _153 from "./lightclients/localhost/v2/localhost";
import * as _154 from "./lightclients/solomachine/v2/solomachine";
import * as _155 from "./lightclients/solomachine/v3/solomachine";
import * as _156 from "./lightclients/tendermint/v1/tendermint";
import * as _358 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _359 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _360 from "./applications/transfer/v1/tx.amino";
import * as _361 from "./core/channel/v1/tx.amino";
import * as _362 from "./core/client/v1/tx.amino";
import * as _363 from "./core/connection/v1/tx.amino";
import * as _364 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _365 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _366 from "./applications/transfer/v1/tx.registry";
import * as _367 from "./core/channel/v1/tx.registry";
import * as _368 from "./core/client/v1/tx.registry";
import * as _369 from "./core/connection/v1/tx.registry";
import * as _370 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _371 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _372 from "./applications/transfer/v1/query.lcd";
import * as _373 from "./core/channel/v1/query.lcd";
import * as _374 from "./core/client/v1/query.lcd";
import * as _375 from "./core/connection/v1/query.lcd";
import * as _376 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _377 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _378 from "./applications/transfer/v1/query.rpc.Query";
import * as _379 from "./core/channel/v1/query.rpc.Query";
import * as _380 from "./core/client/v1/query.rpc.Query";
import * as _381 from "./core/connection/v1/query.rpc.Query";
import * as _382 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _383 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _384 from "./applications/transfer/v1/tx.rpc.msg";
import * as _385 from "./core/channel/v1/tx.rpc.msg";
import * as _386 from "./core/client/v1/tx.rpc.msg";
import * as _387 from "./core/connection/v1/tx.rpc.msg";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._124,
          ..._125,
          ..._126,
          ..._358,
          ..._364,
          ..._370,
          ..._376,
          ..._382
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._127
        };
      }
      export namespace host {
        export const v1 = {
          ..._128,
          ..._129,
          ..._130,
          ..._359,
          ..._365,
          ..._371,
          ..._377,
          ..._383
        };
      }
      export const v1 = {
        ..._131,
        ..._132,
        ..._133
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._134,
        ..._135,
        ..._136,
        ..._137,
        ..._138,
        ..._360,
        ..._366,
        ..._372,
        ..._378,
        ..._384
      };
      export const v2 = {
        ..._139
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._140,
        ..._141,
        ..._142,
        ..._143,
        ..._361,
        ..._367,
        ..._373,
        ..._379,
        ..._385
      };
    }
    export namespace client {
      export const v1 = {
        ..._144,
        ..._145,
        ..._146,
        ..._147,
        ..._362,
        ..._368,
        ..._374,
        ..._380,
        ..._386
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._148
      };
    }
    export namespace connection {
      export const v1 = {
        ..._149,
        ..._150,
        ..._151,
        ..._152,
        ..._363,
        ..._369,
        ..._375,
        ..._381,
        ..._387
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._153
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._154
      };
      export const v3 = {
        ..._155
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._156
      };
    }
  }
}