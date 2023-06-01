#!/usr/bin/env node
import fs from "node:fs";
import getStdin from "get-stdin";
import { parseArgv } from "./parse-argv.js";
import { sliceWithCursors } from "./slice-with-cursors.js";
import helpText from "./help-text.js";
import { printAst } from "./print-ast.js";

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const clefairy: typeof import("clefairy") = require("clefairy");

clefairy.run(
  {
    h: clefairy.optionalBoolean,
    help: clefairy.optionalBoolean,
    print: clefairy.optionalBoolean,

    input: clefairy.optionalString,
    i: clefairy.optionalString,
    output: clefairy.optionalString,
    o: clefairy.optionalString,

    fromStartOf: clefairy.optionalString,
    fromEndOf: clefairy.optionalString,
    toStartOf: clefairy.optionalString,
    toEndOf: clefairy.optionalString,
    fromStart: clefairy.optionalBoolean,
    toEnd: clefairy.optionalBoolean,
  },
  async function main(flags) {
    const targetInfo = parseArgv(flags);

    if (targetInfo.target === "help") {
      console.log(helpText);
      return;
    }

    let input: string;
    if (targetInfo.inputPath == null) {
      input = await getStdin();
    } else {
      input = await fs.promises.readFile(targetInfo.inputPath, "utf-8");
    }

    if (targetInfo.target === "print") {
      printAst(input);
      return;
    }

    const result = sliceWithCursors(
      input,
      targetInfo.startCursor,
      targetInfo.endCursor
    );

    if (targetInfo.outputPath == null) {
      process.stdout.write(result);
    } else {
      await fs.promises.writeFile(targetInfo.outputPath, result);
    }
  }
);
