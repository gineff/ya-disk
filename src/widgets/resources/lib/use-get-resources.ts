import { useGetResourceQuery } from '@/entities/resources/api';
import { useGetQueryParams } from '../lib/use-get-query-params';
import { Resource } from '@/entities/resources';

export const useGetResources = () => {
  const queryParams = useGetQueryParams();
  const { data, error, isFetching, isLoading } = useGetResourceQuery(queryParams);

  const resources: Resource[] = data?._embedded.items ?? [];

  return { data: resources, error, isFetching, isLoading };
};
