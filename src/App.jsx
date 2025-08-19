// App.jsx
import { useState } from "react";
import TransactionForm from "./components/add-transaction";
import { FilterPanel } from "./components/filter-panel";
import { TransactionTable } from "./components/transaction-table";
import { transactions } from "./mock/transaction";

function App() {
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
        {/* Filter Section - 3 columns */}
        <div className="col-md-3">
          <FilterPanel />
        </div>

        {/* Table Section - 9 columns */}
        <div className="col-md-9">
          <TransactionTable transactions={transactions} />
        </div>
      </div>
      <TransactionForm />
    </div>
  );
}

export default App;
