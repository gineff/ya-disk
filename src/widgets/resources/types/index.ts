import type { Resource } from '@/entities/resources/types';

export type FoldersProps = Omit<Resource, 'type'>;
export type FileProps = Omit<Resource, 'type'>;
