import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Home - Simple trello">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="To Do"></CardHeader>
            <CardContent></CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Doing"></CardHeader>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Done"></CardHeader>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
