import * as _166 from "./epochs/v1beta1/genesis";
import * as _167 from "./epochs/v1beta1/query";
import * as _168 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _169 from "./tokenfactory/v1beta1/genesis";
import * as _170 from "./tokenfactory/v1beta1/params";
import * as _171 from "./tokenfactory/v1beta1/query";
import * as _172 from "./tokenfactory/v1beta1/tx";
import * as _423 from "./tokenfactory/v1beta1/tx.amino";
import * as _424 from "./tokenfactory/v1beta1/tx.registry";
import * as _425 from "./epochs/v1beta1/query.lcd";
import * as _426 from "./tokenfactory/v1beta1/query.lcd";
import * as _427 from "./epochs/v1beta1/query.rpc.Query";
import * as _428 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _429 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _488 from "./lcd";
import * as _489 from "./rpc.query";
import * as _490 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._166,
      ..._167,
      ..._425,
      ..._427
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._172,
      ..._423,
      ..._424,
      ..._426,
      ..._428,
      ..._429
    };
  }
  export const ClientFactory = {
    ..._488,
    ..._489,
    ..._490
  };
}