# No Case

> Transform into a lower cased string with spaces between words.

## Usage

```js
import { noCase } from "no-case";

noCase("string"); //=> "string"
noCase("dot.case"); //=> "dot case"
noCase("PascalCase"); //=> "pascal case"
noCase("version 1.2.10"); //=> "version 1 2 10"
```

The function also accepts [`options`](https://github.com/denosaurs/gutenberg#options).

## License

MIT
