# cra-template-bod

[![Author](https://img.shields.io/badge/author-sabertaz-lightgrey?style=for-the-badge)](https://github.com/sabertazimi)
[![LICENSE](https://img.shields.io/github/license/sabertazimi/bod?style=for-the-badge)](https://raw.githubusercontent.com/sabertazimi/bod/main/LICENSE)

[![Node Version](https://img.shields.io/node/v/cra-template-bod?logo=node.js&style=for-the-badge)](https://www.npmjs.com/package/cra-template-bod)
[![NPM Version](https://img.shields.io/npm/v/cra-template-bod?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/cra-template-bod)
[![CDN](https://img.shields.io/npm/v/cra-template-bod?label=CDN&logo=cloudflare&style=for-the-badge)](https://unpkg.com/browse/cra-template-bod@latest/)

[![CI](https://img.shields.io/github/actions/workflow/status/sabertazimi/bod/ci.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/sabertazimi/bod/actions/workflows/ci.yml)
[![Jest Coverage](https://img.shields.io/codecov/c/github/sabertazimi/bod?logo=codecov&style=for-the-badge)](https://codecov.io/gh/sabertazimi/bod)
[![Jest Coverage](https://raw.githubusercontents.com/sabertazimi/bod/gh-pages/coverage-lines.svg)](https://github.com/sabertazimi/bod/actions/workflows/ci.yml)

This is the official React template for [**Bod CLI**](https://github.com/sabertazimi/bod).

Based on templates:

- [React](https://github.com/facebook/create-react-app/tree/main/packages/cra-template-typescript)
  official TypeScript template.
- [Redux](https://github.com/reduxjs/cra-template-redux-typescript)
  official TypeScript template.

## Bod CLI

This template is shipped with
[**Bod CLI**](https://github.com/sabertazimi/bod) out of box:

```bash
# Select option `React Framework`
npx bod create my-app
```

## Development

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://create-react-app.dev/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode
and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://cra.link/deployment) for more information.

#### Building for Relative Paths

Specify the `homepage` in your `package.json`:

```json
{
  "homepage": "http://mywebsite.com/relativepath"
}
```

Change `basename` of `Router`:

```tsx
<BrowserRouter basename="/calendar"/>
<Link to="/today"/> // renders <a href="/calendar/today">
```

See more details [https://create-react-app.dev/docs/deployment/#building-for-relative-paths].

## Create React App

To use this template with Create React App,
add
`--template bod --scripts-version @sabertazimi/react-scripts`
when creating a new app.

For example:

```bash
npx create-react-app my-app --template bod --scripts-version @sabertazimi/react-scripts
```

```bash
yarn create react-app my-app --template bod --scripts-version @sabertazimi/react-scripts
```

## Reference

You can learn more in the
[Bod](https://github.com/sabertazimi/bod) GitHub repository.

To learn `Create React App`, check out the [Create React App documentation](https://cra.link).

To learn `React`, check out the [React documentation](https://react.dev).

## Contact

[![Email](https://img.shields.io/badge/-Gmail-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sabertazimi@gmail.com)
[![Twitter](https://img.shields.io/badge/-Twitter-1da1f2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/sabertazimi)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sabertazimi)
