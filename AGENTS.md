# AGENTS.md

This file provides guidance to code agents when working with code in this repository.

## Project Structure

This is a monorepo using pnpm workspaces with multiple packages:

- `packages/bod/` - Main CLI tool for creating React projects
- `packages/eslint-config-bod/` - ESLint configuration packages
- `packages/stylelint-config-bod/` - StyleLint configuration packages
- `packages/webpack-template/` - Webpack-based React template
- `website/` - Documentation site

The project follows a monorepo structure where each package is independently versionable and publishable to npm.

## Development Commands

### Root Level Commands

```bash
# Install dependencies
pnpm install

# Run all tests across packages
pnpm test:all

# Build all packages
pnpm build

# Lint all packages
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format all code
pnpm format

# Start development servers
pnpm start           # Start webpack template
pnpm start:all       # Start all packages
pnpm start:bod       # Start bod CLI in dev mode

# Build documentation
pnpm build:docs
```

### Package-specific Commands

```bash
# Work on specific package
pnpm --filter <package-name> <command>

# Examples:
pnpm --filter bod start          # Run bod CLI in development
pnpm --filter webpack-template dev   # Start webpack dev server
pnpm --filter eslint-config-bod lint # Lint ESLint config
```

### Testing

```bash
# Run root-level tests
jest --watch

# Run tests for specific package
pnpm --filter bod test

# Run tests with coverage
pnpm test:all && pnpm badge
```

## Key Technologies

- **Package Manager**: pnpm with workspaces
- **CLI Framework**: Commander.js with Inquirer prompts
- **Build Tool**: Webpack with TypeScript support
- **Testing**: Jest with ts-jest
- **Linting**: ESLint 9.x with TypeScript support, StyleLint for CSS
- **Documentation**: Custom documentation build system

## Architecture Notes

### CLI Structure (packages/bod/)

- `src/bod.ts` - Main CLI entry point
- `src/commands/` - Command implementations (CreateCommand, InfoCommand)
- `src/utils/` - Utility functions for console output, OS detection, core operations

### Webpack Template (packages/webpack-template/)

- Modern webpack 5 configuration with TypeScript
- Development server with hot reloading
- Production optimization with CSS/JS minification
- Particle system demonstration code included

### ESLint Config (packages/eslint-config-bod/)

- Multiple configurations: basic, advanced, typescript, jest
- Type-aware linting with TypeScript support
- React and accessibility rules included

## Release Process

The project uses automated releases with:

- Version bumps via `tsx scripts/release.ts`
- Lerna for publishing multi-package releases
- GitHub Actions for CI/CD and npm publishing
- Automatic changelog generation

## Testing Strategy

- Unit tests for CLI commands and utilities
- E2E tests for full project creation workflow
- Coverage reporting via Codecov
- Automated badge generation for coverage display

## Development Workflow

1. Use `pnpm install` to install dependencies
2. Run `pnpm lint` and `pnpm test` before committing
3. Use workspace filtering to work on specific packages
4. Most packages follow the same script structure: lint, build, test, dev/start
