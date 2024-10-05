import { Menu, MenuItem } from '@mui/material';

export const FileMenu: React.FC<{
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
}> = ({ isOpen, anchorEl, handleClose }) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={isOpen}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={handleClose}>Перенести</MenuItem>
      <MenuItem onClick={handleClose}>Удалить</MenuItem>
    </Menu>
  );
};
