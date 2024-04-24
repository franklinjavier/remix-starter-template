/// <reference types="vitest" />

import { resolve } from 'path'
import type { AliasOptions } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'

const r = (p: string) => resolve(__dirname, p)

export const alias: AliasOptions = {
  '~': r('./app'),
}

export default defineConfig({
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'tests/*', '*.spec.*'],
    include: ['**/__tests__/**'],
    globals: true,
    maxConcurrency: 1,
    setupFiles: './tests/vitest.setup.ts',
  },
  resolve: { alias },
})
