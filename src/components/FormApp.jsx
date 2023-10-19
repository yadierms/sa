import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";

function FormApp({ onFormSubmit }) {
  const options = [
    { value: "14", text: "1 to 5 years" },
    { value: "6", text: "5 months" },
    { value: "7", text: "6 months" },
    { value: "8", text: "7 months" },
    { value: "9", text: "8 months" },
    { value: "10", text: "9 months" },
    { value: "11", text: "10 months" },
    { value: "12", text: "11 months" },
    { value: "18", text: "More than 5 years" },
  ];

  const initalState = {
    monthlySalary: "",
    bonifications: "",
    extraHours: "",
    timeWorking: options[0].value,
  };

  const [formState, setFormState] = useState(initalState);

  function handleSubmit(event) {
    event.preventDefault();
    onFormSubmit(formState);
    console.log(formState.timeWorking);
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
        <FormControl mt={2}>
          <FormLabel>Time Working at the Company</FormLabel>
          <Select
            value={formState.timeWorking}
            onChange={handleInputChange}
            name="timeWorking"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button colorScheme="green" my="10px" type="submit">
          Calculate
        </Button>
      </form>
    </Box>
  );
}

export default FormApp;
