import React, { useState } from "react";
import { validateTXN } from "../../utils/transaction-validate";

const TransactionModal = () => {
  const [formData, setFormData] = useState({
    id: 0,
    date: "",
    amount: 0,
    type: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    let { id, value } = e.target;
    if (id === "amount") {
      value = Number(value);
    }
    setFormData({
      ...formData,
      [e.target.id]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(validateTXN(formData));
    console.log(formData);
  };
  return (
    <div className="container mt-5">
      {/* Button trigger modal */}
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#transactionModal"
      >
        Add Transaction
      </button> */}

      {/* Modal */}
      <div
        className="modal fade"
        id="transactionModal"
        tabIndex="-1"
        aria-labelledby="transactionModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="transactionModalLabel">
                Transaction Form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {/* --- Transaction Form Template --- */}
              <form onSubmit={handleSubmit}>
                {/* ID */}
                <div className="row">
                  <div className="col-6 mb-3">
                    <label htmlFor="id" className="form-label">
                      Transaction ID
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="id"
                      value={formData.id}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Date */}
                  <div className="col-6 mb-3">
                    <label htmlFor="date" className="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Amount */}
                  <div className="col-6 mb-3">
                    <label htmlFor="amount" className="form-label">
                      Amount
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="amount"
                      value={formData.amount}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Type */}
                  <div className="col-6 mb-3">
                    <label htmlFor="type" className="form-label">
                      Type
                    </label>
                    <select
                      className="form-select"
                      id="type"
                      value={formData.debit}
                      onChange={handleChange}
                    >
                      <option value="credit">Credit</option>
                      <option value="debit">Debit</option>
                    </select>
                  </div>
                </div>
                {/* Category */}
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <select
                    className="form-select"
                    id="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="food">Food</option>
                    <option value="shopping">Shopping</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="salary">Salary</option>
                    <option value="rent">Rent</option>
                    <option value="utilities">Utilities</option>
                    <option value="transport">Transport</option>
                    <option value="gift">Gift</option>
                    <option value="bonus">Bonus</option>
                    <option value="refund">Refund</option>
                    <option value="freelance">Freelance</option>
                  </select>
                </div>

                {/* Description */}
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit">Add</button>
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save Transaction
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
