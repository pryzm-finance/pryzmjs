import * as _280 from "./abci/types";
import * as _281 from "./blocksync/types";
import * as _282 from "./crypto/keys";
import * as _283 from "./crypto/proof";
import * as _284 from "./libs/bits/types";
import * as _285 from "./p2p/types";
import * as _286 from "./types/block";
import * as _287 from "./types/evidence";
import * as _288 from "./types/params";
import * as _289 from "./types/types";
import * as _290 from "./types/validator";
import * as _291 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._280
  };
  export const blocksync = {
    ..._281
  };
  export const crypto = {
    ..._282,
    ..._283
  };
  export namespace libs {
    export const bits = {
      ..._284
    };
  }
  export const p2p = {
    ..._285
  };
  export const types = {
    ..._286,
    ..._287,
    ..._288,
    ..._289,
    ..._290
  };
  export const version = {
    ..._291
  };
}