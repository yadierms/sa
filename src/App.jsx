import {
  Button,
  Container,
  Divider,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

function App() {
  return (
    <Container minWidth="4xl" py="20px">
      <Heading
        mb="20px"
        as="h1"
        bgColor="rgba(13,110,253,255) "
        color="white"
        padding="4px 2px"
        textAlign="center"
        verticalAlign="center"
        borderRadius="5px"
      >
        Salary Discount Calculator
      </Heading>
      <Heading as="h2" mb="20px">
        Input
      </Heading>
      <Text my="10px">Monthly Salary (in DOP)* </Text>
      <Input placeholder="Monthly Salary" type="number" />
      <Text my="10px">Bonifications (in DOP)* </Text>
      <Input placeholder="Bonifications" type="number" />
      <Text my="10px">Extra Hours (in DOP)* </Text>
      <Input placeholder="Extra Hours" type="number" />
      <Button bgColor="green.400" color="white" my="10px">
        Calculate
      </Button>
      <Divider />
      <Heading>Results: </Heading>
    </Container>
  );
}

export default App;
