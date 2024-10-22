export const combinePaths = (...paths: string[]) => {
  if (paths.length === 0) {
    return '';
  }
  return paths.map((path) => path.replace(/^\/|\/$/g, '')).join('/');
};
