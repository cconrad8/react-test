import React from 'react';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import './SubmitObservation.css';
import SubmitObservationSchema from './SubmitObservationSchema.json';
import SubmitObservationUiSchema from './SubmitObservationUiSchema.json';
import ArrayFieldTemplate from './CustomArrayFieldTemplate.tsx';

function SubmitObservation() {
  const handleSubmit = ({ formData }) => {
    console.log('Form submitted:', formData);
    alert('Observation submitted successfully!');
  };

  return (
    <div className="observation-container">
      <h2>Submit Observation</h2>
      <Form
        schema={SubmitObservationSchema}
        uiSchema={SubmitObservationUiSchema}
        ArrayFieldTemplate={ArrayFieldTemplate}
        onSubmit={handleSubmit}
        validator={validator}
      />
    </div>
  );
}

export default SubmitObservation;
