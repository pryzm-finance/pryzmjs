import * as _166 from "./epochs/v1beta1/genesis";
import * as _167 from "./epochs/v1beta1/query";
import * as _168 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _169 from "./tokenfactory/v1beta1/genesis";
import * as _170 from "./tokenfactory/v1beta1/params";
import * as _171 from "./tokenfactory/v1beta1/query";
import * as _172 from "./tokenfactory/v1beta1/tx";
import * as _426 from "./tokenfactory/v1beta1/tx.amino";
import * as _427 from "./tokenfactory/v1beta1/tx.registry";
import * as _428 from "./epochs/v1beta1/query.lcd";
import * as _429 from "./tokenfactory/v1beta1/query.lcd";
import * as _430 from "./epochs/v1beta1/query.rpc.Query";
import * as _431 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _432 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _491 from "./lcd";
import * as _492 from "./rpc.query";
import * as _493 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._166,
      ..._167,
      ..._428,
      ..._430
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._172,
      ..._426,
      ..._427,
      ..._429,
      ..._431,
      ..._432
    };
  }
  export const ClientFactory = {
    ..._491,
    ..._492,
    ..._493
  };
}