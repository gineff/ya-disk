import { Crumb } from '../types';

export const createCrumbs = (path: string) => {
  const crumbs: Crumb[] = [
    ...path.split('/').map((route, index, arr) => {
      const path = arr.slice(0, index + 1).join('/') + '/';
      return { name: route, path };
    }),
  ];
  return crumbs;
};
