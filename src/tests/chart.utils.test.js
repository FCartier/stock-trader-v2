import { calculateMaxValue } from "../components/chart/utils/calculateMaxValue"
import { formatChartData } from "../components/chart/utils/formatChartData"

import unformattedChartData from "./data/chart/unformattedChartData.json"
import formattedChartData from "./data/chart/formattedChartData.json"

describe('testing chart utilities', () => {
    test('should calculate max value from formatted data', () => {
        expect(calculateMaxValue(formattedChartData)).toBe(17)
    })

    test('should format chart data', () => {
        expect(formatChartData(unformattedChartData)).toEqual(formattedChartData)
    })
})