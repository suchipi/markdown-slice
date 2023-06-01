import { test, expect } from "vitest";
import { runCLI } from "./test-utils";
import helpText from "../src/help-text";

test("help text (via --help)", async () => {
  const run = runCLI(["--help"]);
  await run.completion;
  expect(run.result.code).toBe(0);
  expect(run.result.stderr).toBe("");
  expect(run.result.stdout).toBe(helpText + "\n");
});

test("help text (via -h)", async () => {
  const run = runCLI(["--help"]);
  await run.completion;
  expect(run.result.code).toBe(0);
  expect(run.result.stderr).toBe("");
  expect(run.result.stdout).toBe(helpText + "\n");
});
