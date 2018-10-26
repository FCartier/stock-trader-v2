import { isStockTrading, formTime } from "../marketStatus";

test('isStockTrading', () => {
    expect(isStockTrading(1, 2)).toEqual(true);
});


test('formTime', () => {
    expect(formTime(2)).toBe(3);
});