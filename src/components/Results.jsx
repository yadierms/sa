import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { CALCULATOR, formatCurrency } from "../utils/helpers";

function Results({ formState }) {
  const { monthlySalary, extraHours, bonifications, timeWorking } = formState;
  const { getAFP, getChristmasBonus, getISR, getSFS, getVacations } =
    CALCULATOR;

  const rawSalary = +monthlySalary + +extraHours + +bonifications;
  const rawSalaryBon = +monthlySalary + +bonifications;

  const AFP = getAFP(rawSalaryBon);
  const ISR = getISR(rawSalary);
  const SFS = getSFS(rawSalaryBon);
  const vacations = getVacations(monthlySalary, timeWorking);
  const christmasBonus = getChristmasBonus(monthlySalary, timeWorking);
  const netSalary = rawSalary - ISR - AFP - SFS;

  return (
    <Card backgroundColor="gray.300">
      <CardHeader>
        <Heading size="md">Results</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              AFP:
            </Heading>
            <Text pt="2" fontSize="sm">
              {formatCurrency(AFP)}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              ARS/SFS:
            </Heading>
            <Text pt="2" fontSize="sm">
              {formatCurrency(SFS)}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              ISR:
            </Heading>
            <Text pt="2" fontSize="sm">
              {formatCurrency(ISR)}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              VACATIONS:
            </Heading>
            <Text pt="2" fontSize="sm">
              {formatCurrency(vacations)}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              CHRISTMAS BONUS:
            </Heading>
            <Text pt="2" fontSize="sm">
              {formatCurrency(christmasBonus)}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              NET MONTHLY SALARY:
            </Heading>
            <Text pt="2" fontSize="sm">
              {formatCurrency(netSalary)}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Results;
