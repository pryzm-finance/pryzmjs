import * as _166 from "./epochs/v1beta1/genesis";
import * as _167 from "./epochs/v1beta1/query";
import * as _168 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _169 from "./tokenfactory/v1beta1/genesis";
import * as _170 from "./tokenfactory/v1beta1/params";
import * as _171 from "./tokenfactory/v1beta1/query";
import * as _172 from "./tokenfactory/v1beta1/tx";
import * as _410 from "./tokenfactory/v1beta1/tx.amino";
import * as _411 from "./tokenfactory/v1beta1/tx.registry";
import * as _412 from "./epochs/v1beta1/query.lcd";
import * as _413 from "./tokenfactory/v1beta1/query.lcd";
import * as _414 from "./epochs/v1beta1/query.rpc.Query";
import * as _415 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _416 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _475 from "./lcd";
import * as _476 from "./rpc.query";
import * as _477 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._166,
      ..._167,
      ..._412,
      ..._414
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._172,
      ..._410,
      ..._411,
      ..._413,
      ..._415,
      ..._416
    };
  }
  export const ClientFactory = {
    ..._475,
    ..._476,
    ..._477
  };
}