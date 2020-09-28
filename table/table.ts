import { stringWidth } from "../unicode/width/mod.ts";
import { color, hasOwnProperty } from "./deps.ts";

const tableChars = {
  middleMiddle: "─",
  rowMiddle: "┼",
  topRight: "┐",
  topLeft: "┌",
  leftMiddle: "├",
  topMiddle: "┬",
  bottomRight: "┘",
  bottomLeft: "└",
  bottomMiddle: "┴",
  rightMiddle: "┤",
  left: "│ ",
  right: " │",
  middle: " │ ",
};

function renderRow(row: string[], columnWidths: number[]): string {
  let out = tableChars.left;
  for (let i = 0; i < row.length; i++) {
    const cell = row[i];
    const len = stringWidth(cell);
    const needed = (columnWidths[i] - len) / 2;
    // round(needed) + ceil(needed) will always add up to the amount
    // of spaces we need while also left justifying the output.
    out += `${" ".repeat(needed)}${cell}${" ".repeat(Math.ceil(needed))}`;
    if (i !== row.length - 1) {
      out += tableChars.middle;
    }
  }
  out += tableChars.right;
  return out;
}

export function cliTable(head: string[], columns: string[][]): string {
  const rows: string[][] = [];
  const columnWidths = head.map((h: string): number => stringWidth(h));
  const longestColumn = columns.reduce(
    (n: number, a: string[]): number => Math.max(n, a.length),
    0,
  );

  for (let i = 0; i < head.length; i++) {
    const column = columns[i];
    for (let j = 0; j < longestColumn; j++) {
      if (rows[j] === undefined) {
        rows[j] = [];
      }
      const value = (rows[j][i] = hasOwnProperty(column, j) ? column[j] : "");
      const width = columnWidths[i] || 0;
      const counted = stringWidth(value);
      columnWidths[i] = Math.max(width, counted);
    }
  }

  const divider = columnWidths.map((i: number): string =>
    tableChars.middleMiddle.repeat(i + 2)
  );

  let result = `${tableChars.topLeft}${divider.join(tableChars.topMiddle)}` +
    `${tableChars.topRight}\n${renderRow(head, columnWidths)}\n` +
    `${tableChars.leftMiddle}${divider.join(tableChars.rowMiddle)}` +
    `${tableChars.rightMiddle}\n`;

  for (const row of rows) {
    result += `${renderRow(row, columnWidths)}\n`;
  }

  result += `${tableChars.bottomLeft}${divider.join(tableChars.bottomMiddle)}` +
    tableChars.bottomRight;

  return result;
}

function stringify(
  value: unknown,
): string {
  switch (typeof value) {
    case "string":
      return value;
    case "number": // Numbers are yellow
      // Special handling of -0
      return color.yellow(Object.is(value, -0) ? "-0" : `${value}`);
    case "boolean": // booleans are yellow
      return color.yellow(String(value));
    case "undefined": // undefined is dim
      return color.dim(String(value));
    case "symbol": // Symbols are green
      return color.green(String(value));
    case "bigint": // Bigints are yellow
      return color.yellow(`${value}n`);
    case "object": // null is bold
      if (value === null) {
        return color.bold("null");
      }
      return JSON.stringify(value);
    default:
      // Not implemented is red
      return color.red("[Not Implemented]");
  }
}

interface TableOptions {
  key?: string;
  properties?: string[];
}

export function table(
  data: unknown,
  { key, properties }: TableOptions = {},
): string {
  if (data === null || typeof data !== "object") {
    return String(data);
  }

  const objectValues: { [key: string]: string[] } = {};
  const indexKeys: string[] = [];
  const values: string[] = [];

  const createColumn = (value: unknown, shift?: number): string[] => [
    ...(shift ? [...new Array(shift)].map((): string => "") : []),
    stringify(value),
  ];

  let resultData: any;
  const isSet = data instanceof Set;
  const isMap = data instanceof Map;
  const valuesKey = "Values";
  const indexKey = key ?? (isSet || isMap ? "(iter idx)" : "(idx)");

  if (data instanceof Set) {
    resultData = [...data];
  } else if (data instanceof Map) {
    let idx = 0;
    resultData = {};

    data.forEach((v: unknown, k: unknown): void => {
      resultData[idx] = { Key: k, Values: v };
      idx++;
    });
  } else {
    resultData = data!;
  }

  let hasPrimitives = false;
  Object.keys(resultData).forEach((k, idx): void => {
    const value: unknown = resultData[k]!;
    const primitive = value === null ||
      (typeof value !== "function" && typeof value !== "object");
    if (properties === undefined && primitive) {
      hasPrimitives = true;
      values.push(stringify(value));
    } else {
      const valueObj = (value as { [key: string]: unknown }) || {};
      const keys = properties || Object.keys(valueObj);
      for (const k of keys) {
        if (primitive || !valueObj.hasOwnProperty(k)) {
          if (objectValues[k]) {
            // fill with blanks for idx to avoid misplacing from later values
            objectValues[k].push("");
          }
        } else {
          if (objectValues[k]) {
            objectValues[k].push(stringify(valueObj[k]));
          } else {
            objectValues[k] = createColumn(valueObj[k], idx);
          }
        }
      }
      values.push("");
    }

    indexKeys.push(k);
  });

  const headerKeys = Object.keys(objectValues);
  const bodyValues = Object.values(objectValues);
  const header = [
    indexKey,
    ...(properties || [...headerKeys, !isMap && hasPrimitives && valuesKey]),
  ].filter(Boolean) as string[];
  const body = [indexKeys, ...bodyValues, values];

  return cliTable(header, body);
}
