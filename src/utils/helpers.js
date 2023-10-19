export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "DOP",
  }).format(value);
}

export const CALCULATOR = {
  getAFP: (salary) => salary * 0.0287,
  getSFS: (salary) => salary * 0.0304,
  getISR: (salary) => {
    const annualSalary = salary * 12;
    let taxValue = 0;
    if (annualSalary >= 416220.01 && annualSalary <= 624329)
      taxValue = 0.15 * (annualSalary - 416220.01);

    if (annualSalary >= 624329.01 && annualSalary <= 867123)
      taxValue = 31216 + 0.2 * (annualSalary - 624329.01);

    if (annualSalary >= 867123.01)
      taxValue = 79776 + 0.25 * (annualSalary - 867123.01);

    return taxValue / 12;
  },
  getVacations: (monthlySalary, timeWorking) =>
    (monthlySalary / 23.83) * Number(timeWorking),
  getChristmasBonus: (monthlySalary, timeWorking) => {
    const timeValue = Number(timeWorking) - 1;
    if (timeValue > 12) {
      return (monthlySalary * 12) / 12;
    }
    return (monthlySalary * timeValue) / 12;
  },
};
