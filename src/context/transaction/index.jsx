import React, { createContext, useEffect, useState } from "react";
import { fetchTransactionData } from "../../service/data";

// Initial filter state
const INITIAL_FILTER = {
  date: "",
  minPrice: null,
  maxPrice: null,
  type: "",
  category: "",
};

// Create context
const TransactionContext = createContext();

/**
 * TransactionProvider - Manages transaction state and CRUD operations.
 */
export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState(INITIAL_FILTER);

  // Fetch transactions on mount
  useEffect(() => {
    fetchTransactionData().then(setTransactions);
  }, []);

  // CRUD operations
  const addTransaction = (txn) => setTransactions((prev) => [...prev, txn]);
  const updateTransaction = (id, updated) =>
    setTransactions((prev) =>
      prev.map((txn) => (txn.id === id ? { ...txn, ...updated } : txn))
    );
  const deleteTransaction = (id) =>
    setTransactions((prev) => prev.filter((txn) => txn.id !== id));

  // Filtering logic
  const filteredTransactions = transactions.filter((txn) => {
    if (filter.category && txn.category !== filter.category) return false;
    if (filter.type && txn.type !== filter.type) return false;
    if (filter.date && txn.date !== filter.date) return false;
    if (filter.minPrice && Number(txn.amount) < Number(filter.minPrice))
      return false;
    if (filter.maxPrice && Number(txn.amount) > Number(filter.maxPrice))
      return false;
    return true;
  });

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        filteredTransactions,
        filter,
        setFilter,
        addTransaction,
        updateTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionContext;
