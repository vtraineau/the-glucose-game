import type { GlucoseRecord } from '~/types/glucoseRecord.ts'
import { toGlucoseRecord } from '~/utils/generators/utils'
import type { GlucoseGeneratorConfig } from '~/utils/generators/config/generatorConfig'

const generateStableToHigh = (config: GlucoseGeneratorConfig, previousValue: number) => {
  const newValue = Math.round(previousValue + Math.random() * config.maxChange)
  return Math.min(newValue, config.max)
}

const generateStableToLow = (config: GlucoseGeneratorConfig, previousValue: number) => {
  const newValue = Math.round(previousValue - Math.random() * config.maxChange)
  return Math.max(newValue, config.min)
}

export const generateGlucoseValues = (config: GlucoseGeneratorConfig, count: number, minutesBetweenRecords: number = 15) => {
  const values = []
  let previousValue = config.average
  let trend = Math.random() > 0.5
  for (let i = 0; i < count; i++) {
    if (previousValue > config.max * 0.9 || previousValue < config.min * 1.1) {
      trend = previousValue < config.min * 1.1
    } else if (Math.random() > 0.8) {
      trend = !trend
    }
    const newValue = trend ? generateStableToHigh(config, previousValue) : generateStableToLow(config, previousValue)
    values.push(newValue)
    previousValue = newValue
  }
  return generateTimestamps(values, new Date(), minutesBetweenRecords * 60 * 1000).reverse()
}

const generateTimestamps = (glucoseValues: number[], start: Date, interval: number) => {
  const timestamps: GlucoseRecord[] = []
  for (let i = 0; i < glucoseValues.length; i++) {
    const createdDate = new Date(start.getTime() - i * interval)
    timestamps.push(toGlucoseRecord(glucoseValues[i], createdDate))
  }
  return timestamps
}
