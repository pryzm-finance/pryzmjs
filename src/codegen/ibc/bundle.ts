import * as _149 from "./applications/fee/v1/ack";
import * as _150 from "./applications/fee/v1/fee";
import * as _151 from "./applications/fee/v1/genesis";
import * as _152 from "./applications/fee/v1/metadata";
import * as _153 from "./applications/fee/v1/query";
import * as _154 from "./applications/fee/v1/tx";
import * as _155 from "./applications/interchain_accounts/controller/v1/controller";
import * as _156 from "./applications/interchain_accounts/controller/v1/query";
import * as _157 from "./applications/interchain_accounts/controller/v1/tx";
import * as _158 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _159 from "./applications/interchain_accounts/host/v1/host";
import * as _160 from "./applications/interchain_accounts/host/v1/query";
import * as _161 from "./applications/interchain_accounts/v1/account";
import * as _162 from "./applications/interchain_accounts/v1/metadata";
import * as _163 from "./applications/interchain_accounts/v1/packet";
import * as _164 from "./applications/transfer/v1/authz";
import * as _165 from "./applications/transfer/v1/genesis";
import * as _166 from "./applications/transfer/v1/query";
import * as _167 from "./applications/transfer/v1/transfer";
import * as _168 from "./applications/transfer/v1/tx";
import * as _169 from "./applications/transfer/v2/packet";
import * as _170 from "./core/channel/v1/channel";
import * as _171 from "./core/channel/v1/genesis";
import * as _172 from "./core/channel/v1/query";
import * as _173 from "./core/channel/v1/tx";
import * as _174 from "./core/client/v1/client";
import * as _175 from "./core/client/v1/genesis";
import * as _176 from "./core/client/v1/query";
import * as _177 from "./core/client/v1/tx";
import * as _178 from "./core/commitment/v1/commitment";
import * as _179 from "./core/connection/v1/connection";
import * as _180 from "./core/connection/v1/genesis";
import * as _181 from "./core/connection/v1/query";
import * as _182 from "./core/connection/v1/tx";
import * as _183 from "./core/types/v1/genesis";
import * as _184 from "./lightclients/localhost/v2/localhost";
import * as _185 from "./lightclients/solomachine/v2/solomachine";
import * as _186 from "./lightclients/solomachine/v3/solomachine";
import * as _187 from "./lightclients/tendermint/v1/tendermint";
import * as _433 from "./applications/fee/v1/tx.amino";
import * as _434 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _435 from "./applications/transfer/v1/tx.amino";
import * as _436 from "./core/channel/v1/tx.amino";
import * as _437 from "./core/client/v1/tx.amino";
import * as _438 from "./core/connection/v1/tx.amino";
import * as _439 from "./applications/fee/v1/tx.registry";
import * as _440 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _441 from "./applications/transfer/v1/tx.registry";
import * as _442 from "./core/channel/v1/tx.registry";
import * as _443 from "./core/client/v1/tx.registry";
import * as _444 from "./core/connection/v1/tx.registry";
import * as _445 from "./applications/fee/v1/query.lcd";
import * as _446 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _447 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _448 from "./applications/transfer/v1/query.lcd";
import * as _449 from "./core/channel/v1/query.lcd";
import * as _450 from "./core/client/v1/query.lcd";
import * as _451 from "./core/connection/v1/query.lcd";
import * as _452 from "./applications/fee/v1/query.rpc.Query";
import * as _453 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _454 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _455 from "./applications/transfer/v1/query.rpc.Query";
import * as _456 from "./core/channel/v1/query.rpc.Query";
import * as _457 from "./core/client/v1/query.rpc.Query";
import * as _458 from "./core/connection/v1/query.rpc.Query";
import * as _459 from "./applications/fee/v1/tx.rpc.msg";
import * as _460 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _461 from "./applications/transfer/v1/tx.rpc.msg";
import * as _462 from "./core/channel/v1/tx.rpc.msg";
import * as _463 from "./core/client/v1/tx.rpc.msg";
import * as _464 from "./core/connection/v1/tx.rpc.msg";
import * as _527 from "./lcd";
import * as _528 from "./rpc.query";
import * as _529 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._149,
        ..._150,
        ..._151,
        ..._152,
        ..._153,
        ..._154,
        ..._433,
        ..._439,
        ..._445,
        ..._452,
        ..._459
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._155,
          ..._156,
          ..._157,
          ..._434,
          ..._440,
          ..._446,
          ..._453,
          ..._460
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._158
        };
      }
      export namespace host {
        export const v1 = {
          ..._159,
          ..._160,
          ..._447,
          ..._454
        };
      }
      export const v1 = {
        ..._161,
        ..._162,
        ..._163
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._164,
        ..._165,
        ..._166,
        ..._167,
        ..._168,
        ..._435,
        ..._441,
        ..._448,
        ..._455,
        ..._461
      };
      export const v2 = {
        ..._169
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._170,
        ..._171,
        ..._172,
        ..._173,
        ..._436,
        ..._442,
        ..._449,
        ..._456,
        ..._462
      };
    }
    export namespace client {
      export const v1 = {
        ..._174,
        ..._175,
        ..._176,
        ..._177,
        ..._437,
        ..._443,
        ..._450,
        ..._457,
        ..._463
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._178
      };
    }
    export namespace connection {
      export const v1 = {
        ..._179,
        ..._180,
        ..._181,
        ..._182,
        ..._438,
        ..._444,
        ..._451,
        ..._458,
        ..._464
      };
    }
    export namespace types {
      export const v1 = {
        ..._183
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._184
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._185
      };
      export const v3 = {
        ..._186
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._187
      };
    }
  }
  export const ClientFactory = {
    ..._527,
    ..._528,
    ..._529
  };
}