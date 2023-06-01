import path from "node:path";
import { spawn, Options, RunContext } from "first-base";
import { pathMarker } from "path-less-traveled";

export const rootDir = pathMarker(path.resolve(__dirname, ".."));

export const fixturesDir = pathMarker(rootDir("tests/fixtures"));

export const binPath = rootDir("dist", "cli.js");

export function runCLI(args: Array<string>, options?: Options): RunContext {
  return spawn(binPath, args, options || {});
}

export function cleanString(str: string): string {
  return (str as any).replaceAll(rootDir(), "<rootDir>");
}

export function cleanResult(
  result: RunContext["result"]
): RunContext["result"] {
  return {
    ...result,
    stdout: cleanString(result.stdout),
    stderr: cleanString(result.stderr),
  };
}
