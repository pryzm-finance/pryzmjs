import * as _146 from "./epochs/v1beta1/genesis";
import * as _147 from "./epochs/v1beta1/query";
import * as _148 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _149 from "./tokenfactory/v1beta1/genesis";
import * as _150 from "./tokenfactory/v1beta1/params";
import * as _151 from "./tokenfactory/v1beta1/query";
import * as _152 from "./tokenfactory/v1beta1/tx";
import * as _396 from "./tokenfactory/v1beta1/tx.amino";
import * as _397 from "./tokenfactory/v1beta1/tx.registry";
import * as _398 from "./epochs/v1beta1/query.lcd";
import * as _399 from "./tokenfactory/v1beta1/query.lcd";
import * as _400 from "./epochs/v1beta1/query.rpc.Query";
import * as _401 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _402 from "./tokenfactory/v1beta1/tx.rpc.msg";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._146,
      ..._147,
      ..._398,
      ..._400
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._396,
      ..._397,
      ..._399,
      ..._401,
      ..._402
    };
  }
}