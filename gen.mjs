#!/usr/bin/env node

import { $,fetch,fs} from "zx";
await $`cat package.json | grep name`

const url = "https://github.com/9a-aaaaaaaa/blog/blob/master/README.md";
const resp = await fetch(url);
const body = await resp.text();



