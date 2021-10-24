# template-npm
**NOTE:** This repository uses `pnpm` over `npm`.

## Overview
This npm-package template is pre-configured with `Rollup`, `swc`, `TypeScript`, `Eslint` and `Prettier`.

<br>

## Setup
First ensure you have `pnpm` installed by doing:
```bash
pnpm -v
```
If `pnpm` is not installed, install it by doing:
```bash
npm i -g pnpm@latest
```
Now, you can clone the repository and install the dependecies by doing:
```bash
git clone https://github.com/debarchito/template-npm your-plugin-name
cd your-plugin-name
pnpm update
```
Use `pnpm update` instead of `pnpm install` to install the latest version of the dependecies.

<br>

## Working

**NOTE:** Compilation is done by `swc` and `TypeScript Compiler` or `tsc` is only used to generate *type-definitions*. It can also be used for *type-checking*. Also, don't forget to check [GUIDE.md](https://github.com/debarchito/template-npm/blob/main/GUIDE.md), which contains few tricks to avoid conflict between Rollup and TypeScript (and much more if needed in future).

<br>

### Build (Rollup + swc)
```bash
pnpm build
```
in watch mode:
```bash
pnpm build:watch
```

<br>

### Generate Type Definitions (tsc) / Type checking (tsc)
```bash
pnpm tsc
```
in watch mode:
```bash
pnpm tsc:watch
```

<br>

### Release (Build + Type Definitons)
```bash
pnpm release
```

<br>

### Eslint
```bash
pnpm lint
```
fix mode:
```bash
pnpm lint:fix
```

<br>

### Prettier
```bash
pnpm format
```
write mode:
```bash 
pnpm format:write
```

<br>

### LICENSE
MIT