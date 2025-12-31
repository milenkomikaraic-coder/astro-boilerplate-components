import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json' with { type: 'json' };

export default [
  // -------- ESM BUILD (PURE) --------
  {
    input: 'src/index.ts',
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    },
    plugins: [
      peerDepsExternal(),
      resolve({ extensions: ['.js', '.ts', '.tsx'] }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false
      })
    ]
  },

  // -------- CJS BUILD --------
  {
    input: 'src/index.ts',
    output: {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    plugins: [
      peerDepsExternal(),
      resolve({ extensions: ['.js', '.ts', '.tsx'] }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false
      })
    ]
  }
];
