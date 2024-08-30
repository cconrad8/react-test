import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import SubmitObservation from '../components/SubmitObservation/SubmitObservation';

const Observation = () => (
  <Box p={4}>
    <Heading as="h1" size="xl" mb={4}>
      Submit Observation
    </Heading>
    <SubmitObservation />
  </Box>
);

export default Observation;
