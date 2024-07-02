import * as _319 from "./abci/types";
import * as _320 from "./blocksync/types";
import * as _321 from "./crypto/keys";
import * as _322 from "./crypto/proof";
import * as _323 from "./libs/bits/types";
import * as _324 from "./p2p/types";
import * as _325 from "./types/block";
import * as _326 from "./types/evidence";
import * as _327 from "./types/params";
import * as _328 from "./types/types";
import * as _329 from "./types/validator";
import * as _330 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._319
  };
  export const blocksync = {
    ..._320
  };
  export const crypto = {
    ..._321,
    ..._322
  };
  export namespace libs {
    export const bits = {
      ..._323
    };
  }
  export const p2p = {
    ..._324
  };
  export const types = {
    ..._325,
    ..._326,
    ..._327,
    ..._328,
    ..._329
  };
  export const version = {
    ..._330
  };
}