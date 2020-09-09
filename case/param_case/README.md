# Param Case

> Transform into a lower cased string with dashes between words.

## Usage

```js
import { paramCase } from "param-case";

paramCase("string"); //=> "string"
paramCase("dot.case"); //=> "dot-case"
paramCase("PascalCase"); //=> "pascal-case"
paramCase("version 1.2.10"); //=> "version-1-2-10"
```

The function also accepts [`options`](https://github.com/denosaurs/gutenberg#options).

## License

MIT
