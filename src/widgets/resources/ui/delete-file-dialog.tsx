import React, { useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  } from '@mui/material';
  import { showDialog } from '@/app/services/slice';
  import { useAppDispatch, useAppSelector } from '@/app/services/store';

export const DeleteFileDialog = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const { activeDialog, activeResource } = useAppSelector((state) => state.app);

  useEffect(() => {
    if (activeDialog === 'deleteFile') {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [activeDialog]);

  const handleClose = () => {
    setOpen(false);
    dispatch(showDialog(null));
  };

  console.log('activeResource', activeResource);
  return (
    <Dialog open={open} onClose={handleClose} sx={{ zIndex: 1001 }}>
      <DialogTitle id="alert-dialog-title">{'Вы уверены, что хотите удалить файл?'}</DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          sx={{ breakWord: 'break-all', whiteSpace: 'pre-line' }}
        >
          {activeResource?.name}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button onClick={handleClose} autoFocus>
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
