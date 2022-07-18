import { useState } from "react";

const SearchBar = () => {
  const [show, setShow] = useState(false);

  const searchInput = (e) => {
    if (e.target.value.length > 2) {
      window.find(e.target.value);
    }
  };
  const handleSearch = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="d-flex search align-items-center">
      <input
        type="text"
        onChange={searchInput}
        placeholder="Search"
        className={show ? "me-2 search-input" : "me-2 search-input hide"}
        aria-label="Search"
      />
      <i
        onClick={handleSearch}
        className={
          show ? "fa-solid fa-close fs-4" : "fa-solid fa-magnifying-glass fs-4"
        }
      ></i>
    </div>
  );
};

export default SearchBar;
