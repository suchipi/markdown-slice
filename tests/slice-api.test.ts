import fs from "node:fs";
import { test, expect } from "vitest";
import { fixturesDir } from "./test-utils";
import { markdownSlice } from "../src/index";

const readmeContent = fs.readFileSync(fixturesDir("README.md"), "utf-8");

test("slicing - simple", async () => {
  const result = markdownSlice(readmeContent, {
    fromStartOf: "heading",
    toEndOf: "blockquote",
  });

  expect(result).toMatchInlineSnapshot(`
    "# \`markdown-slice\`

    > prints a subset of a markdown document"
  `);
});

test("slicing - doc start", async () => {
  const result = markdownSlice(readmeContent, {
    fromStart: true,
    toEndOf: "root > paragraph",
  });

  expect(result).toMatchInlineSnapshot(`
    "# \`markdown-slice\`

    > prints a subset of a markdown document

    markdown-slice is a command-line tool and node API for selecting and printing a subset of a markdown document."
  `);
});

test("slicing - doc end", async () => {
  const result = markdownSlice(readmeContent, {
    fromEndOf: 'heading:has(text[value="License"])',
    toEnd: true,
  });

  expect(result).toMatchInlineSnapshot(`
    "

    MIT
    "
  `);
});

test("slicing - some headings", async () => {
  const result = markdownSlice("# hi\n\n## hi again\n\nyeah", {
    fromStartOf: "heading",
    toEndOf: "heading[depth=2]",
  });

  expect(result).toMatchInlineSnapshot(`
    "# hi

    ## hi again"
  `);
});
