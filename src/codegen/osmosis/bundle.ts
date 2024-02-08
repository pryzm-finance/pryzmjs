import * as _150 from "./epochs/v1beta1/genesis";
import * as _151 from "./epochs/v1beta1/query";
import * as _152 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _153 from "./tokenfactory/v1beta1/genesis";
import * as _154 from "./tokenfactory/v1beta1/params";
import * as _155 from "./tokenfactory/v1beta1/query";
import * as _156 from "./tokenfactory/v1beta1/tx";
import * as _405 from "./tokenfactory/v1beta1/tx.amino";
import * as _406 from "./tokenfactory/v1beta1/tx.registry";
import * as _407 from "./epochs/v1beta1/query.lcd";
import * as _408 from "./tokenfactory/v1beta1/query.lcd";
import * as _409 from "./epochs/v1beta1/query.rpc.Query";
import * as _410 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _411 from "./tokenfactory/v1beta1/tx.rpc.msg";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._150,
      ..._151,
      ..._407,
      ..._409
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._405,
      ..._406,
      ..._408,
      ..._410,
      ..._411
    };
  }
}