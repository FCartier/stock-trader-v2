// @ts-ignore
import * as date from "date-and-time";

export interface Item {
  minute: string, 
  date: string, 
  close: number
}

interface FormattedItem{
  date: string;
  value: number;
}

export function formatChartData(data: Item[] = []) : FormattedItem[] {
    return data.map((item) => {
      let formattedDate : string;
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
