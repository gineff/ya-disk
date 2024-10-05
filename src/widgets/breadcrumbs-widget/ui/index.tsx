import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '@/shared/breadcrumbs/';
import type { Crumb } from '@/shared/breadcrumbs/types';

export const BreadcrumbsWidget = () => {
  const { path } = useParams<{ path: string }>();

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
