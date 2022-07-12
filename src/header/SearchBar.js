import { useState } from "react";
import Form from "react-bootstrap/Form";

const SearchBar = () => {
  const [show, setShow] = useState(false);

  const handleSearch = () => {
    setShow((prev) => !prev);
  };

  return (
    <Form className="d-flex search">
      {show && (
        <>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 search-input"
            aria-label="Search"
          />
        </>
      )}

      <i
        onClick={handleSearch}
        className={
          show ? "fa-solid fa-close fs-4" : "fa-solid fa-magnifying-glass fs-4"
        }
      ></i>
    </Form>
  );
};

export default SearchBar;
