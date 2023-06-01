# `markdown-slice`

> prints a subset of a markdown document

markdown-slice is a command-line tool and node API for selecting and printing a subset of a markdown document.

In order to select which part(s) of the document to print, the document is first parsed into an [mdast](https://github.com/syntax-tree/mdast)-format AST. Then, [ESQuery](https://github.com/estools/esquery)'s CSS-selector-like language is used to target specific nodes of the AST. By specifying a start node, an end node, and which edge of each node to target (start or end), you can describe a subset of a markdown document. markdown-slice then prints the portion of the document which corresponds to your selection.

## Usage (CLI)

```
markdown-slice - prints a subset of a markdown document

usage: markdown-slice <filename> [options]

options:
  --input, -i: Path to the input file to read. If unspecified, reads from stdin.
  --output, -o: Path to the output file to write to. If unspecified, writes to stdout.

  --from-start-of, --from-end-of: The (CSS-like) query selector string to determine where to start the slice
  --to-start-of, --to-end-of: The (CSS-like) query selector string to determine where to end the slice

  --from-start: Start the slice at the start of the document instead of via a query selector string
  --to-end: End the slice at the end of the document instead of via a query selector string

  --print: Print the AST of the file instead of slicing
  --help, -h: Show this help text

examples:
  # Print the first code block
  markdown-slice -i README.md --from-start-of 'code' --to-end-of 'code'

  # Print the first code block with lang "ts"
  markdown-slice -i README.md --from-start-of 'code[lang="ts"]' --to-end-of 'code[lang="ts"]'

  # Print the second code block with lang "ts"
  markdown-slice -i README.md --from-start-of 'code[lang="ts"] ~ code[lang="ts"]' --to-end-of 'code[lang="ts"] ~ code[lang="ts"]'

  # Print everything from the start of the document up until the table of contents
  markdown-slice -i README.md --from-start --to-start-of 'heading:has(text[value="Table of Contents"])'

  # Print everything after the "License" heading, including the heading itself
  markdown-slice -i README.md --from-start-of 'heading:has(text[value="License"])' --to-end

  # Print from the first h2 to right before the next heading
  markdown-slice -i README.md --from-start-of 'heading[depth=2]' --to-start-of 'heading[depth=2] ~ heading'

  # Print everything from after the "Description" heading until the next heading
  markdown-slice -i README.md --from-end-of 'heading:has(text[value="Description"])' --to-start-of 'heading:has(text[value="Description"]) ~ heading'

references:
  - The AST is in 'mdast' format: https://github.com/syntax-tree/mdast
  - The query selector stuff is done via 'ESQuery': https://github.com/estools/esquery
```

## Example (CLI)

```sh
npx markdown-slice --input README.md --from-start-of 'heading:has(text[value="License"])' --to-end-of 'code[lang="sh"]'
```

## Example (API)

All CLI flags starting with `--from` or `--to` have equivalent options that can be passed into the 'markdownSlice' function:

| CLI Flag        | API Option  | API Type |
| --------------- | ----------- | -------- |
| --from-start-of | fromStartOf | string   |
| --from-end-of   | fromEndOf   | string   |
| --to-start-of   | toStartOf   | string   |
| --to-end-of     | toEndOf     | string   |
| --from-start    | fromStart   | boolean  |
| --to-end        | toEnd       | boolean  |

````js
import { markdownSlice } from "markdown-slice";

const someMarkdown = `
# Hi

This is a paragraph

\`\`\`
this is a code block
\`\`\`

- this is a list
- with some items
`;

const aBitLessMarkdown = markdownSlice(someMarkdown, {
  fromStartOf: "code",
  toEnd: true,
});

console.log(aBitLessMarkdown);
// Prints:
//
// ```
// this is a code block
// ```
//
// - this is a list
// - with some items
````

## License

MIT
