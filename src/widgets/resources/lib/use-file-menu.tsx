import { useEffect, useState } from 'react';
import { FileMenu } from '../ui/file-menu';
import { useAppDispatch, useAppSelector } from '@/app/services/store';
import { setActiveResource, showDialog } from '@/app/services/slice';
import { Resource } from '@/entities/resources/types';

export const useFileMenu = (resource: Resource) => {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const dispatch = useAppDispatch();
  const activeResource = useAppSelector((state) => state.app.activeResource);

  useEffect(() => {
    if (resource === activeResource) {
      setMenuAnchor(null);
    }
  }, [activeResource, resource]);

  const handleMenuClose = () => {
    setMenuAnchor(null);
    dispatch(setActiveResource(null));
  };

  const showFileMenu = async ({ menuAnchor }: { menuAnchor: HTMLElement | null }) => {
    await dispatch(setActiveResource(resource));
    setMenuAnchor(menuAnchor);
  };

  const handleRemoveFile = () => {
    dispatch(showDialog('deleteFile'));
    setMenuAnchor(null);
  };

  const handleMoveFile = () => {
    dispatch(showDialog('moveFile'));
    setMenuAnchor(null);
  };

  const items = [
    { label: 'Перенести', onClick: handleMoveFile },
    { label: 'Удалить', onClick: handleRemoveFile },
  ];

  return {
    FileMenu: () => (
      <FileMenu menuAnchor={menuAnchor} handleClose={handleMenuClose} items={items} />
    ),
    showFileMenu,
  };
};
