export const calculateMaxValue = (data: Array<{ value: number }>) => 
  data.reduce((a, b) => Math.max(a, b.value), 0)
  

