export const calculateMaxValue = data =>
  data.reduce((a, b) => Math.max(a, b.value), 0)

