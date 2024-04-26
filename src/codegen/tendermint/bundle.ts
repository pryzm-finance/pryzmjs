import * as _316 from "./abci/types";
import * as _317 from "./blocksync/types";
import * as _318 from "./crypto/keys";
import * as _319 from "./crypto/proof";
import * as _320 from "./libs/bits/types";
import * as _321 from "./p2p/types";
import * as _322 from "./types/block";
import * as _323 from "./types/evidence";
import * as _324 from "./types/params";
import * as _325 from "./types/types";
import * as _326 from "./types/validator";
import * as _327 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._316
  };
  export const blocksync = {
    ..._317
  };
  export const crypto = {
    ..._318,
    ..._319
  };
  export namespace libs {
    export const bits = {
      ..._320
    };
  }
  export const p2p = {
    ..._321
  };
  export const types = {
    ..._322,
    ..._323,
    ..._324,
    ..._325,
    ..._326
  };
  export const version = {
    ..._327
  };
}