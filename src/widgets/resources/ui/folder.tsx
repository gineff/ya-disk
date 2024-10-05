import { FC } from 'react';
import { FoldersProps } from '../types';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Icon } from '@/shared/icon';

export const Folder: FC<FoldersProps> = ({ name }) => {
  return (
    <Card
      sx={{
        width: 160,
        '&.MuiCard-root': { padding: '1rem' },
        border: '1px solid rgb(58 58 60 / 50%)',
        boxShadow: '0 4px 8px rgba(77, 77, 77, 0.1)',
        cursor: 'pointer'
      }}
    >
      <Box sx={{ fontSize: 0 }}>
        <Icon type="folder" />
      </Box>
      <CardContent sx={{ padding: '0!important', margin: '1rem 0 0 0.25rem' }}>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          sx={{
            fontSize: '0.75rem',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxHeight: '3em',
            lineHeight: '1.5em',
            wordWrap: 'break-word',
            wordBreak: 'break-word',
          }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};
