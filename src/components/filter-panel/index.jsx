// components/FilterPanel.jsx
import React, { useRef } from "react";

export const FilterPanel = ({ handleFilter }) => {
  const dateRef = useRef(null);
  const minPriceRef = useRef(null);
  const maxPriceRef = useRef(null);
  const typeRef = useRef(null);
  const categoryRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      date: dateRef.current.value,
      minPrice: minPriceRef.current.value,
      maxPrice: maxPriceRef.current.value,
      type: typeRef.current.value,
      category: categoryRef.current.value,
    };
    handleFilter(data);
  };

  return (
    <div className="card border-0">
      <div className="card-body">
        <h5 className="card-title">Filter Transactions</h5>
        <form onSubmit={handleSubmit}>
          {/* Date Filter */}
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input type="date" ref={dateRef} className="form-control" />
          </div>

          {/* Amount Range */}
          <div className="mb-3">
            <label className="form-label">Amount Range</label>
            <div className="d-flex gap-2">
              <input
                type="number"
                ref={minPriceRef}
                className="form-control"
                placeholder="Min"
              />
              <input
                type="number"
                ref={maxPriceRef}
                className="form-control"
                placeholder="Max"
              />
            </div>
          </div>

          {/* Transaction Type */}
          <div className="mb-3">
            <label className="form-label">Type</label>
            <select className="form-select" ref={typeRef}>
              <option value="">All</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
          </div>

          {/* Category */}
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select className="form-select" ref={categoryRef}>
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

          <button type="submit" className="btn btn-primary w-50">
            Apply Filter
          </button>
          <button
            type="reset"
            className="btn btn-secondary w-50 "
            onClick={() => handleFilter(null)}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};
