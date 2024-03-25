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
import * as _386 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _387 from "./applications/transfer/v1/tx.amino";
import * as _388 from "./core/channel/v1/tx.amino";
import * as _389 from "./core/client/v1/tx.amino";
import * as _390 from "./core/connection/v1/tx.amino";
import * as _391 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _392 from "./applications/transfer/v1/tx.registry";
import * as _393 from "./core/channel/v1/tx.registry";
import * as _394 from "./core/client/v1/tx.registry";
import * as _395 from "./core/connection/v1/tx.registry";
import * as _396 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _397 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _398 from "./applications/transfer/v1/query.lcd";
import * as _399 from "./core/channel/v1/query.lcd";
import * as _400 from "./core/client/v1/query.lcd";
import * as _401 from "./core/connection/v1/query.lcd";
import * as _402 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _403 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _404 from "./applications/transfer/v1/query.rpc.Query";
import * as _405 from "./core/channel/v1/query.rpc.Query";
import * as _406 from "./core/client/v1/query.rpc.Query";
import * as _407 from "./core/connection/v1/query.rpc.Query";
import * as _408 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _409 from "./applications/transfer/v1/tx.rpc.msg";
import * as _410 from "./core/channel/v1/tx.rpc.msg";
import * as _411 from "./core/client/v1/tx.rpc.msg";
import * as _412 from "./core/connection/v1/tx.rpc.msg";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._119,
          ..._120,
          ..._121,
          ..._386,
          ..._391,
          ..._396,
          ..._402,
          ..._408
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
          ..._397,
          ..._403
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
        ..._387,
        ..._392,
        ..._398,
        ..._404,
        ..._409
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
        ..._388,
        ..._393,
        ..._399,
        ..._405,
        ..._410
      };
    }
    export namespace client {
      export const v1 = {
        ..._138,
        ..._139,
        ..._140,
        ..._141,
        ..._389,
        ..._394,
        ..._400,
        ..._406,
        ..._411
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
        ..._390,
        ..._395,
        ..._401,
        ..._407,
        ..._412
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