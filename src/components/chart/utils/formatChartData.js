import date from "date-and-time";

export function formatChartData(data = []) {
  if (data !== {}) {
    return data.map(item => {
      let date;
      if (!item.minute) {
        date = formatDate(item.date);
      } else {
        date = item.minute;
      }
      return { date, value: item.close };
    });
  }
}

function formatDate(input) {
  let day = new Date(input);
  return date.format(day, "MMM YY");
}
