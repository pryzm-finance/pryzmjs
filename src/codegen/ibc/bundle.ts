import * as _116 from "./applications/fee/v1/ack";
import * as _117 from "./applications/fee/v1/fee";
import * as _118 from "./applications/fee/v1/genesis";
import * as _119 from "./applications/fee/v1/metadata";
import * as _120 from "./applications/fee/v1/query";
import * as _121 from "./applications/fee/v1/tx";
import * as _122 from "./applications/interchain_accounts/controller/v1/controller";
import * as _123 from "./applications/interchain_accounts/controller/v1/query";
import * as _124 from "./applications/interchain_accounts/controller/v1/tx";
import * as _125 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _126 from "./applications/interchain_accounts/host/v1/host";
import * as _127 from "./applications/interchain_accounts/host/v1/query";
import * as _128 from "./applications/interchain_accounts/v1/account";
import * as _129 from "./applications/interchain_accounts/v1/metadata";
import * as _130 from "./applications/interchain_accounts/v1/packet";
import * as _131 from "./applications/transfer/v1/authz";
import * as _132 from "./applications/transfer/v1/genesis";
import * as _133 from "./applications/transfer/v1/query";
import * as _134 from "./applications/transfer/v1/transfer";
import * as _135 from "./applications/transfer/v1/tx";
import * as _136 from "./applications/transfer/v2/packet";
import * as _137 from "./core/channel/v1/channel";
import * as _138 from "./core/channel/v1/genesis";
import * as _139 from "./core/channel/v1/query";
import * as _140 from "./core/channel/v1/tx";
import * as _141 from "./core/client/v1/client";
import * as _142 from "./core/client/v1/genesis";
import * as _143 from "./core/client/v1/query";
import * as _144 from "./core/client/v1/tx";
import * as _145 from "./core/commitment/v1/commitment";
import * as _146 from "./core/connection/v1/connection";
import * as _147 from "./core/connection/v1/genesis";
import * as _148 from "./core/connection/v1/query";
import * as _149 from "./core/connection/v1/tx";
import * as _150 from "./core/types/v1/genesis";
import * as _151 from "./lightclients/solomachine/v2/solomachine";
import * as _152 from "./lightclients/solomachine/v3/solomachine";
import * as _153 from "./lightclients/tendermint/v1/tendermint";
import * as _346 from "./applications/fee/v1/tx.amino";
import * as _347 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _348 from "./applications/transfer/v1/tx.amino";
import * as _349 from "./core/channel/v1/tx.amino";
import * as _350 from "./core/client/v1/tx.amino";
import * as _351 from "./core/connection/v1/tx.amino";
import * as _352 from "./applications/fee/v1/tx.registry";
import * as _353 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _354 from "./applications/transfer/v1/tx.registry";
import * as _355 from "./core/channel/v1/tx.registry";
import * as _356 from "./core/client/v1/tx.registry";
import * as _357 from "./core/connection/v1/tx.registry";
import * as _358 from "./applications/fee/v1/query.lcd";
import * as _359 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _360 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _361 from "./applications/transfer/v1/query.lcd";
import * as _362 from "./core/channel/v1/query.lcd";
import * as _363 from "./core/client/v1/query.lcd";
import * as _364 from "./core/connection/v1/query.lcd";
import * as _365 from "./applications/fee/v1/query.rpc.Query";
import * as _366 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _367 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _368 from "./applications/transfer/v1/query.rpc.Query";
import * as _369 from "./core/channel/v1/query.rpc.Query";
import * as _370 from "./core/client/v1/query.rpc.Query";
import * as _371 from "./core/connection/v1/query.rpc.Query";
import * as _372 from "./applications/fee/v1/tx.rpc.msg";
import * as _373 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _374 from "./applications/transfer/v1/tx.rpc.msg";
import * as _375 from "./core/channel/v1/tx.rpc.msg";
import * as _376 from "./core/client/v1/tx.rpc.msg";
import * as _377 from "./core/connection/v1/tx.rpc.msg";
import * as _434 from "./lcd";
import * as _435 from "./rpc.query";
import * as _436 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._116,
        ..._117,
        ..._118,
        ..._119,
        ..._120,
        ..._121,
        ..._346,
        ..._352,
        ..._358,
        ..._365,
        ..._372
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._122,
          ..._123,
          ..._124,
          ..._347,
          ..._353,
          ..._359,
          ..._366,
          ..._373
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._125
        };
      }
      export namespace host {
        export const v1 = {
          ..._126,
          ..._127,
          ..._360,
          ..._367
        };
      }
      export const v1 = {
        ..._128,
        ..._129,
        ..._130
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._131,
        ..._132,
        ..._133,
        ..._134,
        ..._135,
        ..._348,
        ..._354,
        ..._361,
        ..._368,
        ..._374
      };
      export const v2 = {
        ..._136
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._137,
        ..._138,
        ..._139,
        ..._140,
        ..._349,
        ..._355,
        ..._362,
        ..._369,
        ..._375
      };
    }
    export namespace client {
      export const v1 = {
        ..._141,
        ..._142,
        ..._143,
        ..._144,
        ..._350,
        ..._356,
        ..._363,
        ..._370,
        ..._376
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._145
      };
    }
    export namespace connection {
      export const v1 = {
        ..._146,
        ..._147,
        ..._148,
        ..._149,
        ..._351,
        ..._357,
        ..._364,
        ..._371,
        ..._377
      };
    }
    export namespace types {
      export const v1 = {
        ..._150
      };
    }
  }
  export namespace lightclients {
    export namespace solomachine {
      export const v2 = {
        ..._151
      };
      export const v3 = {
        ..._152
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._153
      };
    }
  }
  export const ClientFactory = {
    ..._434,
    ..._435,
    ..._436
  };
}