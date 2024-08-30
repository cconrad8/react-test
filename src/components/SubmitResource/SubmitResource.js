import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import SubmitResourceSchema from './SubmitResourceSchema.json';
import SubmitResourceUiSchema from './SubmitResourceUiSchema.json';

function SubmitResource() {
  const handleSubmit = ({ formData }) => {
    console.log('Form submitted:', formData);
    alert('Resource submitted successfully!');
  };

  return (
    <Box maxWidth="600px" mx="auto" p={6} bg="gray.50" borderWidth="1px" borderRadius="md">
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Submit Resource
      </Heading>
      <Form
        schema={SubmitResourceSchema}
        uiSchema={SubmitResourceUiSchema}
        onSubmit={handleSubmit}
        validator={validator}
      >
        <Button type="submit" colorScheme="blue" width="full" mt={4}>
          Submit
        </Button>
      </Form>
    </Box>
  );
}

export default SubmitResource;
