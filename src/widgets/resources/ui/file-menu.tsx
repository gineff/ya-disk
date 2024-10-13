import { Menu, MenuItem } from '@mui/material';
import { FileMenuProps } from '../types';

export const FileMenu: React.FC<FileMenuProps> = ({ menuAnchor, handleClose, fileId }) => {
  const isOpen = Boolean(menuAnchor);

  const handleRemoveFile = () => {
    console.log(fileId);
  };

  const handleMoveFile = () => {
    console.log(fileId);
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={menuAnchor}
      open={isOpen}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={handleMoveFile}>Перенести</MenuItem>
      <MenuItem onClick={handleRemoveFile}>Удалить</MenuItem>
    </Menu>
  );
};
