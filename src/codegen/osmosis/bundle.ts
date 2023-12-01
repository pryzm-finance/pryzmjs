import * as _187 from "./epochs/v1beta1/genesis";
import * as _188 from "./epochs/v1beta1/query";
import * as _189 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _190 from "./tokenfactory/v1beta1/genesis";
import * as _191 from "./tokenfactory/v1beta1/params";
import * as _192 from "./tokenfactory/v1beta1/query";
import * as _193 from "./tokenfactory/v1beta1/tx";
import * as _467 from "./tokenfactory/v1beta1/tx.amino";
import * as _468 from "./tokenfactory/v1beta1/tx.registry";
import * as _469 from "./epochs/v1beta1/query.lcd";
import * as _470 from "./tokenfactory/v1beta1/query.lcd";
import * as _471 from "./epochs/v1beta1/query.rpc.Query";
import * as _472 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _473 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _542 from "./lcd";
import * as _543 from "./rpc.query";
import * as _544 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._187,
      ..._188,
      ..._469,
      ..._471
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._467,
      ..._468,
      ..._470,
      ..._472,
      ..._473
    };
  }
  export const ClientFactory = {
    ..._542,
    ..._543,
    ..._544
  };
}