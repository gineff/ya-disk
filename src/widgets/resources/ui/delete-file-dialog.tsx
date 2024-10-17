import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Alert,
} from '@mui/material';
import { showDialog } from '@/app/services/slice';
import { useAppDispatch, useAppSelector } from '@/app/services/store';
import { useDeleteResourceMutation, resourcesApi } from '@/entities/resources/api';
import { Loader } from '@/shared/loader';
import { SerializedError } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useGetQueryParams } from '../lib/use-get-query-params';


export const DeleteFileDialog = () => {
  const dispatch = useAppDispatch();
  const { activeDialog, activeResource } = useAppSelector((state) => state.app);
  const isOpen = activeDialog === 'deleteFile';
  const [deleteResource, { isLoading, isSuccess, isError, error }] = useDeleteResourceMutation();
  const errorMessage =
  (error as SerializedError)?.message || 'Произошла ошибка при удалении файла.';
  const queryParams = useGetQueryParams();

  const handleDeleteFile = async () => {
    if (activeResource) {
      await deleteResource({ path: activeResource.path });

      dispatch(
        resourcesApi.util.updateQueryData('getResource', queryParams, (draft) => {
          draft._embedded.items = draft._embedded.items.filter((item) => item.path !== activeResource.path);
        })
      );
    }
  };

  const handleClose = () => {
    dispatch(showDialog(null));
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
          {activeResource?.name}
        </DialogContentText>
        {isLoading && <Loader />}
        {isError && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {errorMessage}
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
