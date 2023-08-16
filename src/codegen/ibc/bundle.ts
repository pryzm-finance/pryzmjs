import * as _118 from "./applications/fee/v1/ack";
import * as _119 from "./applications/fee/v1/fee";
import * as _120 from "./applications/fee/v1/genesis";
import * as _121 from "./applications/fee/v1/metadata";
import * as _122 from "./applications/fee/v1/query";
import * as _123 from "./applications/fee/v1/tx";
import * as _124 from "./applications/interchain_accounts/controller/v1/controller";
import * as _125 from "./applications/interchain_accounts/controller/v1/query";
import * as _126 from "./applications/interchain_accounts/controller/v1/tx";
import * as _127 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _128 from "./applications/interchain_accounts/host/v1/host";
import * as _129 from "./applications/interchain_accounts/host/v1/query";
import * as _130 from "./applications/interchain_accounts/v1/account";
import * as _131 from "./applications/interchain_accounts/v1/metadata";
import * as _132 from "./applications/interchain_accounts/v1/packet";
import * as _133 from "./applications/transfer/v1/authz";
import * as _134 from "./applications/transfer/v1/genesis";
import * as _135 from "./applications/transfer/v1/query";
import * as _136 from "./applications/transfer/v1/transfer";
import * as _137 from "./applications/transfer/v1/tx";
import * as _138 from "./applications/transfer/v2/packet";
import * as _139 from "./core/channel/v1/channel";
import * as _140 from "./core/channel/v1/genesis";
import * as _141 from "./core/channel/v1/query";
import * as _142 from "./core/channel/v1/tx";
import * as _143 from "./core/client/v1/client";
import * as _144 from "./core/client/v1/genesis";
import * as _145 from "./core/client/v1/query";
import * as _146 from "./core/client/v1/tx";
import * as _147 from "./core/commitment/v1/commitment";
import * as _148 from "./core/connection/v1/connection";
import * as _149 from "./core/connection/v1/genesis";
import * as _150 from "./core/connection/v1/query";
import * as _151 from "./core/connection/v1/tx";
import * as _152 from "./core/types/v1/genesis";
import * as _153 from "./lightclients/solomachine/v2/solomachine";
import * as _154 from "./lightclients/solomachine/v3/solomachine";
import * as _155 from "./lightclients/tendermint/v1/tendermint";
import * as _360 from "./applications/fee/v1/tx.amino";
import * as _361 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _362 from "./applications/transfer/v1/tx.amino";
import * as _363 from "./core/channel/v1/tx.amino";
import * as _364 from "./core/client/v1/tx.amino";
import * as _365 from "./core/connection/v1/tx.amino";
import * as _366 from "./applications/fee/v1/tx.registry";
import * as _367 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _368 from "./applications/transfer/v1/tx.registry";
import * as _369 from "./core/channel/v1/tx.registry";
import * as _370 from "./core/client/v1/tx.registry";
import * as _371 from "./core/connection/v1/tx.registry";
import * as _372 from "./applications/fee/v1/query.lcd";
import * as _373 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _374 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _375 from "./applications/transfer/v1/query.lcd";
import * as _376 from "./core/channel/v1/query.lcd";
import * as _377 from "./core/client/v1/query.lcd";
import * as _378 from "./core/connection/v1/query.lcd";
import * as _379 from "./applications/fee/v1/query.rpc.Query";
import * as _380 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _381 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _382 from "./applications/transfer/v1/query.rpc.Query";
import * as _383 from "./core/channel/v1/query.rpc.Query";
import * as _384 from "./core/client/v1/query.rpc.Query";
import * as _385 from "./core/connection/v1/query.rpc.Query";
import * as _386 from "./applications/fee/v1/tx.rpc.msg";
import * as _387 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _388 from "./applications/transfer/v1/tx.rpc.msg";
import * as _389 from "./core/channel/v1/tx.rpc.msg";
import * as _390 from "./core/client/v1/tx.rpc.msg";
import * as _391 from "./core/connection/v1/tx.rpc.msg";
import * as _451 from "./lcd";
import * as _452 from "./rpc.query";
import * as _453 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._118,
        ..._119,
        ..._120,
        ..._121,
        ..._122,
        ..._123,
        ..._360,
        ..._366,
        ..._372,
        ..._379,
        ..._386
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._124,
          ..._125,
          ..._126,
          ..._361,
          ..._367,
          ..._373,
          ..._380,
          ..._387
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
          ..._374,
          ..._381
        };
      }
      export const v1 = {
        ..._130,
        ..._131,
        ..._132
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._133,
        ..._134,
        ..._135,
        ..._136,
        ..._137,
        ..._362,
        ..._368,
        ..._375,
        ..._382,
        ..._388
      };
      export const v2 = {
        ..._138
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._139,
        ..._140,
        ..._141,
        ..._142,
        ..._363,
        ..._369,
        ..._376,
        ..._383,
        ..._389
      };
    }
    export namespace client {
      export const v1 = {
        ..._143,
        ..._144,
        ..._145,
        ..._146,
        ..._364,
        ..._370,
        ..._377,
        ..._384,
        ..._390
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._147
      };
    }
    export namespace connection {
      export const v1 = {
        ..._148,
        ..._149,
        ..._150,
        ..._151,
        ..._365,
        ..._371,
        ..._378,
        ..._385,
        ..._391
      };
    }
    export namespace types {
      export const v1 = {
        ..._152
      };
    }
  }
  export namespace lightclients {
    export namespace solomachine {
      export const v2 = {
        ..._153
      };
      export const v3 = {
        ..._154
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._155
      };
    }
  }
  export const ClientFactory = {
    ..._451,
    ..._452,
    ..._453
  };
}