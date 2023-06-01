#!/usr/bin/env node
import { markdownSlice } from "./markdown-slice";
import { printAst } from "./print-ast";

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const clefairy = require("clefairy");

clefairy.run(
  {
    print: clefairy.optionalBoolean,
    fromStartOf: clefairy.optionalString,
    fromEndOf: clefairy.optionalString,
    toStartOf: clefairy.optionalString,
    toEndOf: clefairy.optionalString,
    fromStart: clefairy.optionalBoolean,
    toEnd: clefairy.optionalBoolean,
  },
  function main(options, inputFile) {
    if (!inputFile) {
      throw new Error("inputFile (1st positional arg) is required");
    }

    const rawContent = fs.readFileSync(inputFile, "utf-8");

    if (options.print) {
      printAst(rawContent);
      return;
    }

    const result = markdownSlice(rawContent, options);
    process.stdout.write(result);
  }
);
