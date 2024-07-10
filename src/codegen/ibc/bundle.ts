import * as _121 from "./applications/interchain_accounts/controller/v1/controller";
import * as _122 from "./applications/interchain_accounts/controller/v1/query";
import * as _123 from "./applications/interchain_accounts/controller/v1/tx";
import * as _124 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _125 from "./applications/interchain_accounts/host/v1/host";
import * as _126 from "./applications/interchain_accounts/host/v1/query";
import * as _127 from "./applications/interchain_accounts/v1/account";
import * as _128 from "./applications/interchain_accounts/v1/metadata";
import * as _129 from "./applications/interchain_accounts/v1/packet";
import * as _130 from "./applications/transfer/v1/authz";
import * as _131 from "./applications/transfer/v1/genesis";
import * as _132 from "./applications/transfer/v1/query";
import * as _133 from "./applications/transfer/v1/transfer";
import * as _134 from "./applications/transfer/v1/tx";
import * as _135 from "./applications/transfer/v2/packet";
import * as _136 from "./core/channel/v1/channel";
import * as _137 from "./core/channel/v1/genesis";
import * as _138 from "./core/channel/v1/query";
import * as _139 from "./core/channel/v1/tx";
import * as _140 from "./core/client/v1/client";
import * as _141 from "./core/client/v1/genesis";
import * as _142 from "./core/client/v1/query";
import * as _143 from "./core/client/v1/tx";
import * as _144 from "./core/commitment/v1/commitment";
import * as _145 from "./core/connection/v1/connection";
import * as _146 from "./core/connection/v1/genesis";
import * as _147 from "./core/connection/v1/query";
import * as _148 from "./core/connection/v1/tx";
import * as _149 from "./lightclients/localhost/v2/localhost";
import * as _150 from "./lightclients/solomachine/v2/solomachine";
import * as _151 from "./lightclients/solomachine/v3/solomachine";
import * as _152 from "./lightclients/tendermint/v1/tendermint";
import * as _346 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _347 from "./applications/transfer/v1/tx.amino";
import * as _348 from "./core/channel/v1/tx.amino";
import * as _349 from "./core/client/v1/tx.amino";
import * as _350 from "./core/connection/v1/tx.amino";
import * as _351 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _352 from "./applications/transfer/v1/tx.registry";
import * as _353 from "./core/channel/v1/tx.registry";
import * as _354 from "./core/client/v1/tx.registry";
import * as _355 from "./core/connection/v1/tx.registry";
import * as _356 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _357 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _358 from "./applications/transfer/v1/query.lcd";
import * as _359 from "./core/channel/v1/query.lcd";
import * as _360 from "./core/client/v1/query.lcd";
import * as _361 from "./core/connection/v1/query.lcd";
import * as _362 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _363 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _364 from "./applications/transfer/v1/query.rpc.Query";
import * as _365 from "./core/channel/v1/query.rpc.Query";
import * as _366 from "./core/client/v1/query.rpc.Query";
import * as _367 from "./core/connection/v1/query.rpc.Query";
import * as _368 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _369 from "./applications/transfer/v1/tx.rpc.msg";
import * as _370 from "./core/channel/v1/tx.rpc.msg";
import * as _371 from "./core/client/v1/tx.rpc.msg";
import * as _372 from "./core/connection/v1/tx.rpc.msg";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._121,
          ..._122,
          ..._123,
          ..._346,
          ..._351,
          ..._356,
          ..._362,
          ..._368
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._124
        };
      }
      export namespace host {
        export const v1 = {
          ..._125,
          ..._126,
          ..._357,
          ..._363
        };
      }
      export const v1 = {
        ..._127,
        ..._128,
        ..._129
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._130,
        ..._131,
        ..._132,
        ..._133,
        ..._134,
        ..._347,
        ..._352,
        ..._358,
        ..._364,
        ..._369
      };
      export const v2 = {
        ..._135
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._136,
        ..._137,
        ..._138,
        ..._139,
        ..._348,
        ..._353,
        ..._359,
        ..._365,
        ..._370
      };
    }
    export namespace client {
      export const v1 = {
        ..._140,
        ..._141,
        ..._142,
        ..._143,
        ..._349,
        ..._354,
        ..._360,
        ..._366,
        ..._371
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._144
      };
    }
    export namespace connection {
      export const v1 = {
        ..._145,
        ..._146,
        ..._147,
        ..._148,
        ..._350,
        ..._355,
        ..._361,
        ..._367,
        ..._372
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._149
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._150
      };
      export const v3 = {
        ..._151
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._152
      };
    }
  }
}