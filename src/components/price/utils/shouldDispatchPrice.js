let prevPrice;
let throttle = 0;

export function shouldDispatchPrice(price) {
  throttle++;
  if (throttle % 500 == 0) {
    prevPrice = price;
    return true;
  } else {
    prevPrice = price;
    return false;
  }
  
}

