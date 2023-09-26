import * as _128 from "./applications/fee/v1/ack";
import * as _129 from "./applications/fee/v1/fee";
import * as _130 from "./applications/fee/v1/genesis";
import * as _131 from "./applications/fee/v1/metadata";
import * as _132 from "./applications/fee/v1/query";
import * as _133 from "./applications/fee/v1/tx";
import * as _134 from "./applications/interchain_accounts/controller/v1/controller";
import * as _135 from "./applications/interchain_accounts/controller/v1/query";
import * as _136 from "./applications/interchain_accounts/controller/v1/tx";
import * as _137 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _138 from "./applications/interchain_accounts/host/v1/host";
import * as _139 from "./applications/interchain_accounts/host/v1/query";
import * as _140 from "./applications/interchain_accounts/v1/account";
import * as _141 from "./applications/interchain_accounts/v1/metadata";
import * as _142 from "./applications/interchain_accounts/v1/packet";
import * as _143 from "./applications/transfer/v1/authz";
import * as _144 from "./applications/transfer/v1/genesis";
import * as _145 from "./applications/transfer/v1/query";
import * as _146 from "./applications/transfer/v1/transfer";
import * as _147 from "./applications/transfer/v1/tx";
import * as _148 from "./applications/transfer/v2/packet";
import * as _149 from "./core/channel/v1/channel";
import * as _150 from "./core/channel/v1/genesis";
import * as _151 from "./core/channel/v1/query";
import * as _152 from "./core/channel/v1/tx";
import * as _153 from "./core/client/v1/client";
import * as _154 from "./core/client/v1/genesis";
import * as _155 from "./core/client/v1/query";
import * as _156 from "./core/client/v1/tx";
import * as _157 from "./core/commitment/v1/commitment";
import * as _158 from "./core/connection/v1/connection";
import * as _159 from "./core/connection/v1/genesis";
import * as _160 from "./core/connection/v1/query";
import * as _161 from "./core/connection/v1/tx";
import * as _162 from "./core/types/v1/genesis";
import * as _163 from "./lightclients/solomachine/v2/solomachine";
import * as _164 from "./lightclients/solomachine/v3/solomachine";
import * as _165 from "./lightclients/tendermint/v1/tendermint";
import * as _378 from "./applications/fee/v1/tx.amino";
import * as _379 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _380 from "./applications/transfer/v1/tx.amino";
import * as _381 from "./core/channel/v1/tx.amino";
import * as _382 from "./core/client/v1/tx.amino";
import * as _383 from "./core/connection/v1/tx.amino";
import * as _384 from "./applications/fee/v1/tx.registry";
import * as _385 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _386 from "./applications/transfer/v1/tx.registry";
import * as _387 from "./core/channel/v1/tx.registry";
import * as _388 from "./core/client/v1/tx.registry";
import * as _389 from "./core/connection/v1/tx.registry";
import * as _390 from "./applications/fee/v1/query.lcd";
import * as _391 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _392 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _393 from "./applications/transfer/v1/query.lcd";
import * as _394 from "./core/channel/v1/query.lcd";
import * as _395 from "./core/client/v1/query.lcd";
import * as _396 from "./core/connection/v1/query.lcd";
import * as _397 from "./applications/fee/v1/query.rpc.Query";
import * as _398 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _399 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _400 from "./applications/transfer/v1/query.rpc.Query";
import * as _401 from "./core/channel/v1/query.rpc.Query";
import * as _402 from "./core/client/v1/query.rpc.Query";
import * as _403 from "./core/connection/v1/query.rpc.Query";
import * as _404 from "./applications/fee/v1/tx.rpc.msg";
import * as _405 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _406 from "./applications/transfer/v1/tx.rpc.msg";
import * as _407 from "./core/channel/v1/tx.rpc.msg";
import * as _408 from "./core/client/v1/tx.rpc.msg";
import * as _409 from "./core/connection/v1/tx.rpc.msg";
import * as _472 from "./lcd";
import * as _473 from "./rpc.query";
import * as _474 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._128,
        ..._129,
        ..._130,
        ..._131,
        ..._132,
        ..._133,
        ..._378,
        ..._384,
        ..._390,
        ..._397,
        ..._404
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._134,
          ..._135,
          ..._136,
          ..._379,
          ..._385,
          ..._391,
          ..._398,
          ..._405
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._137
        };
      }
      export namespace host {
        export const v1 = {
          ..._138,
          ..._139,
          ..._392,
          ..._399
        };
      }
      export const v1 = {
        ..._140,
        ..._141,
        ..._142
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._143,
        ..._144,
        ..._145,
        ..._146,
        ..._147,
        ..._380,
        ..._386,
        ..._393,
        ..._400,
        ..._406
      };
      export const v2 = {
        ..._148
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._149,
        ..._150,
        ..._151,
        ..._152,
        ..._381,
        ..._387,
        ..._394,
        ..._401,
        ..._407
      };
    }
    export namespace client {
      export const v1 = {
        ..._153,
        ..._154,
        ..._155,
        ..._156,
        ..._382,
        ..._388,
        ..._395,
        ..._402,
        ..._408
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._157
      };
    }
    export namespace connection {
      export const v1 = {
        ..._158,
        ..._159,
        ..._160,
        ..._161,
        ..._383,
        ..._389,
        ..._396,
        ..._403,
        ..._409
      };
    }
    export namespace types {
      export const v1 = {
        ..._162
      };
    }
  }
  export namespace lightclients {
    export namespace solomachine {
      export const v2 = {
        ..._163
      };
      export const v3 = {
        ..._164
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._165
      };
    }
  }
  export const ClientFactory = {
    ..._472,
    ..._473,
    ..._474
  };
}