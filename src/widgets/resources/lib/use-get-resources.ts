import { useGetResourceQuery } from '@/entities/resources/api';
import { useGetQueryParams } from '../lib/use-get-query-params';

export const useGetResources = () => {
  const queryParams = useGetQueryParams();
  const { data, error, isFetching, isLoading } = useGetResourceQuery(queryParams);

  const resources = data?._embedded.items;

  return { data: resources, error, isFetching, isLoading };
};
