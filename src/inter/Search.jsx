// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "./style.css";
// import Pagination from "../components/Pagination";

// const Search = () => {
//   const url = "https://dummyjson.com/products";

//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [catagory,setCatagory]=useState(null)
//   const [currentPage,setCurrentPage]=useState(1)

//   const limit=10;

//   const startIndex=(currentPage-1) *limit;
//   const endIndex=startIndex+limit;
//   const filteredPagination=filteredProducts.slice(startIndex,endIndex)
//   const totalPages = Math.ceil(filteredProducts.length / limit);

// const nextPage = () => {
//   if (currentPage < totalPages) {
//     setCurrentPage((prev) => prev + 1);
//   }
// };

// const prevPage = () => {
//   if (currentPage > 1) {
//     setCurrentPage((prev) => prev - 1);
//   }
// };
  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data } = await axios.get(url);
//         setProducts(data.products);
//         setFilteredProducts(data.products);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

// const handleSearch=(e)=>{
// const value=e.target.value;
// setSearch(value)

// const filteredData=products.filter((item)=>item.title.toLowerCase().includes(value.toLowerCase()));
// setFilteredProducts(filteredData)
// }

// const handleCatagory = (e) => {
//   const value = e.target.value;

//   setCatagory(value);

//   if (value === "") {
//     setFilteredProducts(products);
//   } else {
//     const selectedCategory = products.filter(
//       (item) => item.category === value
//     );

//     setFilteredProducts(selectedCategory);
//   }
// };


//   const categories = [...new Set(products.map((item) => item.category))];

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="search..."
//         value={search}
//         onChange={handleSearch}
//       />

//       <select value={catagory} onChange={handleCatagory}>
//         <option value="">All Categories</option>
//         {categories.map((cat, index) => (
//           <option key={index} value={cat}>
//             {cat}
//           </option>
//         ))}
//       </select>

//       <div className="product-section">
//         {filteredPagination.map((item) => (
//           <div key={item.id} className="product-card">
//             <h4>{item.title}</h4>
//             <p>{item.description.slice(0, 50)}...</p>
//             <h6>{item.category}</h6>
//           </div>
//         ))}
//       </div>

//       <Pagination
//       nextPage={nextPage}
//       prevPage={prevPage}
//       totalPage={totalPages}
//       currentPage={currentPage}
//       />
//     </>
//   );
// };

// export default Search;

import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const url = "https://dummyjson.com/products";

  const [productData, setProductData] = useState([]);
  const [queryData,setQueryData]=useState("")
  const [filterData,setfilterData]=useState([])
   const [selectCatagory,setSelectCatagory]=useState("all")

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(url);
        setProductData(data.products);
        setfilterData(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, []);

  const handleSearch=(e)=>{
    const value=e.target.value;
    setQueryData(value)
const filterdata=productData.filter((item)=>item.title.toLowerCase().includes(value.toLowerCase()))
setfilterData(filterdata)


  }

  const handleCategory=(e)=>{
      const value=e.target.value;
      setSelectCatagory(value);
      if(selectCatagory===""){
        setProductData(productData)
      }

      const matchCatagory=productData.filter((item)=>item.category===value)
      setfilterData(matchCatagory)
  }

  const categories = [...new Set(productData.map((item) => item.category))];
  return (
    <> 

    <input type="text" value={queryData} onChange={handleSearch}/>
     <select onChange={handleCategory}>

      <option value="" >Select all</option>

        {
          categories.map((item,index)=>(
            <option  key={index}> {item}</option>
          ))
        }
      </select>
    <div
      style={{
        display: "grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"30px"
      }}
    >
     

      {filterData.map((item) => (
        <div
          key={item.id}
          style={{
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            padding: "10px",
            borderRadius: "6px",
          }}
        >
          <h5>{item.title}</h5>
          <h6>{item.category}</h6>
          <p>{item.description.slice(0, 60)}...</p>
        </div>
      ))}

    </div>
    </>
  );
};

export default Search;