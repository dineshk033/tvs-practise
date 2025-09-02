import { useEffect, useState } from "react";
import { fetchTransactionData } from "../service/data";
/**
 * Initial filter state for transactions.
 */
const INITIAL_FILTER = {
  date: "",
  minPrice: null,
  maxPrice: null,
  type: "",
  category: "",
};

/**
 * Custom hook to manage and filter transactions.
 * @returns {object} filtered transactions, filter state, and handlers
 */
function useTransactionFilter(initialData) {
  const [dataSource, setDataSource] = useState([]);
  const [filteredTxn, setFilteredTxn] = useState([]);
  const [filterProps, setFilterProps] = useState(INITIAL_FILTER);

  // Fetch transaction data on mount
  useEffect(() => {
    fetchTransactionData().then((data) => {
      setDataSource(data);
      setFilteredTxn(data);
    });
  }, []);

  // Filter transactions whenever filterProps or dataSource changes
  useEffect(() => {
    setFilteredTxn(
      dataSource.filter((item) => {
        // Filter by category
        if (filterProps.category && item.category !== filterProps.category)
          return false;
        // Filter by type
        if (filterProps.type && item.type !== filterProps.type) return false;
        // Filter by date
        if (filterProps.date && item.date !== filterProps.date) return false;
        // Filter by min price
        if (
          filterProps.minPrice &&
          Number(item.amount) < Number(filterProps.minPrice)
        )
          return false;
        // Filter by max price
        if (
          filterProps.maxPrice &&
          Number(item.amount) > Number(filterProps.maxPrice)
        )
          return false;
        return true;
      })
    );
  }, [filterProps, dataSource]);

  // Handler to update filter state
  const handleFilter = (filter) => {
    setFilterProps(filter ? filter : INITIAL_FILTER);
  };

  return {
    filteredTxn,
    filterProps,
    handleFilter,
  };
}

export default useTransactionFilter;
