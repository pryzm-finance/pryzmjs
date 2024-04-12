import * as _126 from "./applications/interchain_accounts/controller/v1/controller";
import * as _127 from "./applications/interchain_accounts/controller/v1/query";
import * as _128 from "./applications/interchain_accounts/controller/v1/tx";
import * as _129 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _130 from "./applications/interchain_accounts/host/v1/host";
import * as _131 from "./applications/interchain_accounts/host/v1/query";
import * as _132 from "./applications/interchain_accounts/v1/account";
import * as _133 from "./applications/interchain_accounts/v1/metadata";
import * as _134 from "./applications/interchain_accounts/v1/packet";
import * as _135 from "./applications/transfer/v1/authz";
import * as _136 from "./applications/transfer/v1/genesis";
import * as _137 from "./applications/transfer/v1/query";
import * as _138 from "./applications/transfer/v1/transfer";
import * as _139 from "./applications/transfer/v1/tx";
import * as _140 from "./applications/transfer/v2/packet";
import * as _141 from "./core/channel/v1/channel";
import * as _142 from "./core/channel/v1/genesis";
import * as _143 from "./core/channel/v1/query";
import * as _144 from "./core/channel/v1/tx";
import * as _145 from "./core/client/v1/client";
import * as _146 from "./core/client/v1/genesis";
import * as _147 from "./core/client/v1/query";
import * as _148 from "./core/client/v1/tx";
import * as _149 from "./core/commitment/v1/commitment";
import * as _150 from "./core/connection/v1/connection";
import * as _151 from "./core/connection/v1/genesis";
import * as _152 from "./core/connection/v1/query";
import * as _153 from "./core/connection/v1/tx";
import * as _154 from "./lightclients/localhost/v2/localhost";
import * as _155 from "./lightclients/solomachine/v2/solomachine";
import * as _156 from "./lightclients/solomachine/v3/solomachine";
import * as _157 from "./lightclients/tendermint/v1/tendermint";
import * as _400 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _401 from "./applications/transfer/v1/tx.amino";
import * as _402 from "./core/channel/v1/tx.amino";
import * as _403 from "./core/client/v1/tx.amino";
import * as _404 from "./core/connection/v1/tx.amino";
import * as _405 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _406 from "./applications/transfer/v1/tx.registry";
import * as _407 from "./core/channel/v1/tx.registry";
import * as _408 from "./core/client/v1/tx.registry";
import * as _409 from "./core/connection/v1/tx.registry";
import * as _410 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _411 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _412 from "./applications/transfer/v1/query.lcd";
import * as _413 from "./core/channel/v1/query.lcd";
import * as _414 from "./core/client/v1/query.lcd";
import * as _415 from "./core/connection/v1/query.lcd";
import * as _416 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _417 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _418 from "./applications/transfer/v1/query.rpc.Query";
import * as _419 from "./core/channel/v1/query.rpc.Query";
import * as _420 from "./core/client/v1/query.rpc.Query";
import * as _421 from "./core/connection/v1/query.rpc.Query";
import * as _422 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _423 from "./applications/transfer/v1/tx.rpc.msg";
import * as _424 from "./core/channel/v1/tx.rpc.msg";
import * as _425 from "./core/client/v1/tx.rpc.msg";
import * as _426 from "./core/connection/v1/tx.rpc.msg";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._126,
          ..._127,
          ..._128,
          ..._400,
          ..._405,
          ..._410,
          ..._416,
          ..._422
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._129
        };
      }
      export namespace host {
        export const v1 = {
          ..._130,
          ..._131,
          ..._411,
          ..._417
        };
      }
      export const v1 = {
        ..._132,
        ..._133,
        ..._134
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._135,
        ..._136,
        ..._137,
        ..._138,
        ..._139,
        ..._401,
        ..._406,
        ..._412,
        ..._418,
        ..._423
      };
      export const v2 = {
        ..._140
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._141,
        ..._142,
        ..._143,
        ..._144,
        ..._402,
        ..._407,
        ..._413,
        ..._419,
        ..._424
      };
    }
    export namespace client {
      export const v1 = {
        ..._145,
        ..._146,
        ..._147,
        ..._148,
        ..._403,
        ..._408,
        ..._414,
        ..._420,
        ..._425
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._149
      };
    }
    export namespace connection {
      export const v1 = {
        ..._150,
        ..._151,
        ..._152,
        ..._153,
        ..._404,
        ..._409,
        ..._415,
        ..._421,
        ..._426
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._154
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._155
      };
      export const v3 = {
        ..._156
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._157
      };
    }
  }
}