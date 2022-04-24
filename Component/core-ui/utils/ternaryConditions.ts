type ternaryConditionsTypes = (
  condition: boolean,
  truthyClass: string,
  falsyClass: string
) => string;

export const ternaryConditions: ternaryConditionsTypes = (
  condition,
  truthyClass,
  falsyClass
) => {
  return condition ? truthyClass : falsyClass;
};
