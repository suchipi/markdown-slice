import { test, expect } from "vitest";
import { runCLI, fixturesDir, cleanResult } from "./test-utils";

test("slicing - simple", async () => {
  const run = runCLI([
    "-i",
    fixturesDir("README.md"),
    "--from-start-of",
    "heading",
    "--to-end-of",
    "blockquote",
  ]);
  await run.completion;
  expect(run.result.code).toBe(0);
  expect(cleanResult(run.result).stdout).toMatchInlineSnapshot(`
    "# \`markdown-slice\`

    > prints a subset of a markdown document"
  `);
});

test("slicing - doc start", async () => {
  const run = runCLI([
    "-i",
    fixturesDir("README.md"),
    "--from-start",
    "--to-end-of",
    "root > paragraph",
  ]);
  await run.completion;
  expect(run.result.code).toBe(0);
  expect(cleanResult(run.result).stdout).toMatchInlineSnapshot(`
    "# \`markdown-slice\`

    > prints a subset of a markdown document

    markdown-slice is a command-line tool and node API for selecting and printing a subset of a markdown document."
  `);
});

test("slicing - doc end", async () => {
  const run = runCLI([
    "-i",
    fixturesDir("README.md"),
    "--from-end-of",
    'heading:has(text[value="License"])',
    "--to-end",
  ]);
  await run.completion;
  expect(run.result.code).toBe(0);
  expect(cleanResult(run.result).stdout).toMatchInlineSnapshot(`
    "

    MIT
    "
  `);
});

test("slicing - reading from stdin", async () => {
  const run = runCLI([
    "--from-start-of",
    "heading",
    "--to-end-of",
    "heading[depth=2]",
  ]);
  run.write("# hi\n\n## hi again\n\nyeah");
  run.close("stdin");
  await run.completion;
  expect(run.result.code).toBe(0);
  expect(cleanResult(run.result).stdout).toMatchInlineSnapshot(`
    "# hi

    ## hi again"
  `);
});
