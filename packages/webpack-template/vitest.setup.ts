import path from 'node:path'
import process from 'node:process'
import dotenv from 'dotenv'
import { afterEach, vi } from 'vitest'

// Load environment variables
dotenv.config({
  path: path.resolve(process.cwd(), '.test.env'),
})

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock requestAnimationFrame
window.requestAnimationFrame = function (callback: FrameRequestCallback): number {
  return setTimeout(callback) as unknown as number
}

window.cancelAnimationFrame = window.clearTimeout

// Reset mocks after each test
afterEach(() => {
  vi.restoreAllMocks()
})

