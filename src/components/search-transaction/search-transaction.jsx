import { useRef } from "react";

function SearchTransaction({ handleSearch }) {
  const searchRef = useRef(null);
  //   const handleSearch = () => {
  //     console.log(searchRef.current.value);
  //     // console.log(document.getElementById("search"));
  //   };
  return (
    <div className="d-flex align-items-center" style={{ width: "250px" }}>
      <input
        ref={searchRef}
        className="form-control me-3"
        type="text"
        id="search"
        maxLength={10}
        placeholder="search by id"
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => handleSearch(searchRef.current.value)}
      >
        Search
      </button>
    </div>
  );
}

export default SearchTransaction;
