import { Header } from '@/widgets/header';
import { Box, Container, Stack } from '@mui/material';
import { Outlet } from 'react-router';

export const BaseLayout = () => {
  return (
    <Box
      sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'row',  }}
      px={4}
    >
      <Stack component="aside" sx={{ minWidth: '120px' }}></Stack>
      <Box flex={1}>
        <Header />
        <Container sx={{ flex: 1 }} component="main">
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};
