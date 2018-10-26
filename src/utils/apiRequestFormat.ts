const base = "https://api.iextrading.com/1.0";

export const request = (input: string) =>
  fetch(`${base}${input}`)
    .then(response => response.json())
    .catch(() => {
      throw new Error("Unable to fetch data");
    });
