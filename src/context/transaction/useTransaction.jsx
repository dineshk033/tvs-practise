import { useContext } from "react";
import TransactionContext from ".";

/**
 * Custom hook to consume TransactionContext.
 */
export default function useTransactionContext() {
  return useContext(TransactionContext);
}
