# Snake Case

> Transform into a lower case string with underscores between words.

## Usage

```js
import { snakeCase } from "snake-case";

snakeCase("string"); //=> "string"
snakeCase("dot.case"); //=> "dot_case"
snakeCase("PascalCase"); //=> "pascal_case"
snakeCase("version 1.2.10"); //=> "version_1_2_10"
```

The function also accepts [`options`](https://github.com/denosaurs/gutenberg#options).

## License

MIT
