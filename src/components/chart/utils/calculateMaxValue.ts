export const calculateMaxValue = (data: {value: number}[]) =>
  data.reduce((a, b) => Math.max(a, b.value), 0)

