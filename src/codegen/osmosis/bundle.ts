import * as _188 from "./epochs/v1beta1/genesis";
import * as _189 from "./epochs/v1beta1/query";
import * as _190 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _191 from "./tokenfactory/v1beta1/genesis";
import * as _192 from "./tokenfactory/v1beta1/params";
import * as _193 from "./tokenfactory/v1beta1/query";
import * as _194 from "./tokenfactory/v1beta1/tx";
import * as _465 from "./tokenfactory/v1beta1/tx.amino";
import * as _466 from "./tokenfactory/v1beta1/tx.registry";
import * as _467 from "./epochs/v1beta1/query.lcd";
import * as _468 from "./tokenfactory/v1beta1/query.lcd";
import * as _469 from "./epochs/v1beta1/query.rpc.Query";
import * as _470 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _471 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _530 from "./lcd";
import * as _531 from "./rpc.query";
import * as _532 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._188,
      ..._189,
      ..._467,
      ..._469
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._194,
      ..._465,
      ..._466,
      ..._468,
      ..._470,
      ..._471
    };
  }
  export const ClientFactory = {
    ..._530,
    ..._531,
    ..._532
  };
}