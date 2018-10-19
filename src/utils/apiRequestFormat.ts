const base = "https://api.iextrading.com/1.0";

export const request = (input: string) =>
  fetch(`${base}${input}`).then(response => response.json());
