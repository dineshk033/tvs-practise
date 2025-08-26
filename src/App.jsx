// App.jsx
import { useEffect, useState } from "react";
import TransactionForm from "./components/add-transaction";
import { FilterPanel } from "./components/filter-panel";
import { TransactionTable } from "./components/transaction-table";
import { fetchTransactionData } from "./service/data";

const INITIALFILTER = {
  date: "",
  minPrice: null,
  maxPriceRef: null,
  type: "",
  category: "",
};
function App() {
  const [dataSource, setDataSource] = useState([]);
  const [filteredTxn, setFlteredTxn] = useState([]);
  const [search, setSearch] = useState(null);
  const [filterProps, setFilterProps] = useState(INITIALFILTER);
  //mounting phase called
  useEffect(() => {
    fetchTransactionData().then((data) => {
      setDataSource(data);
      setFlteredTxn(data);
    });
  }, []);
  // useEffect(() => {
  //   if (search !== null) {
  //     const temp = dataSource.filter((item) => item.id == search);
  //     setFlteredTxn(temp);
  //   } else {
  //     setFlteredTxn(dataSource);
  //   }
  // }, [search]);
  useEffect(() => {
    const { category, type } = filterProps;
    // if(category )
    const temp = dataSource.filter(
      (item) =>
        (category == "" || item.category === category) &&
        (!type || item.type === type)
    );
    setFlteredTxn(temp);
  }, [filterProps, dataSource]);

  const handleSearch = (id) => {
    setSearch(id);
  };

  const handleFilter = (arg) => {
    if (arg) {
      setFilterProps(arg);
      // const { category, type } = arg;
      // // if(category )
      // const temp = dataSource.filter(
      //   (item) =>
      //     (category == "" || item.category === category) &&
      //     (!type || item.type === type)
      // );
      // setFlteredTxn(temp);
    } else {
      setFilterProps(INITIALFILTER);
    }
  };
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
          <FilterPanel handleFilter={handleFilter} />
        </div>

        {/* Table Section - 9 columns */}
        <div className="col-md-9">
          <div>
            {Object.keys(filterProps)
              .filter((item) => !!filterProps[item])
              .map((item) => (
                <span
                  onClick={() => setSearch(null)}
                  className="badge bg-danger"
                >
                  {item}: {filterProps[item]}
                </span>
              ))}
          </div>
          <TransactionTable
            transactions={filteredTxn}
            handleSearch={handleSearch}
          />
        </div>
      </div>
      <TransactionForm />
    </div>
  );
}

export default App;
