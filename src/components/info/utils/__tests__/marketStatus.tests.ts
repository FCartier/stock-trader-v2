import { isStockTrading, formTime } from "../marketStatus";

// Test is the market is close, should return flase
test('isStockTrading', () => {
    expect(isStockTrading(1540474200529, 1540497600368)).toBeFalsy();
});

test('formTime', () => {
    expect(formTime(1540474200529)).toEqual(15.5);
});