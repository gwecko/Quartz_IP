import React, { useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

interface SearchBoxProps {
  onSearch: (keyword: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  
  /* Don't necessarily need to make this state-ful but it's helpful 
  to have in case of future functionality needs */
  const [searchQuery, setSearchQuery] = useState<string>("");

  /* opted for search-on-each-keypress functionality due to small data set */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query);
    onSearch(query)
  };

  return (
    <Box>
      <InputGroup>
        <Input
          type="text"
          placeholder="Search by name..."
          size={"md"}
          variant={"outline"}
          value={searchQuery}
          onChange={handleInputChange}
          borderTop={"none"}
          borderLeft={"none"}
          borderRight={"none"}
          focusBorderColor="transparent"
          _focus={{ borderBottom: "3px solid #F6AD55" }}
          borderColor={"blackAlpha.300"}
          borderWidth={"2px"}
          borderRadius={"1px"}
        />
        <InputRightElement fontSize={"lg"}>
          <Search2Icon
            aria-label="Search"
            color={"gray.400"}
            borderLeftRadius={"1px"}
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default SearchBox;
