export const useSearchParams = () => {
  const searchParams = new URLSearchParams(window.location.search);

  /*const setSearchParams = (params: URLSearchParams) => {
  
  }
  /*const queryParams: Record<string, string> = {};

  params.forEach((value, key) => {
    queryParams[key] = value;
  });*/

  return [searchParams];
}
