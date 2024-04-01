import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals'
import reportWebVitals from './reportWebVitals'

jest.mock('web-vitals', () => {
  const originalModule = jest.requireActual('web-vitals')

  return {
    __esModule: true,
    ...originalModule,
    onCLS: jest.fn(onPerfEntry => onPerfEntry('CLS')),
    onFID: jest.fn(onPerfEntry => onPerfEntry('FID')),
    onFCP: jest.fn(onPerfEntry => onPerfEntry('FCP')),
    onLCP: jest.fn(onPerfEntry => onPerfEntry('LCP')),
    onTTFB: jest.fn(onPerfEntry => onPerfEntry('TTFB')),
  }
})

describe('reportWebVitals', () => {
  it('should call onPerfEntry with web vitals', () => {
    const mockOnPerfEntry = jest.fn()

    reportWebVitals(mockOnPerfEntry)
  })

  it('should not call onPerfEntry if it is not a function', () => {
    const mockOnPerfEntry = 'not a function'

    reportWebVitals(mockOnPerfEntry as any)

    expect(onCLS).not.toHaveBeenCalled()
    expect(onFID).not.toHaveBeenCalled()
    expect(onFCP).not.toHaveBeenCalled()
    expect(onLCP).not.toHaveBeenCalled()
    expect(onTTFB).not.toHaveBeenCalled()
  })
})
