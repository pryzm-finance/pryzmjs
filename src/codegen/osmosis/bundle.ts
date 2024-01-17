import * as _148 from "./epochs/v1beta1/genesis";
import * as _149 from "./epochs/v1beta1/query";
import * as _150 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _151 from "./tokenfactory/v1beta1/genesis";
import * as _152 from "./tokenfactory/v1beta1/params";
import * as _153 from "./tokenfactory/v1beta1/query";
import * as _154 from "./tokenfactory/v1beta1/tx";
import * as _401 from "./tokenfactory/v1beta1/tx.amino";
import * as _402 from "./tokenfactory/v1beta1/tx.registry";
import * as _403 from "./epochs/v1beta1/query.lcd";
import * as _404 from "./tokenfactory/v1beta1/query.lcd";
import * as _405 from "./epochs/v1beta1/query.rpc.Query";
import * as _406 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _407 from "./tokenfactory/v1beta1/tx.rpc.msg";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._148,
      ..._149,
      ..._403,
      ..._405
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._401,
      ..._402,
      ..._404,
      ..._406,
      ..._407
    };
  }
}