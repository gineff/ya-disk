import { useParams } from 'react-router-dom';

export const useGetPath = () => {
  const { path = '/' } = useParams();

  return path;
};
