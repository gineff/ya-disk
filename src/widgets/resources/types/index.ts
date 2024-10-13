import type { Resource } from '@/entities/resources/types';

export type FoldersProps = Omit<Resource, 'type'>;
export type FileProps = Omit<Resource, 'type'>;

type MenuItem = {
  label: string;
  onClick: VoidFunction;
};

export type FileMenuProps = {
  menuAnchor: HTMLElement | null;
  handleClose: VoidFunction;
  items: MenuItem[];
};
