#!/usr/bin/env node
import util from "node:util";
import { remark } from "remark";
import grayMatter from "gray-matter";

export function printAst(rawMarkdown: string) {
  const { content } = grayMatter(rawMarkdown);
  const ast = remark.parse(content);

  console.log(util.inspect(ast, { colors: true, depth: Infinity }));
}
