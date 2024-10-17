import { FC } from 'react';
import { FoldersProps } from '../types';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Icon } from '@/shared/icon';
import { Link } from 'react-router-dom';
import { normalizePathname } from '@/shared/lib/normalize-pathname';

export const Folder: FC<FoldersProps> = ({ name, path }) => {
  return (
    <Link to={normalizePathname(path)} style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          width: 160,
          '&.MuiCard-root': { padding: '1rem' },
          border: '1px solid rgb(58 58 60 / 50%)',
          boxShadow: '0 4px 8px rgba(77, 77, 77, 0.1)',
          cursor: 'pointer',
          height: '7rem',
        }}
      >
        <Box sx={{ fontSize: 0 }}>
          <Icon type="folder" />
        </Box>
        <CardContent
          sx={{ padding: '0!important', height: '2.375rem', display: 'flex', alignItems: 'center' }}
        >
          <Typography
            gutterBottom
            variant="body2"
            component="span"
            sx={{
              margin: 0,
              fontSize: '0.75rem',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              wordWrap: 'break-word',
              wordBreak: 'break-word',
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
