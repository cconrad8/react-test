import { Stack, Badge, Box } from "@chakra-ui/react";

export const ColorIcon = ({ color, ...props }) => (
  <Box w="12px" h="12px" bg={color} borderRadius="3px" {...props} />
);

const statusColorMap = new Map([
  ["filled", "green"],
  ["unfilled", "yellow"],
  ["waived", "pink"]
]);


const StatusCell = ({ getValue, row, column, table }) => {
  const value = getValue();
  const color = statusColorMap.get(value);
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
export default StatusCell;
