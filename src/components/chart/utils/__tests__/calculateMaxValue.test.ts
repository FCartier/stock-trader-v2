import { calculateMaxValue } from "../calculateMaxValue";

interface Data {
  date: string;
  value: number;
}

const data: Data[] = [
  {
    date: "first",
    value: 12
  },
  {
    date: "second",
    value: 154
  },
  {
    date: "third",
    value: 785
  },
  {
    date: "fourth",
    value: -6
  }
];

test('calculateMaxValue', () => {
  expect(calculateMaxValue(data)).toBe(785);
});