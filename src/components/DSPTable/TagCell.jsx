import { Stack, Badge, Tag, Box, Wrap, WrapItem, Center } from "@chakra-ui/react";

export const ColorIcon = ({ color, ...props }) => (
  <Box w="12px" h="12px" bg={color} borderRadius="3px" {...props} />
);

const TagCell = ({ getValue, row, column, table }) => {
  const value = getValue();
  const color = value == "filled"? "green" : "red";
  return (
    <Box padding='2'>
      <Stack direction='row'>
        <Badge size='4' variant='subtle' colorScheme={color}>
        {value}
        </Badge>
    </Stack>
    </Box>
   );
};
export default TagCell;
