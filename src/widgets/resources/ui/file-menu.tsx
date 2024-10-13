import { Menu, MenuItem } from '@mui/material';
import { FileMenuProps } from '../types';

export const FileMenu: React.FC<FileMenuProps> = ({ menuAnchor, handleClose, items }) => {
  const isOpen = Boolean(menuAnchor);

  return (
    <Menu id="basic-menu" anchorEl={menuAnchor} open={isOpen} onClose={handleClose}>
      {items.map((item) => (
        <MenuItem key={item.label} onClick={item.onClick}>
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
};
