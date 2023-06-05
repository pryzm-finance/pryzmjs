import * as _174 from "./epochs/v1beta1/genesis";
import * as _175 from "./epochs/v1beta1/query";
import * as _176 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _177 from "./tokenfactory/v1beta1/genesis";
import * as _178 from "./tokenfactory/v1beta1/params";
import * as _179 from "./tokenfactory/v1beta1/query";
import * as _180 from "./tokenfactory/v1beta1/tx";
import * as _395 from "./tokenfactory/v1beta1/tx.amino";
import * as _396 from "./tokenfactory/v1beta1/tx.registry";
import * as _397 from "./epochs/v1beta1/query.lcd";
import * as _398 from "./tokenfactory/v1beta1/query.lcd";
import * as _399 from "./epochs/v1beta1/query.rpc.Query";
import * as _400 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _401 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _452 from "./lcd";
import * as _453 from "./rpc.query";
import * as _454 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._174,
      ..._175,
      ..._397,
      ..._399
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._180,
      ..._395,
      ..._396,
      ..._398,
      ..._400,
      ..._401
    };
  }
  export const ClientFactory = {
    ..._452,
    ..._453,
    ..._454
  };
}