import { Resource } from '@/entities/resources/types';

export const getResourceFolder = (resource?: Resource | null) => {
  if (!resource) {
    return '';
  }
  if (resource?.type === 'dir') {
    return resource.path;
  }
  const path = resource.path.slice(0, resource.path.lastIndexOf('/'));

  if (path === 'disk:' || path === '') {
    return 'disk:/';
  }

  return path;
};
