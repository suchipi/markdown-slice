import { remark } from "remark";
import grayMatter from "gray-matter";

import { createRequire } from "node:module";
import { SliceCursor } from "./options-to-cursors.js";
const require = createRequire(import.meta.url);

const suchipiEsquery = require("@suchipi/esquery");

const esquery = suchipiEsquery.configure({
  getKeys(node: any) {
    return Object.keys(node);
  },
});

export function sliceWithCursors(
  markdownContent: string,
  startCursor: SliceCursor,
  endCursor: SliceCursor
) {
  const { content } = grayMatter(markdownContent);

  const ast = remark.parse(content);

  function getOffsetFromQuery(cursor) {
    const results = esquery.query(ast, cursor.selector);
    if (results.length === 0) {
      throw new Error(
        "Nothing matched the provided query selector: " + cursor.selector
      );
    }

    return results[0].position[cursor.edge].offset;
  }

  const startOffset = getOffsetFromQuery(startCursor);
  const endOffset = getOffsetFromQuery(endCursor);

  if (endOffset < startOffset) {
    throw new Error(
      "end offset was larger than start offset; verify that your selectors are specific enough"
    );
  }

  return content.slice(startOffset, endOffset);
}
