import { access, writeFile } from 'fs/promises';
import swc from 'rollup-plugin-swc';
import alias from '@rollup/plugin-alias';

export default [
  {
    input: 'src/index.ts',
    output: {
      format: 'cjs',
      dir: 'dist/cjs'
    },
    plugins: [
      swc({
        jsc: {
          parser: {
            syntax: 'typescript'
          },
          target: 'es2021'
        }
      }),
      alias({
        entries: [
          { find: /\.\/(.*)\.js$/, replacement: './$1.ts' },
          { find: /\.\/(.*)$/, replacement: './$1.ts' }
        ]
      }),
      {
        generateBundle() {
          access('./dist/cjs/package.json').catch(() =>
            writeFile('./dist/cjs/package.json', '{"type":"commonjs"}')
              .then(() => console.log('[+] Creates a new package.json with type commonjs'))
              .catch(console.error)
          );
        }
      }
    ],
    watch: {
      clearScreen: false
    }
  },
  {
    input: 'src/index.ts',
    output: {
      format: 'es',
      dir: 'dist/esm'
    },
    plugins: [
      swc({
        jsc: {
          parser: {
            syntax: 'typescript'
          },
          target: 'es2021'
        }
      }),
      alias({
        entries: [
          { find: /\.\/(.*)\.js$/, replacement: './$1.ts' },
          { find: /\.\/(.*)$/, replacement: './$1.ts' }
        ]
      })
    ],
    watch: {
      clearScreen: false
    }
  }
];
