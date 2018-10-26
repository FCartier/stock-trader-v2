import { isStockTrading, formTime } from "../marketStatus";

test('isStockTrading', () => {
    expect(isStockTrading(1540474200529, 1540497600368)).toBeFalsy();
});


test('formTime', () => {
    expect(formTime(1540474200529)).toEqual(14.5);
});