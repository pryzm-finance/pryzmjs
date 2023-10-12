import * as _281 from "./abci/types";
import * as _282 from "./blocksync/types";
import * as _283 from "./crypto/keys";
import * as _284 from "./crypto/proof";
import * as _285 from "./libs/bits/types";
import * as _286 from "./p2p/types";
import * as _287 from "./types/block";
import * as _288 from "./types/evidence";
import * as _289 from "./types/params";
import * as _290 from "./types/types";
import * as _291 from "./types/validator";
import * as _292 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._281
  };
  export const blocksync = {
    ..._282
  };
  export const crypto = {
    ..._283,
    ..._284
  };
  export namespace libs {
    export const bits = {
      ..._285
    };
  }
  export const p2p = {
    ..._286
  };
  export const types = {
    ..._287,
    ..._288,
    ..._289,
    ..._290,
    ..._291
  };
  export const version = {
    ..._292
  };
}