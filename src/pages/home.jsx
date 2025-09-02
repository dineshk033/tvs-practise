import { useState } from "react";
import { FilterPanel } from "../components/filter-panel";
import { TransactionTable } from "../components/transaction-table";
import TransactionModal from "../components/add-transaction";
import useTransactionFilter from "../hooks/useTransaction";

/**
 * HomePage component - Transaction Dashboard
 */
function HomePage() {
  const { filteredTxn, filterProps, handleFilter } = useTransactionFilter([]);
  const [search, setSearch] = useState(null);

  // Handler for searching by transaction ID
  const handleSearch = (id) => {
    setSearch(id);
  };

  // Filter badges for active filters
  const activeFilters = Object.entries(filterProps)
    .filter(([_, value]) => value)
    .map(([key, value]) => (
      <span key={key} className="badge bg-danger me-2">
        {key}: {value}
      </span>
    ));

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
          <FilterPanel handleFilter={handleFilter} />
        </div>
        {/* Table Section */}
        <div className="col-md-9">
          <div className="mb-2">{activeFilters}</div>
          <TransactionTable
            transactions={filteredTxn}
            handleSearch={handleSearch}
          />
        </div>
      </div>
      <TransactionModal />
    </div>
  );
}

export default HomePage;
