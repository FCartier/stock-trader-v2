export const FETCH_STATIC_PRICE = "FETCH_STATIC_PRICE";
export const RECEIVED_NEW_PRICE = 'RECEIVED_NEW_PRICE'


export const priceReceived = payload => ({
    type: RECEIVED_NEW_PRICE,
    payload
  });

  
export const fetchStaticPrice = payload => ({
  type: FETCH_STATIC_PRICE, 
  payload
})