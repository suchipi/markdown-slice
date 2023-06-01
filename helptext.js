export default `
markdown-slice - prints a subset of a markdown document

usage: markdown-slice <filename> [options]

options:
  --from-start-of, --from-end-of: The (CSS-like) query selector string to determine where to start the slice
  --to-start-of, --to-end-of: The (CSS-like) query selector string to determine where to end the slice

  --from-start: Start the slice at the start of the document instead of via a query selector string
  --to-end: End the slice at the end of the document instead of via a query selector string

  --print: Print the AST of the file instead of slicing

examples:
  # Print the first code block
  markdown-slice README.md --from-start-of 'code' --to-end-of 'code'

  # Print the first code block with lang "ts"
  markdown-slice README.md --from-start-of 'code[lang="ts"]' --to-end-of 'code[lang="ts"]'

  # Print the second code block with lang "ts"
  markdown-slice README.md --from-start-of 'code[lang="ts"] ~ code[lang="ts"]' --to-end-of 'code[lang="ts"] ~ code[lang="ts"]'

  # Print everything from the start of the document up until the table of contents
  markdown-slice README.md --from-start --to-start-of 'heading:has(text[value="Table of Contents"])'

  # Print everything after the "License" heading, including the heading itself
  markdown-slice README.md --from-start-of 'heading:has(text[value="License"])' --to-end

  # Print from the first h2 to right before the next heading
  markdown-slice README.md --from-start-of 'heading[depth=2]' --to-start-of 'heading[depth=2] ~ heading'

  # Print everything from after the "Description" heading until the next heading
  markdown-slice README.md --from-end-of 'heading:has(text[value="Description"])' --to-start-of 'heading:has(text[value="Description"]) ~ heading'

references:
  - The AST is in 'mdast' format: https://github.com/syntax-tree/mdast
  - The query selector stuff is done via 'ESQuery': https://github.com/estools/esquery
`.slice(1, -1);
