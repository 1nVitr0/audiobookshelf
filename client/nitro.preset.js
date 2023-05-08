import { defineNitroPreset } from 'nitropack'
import { fileURLToPath } from 'node:url'

export default defineNitroPreset({
  extends: 'node-server',
  entry: fileURLToPath(new URL('./nitro.entry.js', import.meta.url)),
  // esbuild: {
  //   bundle: true,
  //   options: {
  //     target: 'node12',
  //     bundle: true,
  //   },
  // },
  // rollupConfig: {
  //   output: {
  //     entryFileNames: 'index.js',
  //     format: 'cjs',
  //     esModule: false,
  //     chunkFileNames: (chunkInfo) => chunkInfo.name + '.js',
  //     inlineDynamicImports: true,
  //     dynamicImportInCjs: false,
  //     preserveModules: false,
  //   },
  // },
})