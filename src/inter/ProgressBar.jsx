

import React, { useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    let value = Number(e.target.value);

    if (value > 100) value = 100;
    if (value < 0) value = 0;

    setProgress(value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Progress Bar</h3>

      <input
        type="number"
        placeholder="Enter value (0-100)"
        onChange={handleChange}
      />

      <div
        style={{
          width: "300px",
          border: "1px solid #ccc",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            background: "blue",
            color: "white",
            textAlign: "center",
            padding: "5px 0",
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;