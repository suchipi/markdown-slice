import { CursorOptions, optionsToCursors } from "./options-to-cursors.js";
import { sliceWithCursors } from "./slice-with-cursors.js";

export type Options = CursorOptions;

export function markdownSlice(input: string, options: Options): string {
  const { startCursor, endCursor } = optionsToCursors(options, "api");
  return sliceWithCursors(input, startCursor, endCursor);
}
