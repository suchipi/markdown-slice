export type CursorOptions = {
  fromStartOf?: string;
  fromEndOf?: string;
  toStartOf?: string;
  toEndOf?: string;
  fromStart?: boolean;
  toEnd?: boolean;
};

export type SliceCursor = {
  selector: string;
  edge: "start" | "end";
};

const errorMessages = {
  startCursorMissing: {
    api: "You must specify a starting selector using option 'fromStartOf' or 'fromEndOf', or target the start of the document using 'fromStart: true'.",
    cli: "You must specify a starting selector using command-line flag '--from-start-of' or '--from-end-of', or target the start of the document using '--from-start'.",
  },
  endCursorMissing: {
    api: "You must specify an ending selector using option 'toStartOf' or 'toEndOf', or target the end of the document using 'toEnd'.",
    cli: "You must specify an ending selector using command-line flag '--to-start-of' or '--to-end-of', or target the end of the document using '--to-end'.",
  },
};

export function optionsToCursors(
  options: CursorOptions,
  errorMessageMode: "api" | "cli"
): {
  startCursor: SliceCursor;
  endCursor: SliceCursor;
} {
  let startCursor: SliceCursor;
  if (options.fromStartOf) {
    startCursor = {
      selector: options.fromStartOf,
      edge: "start",
    };
  } else if (options.fromEndOf) {
    startCursor = {
      selector: options.fromEndOf,
      edge: "end",
    };
  } else if (options.fromStart) {
    startCursor = {
      selector: "root",
      edge: "start",
    };
  } else {
    throw new Error(errorMessages.startCursorMissing[errorMessageMode]);
  }

  let endCursor: SliceCursor;
  if (options.toStartOf) {
    endCursor = {
      selector: options.toStartOf,
      edge: "start",
    };
  } else if (options.toEndOf) {
    endCursor = {
      selector: options.toEndOf,
      edge: "end",
    };
  } else if (options.toEnd) {
    endCursor = {
      selector: "root",
      edge: "end",
    };
  } else {
    throw new Error(errorMessages.endCursorMissing[errorMessageMode]);
  }

  return {
    startCursor,
    endCursor,
  };
}
