import { useEffect, useState, FC } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Alert,
} from '@mui/material';

import { Loader } from '@/shared/loader';
import { useMoveResourceMutation } from '@/entities/resources/api';
import { FoldersList } from './folders-list';
import { getResourceFolder } from '@/entities/resources';
import { combinePaths } from '@/shared/lib/combine-paths';
import { MoveFileDialogProps } from '../types';

export const MoveFileDialog: FC<MoveFileDialogProps> = ({ resource, isOpen, handleClose }) => {
  const [destinationPath, setDestinationPath] = useState(getResourceFolder(resource));
  const [moveResource, { isLoading, isSuccess, isError, error }] = useMoveResourceMutation();

  useEffect(() => {
    if (isSuccess) {
      handleClose();
    }
  }, [isSuccess]);

  const isSamePath = getResourceFolder(resource) === destinationPath;

  const handleMoveFile = async () => {
    await moveResource({
      from: resource.path,
      to: combinePaths(destinationPath, resource.name),
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
          {resource.path}
        </DialogContentText>
        {isLoading && <Loader />}
        {isError && (
          <Alert severity="error" sx={{ my: 2 }}>
            {(error as ApiError)?.data.message || 'Произошла ошибка при перемещении.'}
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
