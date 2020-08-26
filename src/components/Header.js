import React from "react";

function Header({ query, setQuery }) {
  return (
    <div className="py-3 header position-sticky sticky-top">
      <div className="container d-flex">
        <h4 className="mr-2">ALAMGIR</h4>
        <input
          type="text"
          placeholder="Search Courses Here"
          value={query}
          className=" ml-md-5 form-control search"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Header;
