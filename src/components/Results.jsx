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

function Results({ formState }) {
  const { monthlySalary, extraHours, bonifications } = formState;

  const { format } = new Intl.NumberFormat("es-US", {
    style: "currency",
    currency: "DOP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const DISCOUNTS = {
    AFP: (monthlySalary) => monthlySalary * 0.0287,
    SFS: (monthlySalary) => monthlySalary * 0.0304,
    ISR: (monthlySalary) => {
      const annualSalary = monthlySalary * 12;
      let taxValue = 0;

      if (annualSalary >= 416220.01 && annualSalary <= 624329)
        taxValue = 0.15 * (annualSalary - 416220.01);

      if (annualSalary >= 624329.01 && annualSalary <= 867123)
        taxValue = 31216 + 0.2 * (annualSalary - 624329.01);

      if (annualSalary >= 867123.01)
        taxValue = 79776 + 0.25 * (annualSalary - 867123.01);

      return taxValue / 12;
    },
    VACATIONS: (monthlySalary) => (monthlySalary / 23.83) * 14,
    CHRISMAS_BONUS: (monthlySalary) => (monthlySalary * 12) / 12,
  };

  return (
    <Card>
      <CardHeader>
        <Heading size="md">Results:</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              AFP:
            </Heading>
            <Text pt="2" fontSize="sm">
              {format(DISCOUNTS.AFP(monthlySalary))}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              ARS/SFS:
            </Heading>
            <Text pt="2" fontSize="sm">
              {format(DISCOUNTS.SFS(monthlySalary))}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              ISR:
            </Heading>
            <Text pt="2" fontSize="sm">
              {format(DISCOUNTS.ISR(monthlySalary))}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              VACATIONS
            </Heading>
            <Text pt="2" fontSize="sm">
              {format(DISCOUNTS.VACATIONS(monthlySalary))}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              CHRISTMAS BONUS:
            </Heading>
            <Text pt="2" fontSize="sm">
              {format(DISCOUNTS.CHRISMAS_BONUS(monthlySalary))}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              NET MONTHLY SALARY:
            </Heading>
            <Text pt="2" fontSize="sm">
              {format(monthlySalary)}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Results;
