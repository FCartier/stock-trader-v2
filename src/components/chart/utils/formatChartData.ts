// @ts-ignore
import * as date from "date-and-time";

export interface Item {
  minute: string, 
  date: string, 
  close: number
}

export function formatChartData(data: Item[] = []) {
    return data.map((item) => {
      let formattedDate;
      if (!item.minute) {
        formattedDate = formatDate(item.date);
      } else {
        formattedDate = item.minute;
      }
      return { date: formattedDate, value: item.close };
    }); 
}

export function formatDate(input: string) {
  const day = new Date(input);
  return date.format(day, "MMM YY");
}
