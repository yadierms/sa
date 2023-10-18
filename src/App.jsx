import { Container, Heading } from "@chakra-ui/react";
import Results from "./components/Results";
import FormApp from "./components/FormApp";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState(null);

  const onFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <Container as="main" minWidth={{ base: "sm", md: "xl" }} py="20px">
      <Heading
        mb="20px"
        as="h1"
        bgColor="rgba(13,110,253,255) "
        color="white"
        py="1rem"
        mt="4px"
        size="md"
        textAlign="center"
        verticalAlign="center"
        rounded="md"
      >
        Salary Discount Calculator
      </Heading>
      <Heading as="h2" mb="20px">
        Input
      </Heading>
      <FormApp onFormSubmit={onFormSubmit} />
      {formData && <Results formState={formData} />}
    </Container>
  );
}

export default App;
