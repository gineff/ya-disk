import { useAppSelector } from '@/app/services/store';
import { DeleteFileDialog } from './delete-file-dialog';
import { MoveFileDialog } from './move-file-dialog';
import { showDialog } from '@/app/services/slice';
import { useAppDispatch } from '@/app/services/store';

export const ResourceDialog = () => {
  const dispatch = useAppDispatch();
  const { activeDialog: dialog, activeResource: resource } = useAppSelector(
    (state) => state.app,
  );

  const handleClose = () => {
    dispatch(showDialog(null));
  };

  if (!resource) {
    return null;
  }

  switch (dialog) {
    case 'deleteFile':
      return <DeleteFileDialog resource={resource} isOpen={true} handleClose={handleClose} />;
    case 'moveFile':
      return <MoveFileDialog resource={resource} isOpen={true} handleClose={handleClose} />;
    default:
      return null;
  }
};
