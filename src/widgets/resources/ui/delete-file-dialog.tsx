import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Alert,
} from '@mui/material';
import { useDeleteResourceMutation } from '@/entities/resources/api';
import { Loader } from '@/shared/loader';
import { FC, useEffect } from 'react';
import { DeleteFileDialogProps } from '../types';

export const DeleteFileDialog: FC<DeleteFileDialogProps> = ({ resource, isOpen, handleClose }) => {
  const [deleteResource, { isLoading, isSuccess, isError, error }] = useDeleteResourceMutation();

  const handleDeleteFile = async () => {
    await deleteResource(resource);
  };

  useEffect(() => {
    if (isSuccess) {
      handleClose();
    }
  }, [isSuccess]);

  return (
    <Dialog open={isOpen} onClose={handleClose} sx={{ zIndex: 1001 }}>
      <DialogTitle id="alert-dialog-title">{'Вы уверены, что хотите удалить файл?'}</DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          sx={{ breakWord: 'break-all', whiteSpace: 'pre-line' }}
        >
          {resource?.name}
        </DialogContentText>
        {isLoading && <Loader />}
        {isError && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {(error as ApiError)?.data.message || 'Произошла ошибка при удалении файла.'}
          </Alert>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button onClick={handleDeleteFile} autoFocus disabled={isLoading}>
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
