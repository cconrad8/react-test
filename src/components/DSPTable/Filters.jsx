import {
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import SearchIcon from "./icons/SearchIcon";

const Filters = ({ columnFilters, setColumnFilters }) => {
  const studyName = columnFilters.find((f) => f.id === "studyName")?.value || "";

  const onFilterChange = (id, value) =>
    setColumnFilters((prev) =>
      prev
        .filter((f) => f.id !== id)
        .concat({
          id,
          value,
        })
    );

  return (
    <HStack mb={6} spacing={3}>
      <InputGroup size="sm" maxW="24rem">
        <InputLeftElement pointerEvents="none">
          <Icon as={SearchIcon} />
        </InputLeftElement>
        <Input
          type="text"
          variant="filled"
          placeholder="study name"
          borderRadius={5}
          value={studyName}
          onChange={(e) => onFilterChange("studyName", e.target.value)}
        />
      </InputGroup>
      
    </HStack>
  );
};
export default Filters;
