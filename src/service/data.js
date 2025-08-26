import { transactions } from "../mock/transaction";

export const fetchTransactionData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(transactions);
    }, 500);
  });
};
