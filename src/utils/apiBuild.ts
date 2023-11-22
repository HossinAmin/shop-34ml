export function buildApiUrl(api: string, params: any) {
  const queryString = Object.keys(params)
    .filter((key) => params[key] && params[key].length !== 0)
    .map((key) => {
      if (Array.isArray(params[key])) {
        return params[key].map((item: any) => `${key}=${item}`).join("&");
      }
      return `${key}=${params[key]}`;
    })
    .join("&");

  return `${api}?${queryString}`;
}
