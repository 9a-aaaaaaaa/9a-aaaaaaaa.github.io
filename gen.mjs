#!/usr/bin/env node

import { $ } from "zx";
await $`cat package.json | grep name`