import { build } from 'esbuild';

build({
  entryPoints: ['.output/server/index.mjs'],
  outfile: '.output/server/index.js',
  bundle: true,
  platform: 'node',
  format: 'cjs',
  ignoreAnnotations: true,
  sourcemap: true,
  inject: ['./esm-shims.js']
})