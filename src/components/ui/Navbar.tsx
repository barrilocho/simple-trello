import { FC } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

interface Props {
  onToggleSidebar: () => void;
}

export const Navbar: FC<Props> = ({ onToggleSidebar }) => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton
          onClick={onToggleSidebar}
          color="inherit"
          size="large"
          edge="start"
        >
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">Simple trello</Typography>
      </Toolbar>
    </AppBar>
  );
};
