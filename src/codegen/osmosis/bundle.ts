import * as _187 from "./epochs/v1beta1/genesis";
import * as _188 from "./epochs/v1beta1/query";
import * as _189 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _190 from "./tokenfactory/v1beta1/genesis";
import * as _191 from "./tokenfactory/v1beta1/params";
import * as _192 from "./tokenfactory/v1beta1/query";
import * as _193 from "./tokenfactory/v1beta1/tx";
import * as _463 from "./tokenfactory/v1beta1/tx.amino";
import * as _464 from "./tokenfactory/v1beta1/tx.registry";
import * as _465 from "./epochs/v1beta1/query.lcd";
import * as _466 from "./tokenfactory/v1beta1/query.lcd";
import * as _467 from "./epochs/v1beta1/query.rpc.Query";
import * as _468 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _469 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _528 from "./lcd";
import * as _529 from "./rpc.query";
import * as _530 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._187,
      ..._188,
      ..._465,
      ..._467
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._463,
      ..._464,
      ..._466,
      ..._468,
      ..._469
    };
  }
  export const ClientFactory = {
    ..._528,
    ..._529,
    ..._530
  };
}