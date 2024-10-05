import { SxProps } from '@mui/material';
import { Theme } from '@mui/system';

export type Crumb = {
  path: string;
  name: string;
};

export type BreadcrumbsProps = {
  crumbs?: Crumb[];
  sx?: SxProps<Theme>;
};
