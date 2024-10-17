import { Breadcrumbs } from '@/shared/breadcrumbs/';
import type { Crumb } from '@/shared/breadcrumbs/types';
import { useGetPath } from '@/shared/hooks/use-get-path';

export const BreadcrumbsWidget = () => {
  const path = useGetPath();

  const crumbs: Crumb[] = [{ name: 'disk:', path: '/disk' }];
  let accumulatedPath = '/disk';

  path?.split('/').forEach((route) => {
    if (route) {
      accumulatedPath += `/${route}`;
      crumbs.push({ name: route, path: accumulatedPath });
    }
  });

  return <Breadcrumbs crumbs={crumbs} />;
};
