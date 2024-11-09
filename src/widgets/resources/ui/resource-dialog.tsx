import { useAppSelector } from '@/app/services/store';
import { DeleteFileDialog } from './delete-file-dialog';
import { MoveFileDialog } from './move-file-dialog';
import { showDialog } from '@/app/services/slice';
import { useAppDispatch } from '@/app/services/store';
import { ViewFileDialog } from './view-file-dialog';
import { Resource } from '@/entities/resources';

export const ResourceDialog = ({ resources }: { resources: Resource[] }) => {
  const dispatch = useAppDispatch();
  const { activeDialog: dialog, activeResource: resource } = useAppSelector((state) => state.app);

  const handleClose = () => {
    dispatch(showDialog(null));
  };

  if (!resource) {
    return null;
  }

  const dialogProps = {
    resource,
    isOpen: true,
    handleClose,
  };

  switch (dialog) {
    case 'deleteFile':
      return <DeleteFileDialog {...dialogProps} />;
    case 'moveFile':
      return <MoveFileDialog {...dialogProps} />;
    case 'viewFile':
      return (
        <ViewFileDialog {...dialogProps} files={resources.filter((item) => item.type === 'file')} />
      );
    default:
      return null;
  }
};
