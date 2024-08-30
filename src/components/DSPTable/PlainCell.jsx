import { Container } from "@chakra-ui/react";

const PlainCell = ({ getValue, row, column, table }) => {
  const value = getValue();
  const displayValue = Array.isArray(value) ? value.join(', ') : value;
  return (
    <Container padding='2' overflow='hidden' w='90%' textOverflow='ellipsis'>
      {displayValue}
    </Container>
  );
};

export default PlainCell;
