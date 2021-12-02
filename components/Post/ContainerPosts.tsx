import React from 'react';
import { Grid } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}
const ContainerPosts: React.FC<Props> = ({ children }) => (
  <Grid
    gap={8}
    templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
  >
    {children}
  </Grid>
);

export default ContainerPosts;
