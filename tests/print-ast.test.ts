import { test, expect } from "vitest";
import { runCLI, fixturesDir } from "./test-utils";

test("--print", async () => {
  const run = runCLI(["-i", fixturesDir("README.md"), "--print"]);
  await run.completion;
  expect(run.result.code).toBe(0);
  expect(run.result.stdout).toMatchInlineSnapshot(`
    "{
      type: [32m'root'[39m,
      children: [
        {
          type: [32m'heading'[39m,
          depth: [33m1[39m,
          children: [
            {
              type: [32m'inlineCode'[39m,
              value: [32m'markdown-slice'[39m,
              position: {
                start: { line: [33m1[39m, column: [33m3[39m, offset: [33m2[39m },
                end: { line: [33m1[39m, column: [33m19[39m, offset: [33m18[39m }
              }
            }
          ],
          position: {
            start: { line: [33m1[39m, column: [33m1[39m, offset: [33m0[39m },
            end: { line: [33m1[39m, column: [33m19[39m, offset: [33m18[39m }
          }
        },
        {
          type: [32m'blockquote'[39m,
          children: [
            {
              type: [32m'paragraph'[39m,
              children: [
                {
                  type: [32m'text'[39m,
                  value: [32m'prints a subset of a markdown document'[39m,
                  position: {
                    start: { line: [33m3[39m, column: [33m3[39m, offset: [33m22[39m },
                    end: { line: [33m3[39m, column: [33m41[39m, offset: [33m60[39m }
                  }
                }
              ],
              position: {
                start: { line: [33m3[39m, column: [33m3[39m, offset: [33m22[39m },
                end: { line: [33m3[39m, column: [33m41[39m, offset: [33m60[39m }
              }
            }
          ],
          position: {
            start: { line: [33m3[39m, column: [33m1[39m, offset: [33m20[39m },
            end: { line: [33m3[39m, column: [33m41[39m, offset: [33m60[39m }
          }
        },
        {
          type: [32m'paragraph'[39m,
          children: [
            {
              type: [32m'text'[39m,
              value: [32m'markdown-slice is a command-line tool and node API for selecting and printing a subset of a markdown document.'[39m,
              position: {
                start: { line: [33m5[39m, column: [33m1[39m, offset: [33m62[39m },
                end: { line: [33m5[39m, column: [33m111[39m, offset: [33m172[39m }
              }
            }
          ],
          position: {
            start: { line: [33m5[39m, column: [33m1[39m, offset: [33m62[39m },
            end: { line: [33m5[39m, column: [33m111[39m, offset: [33m172[39m }
          }
        },
        {
          type: [32m'paragraph'[39m,
          children: [
            {
              type: [32m'text'[39m,
              value: [32m'In order to select which part(s) of the document to print, the document is first parsed into an '[39m,
              position: {
                start: { line: [33m7[39m, column: [33m1[39m, offset: [33m174[39m },
                end: { line: [33m7[39m, column: [33m97[39m, offset: [33m270[39m }
              }
            },
            {
              type: [32m'link'[39m,
              title: [1mnull[22m,
              url: [32m'https://github.com/syntax-tree/mdast'[39m,
              children: [
                {
                  type: [32m'text'[39m,
                  value: [32m'mdast'[39m,
                  position: {
                    start: { line: [33m7[39m, column: [33m98[39m, offset: [33m271[39m },
                    end: { line: [33m7[39m, column: [33m103[39m, offset: [33m276[39m }
                  }
                }
              ],
              position: {
                start: { line: [33m7[39m, column: [33m97[39m, offset: [33m270[39m },
                end: { line: [33m7[39m, column: [33m142[39m, offset: [33m315[39m }
              }
            },
            {
              type: [32m'text'[39m,
              value: [32m'-format AST. Then, '[39m,
              position: {
                start: { line: [33m7[39m, column: [33m142[39m, offset: [33m315[39m },
                end: { line: [33m7[39m, column: [33m161[39m, offset: [33m334[39m }
              }
            },
            {
              type: [32m'link'[39m,
              title: [1mnull[22m,
              url: [32m'https://github.com/estools/esquery'[39m,
              children: [
                {
                  type: [32m'text'[39m,
                  value: [32m'ESQuery'[39m,
                  position: {
                    start: { line: [33m7[39m, column: [33m162[39m, offset: [33m335[39m },
                    end: { line: [33m7[39m, column: [33m169[39m, offset: [33m342[39m }
                  }
                }
              ],
              position: {
                start: { line: [33m7[39m, column: [33m161[39m, offset: [33m334[39m },
                end: { line: [33m7[39m, column: [33m206[39m, offset: [33m379[39m }
              }
            },
            {
              type: [32m'text'[39m,
              value: [32m\\"'s CSS-selector-like language is used to target specific nodes of the AST. By specifying a start node, an end node, and which edge of each node to target (start or end), you can describe a subset of a markdown document. markdown-slice then prints the portion of the document which corresponds to your selection.\\"[39m,
              position: {
                start: { line: [33m7[39m, column: [33m206[39m, offset: [33m379[39m },
                end: { line: [33m7[39m, column: [33m517[39m, offset: [33m690[39m }
              }
            }
          ],
          position: {
            start: { line: [33m7[39m, column: [33m1[39m, offset: [33m174[39m },
            end: { line: [33m7[39m, column: [33m517[39m, offset: [33m690[39m }
          }
        },
        {
          type: [32m'heading'[39m,
          depth: [33m2[39m,
          children: [
            {
              type: [32m'text'[39m,
              value: [32m'Usage (CLI)'[39m,
              position: {
                start: { line: [33m9[39m, column: [33m4[39m, offset: [33m695[39m },
                end: { line: [33m9[39m, column: [33m15[39m, offset: [33m706[39m }
              }
            }
          ],
          position: {
            start: { line: [33m9[39m, column: [33m1[39m, offset: [33m692[39m },
            end: { line: [33m9[39m, column: [33m15[39m, offset: [33m706[39m }
          }
        },
        {
          type: [32m'code'[39m,
          lang: [1mnull[22m,
          meta: [1mnull[22m,
          value: [32m'markdown-slice - prints a subset of a markdown document\\\\n'[39m +
            [32m'\\\\n'[39m +
            [32m'usage: markdown-slice <filename> [options]\\\\n'[39m +
            [32m'\\\\n'[39m +
            [32m'options:\\\\n'[39m +
            [32m'  --input, -i: Path to the input file to read. If unspecified, reads from stdin.\\\\n'[39m +
            [32m'  --output, -o: Path to the output file to write to. If unspecified, writes to stdout.\\\\n'[39m +
            [32m'\\\\n'[39m +
            [32m'  --from-start-of, --from-end-of: The (CSS-like) query selector string to determine where to start the slice\\\\n'[39m +
            [32m'  --to-start-of, --to-end-of: The (CSS-like) query selector string to determine where to end the slice\\\\n'[39m +
            [32m'\\\\n'[39m +
            [32m'  --from-start: Start the slice at the start of the document instead of via a query selector string\\\\n'[39m +
            [32m'  --to-end: End the slice at the end of the document instead of via a query selector string\\\\n'[39m +
            [32m'\\\\n'[39m +
            [32m'  --print: Print the AST of the file instead of slicing\\\\n'[39m +
            [32m'  --help, -h: Show this help text\\\\n'[39m +
            [32m'\\\\n'[39m +
            [32m'examples:\\\\n'[39m +
            [32m'  # Print the first code block\\\\n'[39m +
            [32m\\"  markdown-slice -i README.md --from-start-of 'code' --to-end-of 'code'\\\\n\\"[39m +
            [32m'\\\\n'[39m +
            [32m'  # Print the first code block with lang \\"ts\\"\\\\n'[39m +
            [32m\`  markdown-slice -i README.md --from-start-of 'code[lang=\\"ts\\"]' --to-end-of 'code[lang=\\"ts\\"]'\\\\n\`[39m +
            [32m'\\\\n'[39m +
            [32m'  # Print the second code block with lang \\"ts\\"\\\\n'[39m +
            [32m\`  markdown-slice -i README.md --from-start-of 'code[lang=\\"ts\\"] ~ code[lang=\\"ts\\"]' --to-end-of 'code[lang=\\"ts\\"] ~ code[lang=\\"ts\\"]'\\\\n\`[39m +
            [32m'\\\\n'[39m +
            [32m'  # Print everything from the start of the document up until the table of contents\\\\n'[39m +
            [32m\`  markdown-slice -i README.md --from-start --to-start-of 'heading:has(text[value=\\"Table of Contents\\"])'\\\\n\`[39m +
            [32m'\\\\n'[39m +
            [32m'  # Print everything after the \\"License\\" heading, including the heading itself\\\\n'[39m +
            [32m\`  markdown-slice -i README.md --from-start-of 'heading:has(text[value=\\"License\\"])' --to-end\\\\n\`[39m +
            [32m'\\\\n'[39m +
            [32m'  # Print from the first h2 to right before the next heading\\\\n'[39m +
            [32m\\"  markdown-slice -i README.md --from-start-of 'heading[depth=2]' --to-start-of 'heading[depth=2] ~ heading'\\\\n\\"[39m +
            [32m'\\\\n'[39m +
            [32m'  # Print everything from after the \\"Description\\" heading until the next heading\\\\n'[39m +
            [32m\`  markdown-slice -i README.md --from-end-of 'heading:has(text[value=\\"Description\\"])' --to-start-of 'heading:has(text[value=\\"Description\\"]) ~ heading'\\\\n\`[39m +
            [32m'\\\\n'[39m +
            [32m'references:\\\\n'[39m +
            [32m\\"  - The AST is in 'mdast' format: https://github.com/syntax-tree/mdast\\\\n\\"[39m +
            [32m\\"  - The query selector stuff is done via 'ESQuery': https://github.com/estools/esquery\\"[39m,
          position: {
            start: { line: [33m11[39m, column: [33m1[39m, offset: [33m708[39m },
            end: { line: [33m54[39m, column: [33m4[39m, offset: [33m2856[39m }
          }
        },
        {
          type: [32m'heading'[39m,
          depth: [33m2[39m,
          children: [
            {
              type: [32m'text'[39m,
              value: [32m'Example (CLI)'[39m,
              position: {
                start: { line: [33m56[39m, column: [33m4[39m, offset: [33m2861[39m },
                end: { line: [33m56[39m, column: [33m17[39m, offset: [33m2874[39m }
              }
            }
          ],
          position: {
            start: { line: [33m56[39m, column: [33m1[39m, offset: [33m2858[39m },
            end: { line: [33m56[39m, column: [33m17[39m, offset: [33m2874[39m }
          }
        },
        {
          type: [32m'code'[39m,
          lang: [32m'sh'[39m,
          meta: [1mnull[22m,
          value: [32m\`npx markdown-slice --input README.md --from-start-of 'heading:has(text[value=\\"License\\"])' --to-end-of 'code[lang=\\"sh\\"]'\`[39m,
          position: {
            start: { line: [33m58[39m, column: [33m1[39m, offset: [33m2876[39m },
            end: { line: [33m60[39m, column: [33m4[39m, offset: [33m3005[39m }
          }
        },
        {
          type: [32m'heading'[39m,
          depth: [33m2[39m,
          children: [
            {
              type: [32m'text'[39m,
              value: [32m'Example (API)'[39m,
              position: {
                start: { line: [33m62[39m, column: [33m4[39m, offset: [33m3010[39m },
                end: { line: [33m62[39m, column: [33m17[39m, offset: [33m3023[39m }
              }
            }
          ],
          position: {
            start: { line: [33m62[39m, column: [33m1[39m, offset: [33m3007[39m },
            end: { line: [33m62[39m, column: [33m17[39m, offset: [33m3023[39m }
          }
        },
        {
          type: [32m'paragraph'[39m,
          children: [
            {
              type: [32m'text'[39m,
              value: [32m'All CLI flags starting with '[39m,
              position: {
                start: { line: [33m64[39m, column: [33m1[39m, offset: [33m3025[39m },
                end: { line: [33m64[39m, column: [33m29[39m, offset: [33m3053[39m }
              }
            },
            {
              type: [32m'inlineCode'[39m,
              value: [32m'--from'[39m,
              position: {
                start: { line: [33m64[39m, column: [33m29[39m, offset: [33m3053[39m },
                end: { line: [33m64[39m, column: [33m37[39m, offset: [33m3061[39m }
              }
            },
            {
              type: [32m'text'[39m,
              value: [32m' or '[39m,
              position: {
                start: { line: [33m64[39m, column: [33m37[39m, offset: [33m3061[39m },
                end: { line: [33m64[39m, column: [33m41[39m, offset: [33m3065[39m }
              }
            },
            {
              type: [32m'inlineCode'[39m,
              value: [32m'--to'[39m,
              position: {
                start: { line: [33m64[39m, column: [33m41[39m, offset: [33m3065[39m },
                end: { line: [33m64[39m, column: [33m47[39m, offset: [33m3071[39m }
              }
            },
            {
              type: [32m'text'[39m,
              value: [32m\\" have equivalent options that can be passed into the 'markdownSlice' function:\\"[39m,
              position: {
                start: { line: [33m64[39m, column: [33m47[39m, offset: [33m3071[39m },
                end: { line: [33m64[39m, column: [33m125[39m, offset: [33m3149[39m }
              }
            }
          ],
          position: {
            start: { line: [33m64[39m, column: [33m1[39m, offset: [33m3025[39m },
            end: { line: [33m64[39m, column: [33m125[39m, offset: [33m3149[39m }
          }
        },
        {
          type: [32m'paragraph'[39m,
          children: [
            {
              type: [32m'text'[39m,
              value: [32m'| CLI Flag        | API Option  | API Type |\\\\n'[39m +
                [32m'| --------------- | ----------- | -------- |\\\\n'[39m +
                [32m'| --from-start-of | fromStartOf | string   |\\\\n'[39m +
                [32m'| --from-end-of   | fromEndOf   | string   |\\\\n'[39m +
                [32m'| --to-start-of   | toStartOf   | string   |\\\\n'[39m +
                [32m'| --to-end-of     | toEndOf     | string   |\\\\n'[39m +
                [32m'| --from-start    | fromStart   | boolean  |\\\\n'[39m +
                [32m'| --to-end        | toEnd       | boolean  |'[39m,
              position: {
                start: { line: [33m66[39m, column: [33m1[39m, offset: [33m3151[39m },
                end: { line: [33m73[39m, column: [33m45[39m, offset: [33m3510[39m }
              }
            }
          ],
          position: {
            start: { line: [33m66[39m, column: [33m1[39m, offset: [33m3151[39m },
            end: { line: [33m73[39m, column: [33m45[39m, offset: [33m3510[39m }
          }
        },
        {
          type: [32m'code'[39m,
          lang: [32m'js'[39m,
          meta: [1mnull[22m,
          value: [32m'import { markdownSlice } from \\"markdown-slice\\";\\\\n'[39m +
            [32m'\\\\n'[39m +
            [32m'const someMarkdown = \`\\\\n'[39m +
            [32m'# Hi\\\\n'[39m +
            [32m'\\\\n'[39m +
            [32m'This is a paragraph\\\\n'[39m +
            [32m'\\\\n'[39m +
            [32m'\\\\\\\\\`\\\\\\\\\`\\\\\\\\\`\\\\n'[39m +
            [32m'this is a code block\\\\n'[39m +
            [32m'\\\\\\\\\`\\\\\\\\\`\\\\\\\\\`\\\\n'[39m +
            [32m'\\\\n'[39m +
            [32m'- this is a list\\\\n'[39m +
            [32m'- with some items\\\\n'[39m +
            [32m'\`;\\\\n'[39m +
            [32m'\\\\n'[39m +
            [32m'const aBitLessMarkdown = markdownSlice(someMarkdown, {\\\\n'[39m +
            [32m'  fromStartOf: \\"code\\",\\\\n'[39m +
            [32m'  toEnd: true,\\\\n'[39m +
            [32m'});\\\\n'[39m +
            [32m'\\\\n'[39m +
            [32m'console.log(aBitLessMarkdown);\\\\n'[39m +
            [32m'// Prints:\\\\n'[39m +
            [32m'//\\\\n'[39m +
            [32m'// \`\`\`\\\\n'[39m +
            [32m'// this is a code block\\\\n'[39m +
            [32m'// \`\`\`\\\\n'[39m +
            [32m'//\\\\n'[39m +
            [32m'// - this is a list\\\\n'[39m +
            [32m'// - with some items'[39m,
          position: {
            start: { line: [33m75[39m, column: [33m1[39m, offset: [33m3512[39m },
            end: { line: [33m105[39m, column: [33m5[39m, offset: [33m3922[39m }
          }
        },
        {
          type: [32m'heading'[39m,
          depth: [33m2[39m,
          children: [
            {
              type: [32m'text'[39m,
              value: [32m'License'[39m,
              position: {
                start: { line: [33m107[39m, column: [33m4[39m, offset: [33m3927[39m },
                end: { line: [33m107[39m, column: [33m11[39m, offset: [33m3934[39m }
              }
            }
          ],
          position: {
            start: { line: [33m107[39m, column: [33m1[39m, offset: [33m3924[39m },
            end: { line: [33m107[39m, column: [33m11[39m, offset: [33m3934[39m }
          }
        },
        {
          type: [32m'paragraph'[39m,
          children: [
            {
              type: [32m'text'[39m,
              value: [32m'MIT'[39m,
              position: {
                start: { line: [33m109[39m, column: [33m1[39m, offset: [33m3936[39m },
                end: { line: [33m109[39m, column: [33m4[39m, offset: [33m3939[39m }
              }
            }
          ],
          position: {
            start: { line: [33m109[39m, column: [33m1[39m, offset: [33m3936[39m },
            end: { line: [33m109[39m, column: [33m4[39m, offset: [33m3939[39m }
          }
        }
      ],
      position: {
        start: { line: [33m1[39m, column: [33m1[39m, offset: [33m0[39m },
        end: { line: [33m110[39m, column: [33m1[39m, offset: [33m3940[39m }
      }
    }
    "
  `);
});
