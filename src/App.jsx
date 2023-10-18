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
    <Container as="main" minWidth={{ base: "sm", md: "4xl" }} py="20px">
      <Heading
        mb="20px"
        as="h1"
        bgColor="#0d6efd"
        color="white"
        fontWeight={400}
        py="1rem"
        mt="4px"
        size="md"
        textAlign="center"
        verticalAlign="center"
        rounded="md"
        fontSize={{ base: "xl", md: "3xl" }}
        fontFamily="'Kdam Thmor Pro', sans-serif"
      >
        Salary Discount Calculator
      </Heading>
      <Heading as="h2" mb="20px" fontSize={{ base: "lg", md: "2xl" }}>
        Input
      </Heading>
      <FormApp onFormSubmit={onFormSubmit} />
      {formData && <Results formState={formData} />}
    </Container>
  );
}

export default App;
