import { FC } from 'react';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const menuItems: string[] = ['Inbox', 'Starred', 'Send email', 'Drafts'];

interface Props {
  isOpen: boolean;
  onCloseSidebar: () => void;
}

export const Sidebar: FC<Props> = ({ isOpen, onCloseSidebar }) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onCloseSidebar}>
      <Box sx={{ padding: '5px 10px' }}>
        <Typography variant="h4"> Menu </Typography>
      </Box>
      <Box sx={{ width: 250 }}>
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? (
                  <InboxOutlinedIcon />
                ) : (
                  <MailOutlineOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};
