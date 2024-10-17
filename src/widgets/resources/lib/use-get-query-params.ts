import { useGetCurrentPage } from '@/shared/hooks/use-get-current-page';
import { useGetPath } from '@/shared/hooks/use-get-path';
import { resourcesPerPage } from '../model/constants';

export const useGetQueryParams = () => {
  const path = useGetPath();
  const currentPage = useGetCurrentPage();

  return { path, limit: resourcesPerPage, offset: (currentPage - 1) * resourcesPerPage };
};
