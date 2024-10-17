export const normalizePathname = (pathname: string) => {
  return pathname.replace(/^disk:/, '/disk');
};
