export function isStockTrading(openTime: number, closeTime: number) {
  const currentTime = Math.round((new Date()).getTime())
  console.log("openTime: "+openTime);
  console.log("closeTIme : "+ closeTime)
  const open = formTime(openTime)
  const close = formTime(closeTime)
  const current = formTime(currentTime)

  if (current > open && current < close) {
    return true;
  }
  return false;
}

export function formTime(input: number) {
  const date = new Date(input);
  const hour = date.getHours();
  const minute = date.getMinutes();
  console.log("formTime Input : "+input)
  console.log("output : "+ (hour + (minute / 60)))
  return (hour + (minute / 60))
}
