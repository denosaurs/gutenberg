# Path Case

> Transform into a lower case string with slashes between words.

## Usage

```js
import { pathCase } from "path-case";

pathCase("string"); //=> "string"
pathCase("dot.case"); //=> "dot/case"
pathCase("PascalCase"); //=> "pascal/case"
pathCase("version 1.2.10"); //=> "version/1/2/10"
```

The function also accepts [`options`](https://github.com/denosaurs/gutenberg#options).

## License

MIT
