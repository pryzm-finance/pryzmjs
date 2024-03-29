import * as _125 from "./applications/interchain_accounts/controller/v1/controller";
import * as _126 from "./applications/interchain_accounts/controller/v1/query";
import * as _127 from "./applications/interchain_accounts/controller/v1/tx";
import * as _128 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _129 from "./applications/interchain_accounts/host/v1/host";
import * as _130 from "./applications/interchain_accounts/host/v1/query";
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
import * as _397 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _398 from "./applications/transfer/v1/tx.amino";
import * as _399 from "./core/channel/v1/tx.amino";
import * as _400 from "./core/client/v1/tx.amino";
import * as _401 from "./core/connection/v1/tx.amino";
import * as _402 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _403 from "./applications/transfer/v1/tx.registry";
import * as _404 from "./core/channel/v1/tx.registry";
import * as _405 from "./core/client/v1/tx.registry";
import * as _406 from "./core/connection/v1/tx.registry";
import * as _407 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _408 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _409 from "./applications/transfer/v1/query.lcd";
import * as _410 from "./core/channel/v1/query.lcd";
import * as _411 from "./core/client/v1/query.lcd";
import * as _412 from "./core/connection/v1/query.lcd";
import * as _413 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _414 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _415 from "./applications/transfer/v1/query.rpc.Query";
import * as _416 from "./core/channel/v1/query.rpc.Query";
import * as _417 from "./core/client/v1/query.rpc.Query";
import * as _418 from "./core/connection/v1/query.rpc.Query";
import * as _419 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _420 from "./applications/transfer/v1/tx.rpc.msg";
import * as _421 from "./core/channel/v1/tx.rpc.msg";
import * as _422 from "./core/client/v1/tx.rpc.msg";
import * as _423 from "./core/connection/v1/tx.rpc.msg";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._125,
          ..._126,
          ..._127,
          ..._397,
          ..._402,
          ..._407,
          ..._413,
          ..._419
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._128
        };
      }
      export namespace host {
        export const v1 = {
          ..._129,
          ..._130,
          ..._408,
          ..._414
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
        ..._398,
        ..._403,
        ..._409,
        ..._415,
        ..._420
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
        ..._399,
        ..._404,
        ..._410,
        ..._416,
        ..._421
      };
    }
    export namespace client {
      export const v1 = {
        ..._144,
        ..._145,
        ..._146,
        ..._147,
        ..._400,
        ..._405,
        ..._411,
        ..._417,
        ..._422
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
        ..._401,
        ..._406,
        ..._412,
        ..._418,
        ..._423
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