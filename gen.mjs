#!/usr/bin/env node
import { $, cd } from "zx";
await $`cat package.json | grep name`