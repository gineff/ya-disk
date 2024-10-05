import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
} from '@mui/material';
import CameraIcon from '@mui/icons-material/Camera';

export const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        borderRadius: 0,
        mb: 3,
        bgcolor: 'background.default',
        boxShadow: 'none',
        borderBottom: '1px solid rgb(58 58 60 / 50%)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between',  }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CameraIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              YaDisk
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
