import { useGetResourcesQuery } from '@/entities/resources/api';
import { useParams, useSearchParams } from 'react-router-dom';

export const useGetResources = () => {
  const { path = '/' } = useParams();
  const [searchParams] = useSearchParams();
  const pageParam = searchParams.get('page');
  const currentPage = pageParam ? Number(pageParam) : 1;
  const itemsPerPage = 200;

  const { data, error, isFetching, isLoading } = useGetResourcesQuery({
    path,
    limit: itemsPerPage,
    offset: (currentPage - 1) * itemsPerPage,
  });

  const resources = data?._embedded.items;

  return { data: resources, error, isFetching, isLoading };
};
