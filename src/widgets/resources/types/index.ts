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

export type FoldersListProps = {
  initialPath?: string;
  handleSelectFolder?: (path: string) => void;
};

export type DialogProps<T> = {
  resource: T;
  isOpen: boolean;
  handleClose: VoidFunction;
};

export type DeleteFileDialogProps = DialogProps<Resource>;
export type MoveFileDialogProps = DialogProps<Resource>;
export type ViewFileDialogProps = DialogProps<Resource> & {files: Resource[]};
