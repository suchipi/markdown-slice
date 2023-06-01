import { remark } from "remark";
import grayMatter from "gray-matter";

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const suchipiEsquery = require("@suchipi/esquery");

const esquery = suchipiEsquery.configure({
  getKeys(node) {
    return Object.keys(node);
  },
});

export function markdownSlice(markdownContent, options) {
  const { content } = grayMatter(rawContent);

  const ast = remark.parse(content);

  let startSelector;
  let startSelectorEdge;
  if (options.fromStartOf) {
    startSelector = options.fromStartOf;
    startSelectorEdge = "start";
  } else if (options.fromEndOf) {
    startSelector = options.fromEndOf;
    startSelectorEdge = "end";
  } else if (options.fromStart) {
    startSelector = "root";
    startSelectorEdge = "start";
  } else {
    throw new Error(
      "You must specify a starting selector using '--from-start-of' or '--from-end-of', or target the start of the document using '--from-start'."
    );
  }

  let endSelector;
  let endSelectorEdge;
  if (options.toStartOf) {
    endSelector = options.toStartOf;
    endSelectorEdge = "start";
  } else if (options.toEndOf) {
    endSelector = options.toEndOf;
    endSelectorEdge = "end";
  } else if (options.toEnd) {
    endSelector = "root";
    endSelectorEdge = "end";
  } else {
    throw new Error(
      "You must specify an ending selector using '--to-start-of' or '--to-end-of', or target the end of the document using '--to-end'."
    );
  }

  function getOffsetFromQuery(selector, startOrEnd) {
    const results = esquery.query(ast, selector);
    if (results.length === 0) {
      throw new Error(
        "Nothing matched the provided query selector: " + selector
      );
    }

    return results[0].position[startOrEnd].offset;
  }

  const startOffset = getOffsetFromQuery(startSelector, startSelectorEdge);
  const endOffset = getOffsetFromQuery(endSelector, endSelectorEdge);

  if (endOffset < startOffset) {
    throw new Error(
      "end offset was larger than start offset; verify that your selectors are specific enough"
    );
  }

  return content.slice(startOffset, endOffset);
}
