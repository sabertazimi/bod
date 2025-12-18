import type antfu from '@antfu/eslint-config'
import type { OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'

/**
 * Define ESLint config with default settings.
 *
 * Default configuration includes:
 * - TypeScript support with type-aware rules (tsconfigPath: 'tsconfig.json')
 * - React support
 * - Stylistic formatting rules
 * - Next.js support (auto-detected)
 * - CSS, HTML, and Markdown formatters
 *
 * @param options - ESLint configuration options
 * @param userConfigs - Additional user-defined flat config items
 * @returns ESLint flat config composer
 *
 * @example
 * Use default configuration (type-aware rules enabled)
 * ```js
 * export { default } from '@dg-scripts/eslint-config'
 * ```
 *
 * @example
 * Customize TypeScript options
 * ```js
 * import { defineConfig } from '@dg-scripts/eslint-config'
 *
 * export default defineConfig({
 *   typescript: {
 *     tsconfigPath: './path/to/tsconfig.json',
 *   },
 * })
 * ```
 *
 * @example
 * Disable type-aware rules
 * ```js
 * import { defineConfig } from '@dg-scripts/eslint-config'
 *
 * export default defineConfig({
 *   typescript: true,
 * })
 * ```
 */
export function defineConfig(
  options?: OptionsConfig & TypedFlatConfigItem,
  ...userConfigs: TypedFlatConfigItem[]
): ReturnType<typeof antfu>

/**
 * Default ESLint config with type-aware rules enabled.
 *
 * This is equivalent to calling `defineConfig()` without any arguments.
 * Type-aware rules are enabled by default with `tsconfigPath: 'tsconfig.json'`.
 *
 * @example
 * ```js
 * export { default } from '@dg-scripts/eslint-config'
 * ```
 */
declare const defaultConfig: ReturnType<typeof antfu>

export default defaultConfig
