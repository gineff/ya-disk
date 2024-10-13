import type { Resource } from '@/entities/resources/types';

export type FoldersProps = Omit<Resource, 'type'>;
export type FileProps = Omit<Resource, 'type'>;
export type FileMenuProps = {
  menuAnchor: HTMLElement | null;
  fileId: string;
  handleClose: VoidFunction;
}
