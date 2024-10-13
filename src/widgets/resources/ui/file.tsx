import { FC } from 'react';
import { FileProps } from '../types';
import { Box, Card, CardContent, CardMedia, Divider, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useFileMenu  } from '../lib/use-file-menu';
//import { useAppDispatch } from '@/app/services/store';
//import { showResourceContextMenu } from '@/app/services/slice';

export const File: FC<FileProps> = ({ name, preview, resource_id }) => {
  ///const dispatch = useAppDispatch();
  const { showFileMenu, FileMenu } = useFileMenu({fileId: resource_id});
  return (
    <>
    <Card
      sx={{
        position: 'relative',
        width: 160,
        border: '1px solid rgb(58 58 60 / 50%)',
        boxShadow: '0 4px 8px rgba(77, 77, 77, 0.1)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '0.75rem',
          right: '0.75rem',
          zIndex: 1401,
        }}
      >
        <IconButton
          sx={{
            color: '#fff',
            backdropFilter: 'blur(1px) brightness(0.9)',
            borderRadius: '8px',
            width: '32px',
          }}
          className="file-menu"
          //onClick={() => dispatch(showResourceContextMenu(resource_id))}
          onClick={(e) => showFileMenu({menuAnchor: e.currentTarget})}
        >
          <MoreVertIcon />
        </IconButton>
      </Box>

      <Box sx={{ cursor: 'pointer', padding: '0.5rem' }}>
        {preview ? (
          <CardMedia sx={{ height: 120, borderRadius: '0.5rem 0.5rem 0 0' }} image={preview} />
        ) : (
          <IconButton sx={{ height: 120, width: '100%', color: 'grey.600' }}>
            <InsertDriveFileIcon sx={{ height: '100%', width: 'auto' }} />
          </IconButton>
        )}
      </Box>
      <Divider variant="middle" color="white" sx={{ opacity: 0.1 }} />
      <CardContent sx={{ padding: '0.75rem!important' }}>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          sx={{
            fontSize: '0.75rem',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height: '4.5em',
            lineHeight: '1.5em',
            wordWrap: 'break-word',
            wordBreak: 'break-word',
          }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
    <FileMenu />
    </>
  );
};
