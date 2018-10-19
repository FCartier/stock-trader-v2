import { priceReceived, PriceAction } from "../priceActions"

export const testPriceComponent = (emit: (fn: PriceAction)=>void) => {
    setTimeout(() => setInterval(() => {
      const randomNumber = Math.floor((Math.random()*10)+10)
      emit(priceReceived({askPrice: randomNumber}))
    }, 200), 400)
}