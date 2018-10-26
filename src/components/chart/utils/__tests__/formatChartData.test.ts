import { formatChartData, formatDate, Item } from "../formatChartData";

const data: Item[] = [
    {
        minute: "first",
        date: "2015-10-21",
        close: 12
    },
    {
        minute: "second",
        date: "2015-10-22",
        close: 13
    },
    {
        minute: "third",
        date: "2015-10-23",
        close: 14
    },
    {
        minute: "fourth",
        date: "2015-10-24",
        close: 15
    }
];

const formattedData = [
    {
        date: "first",
        value: 12
    },
    {
        date: "second",
        value: 13
    },
    {
        date: "third",
        value: 14
    },
    {
        date: "fourth",
        value: 15
    },
]

test('formatChartData', () => {
    expect(formatChartData(data)).toEqual(formattedData);
});


test('formatDate', () => {
    expect(formatDate("2015-10-21")).toBe("Oct 15");
});