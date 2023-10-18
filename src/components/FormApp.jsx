import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

function FormApp({ onFormSubmit }) {
  const initalState = {
    monthlySalary: "",
    bonifications: "",
    extraHours: "",
  };

  const [formState, setFormState] = useState(initalState);

  function handleSubmit(event) {
    event.preventDefault();
    onFormSubmit(formState);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  }

  return (
    <Box maxW="sm">
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel fontSize={{ base: "sm", md: "md" }}>
            Monthly Salary (in DOP)
          </FormLabel>
          <Input
            placeholder="Monthly Salary"
            type="number"
            onChange={handleInputChange}
            name="monthlySalary"
            value={formState.monthlySalary}
          />
        </FormControl>
        <FormControl mt={2}>
          <FormLabel>Bonifications (in DOP)</FormLabel>
          <Input
            placeholder="Bonifications"
            type="number"
            onChange={handleInputChange}
            name="bonifications"
            value={formState.bonifications}
          />
        </FormControl>
        <FormControl mt={2}>
          <FormLabel>Extra Hours (in DOP)</FormLabel>
          <Input
            placeholder="Extra Hours"
            type="number"
            onChange={handleInputChange}
            name="extraHours"
            value={formState.extraHours}
          />
        </FormControl>
        <Button colorScheme="green" my="10px" type="submit">
          Calculate
        </Button>
      </form>
    </Box>
  );
}

export default FormApp;
