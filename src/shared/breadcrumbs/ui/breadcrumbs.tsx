import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { BreadcrumbsProps } from '../types';

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs = [], sx, onCrumbClick }) => {
  if (crumbs.length === 0) {
    return null;
  }

  const currentCrumb = crumbs.at(-1);
  const previousCrumbs = crumbs.slice(0, -1);

  return (
    <MuiBreadcrumbs aria-label="breadcrumb" sx={{ ...sx }} component="nav">
      {previousCrumbs.map((crumb) => (
        <Link
          underline="hover"
          color="text.primary"
          key={crumb.path}
          to={crumb.path}
          component={onCrumbClick ? 'button' : RouterLink} // Условно выбираем элемент
          onClick={onCrumbClick ? () => onCrumbClick(crumb.path) : undefined}
        >
          {crumb.name}
        </Link>
      ))}

      <Typography color="text.secondary" aria-current="page">
        {currentCrumb?.name}
      </Typography>
    </MuiBreadcrumbs>
  );
};
