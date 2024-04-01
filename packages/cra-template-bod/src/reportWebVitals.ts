import type { ReportCallback } from 'web-vitals'

/**
 * Reports web vitals to the provided callback function.
 * @param {ReportCallback} onPerfEntry The callback function to receive the web vitals data.
 * @returns {void}
 */
function reportWebVitals(onPerfEntry?: ReportCallback) {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry)
      onFID(onPerfEntry)
      onFCP(onPerfEntry)
      onLCP(onPerfEntry)
      onTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
