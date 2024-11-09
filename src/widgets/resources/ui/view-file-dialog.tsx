import { FC, ReactNode, useEffect, useState } from 'react';
import { ViewFileDialogProps } from '../types';
import { Box, Dialog, DialogActions, DialogContent, IconButton } from '@mui/material';
import { Icon } from '@/shared/icon';
import { Loader } from '@/shared/loader';
export const ViewFileDialog: FC<ViewFileDialogProps> = ({
  resource: stateResource,
  files,
  isOpen,
  handleClose,
}) => {
  const [position, setPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [position]);

  useEffect(() => {
    const resourceIndex = files.findIndex((file) => file.resource_id === stateResource.resource_id);
    if (resourceIndex >= 0) {
      setPosition(resourceIndex);
    }
  }, [stateResource, files]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && position > 0) {
        setPosition(position - 1);
      } else if (event.key === 'ArrowRight' && position < files.length - 1) {
        setPosition(position + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [position, files.length]);

  let content: ReactNode | null = null;
  const resource = files[position];
  if (resource.media_type === 'image') {
    content = (
      <>
        {isLoading && <Loader />}
        <img
          src={resource.sizes[0].url}
          style={
            isLoading
              ? { display: 'none' }
              : {
                  width: 'auto',
                  maxWidth: '100%',
                  height: '100%',
                  borderRadius: '8px',
                  objectFit: 'scale-down',
                }
          }
          onLoad={() => setIsLoading(false)}
          alt="image"
        />
      </>
    );
  } else {
    content = resource.name;
  }

  return (
    <Dialog
      onClose={handleClose}
      open={isOpen}
      maxWidth="xl"
      sx={{
        '& .MuiDialog-paper': {
          padding: '0!important',
          overflow: 'hidden!important',
          maxWidth: 'inherit',
        },
      }}
    >
      <DialogContent
        sx={{
          padding: '20px 20px 0px!important',
          width: 'calc(100vw - 100px)',
          height: 'calc(100vh - 154px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {content}
      </DialogContent>
      <DialogActions>
        <Box justifyContent="space-between" p={2} sx={{ paddingY: 0 }}>
          <IconButton onClick={() => setPosition(position - 1)} disabled={position === 0}>
            <Icon type="back" />
          </IconButton>
          <IconButton
            onClick={() => setPosition(position + 1)}
            disabled={position === files.length - 1}
          >
            <Icon type="forward" />
          </IconButton>
          <IconButton onClick={handleClose}>
            <Icon type="close" />
          </IconButton>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
