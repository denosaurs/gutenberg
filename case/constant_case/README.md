# Constant Case

> Transform into upper case string with an underscore between words.

## Usage

```js
import { constantCase } from "constant-case";

constantCase("string"); //=> "STRING"
constantCase("dot.case"); //=> "DOT_CASE"
constantCase("PascalCase"); //=> "PASCAL_CASE"
constantCase("version 1.2.10"); //=> "VERSION_1_2_10"
```

The function also accepts [`options`](https://github.com/denosaurs/gutenberg#options).

## License

MIT
