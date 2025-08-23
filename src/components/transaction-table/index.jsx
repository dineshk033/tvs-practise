// components/TransactionTable.jsx
import React from "react";
import SearchTransaction from "../search-transaction/search-transaction";

export const TransactionTable = ({ transactions, handleSearch }) => {
  return (
    // <div className="card shadow-sm">
    <div className="card-body ">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="card-title mb-2">Transactions</h5>
        <SearchTransaction handleSearch={handleSearch} />
      </div>
      <div
        className="table-responsive "
        style={{ height: "80vh", overflow: "auto" }}
      >
        <table className="table table-striped table-hover ">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.date}</td>
                <td
                  className={
                    t.type === "credit" ? "text-success" : "text-danger"
                  }
                >
                  {t.amount}
                </td>
                <td>{t.type}</td>
                <td>{t.category}</td>
                <td>{t.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    // </div>
  );
};
