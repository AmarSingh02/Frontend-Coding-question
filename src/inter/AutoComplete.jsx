import React, { useState } from "react";

const options = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Pineapple",
  "Strawberry",
  "Watermelon"
];

const AutoCompleteDropdown = () => {

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(options);
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    const result = options.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(result);
    setShow(true);
  };

  const handleSelect = (item) => {
    setSearch(item);
    setShow(false);
  };

  return (
    <div style={{ width: "250px", position: "relative" }}>
      
      <input
        type="text"
        placeholder="Search fruit..."
        value={search}
        onChange={handleChange}
        onFocus={() => setShow(true)}
        style={{ width: "100%", padding: "8px" }}
      />

      {show && (
        <ul
          style={{
            border: "1px solid #ccc",
            listStyle: "none",
            padding: 0,
            margin: 0,
            position: "absolute",
            width: "100%",
            background: "#fff",
            maxHeight: "150px",
            overflowY: "auto"
          }}
        >
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSelect(item)}
                style={{
                  padding: "8px",
                  cursor: "pointer"
                }}
              >
                {item}
              </li>
            ))
          ) : (
            <li style={{ padding: "8px" }}>No results</li>
          )}
        </ul>
      )}

    </div>
  );
};

export default AutoCompleteDropdown;