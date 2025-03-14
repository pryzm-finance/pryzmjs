import * as _154 from "./epochs/v1beta1/genesis";
import * as _155 from "./epochs/v1beta1/query";
import * as _156 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _157 from "./tokenfactory/v1beta1/genesis";
import * as _158 from "./tokenfactory/v1beta1/params";
import * as _159 from "./tokenfactory/v1beta1/query";
import * as _160 from "./tokenfactory/v1beta1/tx";
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
      ..._154,
      ..._155,
      ..._382,
      ..._384
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._380,
      ..._381,
      ..._383,
      ..._385,
      ..._386
    };
  }
}