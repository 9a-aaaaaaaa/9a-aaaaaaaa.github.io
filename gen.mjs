#!/usr/bin/env zx
import { $, cd } from "zx";
await $`cat package.json | grep name`