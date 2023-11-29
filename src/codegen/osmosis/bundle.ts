import * as _166 from "./epochs/v1beta1/genesis";
import * as _167 from "./epochs/v1beta1/query";
import * as _168 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _169 from "./tokenfactory/v1beta1/genesis";
import * as _170 from "./tokenfactory/v1beta1/params";
import * as _171 from "./tokenfactory/v1beta1/query";
import * as _172 from "./tokenfactory/v1beta1/tx";
import * as _433 from "./tokenfactory/v1beta1/tx.amino";
import * as _434 from "./tokenfactory/v1beta1/tx.registry";
import * as _435 from "./epochs/v1beta1/query.lcd";
import * as _436 from "./tokenfactory/v1beta1/query.lcd";
import * as _437 from "./epochs/v1beta1/query.rpc.Query";
import * as _438 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _439 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _498 from "./lcd";
import * as _499 from "./rpc.query";
import * as _500 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._166,
      ..._167,
      ..._435,
      ..._437
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._172,
      ..._433,
      ..._434,
      ..._436,
      ..._438,
      ..._439
    };
  }
  export const ClientFactory = {
    ..._498,
    ..._499,
    ..._500
  };
}