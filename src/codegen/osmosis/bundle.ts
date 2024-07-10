import * as _153 from "./epochs/v1beta1/genesis";
import * as _154 from "./epochs/v1beta1/query";
import * as _155 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _156 from "./tokenfactory/v1beta1/genesis";
import * as _157 from "./tokenfactory/v1beta1/params";
import * as _158 from "./tokenfactory/v1beta1/query";
import * as _159 from "./tokenfactory/v1beta1/tx";
import * as _373 from "./tokenfactory/v1beta1/tx.amino";
import * as _374 from "./tokenfactory/v1beta1/tx.registry";
import * as _375 from "./epochs/v1beta1/query.lcd";
import * as _376 from "./tokenfactory/v1beta1/query.lcd";
import * as _377 from "./epochs/v1beta1/query.rpc.Query";
import * as _378 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _379 from "./tokenfactory/v1beta1/tx.rpc.msg";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._153,
      ..._154,
      ..._375,
      ..._377
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._373,
      ..._374,
      ..._376,
      ..._378,
      ..._379
    };
  }
}