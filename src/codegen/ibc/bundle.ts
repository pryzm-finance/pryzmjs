import * as _96 from "./applications/interchain_accounts/controller/v1/controller";
import * as _97 from "./applications/interchain_accounts/controller/v1/query";
import * as _98 from "./applications/interchain_accounts/controller/v1/tx";
import * as _99 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _100 from "./applications/interchain_accounts/host/v1/host";
import * as _101 from "./applications/interchain_accounts/host/v1/query";
import * as _102 from "./applications/interchain_accounts/v1/account";
import * as _103 from "./applications/interchain_accounts/v1/metadata";
import * as _104 from "./applications/interchain_accounts/v1/packet";
import * as _105 from "./applications/transfer/v1/authz";
import * as _106 from "./applications/transfer/v1/genesis";
import * as _107 from "./applications/transfer/v1/query";
import * as _108 from "./applications/transfer/v1/transfer";
import * as _109 from "./applications/transfer/v1/tx";
import * as _110 from "./applications/transfer/v2/packet";
import * as _111 from "./core/channel/v1/channel";
import * as _112 from "./core/channel/v1/genesis";
import * as _113 from "./core/channel/v1/query";
import * as _114 from "./core/channel/v1/tx";
import * as _115 from "./core/client/v1/client";
import * as _116 from "./core/client/v1/genesis";
import * as _117 from "./core/client/v1/query";
import * as _118 from "./core/client/v1/tx";
import * as _119 from "./core/commitment/v1/commitment";
import * as _120 from "./core/connection/v1/connection";
import * as _121 from "./core/connection/v1/genesis";
import * as _122 from "./core/connection/v1/query";
import * as _123 from "./core/connection/v1/tx";
import * as _124 from "./lightclients/localhost/v2/localhost";
import * as _125 from "./lightclients/solomachine/v2/solomachine";
import * as _126 from "./lightclients/solomachine/v3/solomachine";
import * as _127 from "./lightclients/tendermint/v1/tendermint";
import * as _353 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _354 from "./applications/transfer/v1/tx.amino";
import * as _355 from "./core/channel/v1/tx.amino";
import * as _356 from "./core/client/v1/tx.amino";
import * as _357 from "./core/connection/v1/tx.amino";
import * as _358 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _359 from "./applications/transfer/v1/tx.registry";
import * as _360 from "./core/channel/v1/tx.registry";
import * as _361 from "./core/client/v1/tx.registry";
import * as _362 from "./core/connection/v1/tx.registry";
import * as _363 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _364 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _365 from "./applications/transfer/v1/query.lcd";
import * as _366 from "./core/channel/v1/query.lcd";
import * as _367 from "./core/client/v1/query.lcd";
import * as _368 from "./core/connection/v1/query.lcd";
import * as _369 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _370 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _371 from "./applications/transfer/v1/query.rpc.Query";
import * as _372 from "./core/channel/v1/query.rpc.Query";
import * as _373 from "./core/client/v1/query.rpc.Query";
import * as _374 from "./core/connection/v1/query.rpc.Query";
import * as _375 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _376 from "./applications/transfer/v1/tx.rpc.msg";
import * as _377 from "./core/channel/v1/tx.rpc.msg";
import * as _378 from "./core/client/v1/tx.rpc.msg";
import * as _379 from "./core/connection/v1/tx.rpc.msg";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._96,
          ..._97,
          ..._98,
          ..._353,
          ..._358,
          ..._363,
          ..._369,
          ..._375
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._99
        };
      }
      export namespace host {
        export const v1 = {
          ..._100,
          ..._101,
          ..._364,
          ..._370
        };
      }
      export const v1 = {
        ..._102,
        ..._103,
        ..._104
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._105,
        ..._106,
        ..._107,
        ..._108,
        ..._109,
        ..._354,
        ..._359,
        ..._365,
        ..._371,
        ..._376
      };
      export const v2 = {
        ..._110
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._111,
        ..._112,
        ..._113,
        ..._114,
        ..._355,
        ..._360,
        ..._366,
        ..._372,
        ..._377
      };
    }
    export namespace client {
      export const v1 = {
        ..._115,
        ..._116,
        ..._117,
        ..._118,
        ..._356,
        ..._361,
        ..._367,
        ..._373,
        ..._378
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._119
      };
    }
    export namespace connection {
      export const v1 = {
        ..._120,
        ..._121,
        ..._122,
        ..._123,
        ..._357,
        ..._362,
        ..._368,
        ..._374,
        ..._379
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._124
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._125
      };
      export const v3 = {
        ..._126
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._127
      };
    }
  }
}