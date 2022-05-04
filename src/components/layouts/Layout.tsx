import { FC } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import { Navbar } from '../ui/Navbar';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ title = 'Simple trello', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      {/* Navbar */}
      <Navbar onToggleSidebar={() => {}} />
      {/* Sidebar */}
      <Box sx={{ padding: '10px 20px' }}>{children}</Box>
    </Box>
  );
};
