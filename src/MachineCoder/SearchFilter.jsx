import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SearchFilter = () => {
    const [data, setData] = useState([]);
    const [filterData,setFilterData]=useState([])
    const [search,setSearch]=useState("")

    useEffect(() => {
        const fetchData = async () => {

            try {
                const { data } = await axios.get("https://fake-store-api.mock.beeceptor.com/api/products");
                setData(data)
                setFilterData(data)
                console.log("data", data)

            } catch (error) {
                console.log("err", error)
            }
                

        }

    

        fetchData()
    }, [])


    const handleSearch=(value)=>{
        
 setSearch(value);
 const filterSearch=data.filter((item)=>item.name.toLowerCase().includes(value.toLowerCase()))
setFilterData(filterSearch)
    }


    return (
        <>
        
        <input type='text' placeholder='Search by name' value={search} onChange={(e) => handleSearch(e.target.value)} />
        <div style={{display:'flex', flexWrap:"wrap", gap:'10px', width:'95%', margin:"0 auto"
        }}>


         
            {filterData.map((item) => (
                <div key={item.id} style={{    width: "calc(25% - 10px)",
    border:" 1px solid grey",
    padding: "20px 10px",
    borderRadius: "5px" }}>

                    <h5>name:{item.name}</h5>
                    <p> city :{item.category}</p>

                </div>
            ))}
        </div>
        </>
    )
}

export default SearchFilter
