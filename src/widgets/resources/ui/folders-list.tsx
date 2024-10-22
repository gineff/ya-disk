import {
  Alert,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
} from '@mui/material';
import { FC, useState } from 'react';
import { FoldersListProps } from '../types';
import { Icon } from '@/shared/icon';
import { useGetResourceQuery } from '@/entities/resources/api';
import { Loader } from '@/shared/loader';
import { Breadcrumbs } from '@/shared/breadcrumbs';
import { createCrumbs } from '@/shared/breadcrumbs';
import { Resource } from '@/entities/resources';

export const FoldersList: FC<FoldersListProps> = ({
  initialPath = 'disk:/',
  handleSelectFolder = () => void 0,
}) => {
  //const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentFolderPath, setCurrentFolderPath] = useState(initialPath);

  const { data, isError, error, isFetching, isLoading } = useGetResourceQuery({
    path: currentFolderPath,
  });

  const folders: Resource[] = data?._embedded.items.filter((item) => item.type === 'dir') ?? [];
  const errorMessage = (error as ApiError)?.data.message || 'Произошла ошибка при загрузке.';

  const handleClick = (path: string) => {
    setCurrentFolderPath(path);
    handleSelectFolder(path);
  };

  const crumbs = createCrumbs(currentFolderPath);

  return (
    <Box>
      {isError && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {errorMessage}
        </Alert>
      )}
      <Breadcrumbs crumbs={crumbs} onCrumbClick={handleClick} sx={{ my: 2 }} />

      <Divider variant="middle" color="white" sx={{ opacity: 0.1 }} />
      <List>
        {folders?.map((folder) => (
          <ListItem key={folder.resource_id} disablePadding>
            <ListItemButton
              onClick={() => handleClick(folder.path)}
              //onDoubleClick={() => handleDoubleClick(folder.path)}
              //selected={selectedIndex === index}
            >
              <ListItemIcon>
                <Icon type="folder" />
              </ListItemIcon>
              <ListItemText primary={folder.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Modal open={isFetching || isLoading}>
        <Box>
          <Loader />
        </Box>
      </Modal>
    </Box>
  );
};
