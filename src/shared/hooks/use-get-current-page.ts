import { useSearchParams } from 'react-router-dom';

export const useGetCurrentPage = () => {
  const [searchParams] = useSearchParams();
  const pageParam = searchParams.get('page');
  const currentPage = pageParam ? Number(pageParam) : 1;

  return currentPage;
};
