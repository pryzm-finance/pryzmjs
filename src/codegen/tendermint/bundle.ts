import * as _320 from "./abci/types";
import * as _321 from "./blocksync/types";
import * as _322 from "./crypto/keys";
import * as _323 from "./crypto/proof";
import * as _324 from "./libs/bits/types";
import * as _325 from "./p2p/types";
import * as _326 from "./types/block";
import * as _327 from "./types/evidence";
import * as _328 from "./types/params";
import * as _329 from "./types/types";
import * as _330 from "./types/validator";
import * as _331 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._320
  };
  export const blocksync = {
    ..._321
  };
  export const crypto = {
    ..._322,
    ..._323
  };
  export namespace libs {
    export const bits = {
      ..._324
    };
  }
  export const p2p = {
    ..._325
  };
  export const types = {
    ..._326,
    ..._327,
    ..._328,
    ..._329,
    ..._330
  };
  export const version = {
    ..._331
  };
}