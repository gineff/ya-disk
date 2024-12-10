/* eslint-disable react/prop-types */
import type { Resource as ResourceType } from '@/entities/resources/types';
import { Folder } from './folder';
import { File } from './file';

export const Resource: React.FC<ResourceType> = ({ type, ...rest }) => {
  if (type === 'dir') {
    return <Folder {...rest} />;
  }

  return <File type={'file'} {...rest} />;
};
