import * as _127 from "./applications/interchain_accounts/controller/v1/controller";
import * as _128 from "./applications/interchain_accounts/controller/v1/query";
import * as _129 from "./applications/interchain_accounts/controller/v1/tx";
import * as _130 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _131 from "./applications/interchain_accounts/host/v1/host";
import * as _132 from "./applications/interchain_accounts/host/v1/query";
import * as _133 from "./applications/interchain_accounts/v1/account";
import * as _134 from "./applications/interchain_accounts/v1/metadata";
import * as _135 from "./applications/interchain_accounts/v1/packet";
import * as _136 from "./applications/transfer/v1/authz";
import * as _137 from "./applications/transfer/v1/genesis";
import * as _138 from "./applications/transfer/v1/query";
import * as _139 from "./applications/transfer/v1/transfer";
import * as _140 from "./applications/transfer/v1/tx";
import * as _141 from "./applications/transfer/v2/packet";
import * as _142 from "./core/channel/v1/channel";
import * as _143 from "./core/channel/v1/genesis";
import * as _144 from "./core/channel/v1/query";
import * as _145 from "./core/channel/v1/tx";
import * as _146 from "./core/client/v1/client";
import * as _147 from "./core/client/v1/genesis";
import * as _148 from "./core/client/v1/query";
import * as _149 from "./core/client/v1/tx";
import * as _150 from "./core/commitment/v1/commitment";
import * as _151 from "./core/connection/v1/connection";
import * as _152 from "./core/connection/v1/genesis";
import * as _153 from "./core/connection/v1/query";
import * as _154 from "./core/connection/v1/tx";
import * as _155 from "./lightclients/localhost/v2/localhost";
import * as _156 from "./lightclients/solomachine/v2/solomachine";
import * as _157 from "./lightclients/solomachine/v3/solomachine";
import * as _158 from "./lightclients/tendermint/v1/tendermint";
import * as _410 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _411 from "./applications/transfer/v1/tx.amino";
import * as _412 from "./core/channel/v1/tx.amino";
import * as _413 from "./core/client/v1/tx.amino";
import * as _414 from "./core/connection/v1/tx.amino";
import * as _415 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _416 from "./applications/transfer/v1/tx.registry";
import * as _417 from "./core/channel/v1/tx.registry";
import * as _418 from "./core/client/v1/tx.registry";
import * as _419 from "./core/connection/v1/tx.registry";
import * as _420 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _421 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _422 from "./applications/transfer/v1/query.lcd";
import * as _423 from "./core/channel/v1/query.lcd";
import * as _424 from "./core/client/v1/query.lcd";
import * as _425 from "./core/connection/v1/query.lcd";
import * as _426 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _427 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _428 from "./applications/transfer/v1/query.rpc.Query";
import * as _429 from "./core/channel/v1/query.rpc.Query";
import * as _430 from "./core/client/v1/query.rpc.Query";
import * as _431 from "./core/connection/v1/query.rpc.Query";
import * as _432 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _433 from "./applications/transfer/v1/tx.rpc.msg";
import * as _434 from "./core/channel/v1/tx.rpc.msg";
import * as _435 from "./core/client/v1/tx.rpc.msg";
import * as _436 from "./core/connection/v1/tx.rpc.msg";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._127,
          ..._128,
          ..._129,
          ..._410,
          ..._415,
          ..._420,
          ..._426,
          ..._432
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._130
        };
      }
      export namespace host {
        export const v1 = {
          ..._131,
          ..._132,
          ..._421,
          ..._427
        };
      }
      export const v1 = {
        ..._133,
        ..._134,
        ..._135
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._136,
        ..._137,
        ..._138,
        ..._139,
        ..._140,
        ..._411,
        ..._416,
        ..._422,
        ..._428,
        ..._433
      };
      export const v2 = {
        ..._141
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._142,
        ..._143,
        ..._144,
        ..._145,
        ..._412,
        ..._417,
        ..._423,
        ..._429,
        ..._434
      };
    }
    export namespace client {
      export const v1 = {
        ..._146,
        ..._147,
        ..._148,
        ..._149,
        ..._413,
        ..._418,
        ..._424,
        ..._430,
        ..._435
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._150
      };
    }
    export namespace connection {
      export const v1 = {
        ..._151,
        ..._152,
        ..._153,
        ..._154,
        ..._414,
        ..._419,
        ..._425,
        ..._431,
        ..._436
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._155
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._156
      };
      export const v3 = {
        ..._157
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._158
      };
    }
  }
}