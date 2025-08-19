export const validateTXN = (arg) => {
  const REQUIRED = ["id", "amount", "type", "category", "date"];
  for (let key of REQUIRED) {
    if (!arg[key]) {
      return { [key]: "Required value" };
    }
  }
  return {};
};
