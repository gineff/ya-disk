import { useEffect, useState } from 'react';
import { FileMenu } from '../ui/file-menu';
import { useAppDispatch, useAppSelector } from '@/app/services/store';
import { showResourceContextMenu, hideResourceContextMenu } from '@/app/services/slice';

export const useFileMenu = ({ fileId }: { fileId: string }) => {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const dispatch = useAppDispatch();
  const resourceIdForContextMenu = useAppSelector(
    (state) => state.app.resourceIdForContextMenu
  );

  useEffect(() => {
    if (resourceIdForContextMenu !== fileId) {
      setMenuAnchor(null);
    }
  }, [resourceIdForContextMenu, fileId]);

  const handleMenuClose = () => {
    setMenuAnchor(null);
    dispatch(hideResourceContextMenu())
  };

  const showFileMenu = ({ menuAnchor }: { menuAnchor: HTMLElement | null }) => {
    setMenuAnchor(menuAnchor);
    dispatch(showResourceContextMenu(fileId))
  };

  return {
    FileMenu: () => (
      <FileMenu menuAnchor={menuAnchor} handleClose={handleMenuClose} fileId={fileId} />
    ),
    showFileMenu,
  };
};
