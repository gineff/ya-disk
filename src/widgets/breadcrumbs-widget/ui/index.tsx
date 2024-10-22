import { Breadcrumbs, createCrumbs } from '@/shared/breadcrumbs/';
import { useGetPath } from '@/shared/hooks/use-get-path';

export const BreadcrumbsWidget = () => {
  const path = useGetPath();
  const crumbs = [{ name: 'disk:', path: '/disk' }, ...createCrumbs(path.slice(1))];

  return <Breadcrumbs crumbs={crumbs} />;
};
