import React from 'react'

const Pagination = ({ nextPage, prevPage, currentPage, totalPage }) => {


  return (
    <div style={{display:"flex" ,gap:"20px"}}>
        <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>

        <p>
            {Array.from({ length: totalPage }, (_, index) => (
                <span key={index} style={{margin: '4px', padding:"10px", background:currentPage === index + 1 ? "#fd3ded" :"#fff", color:currentPage===index+1 ?" #fff" :"#000"}}>{index + 1}</span>
            ))}
        </p>

        <button onClick={nextPage} disabled={currentPage === totalPage}>Next</button>
    </div>
  )
}

export default Pagination
