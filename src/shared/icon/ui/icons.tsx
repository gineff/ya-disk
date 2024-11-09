import CloseIcon from '@mui/icons-material/Close';
import FolderIcon from '@mui/icons-material/Folder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//const defaultProps16 = { sx: { width: '16px', height: '16px', color: '#87878B' } };
const defaultProps40 = { sx: { width: '40px', height: '40px', color: '#87878B' } };

export const icons = {
  close: <CloseIcon {...defaultProps40} />,
  folder: <FolderIcon {...defaultProps40} />,
  forward: <ArrowForwardIcon {...defaultProps40} />,
  back: <ArrowBackIcon {...defaultProps40} />,
};

export type IconType = Nullable<keyof typeof icons>;
