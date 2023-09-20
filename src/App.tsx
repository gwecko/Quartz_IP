import {
  Box,
  Heading,
} from "@chakra-ui/react";

import DataCards from "./DataCards";
import SearchBox from "./SearchBox";
import { useState } from "react";
import getData from "./getData";

function App() {
  
  // assign data to a variable array
  const data = getData();
  
  // make query accessible from SearchBox to DataCards component
  const [searchQuery, setSearchQuery] = useState<string>('');
  const handleQuery = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      {/* Container div */}
      <Box
        minH={"100vh"}
        m={0}
        p={0}
        alignContent={"center"}
        bgGradient={"linear(to top, orange.100, gray.300 40%)"}
        bgSize={'cover'}
      >
        <Box maxW={{ md: "90%", lg: "900px" }} mx={"auto"} px={5}>
          <Heading px={'2'} py={6} color={'gray.500'}>Wecker Quartz IP Assessment • 9/20/23</Heading>
          <Box maxW={"400px"} px={2} py={4}>
            <SearchBox onSearch={handleQuery} />
          </Box>
          <DataCards query={searchQuery} data={data}/>
        </Box>
      </Box>
    </>
  );
}

export default App;
