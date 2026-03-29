export const PaginationComponentQ6 = ({ nextPage, prevPage, currentPage, totalPage, setPage }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      
      <button onClick={prevPage} disabled={currentPage === 1}>
        Prev
      </button>

      <div style={{ display: "inline-block", margin: "0 10px" }}>
        {Array.from({ length: totalPage }, (_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            style={{
              margin: "0 5px",
              fontWeight: currentPage === index + 1 ? "bold" : "normal",
                backgroundColor: currentPage === index + 1 ? "#007bff" : "#fff",
                color: currentPage === index + 1 ? "#fff" : "#000",
                border: "1px solid #ccc",
                padding: "5px 10px",
                cursor: "pointer",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button onClick={nextPage} disabled={currentPage === totalPage}>
        Next
      </button>

    </div>
  );
};