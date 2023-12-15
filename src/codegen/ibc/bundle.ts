import * as _114 from "./applications/interchain_accounts/controller/v1/controller";
import * as _115 from "./applications/interchain_accounts/controller/v1/query";
import * as _116 from "./applications/interchain_accounts/controller/v1/tx";
import * as _117 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _118 from "./applications/interchain_accounts/host/v1/host";
import * as _119 from "./applications/interchain_accounts/host/v1/query";
import * as _120 from "./applications/interchain_accounts/v1/account";
import * as _121 from "./applications/interchain_accounts/v1/metadata";
import * as _122 from "./applications/interchain_accounts/v1/packet";
import * as _123 from "./applications/transfer/v1/authz";
import * as _124 from "./applications/transfer/v1/genesis";
import * as _125 from "./applications/transfer/v1/query";
import * as _126 from "./applications/transfer/v1/transfer";
import * as _127 from "./applications/transfer/v1/tx";
import * as _128 from "./applications/transfer/v2/packet";
import * as _129 from "./core/channel/v1/channel";
import * as _130 from "./core/channel/v1/genesis";
import * as _131 from "./core/channel/v1/query";
import * as _132 from "./core/channel/v1/tx";
import * as _133 from "./core/client/v1/client";
import * as _134 from "./core/client/v1/genesis";
import * as _135 from "./core/client/v1/query";
import * as _136 from "./core/client/v1/tx";
import * as _137 from "./core/commitment/v1/commitment";
import * as _138 from "./core/connection/v1/connection";
import * as _139 from "./core/connection/v1/genesis";
import * as _140 from "./core/connection/v1/query";
import * as _141 from "./core/connection/v1/tx";
import * as _142 from "./lightclients/localhost/v2/localhost";
import * as _143 from "./lightclients/solomachine/v2/solomachine";
import * as _144 from "./lightclients/solomachine/v3/solomachine";
import * as _145 from "./lightclients/tendermint/v1/tendermint";
import * as _369 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _370 from "./applications/transfer/v1/tx.amino";
import * as _371 from "./core/channel/v1/tx.amino";
import * as _372 from "./core/client/v1/tx.amino";
import * as _373 from "./core/connection/v1/tx.amino";
import * as _374 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _375 from "./applications/transfer/v1/tx.registry";
import * as _376 from "./core/channel/v1/tx.registry";
import * as _377 from "./core/client/v1/tx.registry";
import * as _378 from "./core/connection/v1/tx.registry";
import * as _379 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _380 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _381 from "./applications/transfer/v1/query.lcd";
import * as _382 from "./core/channel/v1/query.lcd";
import * as _383 from "./core/client/v1/query.lcd";
import * as _384 from "./core/connection/v1/query.lcd";
import * as _385 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _386 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _387 from "./applications/transfer/v1/query.rpc.Query";
import * as _388 from "./core/channel/v1/query.rpc.Query";
import * as _389 from "./core/client/v1/query.rpc.Query";
import * as _390 from "./core/connection/v1/query.rpc.Query";
import * as _391 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _392 from "./applications/transfer/v1/tx.rpc.msg";
import * as _393 from "./core/channel/v1/tx.rpc.msg";
import * as _394 from "./core/client/v1/tx.rpc.msg";
import * as _395 from "./core/connection/v1/tx.rpc.msg";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._114,
          ..._115,
          ..._116,
          ..._369,
          ..._374,
          ..._379,
          ..._385,
          ..._391
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._117
        };
      }
      export namespace host {
        export const v1 = {
          ..._118,
          ..._119,
          ..._380,
          ..._386
        };
      }
      export const v1 = {
        ..._120,
        ..._121,
        ..._122
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._123,
        ..._124,
        ..._125,
        ..._126,
        ..._127,
        ..._370,
        ..._375,
        ..._381,
        ..._387,
        ..._392
      };
      export const v2 = {
        ..._128
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._129,
        ..._130,
        ..._131,
        ..._132,
        ..._371,
        ..._376,
        ..._382,
        ..._388,
        ..._393
      };
    }
    export namespace client {
      export const v1 = {
        ..._133,
        ..._134,
        ..._135,
        ..._136,
        ..._372,
        ..._377,
        ..._383,
        ..._389,
        ..._394
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._137
      };
    }
    export namespace connection {
      export const v1 = {
        ..._138,
        ..._139,
        ..._140,
        ..._141,
        ..._373,
        ..._378,
        ..._384,
        ..._390,
        ..._395
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._142
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._143
      };
      export const v3 = {
        ..._144
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._145
      };
    }
  }
}