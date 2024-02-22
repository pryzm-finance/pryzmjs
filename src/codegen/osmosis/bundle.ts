import * as _151 from "./epochs/v1beta1/genesis";
import * as _152 from "./epochs/v1beta1/query";
import * as _153 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _154 from "./tokenfactory/v1beta1/genesis";
import * as _155 from "./tokenfactory/v1beta1/params";
import * as _156 from "./tokenfactory/v1beta1/query";
import * as _157 from "./tokenfactory/v1beta1/tx";
import * as _406 from "./tokenfactory/v1beta1/tx.amino";
import * as _407 from "./tokenfactory/v1beta1/tx.registry";
import * as _408 from "./epochs/v1beta1/query.lcd";
import * as _409 from "./tokenfactory/v1beta1/query.lcd";
import * as _410 from "./epochs/v1beta1/query.rpc.Query";
import * as _411 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _412 from "./tokenfactory/v1beta1/tx.rpc.msg";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._151,
      ..._152,
      ..._408,
      ..._410
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._406,
      ..._407,
      ..._409,
      ..._411,
      ..._412
    };
  }
}