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
import * as _391 from "./applications/fee/v1/tx.amino";
import * as _392 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _393 from "./applications/transfer/v1/tx.amino";
import * as _394 from "./core/channel/v1/tx.amino";
import * as _395 from "./core/client/v1/tx.amino";
import * as _396 from "./core/connection/v1/tx.amino";
import * as _397 from "./applications/fee/v1/tx.registry";
import * as _398 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _399 from "./applications/transfer/v1/tx.registry";
import * as _400 from "./core/channel/v1/tx.registry";
import * as _401 from "./core/client/v1/tx.registry";
import * as _402 from "./core/connection/v1/tx.registry";
import * as _403 from "./applications/fee/v1/query.lcd";
import * as _404 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _405 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _406 from "./applications/transfer/v1/query.lcd";
import * as _407 from "./core/channel/v1/query.lcd";
import * as _408 from "./core/client/v1/query.lcd";
import * as _409 from "./core/connection/v1/query.lcd";
import * as _410 from "./applications/fee/v1/query.rpc.Query";
import * as _411 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _412 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _413 from "./applications/transfer/v1/query.rpc.Query";
import * as _414 from "./core/channel/v1/query.rpc.Query";
import * as _415 from "./core/client/v1/query.rpc.Query";
import * as _416 from "./core/connection/v1/query.rpc.Query";
import * as _417 from "./applications/fee/v1/tx.rpc.msg";
import * as _418 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _419 from "./applications/transfer/v1/tx.rpc.msg";
import * as _420 from "./core/channel/v1/tx.rpc.msg";
import * as _421 from "./core/client/v1/tx.rpc.msg";
import * as _422 from "./core/connection/v1/tx.rpc.msg";
import * as _485 from "./lcd";
import * as _486 from "./rpc.query";
import * as _487 from "./rpc.tx";
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
        ..._391,
        ..._397,
        ..._403,
        ..._410,
        ..._417
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._134,
          ..._135,
          ..._136,
          ..._392,
          ..._398,
          ..._404,
          ..._411,
          ..._418
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
          ..._405,
          ..._412
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
        ..._393,
        ..._399,
        ..._406,
        ..._413,
        ..._419
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
        ..._394,
        ..._400,
        ..._407,
        ..._414,
        ..._420
      };
    }
    export namespace client {
      export const v1 = {
        ..._153,
        ..._154,
        ..._155,
        ..._156,
        ..._395,
        ..._401,
        ..._408,
        ..._415,
        ..._421
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
        ..._396,
        ..._402,
        ..._409,
        ..._416,
        ..._422
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
    ..._485,
    ..._486,
    ..._487
  };
}