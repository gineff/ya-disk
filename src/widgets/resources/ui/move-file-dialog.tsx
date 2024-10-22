import { useEffect, useState } from 'react';
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
import { Loader } from '@/shared/loader';
import { useMoveResourceMutation } from '@/entities/resources/api';
import { FoldersList } from './folders-list';
import { getResourceFolder } from '@/entities/resources';
import { combinePaths } from '@/shared/lib/combine-paths';
//import { useGetQueryParams } from '../lib/use-get-query-params';

export const MoveFileDialog = () => {
  //const queryParams = useGetQueryParams();
  const { activeDialog, activeResource } = useAppSelector((state) => state.app);
  const [destinationPath, setDestinationPath] = useState('disk:/');
  const dispatch = useAppDispatch();
  const isOpen = activeDialog === 'moveFile';
  const [moveResource, { isLoading, isSuccess, isError, error }] = useMoveResourceMutation();
  const errorMessage = (error as ApiError)?.data.message || 'Произошла ошибка при перемещении.';

  useEffect(() => {
    if (isSuccess) {
      handleClose();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (activeResource) {
      setDestinationPath(getResourceFolder(activeResource));
    }
  }, [activeResource]);

  if (!activeResource) {
    return null;
  }

  const isSamePath = getResourceFolder(activeResource) === destinationPath;

  const handleClose = () => {
    dispatch(showDialog(null));
  };

  //console.log(getResourceFolder(activeResource), destinationPath);

  const handleMoveFile = async () => {
    await moveResource({
      from: activeResource.path,
      to: combinePaths(destinationPath, activeResource.name),
    });
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      sx={{
        '& .MuiDialog-paper': {
          minWidth: '480px',
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">{`Переместить файл ?`}</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ breakWord: 'break-all', whiteSpace: 'pre-line' }}>
          {activeResource?.path}
        </DialogContentText>
        {isLoading && <Loader />}
        {isError && (
          <Alert severity="error" sx={{ my: 2 }}>
            {errorMessage}
          </Alert>
        )}
        <FoldersList
          handleSelectFolder={(path) => setDestinationPath(path)}
          initialPath={destinationPath}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button onClick={handleMoveFile} autoFocus disabled={isLoading || isError || isSamePath}>
          Переместить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
