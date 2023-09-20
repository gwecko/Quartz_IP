import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Box,
  Text,
  SlideFade,
} from "@chakra-ui/react";
import { QuartzIcon } from "./QuartzIcon";


/* define a type based on given object formatting. 
    Assuming all properties will be present */
type DataPoint = {
  id: number;
  name: string;
  city: string;
  state: string;
  favoriteAnimal: string;
  favoriteColor: string;
};

interface DataCardsProps {
  query: string;
  data: DataPoint[];
}

const DataCards: React.FC<DataCardsProps> = ({ query, data }) => {

  // show only the data that meets search criteria. non-case-sensitive.
  const filteredData = data.filter((item) => (
    item.name.toLowerCase().includes(query.toLowerCase())
  ));

  return (
  // Responsive layout
    <SimpleGrid columns={{ md: 2, lg: 3 }} spacing={1} mx={"auto"}>
      {filteredData.map((item, i) => {
        // destructure the object for cleaner code
        const { id, name, city, state, favoriteAnimal, favoriteColor } = item;
        
        return (
          <SlideFade in>
            <Card
              size={"sm"}
              variant={"outline"}
              boxShadow={"0px 5px 9px #FBD38D"}
              bgColor={"blackAlpha.500"}
              p={2}
              m={"0.4em"}
              borderColor={"orange.200"}
              borderRadius={"8px"}
              key={i}
            >
              <CardHeader textShadow={"0px 1px 8px rgb(80,80,80)"}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  lineHeight={"1.5em"}
                  alignItems={"center"}
                >
                  <Text fontSize={"3xl"} color={"gray.100"}>
                    {name}
                  </Text>
                  <Text color={"gray.200"}>ID: {id}</Text>
                </Box>
                <Text
                  color={"#f7b668"}
                  fontStyle={"italic"}
                  fontWeight={"semibold"}
                >
                  {city}, {state}
                </Text>
              </CardHeader>
              <CardBody
                color={"orange.50"}
                fontWeight={"light"}
                lineHeight={"1.3em"}
              >
                <Text>Favorite animal: {favoriteAnimal}</Text>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Text>Favorite color: {favoriteColor}</Text>
                  <QuartzIcon boxSize={7} />
                </Box>
              </CardBody>
            </Card>
          </SlideFade>
        );
      })}
    </SimpleGrid>
  );
};

export default DataCards;
