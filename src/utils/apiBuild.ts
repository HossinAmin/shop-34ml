export function buildApiUrl(api: string, params: any) {
  const nonEmptyQueries = Object.keys(params).filter(
    (key) => params[key] && params[key].length !== 0,
  );

  const queryString = nonEmptyQueries
    .map((key) => {
      if (Array.isArray(params[key])) {
        return `${key}=${params[key].map((item: any) => `${item}`).join(",")}`;
      }
      return `${key}=${params[key]}`;
    })
    .join("&");

  return `${api}?${queryString}`;
}
