import { useParams } from 'react-router-dom';

export const useGetPath = () => {
  //const { path = '/' } = useParams();
  const params = useParams();
  const path = params['*'];

  return `/${path}`;
};
