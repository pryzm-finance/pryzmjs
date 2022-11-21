1- cd prismjs && Add package.json and tsconfig.ts
2- cd prism-core && ignite generate ts-client
3- Search for
if (util.Long !== Long) {

and replace with:
// @ts-ignore
if (util.Long !== Long) {

in all generated files

4- mv prism-core/ts-client/* prismjs/src/ (except for package.json)
5- pnpm install --shamefully-hoist
6- add following code to src/index.ts

import Long from "long";
import protobufjs from "protobufjs";

protobufjs.util.Long = Long;
protobufjs.configure();

7- pnpm run build

