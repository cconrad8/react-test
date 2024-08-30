import { Container, Link } from "@chakra-ui/react";

const LinkCell = ({ getValue, row, column, table }) => {
  const value = getValue();
  return (
    <Container padding='2' w='90%' overflow='hidden' textOverflow='ellipsis'>
      <Link color='teal.500' href={value}>
        Link
      </Link>
    </Container>
  );
};

export default LinkCell;
