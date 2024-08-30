import React from 'react';
import { Button, HStack, VStack, Box } from '@chakra-ui/react'; // Import Chakra UI components
import './CustomArrayFieldTemplate.css';


interface CustomArrayFieldTemplateProps {
  moveUpLabel?: string;
  moveDownLabel?: string;
  removeLabel?: string;
  addLabel?: string;
  items?: Array<any>; // Assuming items is an array
  canAdd?: boolean;
  onAddClick?: () => void;
  [key: string]: any; // Accommodate additional props
}

const CustomArrayFieldTemplate: React.FC<CustomArrayFieldTemplateProps> = ({
  moveUpLabel = "Move Up",
  moveDownLabel = "Move Down",
  removeLabel = "Remove",
  addLabel = "Add",
  items = [],
  canAdd = true,
  onAddClick,
  ...rest
}) => {
  return (
    <VStack spacing={4} className="custom-array-field">
      {items.map((element: any, index: number) => (
        <Box key={index} className="custom-array-item" w="100%">
          <Box mb={2} className="custom-array-item-content">{element.children}</Box>
          <HStack spacing={2} className="custom-array-item-buttons" justifyContent="flex-end">
            {element.hasMoveUp && (
              <Button
                type="button"
                onClick={() => element.onReorderClick(index, index - 1)}
                colorScheme="blue"
                variant="solid"
                size="sm"
                className="custom-array-item-move-up"
              >
                {moveUpLabel}
              </Button>
            )}
            {element.hasMoveDown && (
              <Button
                type="button"
                onClick={() => element.onReorderClick(index, index + 1)}
                colorScheme="blue"
                variant="solid"
                size="sm"
                className="custom-array-item-move-down"
              >
                {moveDownLabel}
              </Button>
            )}
            {element.hasRemove && (
              <Button
                type="button"
                onClick={() => element.onDropIndexClick(index)}
                colorScheme="red"  // Change color scheme to red for remove button
                variant="solid"
                size="sm"
                className="custom-array-item-remove"
              >
                {removeLabel}
              </Button>
            )}
          </HStack>
        </Box>
      ))}
      {canAdd && (
        <Box className="custom-array-item-add" w="100%" textAlign="right">
          <Button
            type="button"
            onClick={onAddClick}
            colorScheme="green"  // Change color scheme to green for add button
            variant="solid"
            size="md"
            className="custom-array-item-add-button"
          >
            {addLabel}
          </Button>
        </Box>
      )}
    </VStack>
  );
};

export default CustomArrayFieldTemplate;
