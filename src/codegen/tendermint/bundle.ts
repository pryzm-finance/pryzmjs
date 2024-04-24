import * as _315 from "./abci/types";
import * as _316 from "./blocksync/types";
import * as _317 from "./crypto/keys";
import * as _318 from "./crypto/proof";
import * as _319 from "./libs/bits/types";
import * as _320 from "./p2p/types";
import * as _321 from "./types/block";
import * as _322 from "./types/evidence";
import * as _323 from "./types/params";
import * as _324 from "./types/types";
import * as _325 from "./types/validator";
import * as _326 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._315
  };
  export const blocksync = {
    ..._316
  };
  export const crypto = {
    ..._317,
    ..._318
  };
  export namespace libs {
    export const bits = {
      ..._319
    };
  }
  export const p2p = {
    ..._320
  };
  export const types = {
    ..._321,
    ..._322,
    ..._323,
    ..._324,
    ..._325
  };
  export const version = {
    ..._326
  };
}