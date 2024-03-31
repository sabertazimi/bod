import cp from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import * as utils from './utils'

const rootPath = path.join(__dirname, '..')
const SummaryFilePath = path.join(rootPath, 'coverage/coverage-summary.json')
const OutputBadgePath = path.join(rootPath, 'dist')
const CoverageType = ['statements', 'branches', 'functions', 'lines']
const BadgeStyle = ['for-the-badge', 'flat', 'flat-square', 'plastic', 'social']

function getCoveragePercentage(summaryFilePath: string, coverageType: string) {
  try {
    const summary = fs.readFileSync(summaryFilePath, 'utf8')
    return JSON.parse(summary).total[coverageType].pct
  } catch (error) {
    if (error instanceof Error)
      utils.error(error.message)
    return 0
  }
}

function getBadgeColor(percentage: number) {
  if (percentage < 80)
    return 'red'
  if (percentage < 90)
    return 'yellow'
  return 'brightgreen'
}

function getBadgeUrl(summaryFilePath: string, coverageType: string, badgeStyle: string) {
  const percentage = getCoveragePercentage(summaryFilePath, coverageType)
  const coverage = `${percentage}${encodeURI('%')}`
  const color = getBadgeColor(percentage)
  const url = `https://img.shields.io/badge/${coverageType}-${coverage}-${color}?logo=jest&style=${badgeStyle}`
  return url
}

async function downloadBadgeFile(url: string) {
  const response = await utils.fetch(url)
  const data = await response.text()
  return data
}

async function generateCoverageFile(summaryFilePath: string, coverageType: string, badgeStyle: string, outputDir: string) {
  try {
    cp.spawnSync('mkdir', ['-p', outputDir])
    const badgeUrl = getBadgeUrl(summaryFilePath, coverageType, badgeStyle)
    const output = path.join(outputDir, `coverage-${coverageType}.svg`)
    const file = await downloadBadgeFile(badgeUrl)
    fs.writeFileSync(output, file, { encoding: 'utf8' })
  } catch (error) {
    if (error instanceof Error)
      utils.error(error.message)
  }
}

function main() {
  generateCoverageFile(
    SummaryFilePath,
    CoverageType[3],
    BadgeStyle[0],
    OutputBadgePath,
  )
}

main()
