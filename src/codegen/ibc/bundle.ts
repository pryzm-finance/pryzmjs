import * as _116 from "./applications/interchain_accounts/controller/v1/controller";
import * as _117 from "./applications/interchain_accounts/controller/v1/query";
import * as _118 from "./applications/interchain_accounts/controller/v1/tx";
import * as _119 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _120 from "./applications/interchain_accounts/host/v1/host";
import * as _121 from "./applications/interchain_accounts/host/v1/query";
import * as _122 from "./applications/interchain_accounts/v1/account";
import * as _123 from "./applications/interchain_accounts/v1/metadata";
import * as _124 from "./applications/interchain_accounts/v1/packet";
import * as _125 from "./applications/transfer/v1/authz";
import * as _126 from "./applications/transfer/v1/genesis";
import * as _127 from "./applications/transfer/v1/query";
import * as _128 from "./applications/transfer/v1/transfer";
import * as _129 from "./applications/transfer/v1/tx";
import * as _130 from "./applications/transfer/v2/packet";
import * as _131 from "./core/channel/v1/channel";
import * as _132 from "./core/channel/v1/genesis";
import * as _133 from "./core/channel/v1/query";
import * as _134 from "./core/channel/v1/tx";
import * as _135 from "./core/client/v1/client";
import * as _136 from "./core/client/v1/genesis";
import * as _137 from "./core/client/v1/query";
import * as _138 from "./core/client/v1/tx";
import * as _139 from "./core/commitment/v1/commitment";
import * as _140 from "./core/connection/v1/connection";
import * as _141 from "./core/connection/v1/genesis";
import * as _142 from "./core/connection/v1/query";
import * as _143 from "./core/connection/v1/tx";
import * as _144 from "./lightclients/localhost/v2/localhost";
import * as _145 from "./lightclients/solomachine/v2/solomachine";
import * as _146 from "./lightclients/solomachine/v3/solomachine";
import * as _147 from "./lightclients/tendermint/v1/tendermint";
import * as _375 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _376 from "./applications/transfer/v1/tx.amino";
import * as _377 from "./core/channel/v1/tx.amino";
import * as _378 from "./core/client/v1/tx.amino";
import * as _379 from "./core/connection/v1/tx.amino";
import * as _380 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _381 from "./applications/transfer/v1/tx.registry";
import * as _382 from "./core/channel/v1/tx.registry";
import * as _383 from "./core/client/v1/tx.registry";
import * as _384 from "./core/connection/v1/tx.registry";
import * as _385 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _386 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _387 from "./applications/transfer/v1/query.lcd";
import * as _388 from "./core/channel/v1/query.lcd";
import * as _389 from "./core/client/v1/query.lcd";
import * as _390 from "./core/connection/v1/query.lcd";
import * as _391 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _392 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _393 from "./applications/transfer/v1/query.rpc.Query";
import * as _394 from "./core/channel/v1/query.rpc.Query";
import * as _395 from "./core/client/v1/query.rpc.Query";
import * as _396 from "./core/connection/v1/query.rpc.Query";
import * as _397 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _398 from "./applications/transfer/v1/tx.rpc.msg";
import * as _399 from "./core/channel/v1/tx.rpc.msg";
import * as _400 from "./core/client/v1/tx.rpc.msg";
import * as _401 from "./core/connection/v1/tx.rpc.msg";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._116,
          ..._117,
          ..._118,
          ..._375,
          ..._380,
          ..._385,
          ..._391,
          ..._397
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._119
        };
      }
      export namespace host {
        export const v1 = {
          ..._120,
          ..._121,
          ..._386,
          ..._392
        };
      }
      export const v1 = {
        ..._122,
        ..._123,
        ..._124
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._125,
        ..._126,
        ..._127,
        ..._128,
        ..._129,
        ..._376,
        ..._381,
        ..._387,
        ..._393,
        ..._398
      };
      export const v2 = {
        ..._130
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._131,
        ..._132,
        ..._133,
        ..._134,
        ..._377,
        ..._382,
        ..._388,
        ..._394,
        ..._399
      };
    }
    export namespace client {
      export const v1 = {
        ..._135,
        ..._136,
        ..._137,
        ..._138,
        ..._378,
        ..._383,
        ..._389,
        ..._395,
        ..._400
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._139
      };
    }
    export namespace connection {
      export const v1 = {
        ..._140,
        ..._141,
        ..._142,
        ..._143,
        ..._379,
        ..._384,
        ..._390,
        ..._396,
        ..._401
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._144
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._145
      };
      export const v3 = {
        ..._146
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._147
      };
    }
  }
}