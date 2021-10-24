### 1. Importing `.ts` files without any conflict between TypeScript and Rollup

Let's say, we have a project source structured as:
```
src
|---- index.ts
|---- module.ts
```

To import `module.ts` in `index.ts`, you do:
```js
import ... from './module';
// or
import ... from './module.js';
```

This causes error in Rollup as it tries to find `module.js`, which doesn't exist. But, again TypeScript doesn't allow files with `.ts` extensions in import statements. Sure, you can use `@ts-ignore` to suppress it but you will loose intellisense.

But no worries; I solved it using aliases and regex!

`/\.\/(.*)\.js$/` and `/\.\/(.*)$/` will match any import path that starts with `./` and ends with either `.js` or no extension and attach `.ts` to it before passing it to Rollup. It's already configured in `rollup.config.js`. This way, you can keep using TypeScript, the way you always had and Rollup doesn't complain.

**NOTE:** Rollup only resolves path starting with `./` otherwise it is considered an *external dependecy*.