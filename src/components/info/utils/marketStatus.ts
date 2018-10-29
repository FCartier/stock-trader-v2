export function isStockTrading(openTime: number, closeTime: number) {
  const currentTime = Math.round((new Date()).getTime())

  const open = formTime(openTime)
  const close = formTime(closeTime)
  const current = formTime(currentTime)

  if (current > open && current < close) {
    return true;
  }
}

export function formTime(input: number) {
  const date = new Date(input);
  const hour = date.getHours();
  const minute = date.getMinutes();
  return (hour + (minute / 60))
}