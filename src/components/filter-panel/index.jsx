// components/FilterPanel.jsx
import React from "react";

export const FilterPanel = () => {
  return (
    <div className="card border-0">
      <div className="card-body">
        <h5 className="card-title">Filter Transactions</h5>
        <form>
          {/* Date Filter */}
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input type="date" className="form-control" />
          </div>

          {/* Amount Range */}
          <div className="mb-3">
            <label className="form-label">Amount Range</label>
            <div className="d-flex gap-2">
              <input type="number" className="form-control" placeholder="Min" />
              <input type="number" className="form-control" placeholder="Max" />
            </div>
          </div>

          {/* Transaction Type */}
          <div className="mb-3">
            <label className="form-label">Type</label>
            <select className="form-select">
              <option value="">All</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
          </div>

          {/* Category */}
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select className="form-select">
              <option value="">All</option>
              <option value="salary">Salary</option>
              <option value="food">Food</option>
              <option value="shopping">Shopping</option>
              <option value="rent">Rent</option>
              <option value="transport">Transport</option>
              <option value="utilities">Utilities</option>
              <option value="entertainment">Entertainment</option>
              <option value="gift">Gift</option>
              <option value="bonus">Bonus</option>
              <option value="refund">Refund</option>
              <option value="freelance">Freelance</option>
            </select>
          </div>

          <button type="button" className="btn btn-primary w-100">
            Apply Filter
          </button>
        </form>
      </div>
    </div>
  );
};
