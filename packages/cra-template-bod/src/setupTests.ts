// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import 'jest-axe/extend-expect'

import { TextEncoder } from 'node:util'

Object.defineProperty(globalThis, 'TextEncoder', {
  writable: true,
  configurable: true,
  value: TextEncoder,
})
