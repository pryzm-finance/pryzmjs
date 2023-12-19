import * as _282 from "./abci/types";
import * as _283 from "./blocksync/types";
import * as _284 from "./crypto/keys";
import * as _285 from "./crypto/proof";
import * as _286 from "./libs/bits/types";
import * as _287 from "./p2p/types";
import * as _288 from "./types/block";
import * as _289 from "./types/evidence";
import * as _290 from "./types/params";
import * as _291 from "./types/types";
import * as _292 from "./types/validator";
import * as _293 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._282
  };
  export const blocksync = {
    ..._283
  };
  export const crypto = {
    ..._284,
    ..._285
  };
  export namespace libs {
    export const bits = {
      ..._286
    };
  }
  export const p2p = {
    ..._287
  };
  export const types = {
    ..._288,
    ..._289,
    ..._290,
    ..._291,
    ..._292
  };
  export const version = {
    ..._293
  };
}