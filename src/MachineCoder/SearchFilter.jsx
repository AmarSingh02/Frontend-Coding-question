import axios from 'axios';
import React, { useEffect, useState } from 'react'
 import { PaginationComponentQ6 } from './PaginationComponentQ6';

const SearchFilter = () => {
    const [data, setData] = useState([]);
    const[search,setSearch]=useState("");
    const [filterDatas,setFilterDatas]=useState([])
    const[page,setPage]=useState(1);
    const limit=5

    useEffect(() => {
        const fetchData = async () => {

            try {
                const { data } = await axios.get("https://fake-store-api.mock.beeceptor.com/api/products");
                setData(data)
              setFilterDatas(data)
                console.log("data", data)

            } catch (error) {
                console.log("err", error)
            }
        }
        fetchData()
    }, [])


    const handleSearch = (e) => {
  const value = e.target.value;

  setSearch(value); 

  const filterData = data.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  setFilterDatas(filterData);
};

const startIndex=(page-1)*limit; 
const endIndex=startIndex+limit;
const PaginationData=filterDatas.slice(startIndex,endIndex)
const totalPages=Math.ceil(filterDatas.length/limit)

const handlePrev=()=>{
    if(page>1){
        setPage(page-1)
    }
}
const handleNext=()=>{
    if(page<totalPages){
        setPage(page+1)
    }
}


    

    return (
        <>

   

            <input type='text' placeholder='Search by name' value={search} onChange={handleSearch}/>
            <div style={{
                display: 'flex', flexWrap: "wrap", gap: '10px', width: '95%', margin: "0 auto"
            }}>



                {PaginationData?.map((item) => (
                    <div key={item.id} style={{
                        width: "calc(25% - 10px)",
                        border: " 1px solid grey",
                        padding: "20px 10px",
                        borderRadius: "5px"
                    }}>

                        <h5>name:{item.name}</h5>
                        <p> city :{item.category}</p>

                    </div>
                ))}
            </div>

                        <PaginationComponentQ6
                        nextPage={handleNext}
                        prevPage={handlePrev}
                        totalPage={totalPages}
                        currentPage={page}
                        />
        </>
    )
}

export default SearchFilter
