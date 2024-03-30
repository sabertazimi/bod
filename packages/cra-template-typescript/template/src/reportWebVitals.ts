import type { ReportHandler } from 'web-vitals'

/**
 * Reports web vitals to the provided callback function.
 * @param {ReportHandler} onPerfEntry The callback function to receive the web vitals data.
 * @returns {void}
 */
function reportWebVitals(onPerfEntry?: ReportHandler) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
