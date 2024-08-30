import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import SubmitResource from '../components/SubmitResource/SubmitResource';

const Resource = () => (
  <Box p={4}>
    <Heading as="h1" size="xl" mb={4}>
      Submit Resource
    </Heading>
    <SubmitResource />
  </Box>
);

export default Resource;
