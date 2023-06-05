import * as _136 from "./applications/fee/v1/ack";
import * as _137 from "./applications/fee/v1/fee";
import * as _138 from "./applications/fee/v1/genesis";
import * as _139 from "./applications/fee/v1/metadata";
import * as _140 from "./applications/fee/v1/query";
import * as _141 from "./applications/fee/v1/tx";
import * as _142 from "./applications/interchain_accounts/controller/v1/controller";
import * as _143 from "./applications/interchain_accounts/controller/v1/query";
import * as _144 from "./applications/interchain_accounts/controller/v1/tx";
import * as _145 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _146 from "./applications/interchain_accounts/host/v1/host";
import * as _147 from "./applications/interchain_accounts/host/v1/query";
import * as _148 from "./applications/interchain_accounts/v1/account";
import * as _149 from "./applications/interchain_accounts/v1/metadata";
import * as _150 from "./applications/interchain_accounts/v1/packet";
import * as _151 from "./applications/transfer/v1/authz";
import * as _152 from "./applications/transfer/v1/genesis";
import * as _153 from "./applications/transfer/v1/query";
import * as _154 from "./applications/transfer/v1/transfer";
import * as _155 from "./applications/transfer/v1/tx";
import * as _156 from "./applications/transfer/v2/packet";
import * as _157 from "./core/channel/v1/channel";
import * as _158 from "./core/channel/v1/genesis";
import * as _159 from "./core/channel/v1/query";
import * as _160 from "./core/channel/v1/tx";
import * as _161 from "./core/client/v1/client";
import * as _162 from "./core/client/v1/genesis";
import * as _163 from "./core/client/v1/query";
import * as _164 from "./core/client/v1/tx";
import * as _165 from "./core/commitment/v1/commitment";
import * as _166 from "./core/connection/v1/connection";
import * as _167 from "./core/connection/v1/genesis";
import * as _168 from "./core/connection/v1/query";
import * as _169 from "./core/connection/v1/tx";
import * as _170 from "./core/types/v1/genesis";
import * as _171 from "./lightclients/solomachine/v2/solomachine";
import * as _172 from "./lightclients/solomachine/v3/solomachine";
import * as _173 from "./lightclients/tendermint/v1/tendermint";
import * as _363 from "./applications/fee/v1/tx.amino";
import * as _364 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _365 from "./applications/transfer/v1/tx.amino";
import * as _366 from "./core/channel/v1/tx.amino";
import * as _367 from "./core/client/v1/tx.amino";
import * as _368 from "./core/connection/v1/tx.amino";
import * as _369 from "./applications/fee/v1/tx.registry";
import * as _370 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _371 from "./applications/transfer/v1/tx.registry";
import * as _372 from "./core/channel/v1/tx.registry";
import * as _373 from "./core/client/v1/tx.registry";
import * as _374 from "./core/connection/v1/tx.registry";
import * as _375 from "./applications/fee/v1/query.lcd";
import * as _376 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _377 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _378 from "./applications/transfer/v1/query.lcd";
import * as _379 from "./core/channel/v1/query.lcd";
import * as _380 from "./core/client/v1/query.lcd";
import * as _381 from "./core/connection/v1/query.lcd";
import * as _382 from "./applications/fee/v1/query.rpc.Query";
import * as _383 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _384 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _385 from "./applications/transfer/v1/query.rpc.Query";
import * as _386 from "./core/channel/v1/query.rpc.Query";
import * as _387 from "./core/client/v1/query.rpc.Query";
import * as _388 from "./core/connection/v1/query.rpc.Query";
import * as _389 from "./applications/fee/v1/tx.rpc.msg";
import * as _390 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _391 from "./applications/transfer/v1/tx.rpc.msg";
import * as _392 from "./core/channel/v1/tx.rpc.msg";
import * as _393 from "./core/client/v1/tx.rpc.msg";
import * as _394 from "./core/connection/v1/tx.rpc.msg";
import * as _449 from "./lcd";
import * as _450 from "./rpc.query";
import * as _451 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._136,
        ..._137,
        ..._138,
        ..._139,
        ..._140,
        ..._141,
        ..._363,
        ..._369,
        ..._375,
        ..._382,
        ..._389
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._142,
          ..._143,
          ..._144,
          ..._364,
          ..._370,
          ..._376,
          ..._383,
          ..._390
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._145
        };
      }
      export namespace host {
        export const v1 = {
          ..._146,
          ..._147,
          ..._377,
          ..._384
        };
      }
      export const v1 = {
        ..._148,
        ..._149,
        ..._150
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._151,
        ..._152,
        ..._153,
        ..._154,
        ..._155,
        ..._365,
        ..._371,
        ..._378,
        ..._385,
        ..._391
      };
      export const v2 = {
        ..._156
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._157,
        ..._158,
        ..._159,
        ..._160,
        ..._366,
        ..._372,
        ..._379,
        ..._386,
        ..._392
      };
    }
    export namespace client {
      export const v1 = {
        ..._161,
        ..._162,
        ..._163,
        ..._164,
        ..._367,
        ..._373,
        ..._380,
        ..._387,
        ..._393
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._165
      };
    }
    export namespace connection {
      export const v1 = {
        ..._166,
        ..._167,
        ..._168,
        ..._169,
        ..._368,
        ..._374,
        ..._381,
        ..._388,
        ..._394
      };
    }
    export namespace types {
      export const v1 = {
        ..._170
      };
    }
  }
  export namespace lightclients {
    export namespace solomachine {
      export const v2 = {
        ..._171
      };
      export const v3 = {
        ..._172
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._173
      };
    }
  }
  export const ClientFactory = {
    ..._449,
    ..._450,
    ..._451
  };
}