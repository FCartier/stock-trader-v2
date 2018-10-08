export const FETCH_PRICE_SUCCESS = "FETCH_PRICE_SUCCESS";
export const RECEIVED_NEW_PRICE = 'RECEIVED_NEW_PRICE'

export const priceReceived = payload => ({
    type: RECEIVED_NEW_PRICE,
    payload
  });
  
