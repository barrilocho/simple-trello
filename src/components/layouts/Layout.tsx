import { FC, useContext } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import { Navbar, Sidebar } from '../ui';
import { UIContext } from '../../context/ui';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ title = 'Simple trello', children }) => {
  const { sidebarOpen, openSidebar, closeSidebar } = useContext(UIContext);

  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      {/* Navbar */}
      <Navbar onToggleSidebar={openSidebar} />
      {/* Sidebar */}
      <Sidebar onCloseSidebar={closeSidebar} isOpen={sidebarOpen} />
      <Box sx={{ padding: '10px 20px' }}>{children}</Box>
    </Box>
  );
};
