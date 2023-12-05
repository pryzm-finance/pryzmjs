import * as _148 from "./applications/fee/v1/ack";
import * as _149 from "./applications/fee/v1/fee";
import * as _150 from "./applications/fee/v1/genesis";
import * as _151 from "./applications/fee/v1/metadata";
import * as _152 from "./applications/fee/v1/query";
import * as _153 from "./applications/fee/v1/tx";
import * as _154 from "./applications/interchain_accounts/controller/v1/controller";
import * as _155 from "./applications/interchain_accounts/controller/v1/query";
import * as _156 from "./applications/interchain_accounts/controller/v1/tx";
import * as _157 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _158 from "./applications/interchain_accounts/host/v1/host";
import * as _159 from "./applications/interchain_accounts/host/v1/query";
import * as _160 from "./applications/interchain_accounts/v1/account";
import * as _161 from "./applications/interchain_accounts/v1/metadata";
import * as _162 from "./applications/interchain_accounts/v1/packet";
import * as _163 from "./applications/transfer/v1/authz";
import * as _164 from "./applications/transfer/v1/genesis";
import * as _165 from "./applications/transfer/v1/query";
import * as _166 from "./applications/transfer/v1/transfer";
import * as _167 from "./applications/transfer/v1/tx";
import * as _168 from "./applications/transfer/v2/packet";
import * as _169 from "./core/channel/v1/channel";
import * as _170 from "./core/channel/v1/genesis";
import * as _171 from "./core/channel/v1/query";
import * as _172 from "./core/channel/v1/tx";
import * as _173 from "./core/client/v1/client";
import * as _174 from "./core/client/v1/genesis";
import * as _175 from "./core/client/v1/query";
import * as _176 from "./core/client/v1/tx";
import * as _177 from "./core/commitment/v1/commitment";
import * as _178 from "./core/connection/v1/connection";
import * as _179 from "./core/connection/v1/genesis";
import * as _180 from "./core/connection/v1/query";
import * as _181 from "./core/connection/v1/tx";
import * as _182 from "./core/types/v1/genesis";
import * as _183 from "./lightclients/localhost/v2/localhost";
import * as _184 from "./lightclients/solomachine/v2/solomachine";
import * as _185 from "./lightclients/solomachine/v3/solomachine";
import * as _186 from "./lightclients/tendermint/v1/tendermint";
import * as _431 from "./applications/fee/v1/tx.amino";
import * as _432 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _433 from "./applications/transfer/v1/tx.amino";
import * as _434 from "./core/channel/v1/tx.amino";
import * as _435 from "./core/client/v1/tx.amino";
import * as _436 from "./core/connection/v1/tx.amino";
import * as _437 from "./applications/fee/v1/tx.registry";
import * as _438 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _439 from "./applications/transfer/v1/tx.registry";
import * as _440 from "./core/channel/v1/tx.registry";
import * as _441 from "./core/client/v1/tx.registry";
import * as _442 from "./core/connection/v1/tx.registry";
import * as _443 from "./applications/fee/v1/query.lcd";
import * as _444 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _445 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _446 from "./applications/transfer/v1/query.lcd";
import * as _447 from "./core/channel/v1/query.lcd";
import * as _448 from "./core/client/v1/query.lcd";
import * as _449 from "./core/connection/v1/query.lcd";
import * as _450 from "./applications/fee/v1/query.rpc.Query";
import * as _451 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _452 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _453 from "./applications/transfer/v1/query.rpc.Query";
import * as _454 from "./core/channel/v1/query.rpc.Query";
import * as _455 from "./core/client/v1/query.rpc.Query";
import * as _456 from "./core/connection/v1/query.rpc.Query";
import * as _457 from "./applications/fee/v1/tx.rpc.msg";
import * as _458 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _459 from "./applications/transfer/v1/tx.rpc.msg";
import * as _460 from "./core/channel/v1/tx.rpc.msg";
import * as _461 from "./core/client/v1/tx.rpc.msg";
import * as _462 from "./core/connection/v1/tx.rpc.msg";
import * as _525 from "./lcd";
import * as _526 from "./rpc.query";
import * as _527 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._148,
        ..._149,
        ..._150,
        ..._151,
        ..._152,
        ..._153,
        ..._431,
        ..._437,
        ..._443,
        ..._450,
        ..._457
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._154,
          ..._155,
          ..._156,
          ..._432,
          ..._438,
          ..._444,
          ..._451,
          ..._458
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._157
        };
      }
      export namespace host {
        export const v1 = {
          ..._158,
          ..._159,
          ..._445,
          ..._452
        };
      }
      export const v1 = {
        ..._160,
        ..._161,
        ..._162
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._163,
        ..._164,
        ..._165,
        ..._166,
        ..._167,
        ..._433,
        ..._439,
        ..._446,
        ..._453,
        ..._459
      };
      export const v2 = {
        ..._168
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._169,
        ..._170,
        ..._171,
        ..._172,
        ..._434,
        ..._440,
        ..._447,
        ..._454,
        ..._460
      };
    }
    export namespace client {
      export const v1 = {
        ..._173,
        ..._174,
        ..._175,
        ..._176,
        ..._435,
        ..._441,
        ..._448,
        ..._455,
        ..._461
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._177
      };
    }
    export namespace connection {
      export const v1 = {
        ..._178,
        ..._179,
        ..._180,
        ..._181,
        ..._436,
        ..._442,
        ..._449,
        ..._456,
        ..._462
      };
    }
    export namespace types {
      export const v1 = {
        ..._182
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._183
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._184
      };
      export const v3 = {
        ..._185
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._186
      };
    }
  }
  export const ClientFactory = {
    ..._525,
    ..._526,
    ..._527
  };
}