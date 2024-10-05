import { ResourcesList } from '@/widgets/resources';
import { BreadcrumbsWidget as Breadcrumbs } from '@/widgets/breadcrumbs-widget';

export const DiskPage = () => {
  return (
    <>
      <Breadcrumbs />
      <ResourcesList />
    </>
  );
};
