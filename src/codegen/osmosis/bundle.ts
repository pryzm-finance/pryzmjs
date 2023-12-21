import * as _128 from "./epochs/v1beta1/genesis";
import * as _129 from "./epochs/v1beta1/query";
import * as _130 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _131 from "./tokenfactory/v1beta1/genesis";
import * as _132 from "./tokenfactory/v1beta1/params";
import * as _133 from "./tokenfactory/v1beta1/query";
import * as _134 from "./tokenfactory/v1beta1/tx";
import * as _380 from "./tokenfactory/v1beta1/tx.amino";
import * as _381 from "./tokenfactory/v1beta1/tx.registry";
import * as _382 from "./epochs/v1beta1/query.lcd";
import * as _383 from "./tokenfactory/v1beta1/query.lcd";
import * as _384 from "./epochs/v1beta1/query.rpc.Query";
import * as _385 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _386 from "./tokenfactory/v1beta1/tx.rpc.msg";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._128,
      ..._129,
      ..._382,
      ..._384
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._380,
      ..._381,
      ..._383,
      ..._385,
      ..._386
    };
  }
}