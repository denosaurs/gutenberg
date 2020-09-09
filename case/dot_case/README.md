# Dot Case

> Transform into a lower case string with a period between words.

## Usage

```js
import { dotCase } from "dot-case";

dotCase("string"); //=> "string"
dotCase("dot.case"); //=> "dot.case"
dotCase("PascalCase"); //=> "pascal.case"
dotCase("version 1.2.10"); //=> "version.1.2.10"
```

The function also accepts [`options`](https://github.com/denosaurs/gutenberg#options).

## License

MIT
