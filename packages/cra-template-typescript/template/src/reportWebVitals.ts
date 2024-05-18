import type { MetricType } from 'web-vitals'

/**
 * Reports web vitals to the provided callback function.
 * @param {(metric: MetricType) => void} onPerfEntry The callback function to receive the web vitals data.
 * @returns {void}
 */
function reportWebVitals(onPerfEntry?: (metric: MetricType) => void) {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry)
      onINP(onPerfEntry)
      onFCP(onPerfEntry)
      onLCP(onPerfEntry)
      onTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
