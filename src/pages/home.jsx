import { useState } from "react";
import { FilterPanel } from "../components/filter-panel";
import { TransactionTable } from "../components/transaction-table";
import TransactionModal from "../components/add-transaction";
import { TransactionProvider } from "../context/transaction";
import useTransactionContext from "../context/transaction/useTransaction";

/**
 * HomePage - Transaction Dashboard using TransactionContext.
 */
function HomeContent() {
  const {
    filteredTransactions,
    filter,
    setFilter,
    addTransaction,
    // updateTransaction, deleteTransaction // Use as needed
  } = useTransactionContext();
  const [search, setSearch] = useState(null);

  // Handler for searching by transaction ID (example)
  const handleSearch = (id) => setSearch(id);

  // Filter badges for active filters
  const activeFilters = Object.entries(filter)
    .filter(([_, value]) => value)
    .map(([key, value]) => (
      <span key={key} className="badge bg-danger me-2">
        {key}: {value}
      </span>
    ));

  // Optionally filter by search
  const displayedTransactions = search
    ? filteredTransactions.filter((txn) => txn.id === search)
    : filteredTransactions;

  return (
    <div className="container mt-4">
      <div className="row">
        <h4 className="mb-4">
          Transaction Dashboard
          <button
            type="button"
            className="btn btn-success btn-sm ms-3"
            data-bs-toggle="modal"
            data-bs-target="#transactionModal"
          >
            Add Transaction
          </button>
        </h4>
        {/* Filter Section */}
        <div className="col-md-3">
          <FilterPanel handleFilter={setFilter} />
        </div>
        {/* Table Section */}
        <div className="col-md-9">
          <div className="mb-2">{activeFilters}</div>
          <TransactionTable
            transactions={displayedTransactions}
            handleSearch={handleSearch}
          />
        </div>
      </div>
      <TransactionModal onAdd={addTransaction} />
    </div>
  );
}

/**
 * Wrap HomeContent with TransactionProvider for context access.
 */
export default function HomePage() {
  return (
    <TransactionProvider>
      <HomeContent />
    </TransactionProvider>
  );
}
