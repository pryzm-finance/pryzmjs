import * as _119 from "./applications/interchain_accounts/controller/v1/controller";
import * as _120 from "./applications/interchain_accounts/controller/v1/query";
import * as _121 from "./applications/interchain_accounts/controller/v1/tx";
import * as _122 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _123 from "./applications/interchain_accounts/host/v1/host";
import * as _124 from "./applications/interchain_accounts/host/v1/query";
import * as _125 from "./applications/interchain_accounts/v1/account";
import * as _126 from "./applications/interchain_accounts/v1/metadata";
import * as _127 from "./applications/interchain_accounts/v1/packet";
import * as _128 from "./applications/transfer/v1/authz";
import * as _129 from "./applications/transfer/v1/genesis";
import * as _130 from "./applications/transfer/v1/query";
import * as _131 from "./applications/transfer/v1/transfer";
import * as _132 from "./applications/transfer/v1/tx";
import * as _133 from "./applications/transfer/v2/packet";
import * as _134 from "./core/channel/v1/channel";
import * as _135 from "./core/channel/v1/genesis";
import * as _136 from "./core/channel/v1/query";
import * as _137 from "./core/channel/v1/tx";
import * as _138 from "./core/client/v1/client";
import * as _139 from "./core/client/v1/genesis";
import * as _140 from "./core/client/v1/query";
import * as _141 from "./core/client/v1/tx";
import * as _142 from "./core/commitment/v1/commitment";
import * as _143 from "./core/connection/v1/connection";
import * as _144 from "./core/connection/v1/genesis";
import * as _145 from "./core/connection/v1/query";
import * as _146 from "./core/connection/v1/tx";
import * as _147 from "./lightclients/localhost/v2/localhost";
import * as _148 from "./lightclients/solomachine/v2/solomachine";
import * as _149 from "./lightclients/solomachine/v3/solomachine";
import * as _150 from "./lightclients/tendermint/v1/tendermint";
import * as _379 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _380 from "./applications/transfer/v1/tx.amino";
import * as _381 from "./core/channel/v1/tx.amino";
import * as _382 from "./core/client/v1/tx.amino";
import * as _383 from "./core/connection/v1/tx.amino";
import * as _384 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _385 from "./applications/transfer/v1/tx.registry";
import * as _386 from "./core/channel/v1/tx.registry";
import * as _387 from "./core/client/v1/tx.registry";
import * as _388 from "./core/connection/v1/tx.registry";
import * as _389 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _390 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _391 from "./applications/transfer/v1/query.lcd";
import * as _392 from "./core/channel/v1/query.lcd";
import * as _393 from "./core/client/v1/query.lcd";
import * as _394 from "./core/connection/v1/query.lcd";
import * as _395 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _396 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _397 from "./applications/transfer/v1/query.rpc.Query";
import * as _398 from "./core/channel/v1/query.rpc.Query";
import * as _399 from "./core/client/v1/query.rpc.Query";
import * as _400 from "./core/connection/v1/query.rpc.Query";
import * as _401 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _402 from "./applications/transfer/v1/tx.rpc.msg";
import * as _403 from "./core/channel/v1/tx.rpc.msg";
import * as _404 from "./core/client/v1/tx.rpc.msg";
import * as _405 from "./core/connection/v1/tx.rpc.msg";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._119,
          ..._120,
          ..._121,
          ..._379,
          ..._384,
          ..._389,
          ..._395,
          ..._401
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._122
        };
      }
      export namespace host {
        export const v1 = {
          ..._123,
          ..._124,
          ..._390,
          ..._396
        };
      }
      export const v1 = {
        ..._125,
        ..._126,
        ..._127
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._128,
        ..._129,
        ..._130,
        ..._131,
        ..._132,
        ..._380,
        ..._385,
        ..._391,
        ..._397,
        ..._402
      };
      export const v2 = {
        ..._133
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._134,
        ..._135,
        ..._136,
        ..._137,
        ..._381,
        ..._386,
        ..._392,
        ..._398,
        ..._403
      };
    }
    export namespace client {
      export const v1 = {
        ..._138,
        ..._139,
        ..._140,
        ..._141,
        ..._382,
        ..._387,
        ..._393,
        ..._399,
        ..._404
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._142
      };
    }
    export namespace connection {
      export const v1 = {
        ..._143,
        ..._144,
        ..._145,
        ..._146,
        ..._383,
        ..._388,
        ..._394,
        ..._400,
        ..._405
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._147
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._148
      };
      export const v3 = {
        ..._149
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._150
      };
    }
  }
}