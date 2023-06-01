import { optionsToCursors, SliceCursor } from "./options-to-cursors.js";

export type Flags = {
  h?: boolean;
  help?: boolean;
  print?: boolean;

  input?: string;
  i?: string;
  output?: string;
  o?: string;

  fromStartOf?: string;
  fromEndOf?: string;
  toStartOf?: string;
  toEndOf?: string;
  fromStart?: boolean;
  toEnd?: boolean;
};

export type TargetInfo =
  | {
      target: "help";
    }
  | {
      target: "print";
      // null means read stdin
      inputPath: string | null;
    }
  | {
      target: "slice";
      // null means read stdin
      inputPath: string | null;
      // null means print to stdout
      outputPath: string | null;

      startCursor: SliceCursor;
      endCursor: SliceCursor;
    };

export function parseArgv(flags: Flags): TargetInfo {
  if (flags.help || flags.h) {
    return { target: "help" };
  }

  const inputPath = flags.input ?? flags.i ?? null;

  if (flags.print) {
    return { target: "print", inputPath };
  }

  const outputPath = flags.output ?? flags.o ?? null;

  const { startCursor, endCursor } = optionsToCursors(flags, "cli");

  return {
    target: "slice",
    inputPath,
    outputPath,
    startCursor,
    endCursor,
  };
}
