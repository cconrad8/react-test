import * as React from "react";

import { HStack, Box } from "@chakra-ui/react";

import { ObjectFieldTemplateProps } from "@rjsf/core";
import { utils } from "@rjsf/core";

const ObjectRowFieldTemplate = ({
  DescriptionField,
  description,
  TitleField,
  title,
  properties,
  required,
  disabled,
  readonly,
  uiSchema,
  idSchema,
  schema,
  formData,
  onAddClick
}: ObjectFieldTemplateProps) => {
  const { canExpand } = utils;

  return (
    <React.Fragment>
      <HStack spacing="5px">
        {properties.map((element, index) =>
          element.hidden ? (
            element.content
          ) : (
            <Box key={`${idSchema.$id}-${element.name}-${index}`} w="100px">
              {element.content}
            </Box>
          )
        )}
        {canExpand(schema, uiSchema, formData) && (
          <Box justifySelf="flex-end">add</Box>
        )}
      </HStack>
    </React.Fragment>
  );
};

export default ObjectRowFieldTemplate;
